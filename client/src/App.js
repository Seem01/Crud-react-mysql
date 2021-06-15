import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  

  return (
   <Router>
     <Route path="/login" exact render={(props) => <Login />} />
     <Route path="/test" exact render={(props) => <Main />} />
   </Router>
  );
}

export default App;
