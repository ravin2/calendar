import React, { useState } from "react";
import './popup.css';
import Form from 'react-bootstrap/Form';
import format from 'date-fns/format'
import Basic from '../Email'

const PopUp = (props) => {
    if( props.data.action) {
        var addPlan = true;
        var link = 'https://video.stringmatrix.com/' + Math.random().toString(36).substring(7);
    } else {
        addPlan = false;
        link = props.data.videoLink;
    }

    var startTimeing = format(props.data.start, "yyyy-MM-dd'T'HH:mm");
    var endTimeing = format(props.data.end, "yyyy-MM-dd'T'HH:mm");

    const [startTime, onStartTimeChange] = useState(startTimeing);
    const [endTime, onEndTimeChange] = useState(endTimeing);
    const [description, onDescriptionChange] = useState(props.data.title);
    const [videoConferencing, onVideoConferencingChange] = useState(props.data.videoCall);
    const [emails, setEmails] = useState(props.data.contacts);
    const [videoLink, setVideoLink] = useState(link);
    console.log(props, videoConferencing);


    function handleClick () {
        props.toggle();
    };
    async function handleSubmit(event) {
        const body = {startTime, endTime, description, emails, videoConferencing, videoLink}
        props.submit(body);  
    } 
     async function handleUpdate(event) {
        const body = {startTime, endTime, description, emails, videoConferencing, videoLink}
        props.update(body,props.data.id);  
    } 

    function handleTitleChange(evt) {
        setEmails(evt);
    }
    
    function handleDelete() {
        props.delete(props.data.id);
    }

    const style = {
        'maxWidth': '510px',
        "maxHeight": '180px',
        'marginBottom': '20px',
        'borderRadius': '15px',
        'padding': '10px'
    }

  return (
   <div className="calenderpopup">
        <div className="popupForm">
            <div className="popupContent">
                <span className="close" onClick={handleClick}>&times;    </span>
                    <div className="popup-date">
                        Add Event
                    </div>
                    <div className="starttime">
                        <span>Start Time</span>
                        <span className="starttimepicker">
                            <Form.Group controlId='time'>
                                    <Form.Control type="datetime-local" placeholder="Enter Date" 
                                        required
                                        value={startTime}
                                        onChange={event => {
                                            console.log(event)
                                        onStartTimeChange(event.target.value);}}
                                    />
                            </Form.Group>
                        </span>
                    </div>
                    <div className="endtime">
                        <span>End Time</span>
                        <span className="starttimepicker">
                             <Form.Group controlId='time'>
                                    <Form.Control type="datetime-local" placeholder="Enter Date" 
                                        required
                                        value={endTime}
                                        onChange={event => {
                                        onEndTimeChange(event.target.value);}}
                                    />
                            </Form.Group>
                        </span>
                    </div>
                    <Basic onTitleChange={handleTitleChange} emails={emails}/>
                    <div className="">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Add Video Conferencing" 
                                value={videoConferencing} 
                                checked={props.data.videoCall}
                                onChange={event => {
                                    onVideoConferencingChange(!videoConferencing);
                                }}
                            />
                            </Form.Group>
                          
                            { videoConferencing ? 
                                <div>
                                    <a href={videoLink} rel="noopener noreferrer" target="_blank">{videoLink}</a>
                                </div>
                                : 
                                <div></div>
                            }
                    </div>
                    <div>
                        <h3>Event Description</h3>
                        <textarea style={style} rows="4" cols="100" 
                            value={description} 
                            onChange={event => {
                                    onDescriptionChange(event.target.value);
                            }}
                        ></textarea>
                    </div>
                    <div className="plan-button-popup">


                        { addPlan ? 
                            <div>
                                <button onClick={() => {handleSubmit();handleTitleChange()}} >Add Plan</button>
                            </div>
                            : 
                            <div>
                            <button onClick={() => {handleDelete();}} >Delete</button>
                            <button onClick={() => {handleUpdate();handleTitleChange()}} >Update</button>
                            </div>
                        }
                    </div>
                </div>
        </div>
   </div>
  );
 }

 export default PopUp ;