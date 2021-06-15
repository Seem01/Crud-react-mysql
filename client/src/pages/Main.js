import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import Adminpage from '../component/Adminpage';
import Userpage from '../component/Userpage';

export default function Main() {

    const [role, setRole] = useState('')

    Axios.defaults.withCredentials = true;
    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
    }, []);

    return (
        <div>
            {role == 'admin' && <Adminpage></Adminpage>}
            {role == 'user' && <Userpage></Userpage>}
        </div>
    );
}
