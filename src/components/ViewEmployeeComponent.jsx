import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.match.params.id,
            employee: {}
        }
    }
componentDidMount(){
    EmployeeService.getEmpoyeeById(this.state.id).then(res=>{
        this.setState({employee: res.data});
    })
}

returnEmployee(){
    this.props.history.push("/employee")
}

  render() {
    return (
      <div>
        <br></br>
        <div className='card col-md-6 offset-md-3'>
            <h3 className='text-center'> View Employee Details</h3>
            <div className='card-body'>
                <div className='row'>
                    <lable >Employee FirstName:</lable>
                    <div>
                        {this.state.employee.firstName}
                    </div>
                </div>

                <div className='row'>
                    <lable >Employee LastName:</lable>
                    <div>
                        {this.state.employee.lastName}
                    </div>
                </div>

                <div className='row'>
                    <lable >Employee Email:</lable>
                    <div>
                        {this.state.employee.email}
                    </div>
                </div>
            </div>
            <button onClick={()=>this.returnEmployee()} className= "btn btn-info">Previous</button>
        </div>
      </div>
    )
  }
}
