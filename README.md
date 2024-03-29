# DreamDoodle - A Note-Making App

DreamDoodle is a simple and elegant note-making app that facilitates easy organization of thoughts and ideas. It includes a web interface and a backend API built using Node.js, Express, and MongoDB. The app allows users to create, edit, and delete notes, enhancing their note-taking experience.

## Technologies Used

- **Frontend:**
  - HTML, CSS, Bootstrap
  - JavaScript (Vanilla)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (using Mongoose)

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Dheeraj8601/DreamDoodle.git
   cd DreamDoodle
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup MongoDB:**
   - Replace the MongoDB connection string in `index.js` with your own.

4. **Run the Application:**
   ```bash
   node index.js
   ```

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **User Authentication:**
  - Users can sign up and log in securely.

- **Note Management:**
  - Create, edit, and delete notes.
  - Fetch user-specific notes.

## Project Structure

- **`index.js`:**
  - Express server setup, routing, and MongoDB connection.
  - Defines API endpoints for note and user operations.

- **`models/Note.js`:**
  - Mongoose schema for note objects.

- **`models/User.js`:**
  - Mongoose schema for user objects.

- **`pages/`:**
  - HTML files for different pages (index, login, signup, about).

## Usage

1. Open [http://localhost:3000](http://localhost:3000) in your browser.
2. Navigate through the app:
   - Home: `/`
   - Login: `/login`
   - Signup: `/signup`
   - About: `/about`

3. Sign up or log in to start managing your notes.


