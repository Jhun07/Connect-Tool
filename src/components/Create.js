import React from "react";
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
// import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import "bootstrap/dist/css/bootstrap.min.css";



//IMPORT FOR THE TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  //CONFIGURING TOASTIFY
  toast.configure();
// import { useHistory } from "react-router-dom"; // allows us to access our path / route history.

function View() {
  // let history = useHistory(); //USE HISTORY  it will DETERMINED OUR PAST PATH.



  const create =()=>{
    toast.success("Instance Created Successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: true,
      });
    const ok =()=>{
        window.location.reload()
    }
   

      const CustomToast = (closeToast) => {
        return (
          <div style={{ width: "300px" }}>
            <p>Instance ID: leave blank muna</p>
            <button type="submit" onClick={ok} className="btn ">
              <i className="btn  bi bi-check2" style={{ fontSize: "25px" }}></i>
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

    }

  return (
    <>
     <div>
       <br></br>
       <a href="/createInstance"> <button type="button" className="btn btn-success "style={{marginRight:"10px"}}>Create Instance</button></a> 
      <a href="/updateInstance"><button type="button" className="btn btn-primary ">Update Instance</button></a> 
      <br/><br/>
      <form>

      <div className="form-group row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={{fontSize: "15px"}} >Instance Name &nbsp;➤</label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputPassword" style={{width:"290px", marginLeft: "-42px"}} />
        </div>
      </div>

    <br/><br/>

    <label style={{fontSize: "15px"}} >Identity Management Type &nbsp; ➤ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


    <input type="radio" id="saml" name="fav_language" value="SAML"/>&nbsp;&nbsp;

    <label for="saml">SAML</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="ACM"/>&nbsp;&nbsp;

    <label for="saml">Amazon Connect Manage</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <input type="radio" id="saml" name="fav_language" value="SAML"/>&nbsp;&nbsp;

    <label for="saml">Link to existing directory</label>&nbsp;&nbsp;

    </label><br/><br/>

    <button type="button"  className="btn btn-primary "style={{marginRight:"10px"}} onClick={create}>Create Instance</button>

  </form>
      </div>
    </>
  );
}

export default View;
