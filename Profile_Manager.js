import React , { useState , useEffect} from 'react'
import Profile from "./Profile";
import  Profile_Editable  from "./Profile_Editable";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Link } from "react-router-dom";


export default function Profile_Manager(props) {

    const [name,setName]=useState('Loading..');
    const [email,setEmail]=useState('Loading..');
    const [password,setPassword]=useState('Loading..');
    const [gender,setGender]=useState('Loading..');
    const [bio,setBio]=useState('Loading..');
    const [year,setYear]=useState('Loading..');
    const [signupas,setSignupas]=useState('Loading..');
    const [pic,setPic]=useState('Loading..');
    const [tag,setTag]=useState('Loading..');
    const [__v,set__V]=useState('Loading..');
    const [id,setId]=useState('Loading..');
    const [mobile,setMobile]=useState('Loading..');
    
    const [fetch_status,setfetch_status]=useState(false);

    useEffect(() => {
        console.log('use effect ran');
        
        fetch('http://localhost:3002/register_get_email/'+props.account_email)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setName(data.user[0].name);
            setEmail(data.user[0].email);
            setGender(data.user[0].gender);
            setId(data.user[0].id);
            setMobile(data.user[0].mobno);
            setPassword(data.user[0].password);
            setPic("http://localhost:3002/"+data.user[0].pic);
            //setPic(data.user[0].pic);
            setTag(data.user[0].tag);
            setYear(data.user[0].year);
            set__V(data.user[0].__v);
            setBio(data.user[0].bio);
            setSignupas(data.user[0].signupas);
            console.log(data);

            setfetch_status(true);
            
            
          })
      }, [])



    return (
        <Router>
      <div className="App">
        
        {fetch_status && <div className="content">
          <Switch>
            <Route exact path="/" >
              <Profile name={name} email={email} gender={gender} id={id} password={password} year={year} signupas={signupas} bio={bio} pic={pic} tag={tag} mobile={mobile} __v={__v} />
            </Route>
            <Route exact path="/edit" >
              <Profile_Editable name={name} email={email} gender={gender} id={id} password={password} year={year} signupas={signupas} bio={bio} pic={pic} tag={tag} mobile={mobile} __v={__v}/>
            </Route>
          </Switch>
        </div>}
      </div>
    </Router>
    )
}
