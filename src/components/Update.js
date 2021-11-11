import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//IMPORT FOR THE TOASTIFY
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
  //CONFIGURING TOASTIFY
  toast.configure();

  const save =()=>{
    toast.success("Instance Updated Successfully!", {
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


 

     
    

function Update() {
    return (
        <div>
          

             <br></br>
       <a href="/createInstance"> <button type="button" className="btn btn-primary "style={{marginRight:"10px"}}>Create Instance</button></a> 
     <a href="/updateInstance"><button type="button" className="btn btn-success ">Update Instance</button></a> 
          <br></br>
          <br></br>



{/* INPUTS */}





<div className="card" style={{ width: '60%' }}>
    <div className="card-body">
        <form>


            <div className="form-group row" >
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label"style={{ width: "50%", fontSize: "12px"}} >Instance Name &nbsp; ➤</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" style={{ width: "50%",marginLeft: "150px",marginTop: "-35px"}} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={{fontSize: "12px", marginTop: "15px"}}>Approved Origin &nbsp; ➤</label>
                <div className="col-sm-10">
                    <br></br>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: "50%",marginLeft: "38px", height: "200px" }}></textarea>

                </div>
            </div>
        </form>
    </div>
</div>
<br></br>

<div className="card" style={{ width: '60%' }}>
<br />
<h5 style={{fontWeight: "bold", marginLeft: "15px"}}>Data Storage</h5>
    <div className="row">
        <div className="column">
            <div className="card-sm-6">
                <h7 style={{marginLeft: "15px"}}>Call Recordings</h7>
                <br /><br />
                <div className="form-group row" >
                   
                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}}  >S3 Bucket Name &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}}  />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label  style={{fontSize: "12px", marginLeft: "15px"}}  >Prefix &nbsp; ➤</label>
                        <input type="text"  className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label  style={{fontSize: "12px", marginLeft: "15px"}}>KMS Key ARN &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
            </div>
        </div>

        <div className="column " >
        <br></br>

            <div className="card-sm-6">
                <h7 style={{marginLeft: "15px"}}>Schedule Reports</h7>
                <br /><br />
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >S3 Bucket Name &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >Prefix &nbsp; ➤</label>
                        <input type="text"  className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label  style={{fontSize: "12px", marginLeft: "15px"}}>KMS Key ARN &nbsp;➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div><br />
            </div>
        </div>
    </div>

</div>

<br></br>
<div className="card" style={{ width: '60%' }} >
    <div className="row">
        <div className="column">
            <div className="card-sm-6">
            <br />
                <h7 style={{marginLeft: "15px"}}>Chat Transcripts</h7>
                <br /><br />
                <div className="form-group row" >
                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >S3 Bucket Name &nbsp;➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >Prefix &nbsp;➤</label>
                        <input type="text"  className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >KMS Key ARN &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
            </div>
        </div>
  

        <div className="column " >
        <br></br>
            <div className="card-sm-6">
                <h7 style={{marginLeft: "15px"}}>Live Media Streaming</h7>
                <br /> <br />
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >Prefix &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div>
                <br></br>
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >KMS Key ID &nbsp; ➤</label>
                        <input  type="text" className="form-control" style={{ width: "50%",marginLeft: "165px",marginTop: "-30px"}} />
                    </div>
                </div><br />
            </div>
        </div>
    </div>

</div>
<br></br>
<div className="card" style={{ width: '60%' }}>
<br />
    <h5 style={{fontWeight: "bold", marginLeft: "15px"}}>Data Streaming</h5>
    <div className="row">
        <div className="column">
            <div className="card-sm-6">
                <h7 style={{marginLeft: "15px"}}>Contact Trace Records</h7>
                <br /><br />
                <div className="form-group row" >

                    <div className="col-sm-10">
                        <label style={{fontSize: "12px", marginLeft: "15px"}} >Kinesis Stream ARN &nbsp; ➤</label>
                        <input type="text" className="form-control" style={{ width: "46%",marginLeft: "190px",marginTop: "-30px"}} />
                    </div>
                </div><br />
            </div>
        </div>
    </div>

</div>
<br></br>
<div className="card" style={{ width: '60%' }}>
<br />
    <h5 style={{fontWeight: "bold", marginLeft: "15px"}}>Resources</h5>
    <div className="row">
        <div className="column">
            <div className="card-sm-6">
                <h7 style={{marginLeft: "100px"}}>Amazon Lex Bot</h7>
                <div className="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ marginLeft: "50px", width: "250px", height: "200px" }}></textarea>
                </div>
            </div>
        </div>
        <div className="column " style={{ marginLeft: "290px", marginTop: "-230px" }}>
            <div className="card-sm-6">
                <h7 style={{marginLeft: "85px"}} >Amazon Lambda Function</h7>
                <div className="col-sm-10">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{ marginLeft: "60px", width: "250px", height: "200px" }}></textarea>
                </div>
            </div>
            <br />
        </div>
    </div>
</div><br />
<button type="button"  className="btn btn-warning "style={{marginRight:"10px"}} onClick={save}>Update Instance</button>

{/* END INPUTS */}




 {/* DESCRIPTION */}
 <div className="card" style={{width: '18rem',float: 'right',marginTop:"-1850px"}}>
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_NqkXOwrvR6fBWhNuDCjPq-CEob8LBitKpCw-EtIyQg9IvWp295f-8a-HIF8F6ERkhg&usqp=CAU" alt="Description Image" />
        <div className="card-body">
          <h5 className="card-title"><b>Data storage</b></h5>
          <p className="card-text">Saving Amazon Connect data such as call recordings or scheduled reports requires access to an Amazon S3 bucket.</p>
        </div>
        <hr></hr>
        <div className="card-body">
          <h5 className="card-title"><b>Data streaming</b></h5>
          <p className="card-text">You can export Contact Trace Records (CTRs) and agent events from Amazon Connect to analyze your data. Get started by enabling data streaming and using the kinesis video stream or Kinesis Data Firehouse delivery stream to export your data.</p>
        </div>
        <div className="card-body">
          <h5 className="card-title"><b>Amazon Lex</b></h5>
          <p className="card-text">Integrate Amazon Lex bots into your contact flows to take advantage of the same speech recognition and natural language understanding technology that powers Alexa. By adding Lex bots, you are granting Amazon Connect permission to interact with them

</p>
        </div>
        <div className="card-body">
          <h5 className="card-title"><b>AWS Lambda</b></h5>
          <p className="card-text"> By using AWS Lambda function, you can retrieve data from database and other services. Based on the data returned, the contact can be routed to the appropriate contact flow branch. By adding Lambda functions, you are granting Amazon Connect permission to invoke them.</p>
        </div>
        <div className="card-body">
          <h5 className="card-title"><b>Contact Trace Recordings</b></h5>
          <p className="card-text">the primary source of data that Connect collects for every call that occurs within your contact center and are used for reporting and analysis. </p>
      </div>
      </div>
  

           {/* END DESCRIPTION */}
  
        </div>
    )
}

export default Update
