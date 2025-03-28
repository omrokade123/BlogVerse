# BlogVerse  

BlogVerse is a blogging platform where users can post blogs. This project is built using *React.js* and incorporates various React techniques such as react-router-dom, axios, props, and components for efficient state and UI management.  

## Features  

- Create and post blogs  
- Navigate between pages using react-router-dom  
- Fetch and manage data with axios  
- Modular component-based structure  

## Technologies Used  

- *Frontend:* React.js  
  - React Router (react-router-dom) for navigation  
  - Axios for API requests  
  - Props and components for UI management  

- *Backend (Mock API):* JSON Server  

## Installation and Setup  

### Prerequisites  
Ensure you have *Node.js* and *npm* installed on your system.  

### Steps to Run  

1. Clone the repository:  
   sh
   git clone <repository-url>
   cd BlogVerse
   

2. Install dependencies:  
   sh
   npm install
   

3. Start the JSON Server (in one terminal):  
   sh
   npx json-server -p 3500 -w data/db.json
   

4. Start the React app (in another terminal):  
   sh
   npm run dev
     

5. The project will now be running locally. Open your browser and visit:  
   
   http://localhost:5173  (or the URL provided in the terminal)
   

<!-- ## Project Structure  


BlogVerse/
│── public/
│── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Page components
│   ├── services/         # API handling (Axios)
│   ├── App.js            # Main App component
│   ├── index.js          # Entry point
│── data/
│   ├── db.json           # Mock database for JSON Server
│── package.json          # Project dependencies
│── README.md             # Documentation -->


## Future Improvements  

- User authentication
- Backend Data Handling using MongoDb  
- Rich text editor for blog posts  
- Dark mode theme  

## License  

This project is open-source and available under the MIT License.