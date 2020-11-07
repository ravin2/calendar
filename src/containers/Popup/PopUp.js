// import React, { useState } from "react";
// import './popup.scss';
// import Form from 'react-bootstrap/Form';
// import format from 'date-fns/format'
// import Basic from '../../Email'
// // import SearchLocationInput from '../../Gplace'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";



// const PopUp = (props) => {
//     if( props.data.action) {
//         var addPlan = true;
//         var link = 'https://video.stringmatrix.com/' + Math.random().toString(36).substring(7);
//         var titlee = ''
//     } else {
//         addPlan = false;
//         link = props.data.videoLink;
//         titlee = props.data.title;
//     }

//     // var startTimeing = format(props.data.start, "yyyy-MM-dd'T'HH:mm");
//     // var endTimeing = format(props.data.end, "yyyy-MM-dd'T'HH:mm");
//     var startTimeing = new Date(props.data.start);
//     var endTimeing = new Date(props.data.end);

//     const [startTime, onStartTimeChange] = useState(startTimeing);
//     const [endTime, onEndTimeChange] = useState(endTimeing);
//     const [description, onDescriptionChange] = useState(props.data.description);
//     const [videoConferencing, onVideoConferencingChange] = useState(props.data.videoCall);
//     const [emails, setEmails] = useState(props.data.contacts);
//     const [title, setTitle] = useState(titlee);
//     const [videoLink] = useState(link);
//     const [location] = useState(props.data.location);

//     function handleClick () {
//         props.toggle();
//     };
//     async function handleSubmit(event) {
//         if (startTime && endTime && title && description && emails && videoConferencing && videoLink) {
//             const body = {startTime, endTime, title, description, emails, videoConferencing, videoLink ,location}
//             props.submit(body);  
//         } else {
            
//             window.alert('Please provide required Field for Event');
//         }
         
//     } 
//      async function handleUpdate(event) {
//         const body = {startTime, endTime, title, description, emails, videoConferencing, videoLink, location}
//         props.update(body,props.data.id);  
//     } 

//     function handleTitleChange(evt) {
//         setEmails(evt);
//     }
//     // function handleLocationChange(evt) {
//     //     setLocation(evt);
//     // }
    
//     function handleDelete() {
//         props.delete(props.data.id);
//     }

//     const style = {
//         'maxWidth': '420px',
//         "maxHeight": '180px',
//         'marginBottom': '20px',
//         'borderRadius': '15px',
//         'padding': '10px',
//         'borderColor': 'lightgrey'
//     }
//      const [now, setStartDate] = useState(new Date());


//   return (
//    <div className="calenderpopup">
//         <div className="popupForm">
//             <div className="popupContent">
//                 <div className="popup-header">
//                     <span className="close" onClick={handleClick}>&times;    </span>
//                     <div className="popup-date">
//                         Add Event
//                     </div>
//                 </div>
                    
//                 <div className='form-content'>
//                     <div className="starttime">
//                         {/* <strong>Title</strong> */}
//                         <span className="starttimepicker">
//                             {/* <Form.Group> */}
//                                     <input type="text" placeholder="Enter Title" 
//                                         required
//                                         value={title}
//                                         onChange={event => {
//                                         setTitle(event.target.value);}}
//                                     />
//                             {/* </Form.Group> */}
//                         </span>
//                     </div>
//                     <div className="">
//                         {/* <strong>Start Time</strong> */}
//                         <span className="timeleft">
//                             {/* <Form.Group controlId='time'>
//                                     <Form.Control type="datetime-local" placeholder="Enter Date" 
//                                         required
//                                         value={startTime}
//                                         onChange={event => {
//                                         onStartTimeChange(event.target.value);}}
//                                     />
//                             </Form.Group> */}
//                             <DatePicker
//                                     selected={startTime}
//                                     onChange={event => {
//                                         onStartTimeChange(event.target.value);}}
//                                     showTimeSelect
//                                     timeFormat="haa"
//                                     timeIntervals={60}
//                                     // minDate={now}
//                                     // minTime={setMinutes(now, 0)}
//                                     // maxTime={setHours(setMinutes(now, 45), 23)}
//                                     // maxDate={now}
//                                     dateFormat="MMMM d, yyyy  haa"
//                                     timeCaption="Hour"
//                             />
//                         </span>
//                         <span>-</span>
//                         <span className="timeright">
//                              {/* <Form.Group controlId='time'>
//                                     <Form.Control type="datetime-local" placeholder="Enter Date" 
//                                         required
//                                         value={endTime}
//                                         onChange={event => {
//                                         onEndTimeChange(event.target.value);}}
//                                         min={startTime}
//                                     />
//                             </Form.Group> */}
//                             <DatePicker
//                                     selected={endTime}
//                                     onChange={event => {
//                                         onEndTimeChange(event.target.value);}}
//                                     showTimeSelect
//                                     timeFormat="haa"
//                                     timeIntervals={60}
//                                     minDate={startTime}
//                                     // minTime={setMinutes(now, 0)}
//                                     // maxTime={setHours(setMinutes(now, 45), 23)}
//                                     // maxDate={now}
//                                     dateFormat="MMMM d, yyyy haa"
//                                     timeCaption="Hour"
//                             />
//                         </span>
//                     </div>                        
//                     <div className="starttime">
//                         {/* <strong>End Time</strong> */}
                        
