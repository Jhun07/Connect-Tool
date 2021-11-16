import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import Swal from "sweetalert2"; //IMPORT FOR THE SWAL


function Update() {
    const [InstanceAlias, setInstanceAlias] = useState("");
    const [Origin, setOrigin] = useState("");
    const Method ="Update";

   ///CALL RECORDINGS
    const [clBucket, setClBucket] = useState("uap-dev-call-recordings");
    const [clPrefix, setClPrefix] = useState("DELETE");
    const [clKMSKeyARN, setClKMSKeyARN] = useState("arn:aws:kms:us-east-1:966145658840:key/8692921d-d3e4-4887-86d1-da74e43d0751");

    ///CHAT_TRANSCRIPTS
    const [ctBucket, setCtBucket] = useState("uap-dev-chat-transcripts");
    const [ctPrefix, setCtPrefix] = useState("ChatTranscripts");
    const [ctKMSKeyARN, setCtKMSKeyARN] = useState("arn:aws:kms:us-east-1:966145658840:key/8692921d-d3e4-4887-86d1-da74e43d0751");

    ///MEDIA_STREAMS
    const [msPrefix, setMsPrefix] = useState("uap-dev-streams");
    const [msKMSKeyId, setMsKMSKeyId] = useState("825ef77b-6174-4dd8-83dc-d9adbc20146c");

    ///SCHEDULED_REPORTS
    const [srBucket, setSrBucket] = useState("uap-dev-reports");
    const [srPrefix, setSrPrefix] = useState("Reports");
    const [srKMSKeyARN, setSrKMSKeyARN] = useState("arn:aws:kms:us-east-1:966145658840:key/8692921d-d3e4-4887-86d1-da74e43d0751");

    ///CONTACT_TRACE_RECORDS
    const [ctrStreamArn, setCtrStreamArn] = useState("arn:aws:kinesis:us-east-1:966145658840:stream/UAP-DEV-Kinesis-CTR");

    ///LEX BOTS
    const [lexBots, setLexBots] = useState("UAP_DEV_CCP_Bot");

    ///AWS LAMBDA
    const [Lambda, setLambda] = useState("arn:aws:lambda:us-east-1:966145658840:function:UAP-DEV-updateAgentDB");


function save() {
    if(InstanceAlias !== "" && Origin !== ""  && clBucket !== "" && clPrefix !== "" && clKMSKeyARN !== ""
        
    && ctBucket !== ""  && ctPrefix !== "" && ctKMSKeyARN !== "" && msPrefix !== "" && msKMSKeyId !== ""

    && srBucket !== ""  && srPrefix !== "" && srKMSKeyARN !== "" && ctrStreamArn !== "" && lexBots !== ""
    && Lambda !== "")
    
    {
      Axios.put("https://vcp9rno202.execute-api.us-east-1.amazonaws.com/UpdateInstance", {InstanceAlias,Method,Origin, lexBots, Lambda,
     
      "CALL_RECORDINGS":{
        "BucketName":clBucket,
        "Prefix": clPrefix,
        "KMSKeyARN": clKMSKeyARN
      },
      "CHAT_TRANSCRIPTS":{
        "BucketName": ctBucket,
        "Prefix": ctPrefix,          
        "KMSKeyARN": ctKMSKeyARN
      },
      "MEDIA_STREAMS": {
        "Prefix": msPrefix,        
        "KMSKeyId": msKMSKeyId     
      },
      "SCHEDULED_REPORTS": {
        "BucketName":srBucket , 
        "Prefix": srPrefix,    
        "KMSKeyARN": srKMSKeyARN
      },
      "CONTACT_TRACE_RECORDS_StreamArn": {
        "StreamArn": ctrStreamArn
      }
    }
  
    )
      .then((res)=>{
     
        const idx = 0; // add the index for which you want value
        var key = Object.keys(res.data)[idx];
        const value = res.data[key]
        const instanceDisplay=(key,value); // key2 value2

        const idx1 = 1; // add the index for which you want value
        var key1 = Object.keys(res.data)[idx1];
        const value1 = res.data[key1]
        const dataStorage=(key1,value1); // key2 value2
        console.log(dataStorage)

        
        const idx2 = 2; // add the index for which you want value
        var key2 = Object.keys(res.data)[idx2];
        const value2 = res.data[key2]
        const Origin=(key2,value2); // key2 value2
        console.log(Origin)
      

        const idx3 = 3; // add the index for which you want value
        var key3 = Object.keys(res.data)[idx3];
        const value3 = res.data[key3]
        const Lex=(key3,value3); // key2 value2
        console.log(Lex)
       

        const idx4 = 4; // add the index for which you want value
        var key4 = Object.keys(res.data)[idx4];
        const value4 = res.data[key4]
        const Lambda=(key4,value4); // key2 value2
        console.log(Lambda)
       
        console.log(res.data)
       
        const text = '<b style="color:#0f78a8;font-size: 15px; text-align: left;"> Instance ID: </b>' + `<b style="font-size: 12px;">${instanceDisplay}</b>` +  
         '<br/>' + '<b style="color:#0f78a8;font-size: 15px; text-align: left;">Call Record: </b>' + `<b style="font-size: 12px;">${dataStorage.CallRecord}</b>` +
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px; text-align: left;"> Chat Transcripts: </b>' + `<b style="font-size: 12px;">${dataStorage.ChatTranscripts}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px; text-align: left;"> MediaStream: </b>' + `<b style="font-size: 12px;">${dataStorage.MediaStream}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px">  Reports: </b>' + `<b style="font-size: 12px;">${dataStorage.Reports}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px"> CTR: </b>' + `<b style="font-size: 12px;">${dataStorage.CTR}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px"> Origin: </b>' + `<b style="font-size: 12px;">${Origin}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px"> Lex </b>' + `<b style="font-size: 12px;">${Lex}</b>`+
          '<br/>' + '<b style="color:#0f78a8;font-size: 15px"> Lambda:</b>' + `<b style="font-size: 12px;">${Lambda}</b>`;
        
        const title = '<b style="font-size: 20px;">Your instance is successfully Updated. </b>'

        Swal.fire({
          title: title,
           html: text,  
          icon: 'success',
          confirmButtonColor: 'rgb(0, 212, 255)',
          confirmButtonText: 'Okay',
          background: 'rgba(2, 126, 251, 1);',
          background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,255,255,1) 35%, rgba(0,212,255,1) 100%)',
        })
      })
    }else{
        const text = `<b style="color: rgb(51,51,51); font-size: 13px"> All Field must not be empty! </b>`;
      
      Swal.fire({
        title: 'Required',
        html: text,
        icon: 'warning',
        confirmButtonColor: 'rgb(0, 212, 255)',
        confirmButtonText: 'Okay',
        background: 'rgba(2, 126, 251, 1);',
        background: 'linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(255,255,255,2) 35%, rgba(0,212,255,1) 100%)',
      })
    }
}
    return (
        <div className="container">
            <br></br>
            <a href="/createInstance"><button className="custom-btn btn-3"><span>Create Instance</span></button></a>
            <a href="/updateInstance"> <button className="custom-btn btn-3" id="updatedesign"><span>Update Instance</span></button></a>
   
            <br></br>
            <br></br>

            {/* INPUTS */}
            <div className="card" id="cardInstanceApproved">
                <div className="card-body card-body1">
                    <form>


                        <div className="form-group row" >
                            <label htmlFor="inputInstance" className="col-sm-2 col-form-label" id="InstanceLabel">Instance Name &nbsp; ➤</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="inputInstanceField" onChange={(event) => {
                  setInstanceAlias(event.target.value)}} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label UpApprovedOrigin"  id="InstanceLabel">Approved Origin &nbsp; ➤</label>
                            <div className="col-sm-10">
                                <br></br>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(event) => {
                  setOrigin(event.target.value);
                }} ></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br></br>

            <div className="card cardName" id="card">
                <br />
                <h5 className="boldTxt">Data Storage</h5>
                <div className="row">
                    <div className="column">
                        <div className="card-sm-6">
                            <h7 className="title">Call Recordings</h7>
                            <br /><br />
                            <div className="form-group row" >
                                <div className="col-sm-10">
                           <label className="label1">S3 Bucket Name &nbsp; ➤</label>
                                    <input  onChange={(event) => {
                  setClBucket(event.target.value);
                }} type="text" className="form-control input1"/>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >Prefix &nbsp; ➤</label>
                                    <input   onChange={(event) => {
                            setClPrefix(event.target.value);
                          }} type="text" className="form-control input1" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">KMS Key ARN &nbsp; ➤</label>
                                    <input onChange={(event) => {
                            setClKMSKeyARN(event.target.value);
                          }} type="text" className="form-control input1"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column " >
                        <br></br>

                        <div className="card-sm-6">
                            <h7 className="title">Schedule Reports</h7>
                            <br /><br />
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">S3 Bucket Name &nbsp; ➤</label>
                                    <input   onChange={(event) => {
                            setSrBucket(event.target.value);
                          }}  type="text" className="form-control input1" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">Prefix &nbsp; ➤</label>
                                    <input onChange={(event) => {
                            setSrPrefix(event.target.value);
                          }} type="text" className="form-control input1" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">KMS Key ARN &nbsp;➤</label>
                                    <input  onChange={(event) => {
                            setSrKMSKeyARN(event.target.value);
                          }}
                         type="text" className="form-control input1"/>
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div>

            </div>

            <br></br>
            <div className="card cardName" id="card" >
                <div className="row">
                    <div className="column">
                        <div className="card-sm-6">
                            <br />
                            <h7 className="title">Chat Transcripts</h7>
                            <br /><br />
                            <div className="form-group row" >
                                <div className="col-sm-10">
                                    <label className="label1" >S3 Bucket Name &nbsp;➤</label>
                                    <input onChange={(event) => {
                            setCtBucket(event.target.value);
                          }} type="text" className="form-control input1"/>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >Prefix &nbsp;➤</label>
                                    <input   onChange={(event) => {
                            setCtPrefix(event.target.value);
                          }} type="text" className="form-control input1"/>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >KMS Key ARN &nbsp; ➤</label>
                                    <input onChange={(event) => {
                            setCtKMSKeyARN(event.target.value);
                          }} type="text" className="form-control input1" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column " >
                        <br></br>
                        <div className="card-sm-6">
                            <h7 className="title">Live Media Streaming</h7>
                            <br /> <br />
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">Prefix &nbsp; ➤</label>
                                    <input onChange={(event) => {
                            setMsPrefix(event.target.value);
                          }} type="text" className="form-control input1"/>
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1">KMS Key ID &nbsp; ➤</label>
                                    <input onChange={(event) => {
                            setMsKMSKeyId(event.target.value);
                          }} type="text" className="form-control input1" />
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div>

            </div>
            <br></br>
            <div className="card cardName" id="card">
                <br /> 
                <h5 className="boldTxt"> Data Streaming</h5>
                <div className="row">
                    <div className="column">
                        <div className="card-sm-6">
                            <h7 className="title">Contact Trace Records</h7>
                            <br /><br />
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >Kinesis Stream ARN &nbsp; ➤</label>
                                    <input  onChange={(event) => {
                            setCtrStreamArn(event.target.value);
                          }} type="text" className="form-control input1"/>
                                </div>
                            </div><br />
                        </div>
                    </div>
                </div>

            </div>
            <br></br>
            <div className="card cardName" id="card">
                <br />
                <h5 className="boldTxt">Resources</h5>
                <div className="row">
                    <div className="column">
                        <div className="card-sm-6">
                            <h7 className="AlbTxt">Amazon Lex Bot</h7>
                            <div className="col-sm-10">
                                <textarea  onChange={(event) => {
                            setLexBots(event.target.value);
                          }} class="form-control textArea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="column column1">
                        <div className="card-sm-6">
                            <h7 className="AlfTxt" >Amazon Lambda Function</h7>
                            <div className="col-sm-10">
                                <textarea onChange={(event) => {
                        setLambda(event.target.value);
                      }}
                     class="form-control textArea2" rows="3"></textarea>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div><br />
       
            <button className="custom-btn btn-3" id="updatedesign" onClick={save}><span>Update <i className="bi bi-recycle"></i></span></button>

            {/* END INPUTS */}




            {/* DESCRIPTION */}
            <div className="card" id="description" >
                <img className="card-img-top" src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png" alt="Description Image" />
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
                    <p className="card-text">The primary source of data that Connect collects for every call that occurs within your contact center and are used for reporting and analysis. </p>
                </div>
            </div>


            {/* END DESCRIPTION */}

        </div>
    )
}

export default Update
