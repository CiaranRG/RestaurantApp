import axios from "axios"


 const loginCheck = async () => {
  try {
    const response = await axios('http://localhost:5000/api/accounts/isLoggedIn', {method: 'POST', withCredentials: true})
    if (!response.data.isLoggedIn){
      return false
    } else {
      return true
    }
  } catch (err) {
    console.log(err)
  }

}

export default loginCheck