import React from "react";
import { useState } from "react"; //HERE we imporgitt useState Hook so we can add state to our functional components.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import swal from "sweetalert2";
import { useHistory } from 'react-router';


// import { useHistory } from "react-router-dom"; // allows us to access our path / route history.

function Create() {
   let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.
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
            const okay = '<b style="color: white;">Okay</b>'
            const title = `<b style="color: white; font-family: Graphik"> Oopss </b>`;
            swal.fire({
                title: title,
                html: `<b style="color:white; font-size: 13px"> Instance alias is already used!  </b>`+`<b style="color: white; font-size: 13px"> Do you want to update this Instance?  </b>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#63b8a7',
                confirmButtonText: okay,
                cancelButtonText: 'cancel',
                cancelButtonColor: '#d33',
                background: '#4686c8',
              }).then((result) => {
                if (result.isConfirmed) {
                  localStorage.setItem("updatedInstance", "next step")
                  swal.fire({
                   title:`<b style="color:white; font-size: 13px"> You may now proceed to step 2  </b>`,
                    html:`<b style="color:white; font-size: 13px"> Update your instance  </b>`,
                    icon:'success',
                    background: '#4686c8',
                  })
                history.push("/updateInstance")
                }else{
                  swal.fire({
                    html:`<b style="color:white; font-size: 13px">Cancelled </b>`,
                    icon:'cancel',
                    background: '#4686c8',
                     
                  })
                }
              })
            console.log(res.data)

          } else if (res.data.includes("successfully created")) {

            const response = res.data.split("*");
            const getInstanceIDOnly = response[1];
            console.log(getInstanceIDOnly)
            
            const title = `<b style="color: white; font-family: Graphik "> Your instance is successfully created </b>`; 
            const okay = '<b style="color: white;">Okay</b>'


            swal.fire({
              title: title,
              html: `<b style="color:white ; font-size: 15px"> Instance ID: </b>`+ `<b style="color: white ; font-size: 13px">${getInstanceIDOnly}</b>`+`<br />`+`Do you want to proceed, updating your instance?`,
              type: 'success',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes',
              cancelButtonText: 'cancel',
              background: '#4686c8',
            }).then((result) => {
              
              if (result.isConfirmed) {
                localStorage.setItem("createdInstance", "next step")
                swal.fire({
                  title:`<b style="color:white; font-size: 20px"> Thank You  </b>`,
                    html:`<b style="color:white; font-size: 13px"> You may now update your instance  </b>`,
                    icon:'success',
                    background: '#4686c8',

                })
              }else{
                swal.fire(
                  'Cancelled',
          
                )
              }
            })
            

          }
          
          else if (res.data.includes("Quota limit reached")) {
            const title = `<b style="color: white; font-family: Graphik"> Limit reached. </b>`;
            const okay = '<b style="color: white;">Okay</b>';
            
            swal.fire({
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
        const title = `<b style="color: white;  font-family: Graphik"> Required </b>`;
      swal.fire({
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
       <a href="/createInstance"><button className="custom-btn btn-3 bg-primary" id="createbtn"><span>Create Instance</span></button></a>
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
