import { useState } from "react";
import './BookTableForm.scss'
import Button from "../Button/Button";
import axios from 'axios'

// Defining the form types
type FormInfo = {
   firstName: string 
   lastName: string
   email: string
   phoneNumber: string
   bookingDate: string
   bookingTime: string
   specialRequest: string
   numOfSeats: number
   termsConditions: boolean
}

type BookTableFormProps = {
    toggleModal: () => void
}

export default function BookTableForm({toggleModal}: BookTableFormProps){
    // Defining the state and filling in blanks for initial values
    const [formInfo, setFormInfo] = useState<FormInfo>({
        firstName: '', lastName: '', email: '', phoneNumber: '', bookingDate: '', bookingTime: '', specialRequest: '', numOfSeats: 1, termsConditions: false
    })
    // Making the type to be a react change event that has either TextAreas or Inputs
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Destructuring the values and the type so we can run a check below
        const { name, value, type } = evt.target;
        // Using this to check the value of the checked attribute
        const isChecked = (evt.target as HTMLInputElement).checked;
        // Checking the the type is a checkbox and changing its status
        if (type === "checkbox") {
            setFormInfo(prevInfo => ({ ...prevInfo, [name]: isChecked }));
        } else {
            setFormInfo(prevInfo => ({ ...prevInfo, [name]: value }));
        }
    }
    // Setting the type to be a form event 
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            // Setting up our route to post to our backend and adding withCredentials to send the cookies for adding the usersId on the backend      
            const response = await axios.post('http://localhost:5000/api/reservations', formInfo, {method: 'POST', withCredentials: true})
            setFormInfo({firstName: '', lastName: '', email: '', phoneNumber: '', bookingDate: '', bookingTime: '', specialRequest: '', numOfSeats: 1, termsConditions: false})
        } catch (error) {
            console.log('There was an error', error)
        }
    }

    const handleModalClick = (evt: React.MouseEvent<HTMLDivElement>) => {
        // Prevents the click event from bubbling up to the modal overlay
        evt.stopPropagation();
    };

    return(
        <main className="bookTableFormMainContent">
            <div className="bookTableFormDiv" onClick={handleModalClick}>
                <form action="" className="bookTableForm" onSubmit={handleSubmit}>
                    <div className="formRow">
                        <label>
                            First Name:
                            <input type="text" required name="firstName" minLength={2} maxLength={50} value={formInfo.firstName} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="formRow">
                        <label>
                            Last Name:
                            <input type="text" required name="lastName" minLength={2} maxLength={50} value={formInfo.lastName} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="formRow">
                        <label>
                            Email:
                        </label>
                        <input type="email" required name="email" value={formInfo.email} onChange={handleChange}/>
                    </div>
                    <div className="formRow">
                        <label>
                            Phone Number:
                        </label>
                        <input type="tel" required name="phoneNumber" value={formInfo.phoneNumber} placeholder="" onChange={handleChange}/>
                    </div>
                    <div className="formRow">
                        <label>
                            Booking Date:
                        </label>
                        {/* Use javascript to update min date to be the current one  */}
                        <input type="date" required name="bookingDate" autoComplete="off" min="2023-01-01" max="2024-01-01" value={formInfo.bookingDate} onChange={handleChange}/>
                    </div>
                    <div className="formRow">
                        <label>
                            Time Of Booking:
                            <input type="time" required name="bookingTime" autoComplete="off" value={formInfo.bookingTime} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="formRow">
                        <label>
                            Number Of Seats:
                            <input type="number" required min={1} max={6} name="numOfSeats" value={formInfo.numOfSeats} onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="formRow">
                        <label>
                            Special Requests: (Character Limit)
                            <textarea name="specialRequest" required maxLength={50} value={formInfo.specialRequest} onChange={handleChange}></textarea>
                        </label>
                    </div>
                    <div className="formRow">
                        {/* Using the checked to change the value of the checkbox */}
                        <label style={{marginBottom: '20px'}}>
                            I agree to the terms and conditions:
                            <input type="checkbox" name="termsConditions" required checked={formInfo.termsConditions} onChange={handleChange}/>
                        </label>
                    </div>
                    <Button text="Create Reservation"/>
                </form>
            </div>
        </main>
    )
}