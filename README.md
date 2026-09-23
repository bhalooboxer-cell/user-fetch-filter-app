# User Fetch & Filter Script (Node.js ES6)

A modern ES6 JavaScript Node.js application that fetches user data from JSONPlaceholder API, filters users based on company catchphrase criteria, and formats user details using ES6 Object Destructuring.

## Features
- **Fetch API**: Asynchronously retrieves user records from `https://jsonplaceholder.typicode.com/users`.
- **ES6 Filter**: Case-insensitive filtering for company catchphrases containing `"group"` or `"service"`.
- **Object Destructuring**: Formats user records into `"User: [Name] | Email: [Email] | City: [City]"` layout.

## How to Run

Ensure Node.js (v18+) is installed. Run:

```bash
npm start
```
or
```bash
node app.js
```
