import React from 'react';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import './index.css';

export default function ListEmployee() {
    const [employees, setEmployee] = useState([]);
    useEffect(() => {
        fetch("https://localhost:7204/api/Employee")
            .then(res => res.json())
            .then((result) => { setEmployee(result); }
            );
    }, []);
    return (
        <div className='table-wrapper'>
            <h4><Link to="/create">Create</Link></h4>
            <h2>Employees Data...</h2>
            <table className='fl-table'> <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Departmrnt</th>
                </tr>
            </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department}</td>

                            <td> <a href={'/Employee/' + emp.id}>display</a></td>

                            <td> <a href={'/EmpUpdate/' + emp.id}>Edit</a></td>

                            <td> <a href={'/EmpDelete/' + emp.id}>delete</a></td>
                        </tr>
                    ))
                    }
                </tbody> </table>
        </div>
    );
}