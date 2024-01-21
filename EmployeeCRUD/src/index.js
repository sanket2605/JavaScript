import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Contactus from './Contactus';
import ListEmployee from './ListEmployee';
import Nopage from './NoPage';
import Createemp from './Createemp';
import Employee from './Employee';
import EmpUpdate from './EmpUpdate';
import EmpDelete  from './EmpDelete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Create" element={<Createemp/>}/>
        <Route path="Employee/:id" element={<Employee/>}/>
        <Route path="EmpUpdate/:id" element={<EmpUpdate/>}/>
        <Route path="EmpDelete/:id" element={<EmpDelete/>}/>
        <Route path="Contactus" element={<Contactus />} />
        <Route path="ListEmployee" element={<ListEmployee />} />
        <Route path="*" element={<Nopage />} />
    </Route>
  </Routes>
</BrowserRouter>
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();
