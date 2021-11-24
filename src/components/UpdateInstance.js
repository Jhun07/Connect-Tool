import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Axios from "axios"; //allows us to make GET and POST requests from the browser.
import { useState } from "react"; //HERE we import useState Hook so we can add state to our functional components.
import Swal from "sweetalert2"; //IMPORT FOR THE SWAL
import { useHistory } from 'react-router';


function Update() {
    const [InstanceAlias, setInstanceAlias] = useState("");
    const [Origin, setOrigin] = useState("");
    const Method = "Update";

    ///CALL RECORDINGS
    const [clBucket, setClBucket] = useState("");
    const [clPrefix, setClPrefix] = useState("");
    const [clKMSKeyARN, setClKMSKeyARN] = useState("");

    ///CHAT_TRANSCRIPTS
    const [ctBucket, setCtBucket] = useState("");
    const [ctPrefix, setCtPrefix] = useState("");
    const [ctKMSKeyARN, setCtKMSKeyARN] = useState("");

    ///MEDIA_STREAMS
    const [msPrefix, setMsPrefix] = useState("");
    const [msKMSKeyId, setMsKMSKeyId] = useState("");

    ///SCHEDULED_REPORTS
    const [srBucket, setSrBucket] = useState("");
    const [srPrefix, setSrPrefix] = useState("");
    const [srKMSKeyARN, setSrKMSKeyARN] = useState("");

    ///CONTACT_TRACE_RECORDS
    const [ctrStreamArn, setCtrStreamArn] = useState("");

    ///LEX BOTS
    const [lexBots, setLexBots] = useState("");

    const [lexRegion, setLexRegion] = useState("");

    ///AWS LAMBDA
    const [Lambda, setLambda] = useState("");



    function save() {



        Axios.put("https://awscap-connect-restapi.acn-atcp.com/updateinstance", {
            InstanceAlias, Method, Origin,

            "CALL_RECORDINGS": {
                "BucketName": clBucket,
                "Prefix": clPrefix,
                "KMSKeyARN": clKMSKeyARN
            },
            "CHAT_TRANSCRIPTS": {
                "BucketName": ctBucket,
                "Prefix": ctPrefix,
                "KMSKeyARN": ctKMSKeyARN
            },
            "MEDIA_STREAMS": {
                "Prefix": msPrefix,
                "KMSKeyId": msKMSKeyId
            },
            "SCHEDULED_REPORTS": {
                "BucketName": srBucket,
                "Prefix": srPrefix,
                "KMSKeyARN": srKMSKeyARN
            },
            "CONTACT_TRACE_RECORDS_StreamArn": {
                "StreamArn": ctrStreamArn
            },
            "lexBots": {
                "BotName": lexBots,
                "Region": lexRegion
            },
            "Lambda": [
                Lambda
            ]




        }

        )
            .then((res) => {


                const idx = 0; // add the index for which you want value
                var key = Object.keys(res.data)[idx];
                const value = res.data[key]
                const instanceDisplay = (key, value); // key2 value2

                const idx1 = 1; // add the index for which you want value
                var key1 = Object.keys(res.data)[idx1];
                const value1 = res.data[key1]
                const dataStorage = (key1, value1); // key2 value2




                // console.log(dataStorage.CallRecord.split(":"))





                const idx2 = 2; // add the index for which you want value
                var key2 = Object.keys(res.data)[idx2];
                const value2 = res.data[key2]
                const Origin = (key2, value2); // key2 value2
                console.log(Origin)


                const idx3 = 3; // add the index for which you want value
                var key3 = Object.keys(res.data)[idx3];
                const value3 = res.data[key3]
                const Lex = (key3, value3); // key2 value2
                console.log(Lex)


                const idx4 = 4; // add the index for which you want value
                var key4 = Object.keys(res.data)[idx4];
                const value4 = res.data[key4]
                const Lambda = (key4, value4); // key2 value2
                console.log(Lambda)

                console.log(res.data)


                let arrayOfNoChanges = []
                const noChanges = "No changes";

                if (dataStorage.CallRecord.includes(noChanges)) {
                    arrayOfNoChanges.push(" Call Recordings")
                } if ((dataStorage.ChatTranscripts.includes(noChanges))) {
                    arrayOfNoChanges.push(" Chat Transcripts")
                } if ((dataStorage.MediaStream.includes(noChanges))) {
                    arrayOfNoChanges.push(" Media Stream")
                } if ((dataStorage.Reports.includes(noChanges))) {
                    arrayOfNoChanges.push(" Reports")
                } if ((dataStorage.CTR.includes(noChanges))) {
                    arrayOfNoChanges.push(" CTR")
                } if ((Origin.includes(noChanges))) {
                    arrayOfNoChanges.push(" Origin")
                } if ((Lex.includes(noChanges))) {
                    arrayOfNoChanges.push(" Lex")
                } if ((Lambda.includes(noChanges))) {
                    arrayOfNoChanges.push(" Lambda")
                }




                let arrayOfUpdates = []
                const updatedSuccessfully = "Updated Successfully"
                if ((Origin.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Origin")
                }
                if ((Lambda.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Lambda")
                }
                if (dataStorage.CallRecord.includes(updatedSuccessfully)) {
                    arrayOfUpdates.push(" Call Recordings")

                } if ((dataStorage.ChatTranscripts.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Chat Transcripts")

                } if ((dataStorage.MediaStream.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Media Streams")

                } if ((dataStorage.Reports.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Reports")

                } if ((dataStorage.CTR.includes(updatedSuccessfully))) {
                    arrayOfUpdates.push(" Contact Trace Records")
                }


                ////INVALID INPUTS
                const invalidInputs = "Invalid inputs";
                let arrayOfInvalidInputs = []
                if ((Origin.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Origin")
                }
                if ((Lambda.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Lambda")
                }
                if ((Lex.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Lambda")
                }
                if (dataStorage.CallRecord.includes(invalidInputs)) {
                    arrayOfInvalidInputs.push(" Call Record")

                } if ((dataStorage.ChatTranscripts.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Chat Transcripts")

                } if ((dataStorage.MediaStream.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Media Stream")

                } if ((dataStorage.Reports.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Reports")

                } if ((dataStorage.CTR.includes(invalidInputs))) {
                    arrayOfInvalidInputs.push(" Contact Trace Records")
                }

                /// NO ASSOCIATED

                let arrayOfNoAssociated = [];

                const noAssociated = "associated";

                if ((Origin.includes(noAssociated))) {
                    arrayOfNoAssociated.push("Origin")
                }
                if ((Lambda.includes(noAssociated))) {
                    arrayOfNoAssociated.push("Lambda")
                }
                if ((Lex.includes(noAssociated))) {
                    arrayOfNoAssociated.push("Lex")
                }

                console.log("--------RESULTS------------")
                console.log("No Changes:  ", arrayOfNoChanges)
                console.log("")
                console.log("Updated Successfully:  ", arrayOfUpdates)
                console.log("")
                console.log("Invalid Inputs:  ", arrayOfInvalidInputs)
                console.log("")
                console.log("No Associated:  ", arrayOfNoAssociated)



                const stringOfNoChanges = JSON.stringify(arrayOfNoChanges)
                // const NoChangesFormat = stringOfNoChanges.replaceAll('"', "");
                const NoChangesFormat1 = stringOfNoChanges.replaceAll('"', "");
                const NoChangesFormat2 = NoChangesFormat1.replaceAll('[', "");
                const NoChangesFormat = NoChangesFormat2.replaceAll(']', "");
                console.log(NoChangesFormat)

                const stringOfUpdates = JSON.stringify(arrayOfUpdates)
                //const UpdatesFormat = stringOfUpdates.replaceAll('"', "");
                const UpdatesFormat1 = stringOfUpdates.replaceAll('"', "");
                const UpdatesFormat2 = UpdatesFormat1.replaceAll('[', "");
                const UpdatesFormat = UpdatesFormat2.replaceAll(']', "");
                console.log(UpdatesFormat)

                const stringOfInvalidInputs = JSON.stringify(arrayOfInvalidInputs)
                const InvalidInputsFormat = stringOfInvalidInputs.replaceAll('"', "");
                console.log(InvalidInputsFormat)


                const stringOfNoAssociated = JSON.stringify(arrayOfNoAssociated)
                const NoAssociatedFormat = stringOfNoAssociated.replaceAll('"', "");
                console.log(NoAssociatedFormat)


                if(arrayOfUpdates.length == 1){
                const title = '<b style="color: white;font-size: 20px; font-family: Graphik">Your instance is successfully Updated. </b>'
                const okay = '<b style="font-color: white;">Okay</b>'
           
                Swal.fire({
                    position: 'center',
                    title: title,
                    // text: `<b style="font-size: 13px">List of Updated:</b>`+'<br /'>+`${UpdatesFormat}`,
                    html: `<b style="color: white ; font-size: 15px; font-family: Graphik "> List of Updated: </b>`+`<br/ >`+`<b style="color: white ; font-size: 15px ; font-family: Graphik ">${UpdatesFormat}</b>`+`<br />`+`<br />`,
                    icon: 'success',
                    confirmButtonColor: '#63b8a7',
                    confirmButtonText: okay,
                    background: '#4686c8',
                    width: '60%',


                })
                }
                else if(arrayOfNoChanges){
                const title2 = '<b style="color: white;font-size: 20px; font-family: Graphik">Your instance is not Updated. </b>'
                const okay2 = '<b style="font-color: white;">Okay</b>'

                Swal.fire({
                    position: 'center',
                    title: title2,
                    // text: `<b style="font-size: 13px">List of Updated:</b>`+'<br /'>+`${UpdatesFormat}`,
                    html: `<b style="color: white ; font-size: 15px; font-family: Graphik "> List of No Changes: </b>`+`<br/ >`+`<b style="color: white ; font-size: 15px ; font-family: Graphik ">${NoChangesFormat}</b>`+`<br />`+`<br />`,
                    icon: 'success',
                    confirmButtonColor: '#63b8a7',
                    confirmButtonText: okay2,
                    background: '#4686c8',
                    width: '60%',


                })}
            })

    }
    let redirect = useHistory();

    if (localStorage.getItem("createdInstance") == null && localStorage.getItem("updatedInstance") == null) {
        Swal.fire({
            title: `<b style="color: white; font-size: 20px">Oops! </b>`,
            html: `<b style="color: white; font-size: 13px">Please create an instance first! </b>`,
            icon: 'warning',
            confirmButtonColor: '#63b8a7',
            customClass: "Custom_Cancel",
            confirmButtonText: '<b style="color: white;">Okay</b>',
            background: '#4686c8',

        })
        redirect.push("/")
    }
    return (
        <div className="container">
            <br></br>
            <a href="/createInstance"><button className="custom-btn btn-3" id="createdesign"><span>Create Instance</span></button></a>
            <a href="/updateInstance"> <button className="custom-btn btn-3 bg-primary" id="updatedesign"><span>Update Instance</span></button></a>

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
                                    setInstanceAlias(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label UpApprovedOrigin" id="InstanceLabel">Approved Origin &nbsp; ➤</label>
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
                                    <input onChange={(event) => {
                                        setClBucket(event.target.value);
                                    }} type="text" className="form-control input1" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >Prefix &nbsp; ➤</label>
                                    <input onChange={(event) => {
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
                                    }} type="text" className="form-control input1" />
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
                                    <input onChange={(event) => {
                                        setSrBucket(event.target.value);
                                    }} type="text" className="form-control input1" />
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
                                    <input onChange={(event) => {
                                        setSrKMSKeyARN(event.target.value);
                                    }}
                                        type="text" className="form-control input1" />
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
                                    }} type="text" className="form-control input1" />
                                </div>
                            </div>
                            <br></br>
                            <div className="form-group row" >

                                <div className="col-sm-10">
                                    <label className="label1" >Prefix &nbsp;➤</label>
                                    <input onChange={(event) => {
                                        setCtPrefix(event.target.value);
                                    }} type="text" className="form-control input1" />
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
                                    }} type="text" className="form-control input1" />
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
                                    <input onChange={(event) => {
                                        setCtrStreamArn(event.target.value);
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
                <h5 className="boldTxt">Amazon Lex Bot</h5>
                <div className="row">
                    <div className="column">
                        <div className="card-sm-6">
                            <h7 className="AlbTxt">LEX BOT REGION</h7>
                            <div className="col-sm-10">
                                <textarea onChange={(event) => {
                                    setLexRegion(event.target.value);
                                }} class="form-control textArea1" rows="3"></textarea>
                            </div>
                        </div>
                    </div><br /><br /><br /><br />
                    <div className="column">
                        <div className="card-sm-6">
                            <h7 className="AlbTxt">LEX BOT NAME</h7>
                            <div className="col-sm-10">
                                <textarea onChange={(event) => {
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

            <button className="custom-btn btn-3" id="updatedesign2" onClick={save}><span>Update</span></button>

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
