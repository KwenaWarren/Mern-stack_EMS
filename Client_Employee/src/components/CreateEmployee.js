import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateEmployee extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Surname: '',
      Email: '',
      Contact_Number: '',
      ID_Number: '',
      Address: '',
      Role: '',
      Department: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      Name: this.state.Name,
      Surname: this.state.Surname,
      Email: this.state.Email,
      Contact_Number: this.state.Contact_Number,
      ID_Number: this.state.ID_Number,
      Address: this.state.Address,
      Role: this.state.Role,
      Department: this.state.Department
    };

    axios
      .post('http://localhost:8082/api/employees', data)
      .then(res => {
        this.setState({
          Name: "",
          Surname: "",
          Email: "",
          Contact_Number: "",
          ID_Number: "",
          Address: "",
          Role: "",
          Department: ""
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateEmployee!");
      })
  };

  render() {
    return (
      <div className="CreateEmployee">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Employee List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Employee</h1>
              <p className="lead text-center">Create new employee</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    className="form-control"
                    value={this.state.Name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Surname"
                    name="Surname"
                    className="form-control"
                    value={this.state.Surname}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="Email"
                    className="form-control"
                    value={this.state.Email}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    placeholder="Contact Number"
                    name="Contact_number"
                    className="form-control"
                    value={this.state.Contact_Number}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    placeholder="ID Number"
                    name="Id_number"
                    className="form-control"
                    value={this.state.ID_Number}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Address"
                    name="Address"
                    className="form-control"
                    value={this.state.Address}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Role"
                    name="Role"
                    className="form-control"
                    value={this.state.Role}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Department"
                    name="Department"
                    className="form-control"
                    value={this.state.Department}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;
