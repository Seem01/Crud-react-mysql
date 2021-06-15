import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'

export default function Adminpage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState(0);
  const [statuscus, setStatuscus] = useState("");
  const [newStatus, setNewStatus] = useState("")

  const [customerList, setCustomerList] = useState([]);

  Axios.defaults.withCredentials = true;

  const history = useHistory();

  const getCustomers = () => {
    Axios.get('http://localhost:3001/customers').then((response) => {
      setCustomerList(response.data);
    })
  }

  const addCustomer = () => {
    Axios.post('http://localhost:3001/create', {
      firstname: firstname,
      lastname: lastname,
      address: address,
      telephone: telephone,
      statuscus: statuscus
    }).then(() => {
      setCustomerList([
        ...customerList,{
        firstname: firstname,
        lastname: lastname,
        address: address,
        telephone: telephone,
        statuscus: statuscus
        }
        ]
      )}
    )
  }

  const updateCustomer = (id) => {
    Axios.put("http://localhost:3001/update", { statuscus: newStatus, id: id }).then((response) => {
      setCustomerList(
        customerList.map((val) => {
          return val.id == id ? {
            id: val.id,
            firstname: val.firstname,
            lastname: val.lastname,
            address: val.address,
            telephone: val.telephone,
            statuscus: newStatus
          } : val;
        })
      )
    })
  }

  const deleteCustomer = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setCustomerList(
        customerList.filter((val) => {
          return val.id != id;
        })
      )
    })
  }

  
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };




  return (

    <div className="container">
      <br></br>
      <button class="btn btn-primary" size="lg" onClick={logout}>
        Logout
      </button>
      <h1 className="mt-5">Welcome Admin information </h1>
      <div className="information mt-5">
        <form action="">
          <div className="mb-3">
            <label htmlFor="firtname" className="form-label">Firstname</label>
            <input type="text" className="form-control" placeholder="Enter Firstname"
            onChange={(event) => {
              setFirstname(event.target.value)
            }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Lastname</label>
            <input type="text" className="form-control" placeholder="Enter lastname"
            onChange={(event) => {
              setLastname(event.target.value)
            }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">address</label>
            <input type="text" className="form-control" placeholder="Enter address"
            onChange={(event) => {
              setAddress(event.target.value)
            }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">telephone</label>
            <input type="text" className="form-control" placeholder="Enter telephone"
            onChange={(event) => {
              setTelephone(event.target.value)
            }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="statuscus" className="form-label">status</label>
            <input type="text" className="form-control" placeholder="Enter status"
            onChange={(event) => {
              setStatuscus(event.target.value)
            }}
            ></input>
          </div>
          <button className="btn btn-success" onClick={addCustomer}>Add Customer</button>
        </form>
        <hr></hr>

        <div className="customers">
          <button className="btn btn-primary" onClick={getCustomers}>Show Customer</button>
          <br></br><br></br>
          {customerList.map((val, key) => {
            return (
              <div className="customer card">
                <div className="card-body text-left">
                  <p className="card-text">Firstname: {val.firstname}</p>
                  <p className="card-text">Lastname: {val.lastname}</p>
                  <p className="card-text">address: {val.address}</p>
                  <p className="card-text">telephone: {val.telephone}</p>
                  <p className="card-text">statuscus: {val.statuscus}</p>
                  <div className="d-flex">
                    <input className=" form-control" style={{width: "300px"}} type="text" placeholder="Enter Status" onChange={(event) => {
                      setNewStatus(event.target.value);
                    }}></input>
                    <button className="btn btn-warning" onClick={() => {updateCustomer(val.id)}}>Update Customer</button>
                    <button className="btn btn-danger" onClick={() => {deleteCustomer(val.id)}}>Delete Customer</button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </div>
  );
}
