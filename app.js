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
    const catchphraseRegex = /(group|service)/i;
    const filteredUsers = users.filter(({ company }) => 
      company && company.catchPhrase && catchphraseRegex.test(company.catchPhrase)
    );
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
fetchAndFormatUsers();

export default fetchAndFormatUsers;
export { fetchAndFormatUsers };

