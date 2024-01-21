import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div>
      <header className="app-header">
        <div className="logo">EmployeeDB</div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/ListEmployee">List Employee</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
