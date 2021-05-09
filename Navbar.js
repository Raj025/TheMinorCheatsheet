import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'




export default function Navbar(props) {

    const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState('');

    const display_post = (e) => {
        setSearch(e.target.value);

    }

    const handleSearch = (e)=>{

        setSearch(e.target.value);

        if(e.target.value){
        fetch('http://localhost:3002/search_bar/'+e.target.value)
          .then(res => {
            return res.json();
          })
          .then(data => {
            
            console.log(data.post);
            const dataForOptions=[];

            for (let index = 0; index < data.post.length; index++) {
                const element = data.post[index].title;
                const arr=[element, index];
                dataForOptions.push(arr);
                console.log(element);
                
            }
            setOptions(dataForOptions);

            
            
            
          }).catch(err=> console.log(err))

        }

    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Quora</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
            <li classNameName="nav-item">
                {/* <Link to="/" className="nav-link" href="#">Update Profile</Link> */}

                <a className="nav-link" href="#">Update Profile</a>
            </li>
            
        
      </ul>
      <form className="d-flex">
          
      

      

      <div className="btn-group">
  {/* <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
    Right-aligned, left-aligned lg
  </button> */}

  <input className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="true" value={search} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    

    {
        options.map(arr => (

        <li  key={arr[1]} >

                <button onClick={(e) => {
                      display_post(e);
                        // console.log(e.target.value);
                      }}
                      className="dropdown-item" type="button" value={arr[0]}>{arr[0]}</button>
                  
                 
                </li>        


      ))}

        
      



  </ul>
</div>

        

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hi, {props.name}
             </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Logout</a></li>
            
          </ul>
        </li>
        </ul>

    </div>
  </div>
</nav>




        </div>
    )
}
