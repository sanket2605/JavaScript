import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Employee() {
    const [employee, setEmployee] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('https://localhost:7204/api/Employee/' + id)
                .then((res) => res.json())
                .then((result) => { setEmployee(result); });
    }, []); // Add 'id' to the dependency array

    return (
        <div>
            <label>Id:</label>
            {employee.id}
            <br />
            <label>Name:</label>
            {employee.name}
            <br />
            <label>Email:</label>
            {employee.email}
            <br />
            <label>Department:</label>
            {employee.department}
        </div>
    );
}

export default Employee;