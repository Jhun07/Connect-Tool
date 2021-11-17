import React from "react";
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Swal from "sweetalert2";


// import { useHistory } from "react-router-dom"; // allows us to access our path / route history.

function Create() {
  // let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.
  const [InstanceAlias, setInstanceAlias] = useState("");

  const [IdentityManagementType, setIdentityManagementType] = useState("");
  const Method = "Create";


  const create = () => {

    console.log(InstanceAlias)
    console.log(IdentityManagementType)

    if (InstanceAlias !== "" && IdentityManagementType !== "") {
      Axios.post("https://vcp9rno202.execute-api.us-east-1.amazonaws.com/CreateInstance", { InstanceAlias, IdentityManagementType, Method })
        .then((res) => {

          if (res.data.includes("already used")) {

            Swal.fire({
              title: 'Oopss',
              text: "Instance alias is already used!",
              icon: 'warning',
              confirmButtonColor: 'rgb(0, 212, 255)',
              confirmButtonText: 'Okay',
              background: 'rgb(0,212,255)',
              background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,255,255,1) 35%, rgba(0,212,255,1) 100%)',  
            })
            console.log(res.data)

          } else if (res.data.includes("successfully created")) {

            const response = res.data.split("*");
            const getInstanceIDOnly = response[1];
            console.log(getInstanceIDOnly)
            
            const title = `<b style="color: white"> Your instance is successfully created </b>`; 
            const okay = '<b style="color: white;">Okay</b>'

            Swal.fire({
              title: title,
              html: `<b style="color: rgb(51,51,51); font-size: 13px"> Instance ID: </b> ${getInstanceIDOnly}` ,
              icon: 'success',
              confirmButtonColor: '#63b8a7',
              confirmButtonText: okay,
              background: '#4686c8',
            })

          }
          
          else if (res.data.includes("Quota limit reached")) {
            const title = `<b style="color: white"> Limit reached. </b>`;
           
            const okay = '<b style="color: white;">Okay</b>';
            
            Swal.fire({
              title: title,
              html: `<b style="color: rgb(51,51,51); font-size: 13px"> Quota limit reached for number of instance! </b>`,
              icon: 'warning',
              confirmButtonColor: '#63b8a7',
              confirmButtonText: okay,
              background: '#4686c8',
            })

          }
        })
    } else {
        const text = `<b style="color: rgb(51,51,51); font-size: 13px"> All fields must not be empty! </b>`;
        const okay = '<b style="color: white;">Okay</b>'
        const title = `<b style="color: white"> Required </b>`;
      Swal.fire({
        title: title,
        html: text,
        icon: 'warning',
        confirmButtonColor: '#63b8a7',
        customClass: "Custom_Cancel",
        confirmButtonText: okay,
        background: '#4686c8',
      })
    }
  };

  return (
    <>
     <div>
       <br></br>
       <a href="/createInstance"><button className="custom-btn btn-3"><span>Create Instance</span></button></a>
            <a href="/updateInstance"> <button className="custom-btn btn-3" id="updatedesign"><span>Update Instance</span></button></a>
   
      <br/><br/>
      <form className="create-form">

      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label" id="InstanceNameLabel"  >Instance Name &nbsp;➤</label>
        <div className="col-sm-6">
          <input type="text" className="form-control" id="inputInstanceName"  onChange={(event) => {
                  setInstanceAlias(event.target.value);
                }}/>
        </div>
      </div>

    <br/><br/>

    <label id="IMType">Identity Management Type &nbsp; ➤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <input type="radio" id="saml" name="fav_language" value="SAML" onChange={(event) => {
                setIdentityManagementType(event.target.value);
              }}/>&nbsp;&nbsp;

    <label for="saml" className="saml">SAML</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="ACM"  onChange={(event) => {
                setIdentityManagementType(event.target.value);
              }}/>&nbsp;&nbsp;

    <label for="saml">Amazon Connect Manage</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="SAML" onChange={(event) => {
                setIdentityManagementType(event.target.value);
              }}/>&nbsp;&nbsp;

    <label for="saml">Link to existing directory</label>&nbsp;&nbsp;

    </label><br/><br/>

    <button type="button"  id="CreateIntanceButton" className="btn btn-primary custom-btn btn-3 " onClick={create}>
    <span>Create</span></button>

  </form>
  <div className="extraimg"></div>
  
      </div>
    </>
  );
}

export default Create;
