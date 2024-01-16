import axios from "axios"


 const loginCheck = async () => {
  try {
    const response = await axios('http://localhost:5000/api/accounts/isLoggedIn', {method: 'POST', withCredentials: true})
    return response.data.isLoggedIn
  } catch (err) {
    if (import.meta.env.MODE === 'development') {
      console.log(err)
    }
  }

}

export default loginCheck