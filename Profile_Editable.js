import React, { useState , useEffect} from 'react'
import "./Profile_style.css";
import { Link } from "react-router-dom";

export default function Profile_Editable(props) {
    // return (
    //     <div>
    //         Editable
    //         <div className="col-md-2">
    //                     <Link to="/" className="profile-edit-btn">View Profile</Link>
    //                 </div>

            
    //     </div>
    // )
    const [name,setName]=useState(props.name);
    const [email,setEmail]=useState(props.email);
    const [password,setPassword]=useState(props.password);
    const [gender,setGender]=useState(props.gender);
    const [bio,setBio]=useState(props.bio);
    const [year,setYear]=useState(props.year);
    const [signupas,setSignupas]=useState(props.signupas);
    const [pic,setPic]=useState(props.pic);
    const [tag,setTag]=useState(props.tag);
    const [__v,set__V]=useState(props.__v);
    const [id,setId]=useState(props.id);
    const [mobile,setMobile]=useState(props.mobile);

    const[isPending,setisPending]=useState(false);

    const[password_altered,setPassword_altered]=useState(false);

    console.log(pic);
    
    

    const handleSubmit = (e) => {
      e.preventDefault();
      setisPending(true);

      let data =[{"propName":"name","value":name} , {"propName":"mobno","value":mobile} ,{"propName":"gender","value":gender},{"propName":"bio","value":bio},{"propName":"year","value":year}]; //,{"propName":"pic","value":pic}

      if(password_altered){
      data =[{"propName":"name","value":name} , {"propName":"mobno","value":mobile} ,{"propName":"gender","value":gender},{"propName":"bio","value":bio},{"propName":"year","value":year},{"propName":"password","value":password}  ]; //,{"propName":"pic","value":pic}

      }
      
      console.log(data);
      const urltopost='http://localhost:3002/register_update/'+email;
      fetch(urltopost, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log('new data added');
      console.log(result);
      setisPending(false);
    })

      
     
    }


    



    return (
      <div>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" */}
                  <img src={pic} alt="error" />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => {setPic(e.target.value)
                        
                        console.log(pic)
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{name}</h5>
                  <h6>{signupas}</h6>
                  <p className="proile-rating">
                    ROLE : <span>{signupas}</span>
                  </p>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    {/* <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Bio</a>
                                </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <Link to="/" className="profile-edit-btn">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <input
                          required
                          value={name}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>{email}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Password</label>
                      </div>
                      <div className="col-md-6">
                      
                    <input type="password"  value={password} className="form-control" id="inputPassword" onChange={(e) => {setPassword(e.target.value)
                      setPassword_altered(true);
                      console.log(password);
                    }} />
                      
                      </div>
                    </div>

      


                    {/* <div className="row">
                                            <div className="col-md-6">
                                                <label>Password</label>
                                            </div>
                                            <div className="col-md-6">
                                                <p>{password}</p>
                                            </div>
                                        </div> */}
                    <div className="row">
                      <div className="col-md-6">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select form-select-sm mb-3"
                          aria-label=".form-select-lg example"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>

                        {/* <p>{gender}</p> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Mobile no.</label>
                      </div>
                      <div className="col-md-6">
                        {/* <p>{mobile}</p> */}

                        <input
                          required
                          value={mobile}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Year</label>
                      </div>
                      <div className="col-md-6">
                        {/* <p>{year}</p> */}

                        <input
                          required
                          value={year}
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={(e) => {
                            setYear(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Post Count</label>
                      </div>
                      <div className="col-md-6">
                        <p>{__v}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Tags</label>
                      </div>
                      <div className="col-md-6">
                        <p>{tag}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Bio</label>
                      </div>
                      <div className="col-md-6">
                        {/* <p>{bio}</p> */}

                        <textarea
                          required
                          value={bio}
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={(e) => {
                            setBio(e.target.value);
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                    {!isPending && <button onClick={handleSubmit} type="button" className="btn btn-outline-success">Update details</button>}
                    {isPending && <button  type="button" className="btn btn-outline-success disabled">Updating</button>}
                    </div>
                    </div>


                  </div>
                  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}