//                     </div>
//                     {/* <div className="starttime">
//                         <strong>Location</strong>
//                         <span className="starttimepicker">
//                             <SearchLocationInput onLocationChange={handleLocationChange} location={location}/>
//                         </span>
//                     </div> */}
//                     <Basic onTitleChange={handleTitleChange} emails={emails}/>
//                     <div className="starttime">
//                             <Form.Group controlId="formBasicCheckbox">
//                                 <Form.Check type="checkbox" label="Add Video Conferencing" 
//                                 value={videoConferencing} 
//                                 checked={props.data.videoCall}
//                                 onChange={event => {
//                                     onVideoConferencingChange(!videoConferencing);
//                                 }}
//                                 />
//                                 { videoConferencing ? 
//                                 <div>
//                                     <a href={videoLink} rel="noopener noreferrer" target="_blank">{videoLink}</a>
//                                 </div>
//                                 : 
//                                 <div></div>
//                             }
//                             </Form.Group>
                          
                            
//                     </div>
//                     <div className="Event">
//                         {/* <h4>Event Description</h4> */}
//                         <textarea style={style} rows="2" cols="100" 
//                             value={description} 
//                             required
//                             onChange={event => {
//                                     onDescriptionChange(event.target.value);
//                             }}
//                         ></textarea>
//                     </div>
//                     <div className="plan-button-popup">
//                         { addPlan ? 
//                             <div>
//                                 <button onClick={() => {handleSubmit();handleTitleChange()}} >Add Plan</button>
//                             </div>
//                             : 
//                             <div>
//                             <button onClick={() => {handleDelete();}} >Delete</button>
//                             <button onClick={() => {handleUpdate();handleTitleChange()}} >Update</button>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//    </div>
//   );
//  }

//  export default PopUp ;

