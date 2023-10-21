import { useState } from "react";
import './BookTableForm.scss'
import Button from "./Button";

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

export default function BookTableForm(){
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

    return(
        <div className="bookTableForm">
            <label>
                First Name:
                <input type="text" name="firstName" value={formInfo.firstName} onChange={handleChange}/>
            </label>
            <label>
                Last Name:
                <input type="text" name="lastName" value={formInfo.lastName} onChange={handleChange}/>
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formInfo.email} onChange={handleChange}/>
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phoneNumber" value={formInfo.phoneNumber} onChange={handleChange}/>
            </label>
            <label>
                Date Of Booking:
                <input type="date" name="bookingDate" value={formInfo.bookingDate} onChange={handleChange}/>
            </label>
            <label>
                Time Of Booking:
                <input type="time" name="bookingTime" value={formInfo.bookingTime} onChange={handleChange}/>
            </label>
            <label>
                Number Of Seats:
                <input type="number" name="numOfSeats" value={formInfo.numOfSeats} onChange={handleChange}/>
            </label>
            <label>
                Special Requests:
                <textarea name="specialRequest" value={formInfo.specialRequest} onChange={handleChange}></textarea>
            </label>
            {/* Using the checked to change the value of the checkbox */}
            <label style={{marginBottom: '20px'}}>
                I agree to the terms and conditions:
                <input type="checkbox" name="termsConditions" checked={formInfo.termsConditions} onChange={handleChange}/>
            </label>
            <Button text="Create Reservation"/>
        </div>
    )
}