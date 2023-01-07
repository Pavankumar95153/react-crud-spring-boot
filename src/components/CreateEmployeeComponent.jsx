import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
          firstName: '',
          lastName: '',
          emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);

    }

    changeFirstNameHandler=(event)=>{
      this.setState({firstName: event.target.value});
    }

    changeLastNameHandler=(event)=>{
      this.setState({lastName: event.target.value});
    }

    changeEmailHandler=(event)=>{
      this.setState({emailId: event.target.value});
    }

    saveEmployee=(e)=>{
      e.preventDefault();
      let employeeDetails ={
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.emailId
      };
      console.log("Employee Details", JSON.stringify(employeeDetails));
      EmployeeService.createEmployee(employeeDetails).then(res=>{
        this.props.history.push("/employee")
      })
    }

    cancel(){
      this.props.history.push('/employee')
    }

  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add Employee</h3>
                <div className="card-body">
                    <form>
                        <div className= "form-group">
                            <label>FirstName:</label>
                            <input placeholder='First Name'name='firstName' className='form-control'
                            value= {this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                        </div>
                        <div className= "form-group">
                            <label>LastName:</label>
                            <input placeholder='Last Name'name='LastName' className='form-control'
                            value= {this.state.lastName} onChange={this.changeLastNameHandler}></input>
                        </div>

                        <div className= "form-group">
                            <label>email:</label>
                            <input placeholder='email'name='emailId' className='form-control'
                            value= {this.state.emailId} onChange={this.changeEmailHandler}></input>
                        </div>

                      <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                      <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                    </form> 
                </div>
                </div>
            </div>

        </div>
      </div>
    )
  }
}
