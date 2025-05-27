function fetchUserData(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return {
          name: data.name,
          email: data.email,
          lastLogin: new Date(data.lastLoginTimestamp)
        };
      })
      .catch(error => {
        console.error('Fetch error:', error);
        return null;
      });
  }




/**
 * Fetches and formats user data from the API
 * @async
 * @function fetchUserData
 * @param {string} userId - The unique identifier of the user
 * @returns {Promise<Object|null>} A promise that resolves to an object containing user data or null if the request fails
 * @throws {Error} Throws an error if the API request fails
 * 
 * @example
 * // Fetch user data for ID "123"
 * fetchUserData("123")
 *   .then(userData => {
 *     if (userData) {
 *       console.log(userData.name);
 *     }
 *   });
 * 
 * @property {Object} return.userData - The formatted user data
 * @property {string} return.userData.name - The user's full name
 * @property {string} return.userData.email - The user's email address
 * @property {Date} return.userData.lastLogin - The user's last login timestamp as a Date object
 */
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}




JSDoc documentation that includes:
Function Description:
Brief description of what the function does
@async tag to indicate it's an asynchronous function
Parameters:
@param {string} userId - Documents the input parameter
Includes description of the parameter
Return Value:
@returns {Promise<Object|null>} - Documents the return type
Explains that it returns a Promise that resolves to an object or null
Error Handling:
@throws {Error} - Documents possible errors
Explains when errors might occur
Usage Example:
@example - Shows how to use the function
Includes error handling in the example
Return Object Properties:
Documents each property of the returned object
Includes types and descriptions for each property
The documentation provides:
Clear type information
Usage examples
Error handling information
Property descriptions
Return value details
This documentation will:
Help IDE autocomplete
Provide inline documentation
Make the code more maintainable
Help other developers understand the function