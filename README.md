 Signup Form
 
A simple and responsive account creation form built with ReactJS, inspired by the PopX account signup interface. This component demonstrates a modern UI with clean form handling using React hooks and inline styling.

🚀 Features
Full name, phone number, email, password, and company name inputs

Radio button toggle for "Are you an Agency?" question

Styled using inline CSS for quick integration

Mobile-friendly and responsive layout

Clean and accessible markup

Form submission handler (logs data to console)

📸 Demo


![Screenshot 2025-05-26 124654](https://github.com/user-attachments/assets/58e42e14-1860-44fa-b089-7788365b7021)


🛠️ Tech Stack
ReactJS

JavaScript (ES6+)

Inline CSS Styling

🧩 Component Overview
The form includes:

Text Inputs for full name, phone number, email, password, and company name

Radio Buttons for selecting if the user is an agency

Submit Button with a custom style

Basic form validation using required attributes

📂 Folder Structure
arduino
Copy code
/src
  └── PopXSignupForm.jsx
  └── App.js (import and render PopXSignupForm here)
🧪 How to Run
Clone this repository:

bash
Copy code
git clone https://github.com/qudsiyashaikh/Signup-Form.git
Navigate to the project directory:

bash
Copy code
cd popx-signup-form
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
📥 Usage
In your App.js:

jsx
Copy code
import React from 'react';
import PopXSignupForm from './PopXSignupForm';

function App() {
  return (
    <div>
      <PopXSignupForm />
    </div>
  );
}

export default App;
📌 Notes
This form is currently static (no backend integration).

You can easily integrate this with form validation libraries or APIs if needed.

📄 License
This project is open source and available under the MIT License.

