import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/emp/employees";
const ADD_EMPLOYEE_API_BASE_URL ="http://localhost:8085/api/emp/addEmp";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(ADD_EMPLOYEE_API_BASE_URL,employee);
    }

    getEmpoyeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
    }

    updateEmployeeById(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeId,employee);
    }

    delEmployeeById(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
}

export default new EmployeeService();