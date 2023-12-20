import getCookie from "./getCookie"
// import axios from "axios";

 const loginCheck = async () => {
  // Use the getCookie function that I created to grab the token 
  const token = getCookie('jwt')

  if (!token) {
    // Return false if there is not token present, can change what is being returned later
    return false;
  } else {
    return true
  }

  // try {
  //   // Sending a post request to my backend to decide if the user is valid or not 
  //   const response = await axios.post('/api/isLoggedIn', { token });
  //   // Checking the returned status code
  //   if (response.status === 200) {
  //     // If the user is valid on the backend I send a 200 request to the frontend to enter this block
  //     return true;
  //   } else {
  //     // Any other status leads us here
  //     return false;
  //   }
  // } catch (error) {
  //   console.error('An error occurred', error);
  //   return false;
  // }
}

export default loginCheck