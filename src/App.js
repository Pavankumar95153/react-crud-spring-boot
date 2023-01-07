import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (

   <>
   <Router>
    
    <HeaderComponent/>
      <div className="container">
        <Switch>
          <Route exact path ="/" component={ListEmployeeComponent}></Route>
          <Route exact path ="/employee" component={ListEmployeeComponent}></Route>
          <Route exact path ="/add-employee" component={CreateEmployeeComponent}></Route>
          <Route exact path ="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
          <Route exact path ="/view-employee/:id" component={ViewEmployeeComponent}></Route>
        </Switch>
      </div>
    <FooterComponent/>
    
    </Router>
   </> 
    
  );
}

export default App;
