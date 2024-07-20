import axios from "axios"

const apiUrl = import.meta.env.VITE_API_URL;

 const loginCheck = async () => {
  try {
    const response = await axios(`${apiUrl}/api/accounts/isLoggedIn`, {method: 'POST', withCredentials: true})
    return response.data.isLoggedIn
  } catch (err) {
    if (import.meta.env.MODE === 'development') {
      console.log(err)
    }
  }

}

export default loginCheck