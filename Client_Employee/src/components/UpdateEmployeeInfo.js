import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateEmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      Email: "",
      Contact_Number: "",
      ID_Number: "",
      Address: "",
      Role: "",
      Department: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/employees/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, employee: res.data})
        this.setState({
          Name: res.data.Name,
          Surname: res.data.Surname,
          Email: res.data.Email,
          Contact_Number: res.data.Contact_Number,
          ID_Number: res.data.ID_Number,
          Address: res.data.Address,
          Role: res.data.Role,
          Department: res.data.Department
        });
      })
      .catch(err => {
        console.log("Error from UpdateEmployeeInfo");
      })
  };

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
      Department: this.state.Department,
    };

    axios
      .put('http://localhost:8082/api/employees/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-employee/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateEmployeeInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateEmployeeInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Employee List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Employee</h1>
              <p className="lead text-center">Update Employee's Info</p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
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
                <label htmlFor="Surname">Surname</label>
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
                <label htmlFor="Email">Email</label>
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
                <label htmlFor="Contact_Number">Contact Number</label>
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
                <label htmlFor="ID_Number">ID Number</label>
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
                <label htmlFor="Address">Address</label>
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
                <label htmlFor="Role">Role</label>
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
                <label htmlFor="Department">Department</label>
                <input
                  type="text"
                  placeholder="Department"
                  name="Department"
                  className="form-control"
                  value={this.state.Department}
                  onChange={this.onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-info btn-lg btn-block"
              >
                Update Employee
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeInfo;
