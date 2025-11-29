**FactWise Dashboard**
This repository contains a fully functional React-based dashboard UI with a clean and modern design. The project implements a pastel UI theme, an interactive toolbar, AG Grid integration, and a responsive layout suitable for data-driven applications.

**Overview**
The FactWise Dashboard is built entirely using React and custom CSS. It focuses on simplicity, usability, and clean UI design. It includes a search bar, filter dropdown, a dark action button, and a configurable data table using AG Grid. The UI is styled using a pastel color palette with optional theme customization.

**Features**
Full React project with component-based structure
Pastel-theme user interface with subtle shadows and modern layout
Responsive design compatible with desktop and mobile screens
AG Grid table integration for displaying and managing data
Search and filter options within the toolbar
Custom CSS for theme control
Easily extendable architecture for additional dashboard widgets or modules

Folder Structure
src/
│── App.jsx
│── App.css
│── main.jsx
│
├── components/
│     ├── FactWiseDashboard.jsx
│     ├── FactWiseDashboard.css
│
├── data/
│     └── data.js
│
└── assets/

**Technologies Used**
React
JavaScript (ES6+)
Vite or Create React App (depending on your setup)
CSS3
AG Grid

**Installation and Setup**
1. Clone the Repository
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev

Your application will start on the local development server.
If using Vite, it usually runs at:

http://localhost:5173/

Building the Project

To generate a production build:

npm run build

This will create an optimized build folder for deployment.

**Deployment**
This project can be deployed using services such as:
GitHub Pages
Vercel
Netlify
Render

**If you need deployment instructions for any platform, they can be provided.**
Customization
You can customize the following:
Color themes (pastel, dark, light)
Toolbar layout
Grid column definitions
Global UI style
Additional components and data views

**Main styling files include:**
FactWiseDashboard.css
App.css
styles.css (optional)


**Screenshots**

Add screenshots to visually represent your UI.
Example:

![Dashboard Preview](https://github.com/Akanksha418/FactWise-AC-G-GRID-Dasboard/blob/main/Screenshot%202025-11-29%20132902.png?raw=true)

**Contributing**
Contributions are welcome. You may open issues or submit pull requests for enhancements or bug fixes.

**License**
This project is licensed under the MIT License.
