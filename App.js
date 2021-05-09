import logo from './logo.svg';
//import './App.css';
import Profile from "./Profile";
import  Profile_Editable  from "./Profile_Editable";
import  Navbar  from "./Navbar";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile_Manager from './Profile_Manager';


function App() {
  // return (
  //   <div className="App">
  //     <Profile/>
  //   </div>
  // );

  return (
    // <Router>
    //   <div className="App">
        
    //     <div className="content">
    //       <Switch>
    //         <Route exact path="/">
    //           <Profile />
    //         </Route>
    //         <Route exact path="/edit">
    //           <Profile_Editable />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
    //<Profile_Manager account_email="abc@abc.com"/>
    // <Router>
    //   <div className="App">
    //     <Navbar />
    //     <div className="content">
    //       <Switch>
    //         <Route path="/">
    //           <Profile_Manager />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>

    <>
    <Navbar name="Raj"/>
    <Profile_Manager account_email="abc@abc.com"/>
    </>
  );

}

export default App;
