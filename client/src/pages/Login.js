import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import '../App'

export default function Login() {
  
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        history.push('/test')
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="App">


<div class="container">
  <div class="row">
    <div class="col">
    <div className="container">
      <h2 class=" mt-5">Register</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <input type="text" style={{width: "300px"}} class="form-control mt-5" name="username" placeholder="Username" onChange={(event) => {
            setUsernameReg(event.target.value);
          }} /><br/>
      <input type="password" style={{width: "300px"}} class="form-control mt-2" name="password" placeholder="Password"  onChange={(event) => {
            setPasswordReg(event.target.value);
          }} />
      </div>
      <button class="btn btn-primary mt-5" onClick={register}>Register</button>   
      </div>
    </div>
    <div class="col">
    <div className="container">
      <h2 class="justify-content-center mt-5">Login</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
      <input type="text" style={{width: "300px"}} class="form-control mt-5" name="username" placeholder="Username" onChange={(event) => {
            setUsername(event.target.value);
          }} /><br/>
      <input type="password" style={{width: "300px"}} class="form-control mt-2" name="password" placeholder="Password"  onChange={(event) => {
            setPassword(event.target.value);
          }} />
      </div>
      <button class="btn btn-primary mt-5" onClick={login}>Login</button>   
      </div>
    </div>
    </div>
</div>
  
</div>

    



          


  );
}
