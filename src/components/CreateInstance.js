import React from "react";
import "./App.css";
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import "bootstrap/dist/css/bootstrap.min.css";


//IMPORT FOR THE TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  //CONFIGURING TOASTIFY
  toast.configure();
// import { useHistory } from "react-router-dom"; // allows us to access our path / route history.

function Create() {
  // let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.
  const [InstanceAlias, setInstanceAlias] = useState("");
  
  const [IdentityManagementType, setIdentityManagementType] = useState("");
  const Method ="Create";



  const create =()=>{
    console.log(InstanceAlias)
    console.log(IdentityManagementType)
    
    if(InstanceAlias != "" && IdentityManagementType != ""){
      Axios.post("https://vcp9rno202.execute-api.us-east-1.amazonaws.com/CreateInstance", {InstanceAlias,IdentityManagementType,Method} )
      .then((res)=>{
       



    // toast.success("Instance Created Successfully!", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: true,
    //   });
    const ok =()=>{
        window.location.reload();
    };
   

      const CustomToast = (closeToast) => {
        return (
          <div id="CustomToast">
             <p>{res.data}</p>
            <button type="submit" onClick={ok} className="btn ">
              <i className="btn  bi bi-check2" id="CheckI"></i>
            </button>
  
          
          </div>
        );
      };

       ///--------------------------------
       toast.info(<CustomToast />, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        closeOnClick: false,
        icon: false,
      });
    })
      
  }else{
    alert("All Field must not be empty!")
  }
  

  
};

  return (
    <>
     <div>
       <br></br>
       <a href="/createInstance"> <button type="button" className="btn btn-success " id="CreateButton" >Create Instance</button></a> 
      <a href="/updateInstance"><button type="button" className="btn btn-primary " id="UpdateButton">Update Instance</button></a> 
      <br/><br/>
      <form>

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

    <label for="saml">SAML</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="ACM"  onChange={(event) => {
                setIdentityManagementType(event.target.value);
              }}/>&nbsp;&nbsp;

    <label for="saml">Amazon Connect Manage</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="SAML" onChange={(event) => {
                setIdentityManagementType(event.target.value);
              }}/>&nbsp;&nbsp;

    <label for="saml">Link to existing directory</label>&nbsp;&nbsp;

    </label><br/><br/>

    <button type="button"  id="CreateIntanceButton" className="btn btn-primary " onClick={create}>Create Instance</button>

  </form>
      </div>
    </>
  );
}

export default Create;
