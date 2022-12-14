import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showEmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/employees/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showEmployeeDetails-API-response: " + res.data);
        this.setState({
          employee: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowEmployeeDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/employees/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowEmployeeDetails_deleteClick");
      })
  };


  render() {

    const employee = this.state.employee;
    let EmployeeItem = (
      <div>
        <table className="table table-hover table-dark">
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Name</td>
              <td>{employee.Name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Surname</td>
              <td>{employee.Surname}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Email</td>
              <td>{employee.Email}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Contact Number</td>
              <td>{employee.Contact_Number}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>ID Number</td>
              <td>{employee.Id_Number}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Address</td>
              <td>{employee.Address}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Role</td>
              <td>{employee.Role}</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Department</td>
              <td>{employee.Department}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className="ShowEmployeeDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Employee List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Employee's Record</h1>
              <p className="lead text-center">
                  View Employee's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { EmployeeItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,employee._id)}>Delete Employee</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-employee/${employee._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Employee
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Employee</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Employee</button> */}

        </div>
      </div>
    );
  }
}

export default showEmployeeDetails;
