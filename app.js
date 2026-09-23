// app.js
// Script to fetch users from JSONPlaceholder API, filter by company catchphrase, and format user details.

async function fetchAndFormatUsers(mockUsers = null) {
  try {
    let users = mockUsers;
    if (!users) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      users = await response.json();
    }

    // Regex to match the words "group" or "service" case-insensitively
    const catchphraseRegex = /(group|service)/i;

    // Filter users whose company catchPhrase contains "group" or "service"
    const filteredUsers = users.filter(({ company }) => 
      company && company.catchPhrase && catchphraseRegex.test(company.catchPhrase)
    );

    // Transform filtered data into an array of formatted strings using Object Destructuring
    const formattedUsers = filteredUsers.map(({ name, email, address: { city } }) => 
      `User: ${name} | Email: ${email} | City: ${city}`
    );

    console.log('Filtered and Formatted Users:');
    console.log(formattedUsers);

    return formattedUsers;
  } catch (error) {
    console.error('Error fetching or processing user data:', error);
  }
}

// Execute the function
fetchAndFormatUsers();

export default fetchAndFormatUsers;
export { fetchAndFormatUsers };

