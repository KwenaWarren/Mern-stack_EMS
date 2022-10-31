import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const EmployeeCard = (props) => {
    const  employee  = props.employee;

    return(
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-employee/${employee._id}`}>
                        { employee.Name + " " + employee.Surname}
                    </Link>
                </h2>
                <h3>{employee.Role}</h3>
                <p>{employee.Department}</p>
            </div>
        </div>
    )
};

export default EmployeeCard;