import React, { useState } from "react";
import './popup.scss';
import Form from 'react-bootstrap/Form';
import format from 'date-fns/format'
import Basic from '../../Email'
// import SearchLocationInput from '../../Gplace'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from 'react-bootstrap/Image'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const PopUp = (props) => {
    if( props.data.action) {
        var addPlan = true;
        var link = 'https://video.stringmatrix.com/' + Math.random().toString(36).substring(7);
        var titlee = ''
    } else {
        addPlan = false;
        link = props.data.videoLink;
        titlee = props.data.title;
    }
    var startTimeing = new Date(props.data.start);
    var endTimeing = new Date(props.data.end).setHours(new Date(props.data.end).getHours() + 24);
    console.log(startTimeing, endTimeing)

    const [startTime, onStartTimeChange] = useState(startTimeing);
    const [endTime, onEndTimeChange] = useState(endTimeing);
    const [description, onDescriptionChange] = useState(props.data.description);
    const [videoConferencing, onVideoConferencingChange] = useState(props.data.videoCall);
    const [emails, setEmails] = useState(props.data.contacts);
    const [title, setTitle] = useState(titlee);
    const [videoLink] = useState(link);
    const [location] = useState(props.data.location);
    const [addDescription , setAddDescription] = useState(props.data.description);


    function handleClick () {
        props.toggle();
    };
    async function handleSubmit(event) {
        if (startTime && endTime && title && description && emails && videoConferencing && videoLink) {
            const body = {startTime, endTime, title, description, emails, videoConferencing, videoLink ,location}
            props.submit(body);  
        } else {
            window.alert('Please provide required Field for Event');
        }
         
    } 
     async function handleUpdate(event) {
        const body = {startTime, endTime, title, description, emails, videoConferencing, videoLink, location}
        props.update(body,props.data.id);  
    } 

    function handleTitleChange(evt) {
        setEmails(evt);
    }
    // function handleLocationChange(evt) {
    //     setLocation(evt);
    // }
    
    function handleDelete() {
        props.delete(props.data.id);
    }

    function handleDescription() {
        setAddDescription(!addDescription);
    }
    const style = {
        'maxWidth': '420px',
        "maxHeight": '180px',
        'marginBottom': '20px',
        'borderRadius': '15px',
        'padding': '10px',
        'borderColor': 'lightgrey'
    }

    console.log()

  return (
   <div className="calenderpopup">
        <div className="popupForm">
            <div className="popupContent">
                <div className="popup-header">
                    <span className="close" onClick={handleClick}>&times;    </span>
                    <div className="popup-date">
                        Add Event
                    </div>
                </div>
                    
                <div className='form-content'>
                    <div className="starttime">
                        <span className="starttimepicker">
                            <input type="text" placeholder="Enter Title" 
                                required
                                value={title}
                                onChange={event => {
                                    event.preventDefault();
                                setTitle(event.target.value);}}
                            />
                        </span>
                    </div>
                    <div className="starttime">
                        
                        <span className="timeleft">
                            <DatePicker
                                    selected={startTime}
                                    onChange={event => {
                                        onStartTimeChange(new Date(event));}}
                                    showTimeSelect
                                    timeFormat="haa"
                                    timeIntervals={60}
                                    // minDate={now}
                                    // minTime={setMinutes(now, 0)}
                                    // maxTime={setHours(setMinutes(now, 45), 23)}
                                    // maxDate={now}
                                    dateFormat="MMMM d, yyyy  haa"
                                    timeCaption="Hour"
                            />
                            <span style={{ position:'relative', top: '-25px', left: '-5px' }}>
                                        <Image className="icon" src={require('../../ASSETS/at.png')} fluid />   
                            </span>
                            
                        </span>
                        <span>-</span>
                        <span className="timeright">
                            <DatePicker
                                    selected={endTime}
                                    onChange={event => {
                                        onEndTimeChange(new Date(event));}}
                                    showTimeSelect
                                    timeFormat="haa"
                                    timeIntervals={60}
                                    minDate={startTime}
                                    // minTime={setMinutes(now, 0)}
                                    // maxTime={setHours(setMinutes(now, 45), 23)}
                                    // maxDate={now}
                                    dateFormat="MMMM d, yyyy haa"
                                    timeCaption="Hour"
                            />
                        </span>
                    </div>                        
                    <div className="starttime">
                        <Basic onTitleChange={handleTitleChange} emails={emails}/>
                    </div>
                    
                    <div className="starttime">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Add Video Conferencing" 
                                value={videoConferencing} 
                                checked={props.data.videoCall}
                                onChange={event => {
                                    onVideoConferencingChange(!videoConferencing);
                                }}
                                />
                                { videoConferencing ? 
                                <div>
                                    <a href={videoLink} rel="noopener noreferrer" target="_blank">{videoLink}</a>
                                </div>
                                : 
                                <div></div>
                            }
                            </Form.Group> 
                    </div>
                    <div className="Event">
                            <span style={{ position:'relative', top: '0px', left: '-5px' }}>
                                        <Image className="icon" src={require('../../ASSETS/at.png')} fluid />   
                            </span>
                        { addDescription ? 
                        <span>
                            <ReactQuill value={description || ''}
                                onChange={event => {
                                        console.log()
                                        onDescriptionChange(event)}}
                            /> 
                        </span>
                        : <span onClick={() => {handleDescription();}}>Add Description</span>}
                        
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
   </div>
  );
}

export default PopUp ;


 


 