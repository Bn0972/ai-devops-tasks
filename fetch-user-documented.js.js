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