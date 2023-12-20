// Creating a function to get the cookie from the user's browser
    const getCookie = (name: string) => {
        // console.log('Getting cookie:', name);
    
        // Splitting all the cookies into an array
        const cookies = document.cookie.split(';');
        // console.log('All cookies:', cookies);
    
        // Looping over the array to find the desired cookie
        for (const cookie of cookies) {
            // Splitting the key and value from the cookie
            const [cookieName, cookieValue] = cookie.split('=').map((c) => c.trim());
            // console.log('Cookie:', cookieName, cookieValue);
    
            // Checking if the cookie matches the provided name
            if (cookieName === name) {
                // console.log('Match found!');
                return cookieValue;
            }
        }
    
        // console.log('No match found.');
        return null;
    };
    
    export default getCookie;