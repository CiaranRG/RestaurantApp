import axios from "axios"


 const loginCheck = async () => {
  console.log('Inside Login Check Function')
  try {
    const response = await axios('http://localhost:5000/api/accounts/isLoggedIn', {method: 'POST', withCredentials: true})
    console.log(response)
    if (!response.data.isLoggedIn){
      console.log('Returning False')
      return false
    } else {
      console.log('Returning True')
      return true
    }
  } catch (err) {
    console.log(err)
  }

}

export default loginCheck