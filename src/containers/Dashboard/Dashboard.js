// import React, { Component } from "react";
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import PopUp from "../Popup/PopUp"; 
// import parseISO from 'date-fns/parseISO'
// import "./Dashboard.scss";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import axios from '../axios-order'

// const localizer = momentLocalizer(moment);

// class Dashboard extends Component {
//   state = {
//     events: [
//       {
//         start: parseISO('2020-10-07T01:00'),
//         end: parseISO('2020-10-07T02:00'),
//         title: "Some title",
//         seen: false,
//         contacts:['qweqwewq@aads.com']
//       },
//       // {
//       //   end: "2020-10-05T01:00:00.000Z",
//       //   start: "2020-10-04T19:30:00.000Z",
//       //   title: "masdasdas",
//       //   seen: false,
//       //   contacts:['qweqwewq@aads.com']
//       // },
//       // {
//       //   start: '2020-10-07T00:00',
//       //   end: '2020-10-08T00:00',
//       //   title: "Some title",
//       //   seen: false,
//       //   contacts:['qweqwewq@aads.com']
//       // }

//     ], 
//     seen: false,
//     contacts:[]
//   };
//   componentDidMount() {
//     console.log(parseISO('2020-10-07T01:00'), 'sass')
//     axios.get( 'https://schedular-27ac2.firebaseio.com/Events.json' )
//           .then( response => {       
//               const arrayOfObj = Object.entries(response.data).map(e => e[1]);
//               console.log(arrayOfObj, )
//                 arrayOfObj.forEach((element,i) => {
//                 element.start = parseISO(element.start)
//                 element.end = parseISO(element.end)
//                 console.log(element, i )
//             });
//               this.setState({ events: arrayOfObj });
//               return () =>  this.setState({ events: arrayOfObj });
//           } )
//               .catch( error => {
//                   console.log(error, 'get')
//               } );
//   }
//   togglePop = (evt) => {
//     this.setState({
//       seen: !this.state.seen,
//       createEvent: evt
//     });
//   };

//   addEvent = (evt) => {
//     console.log(parseISO(evt.startTime) ,'iso' );
//     this.setState({
//       seen: !this.state.seen,
//       events:[...this.state.events,{
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.description,
//         contacts: evt.emails
//       }],
//     });
//     const event = {
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.description,
//         contacts: evt.emails
//     }
//     axios.post( '/Events.json', event )
//         .then( response => {
//             console.log(response)
//         } )
//         .catch( error => {
//             console.log('fail', error)
//         } );
//   };
  

//   render() {
//     return (
//       <div className="Calender">
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView={Views.WEEK}
//           events={this.state.events}
//           style={{ height: "800px" }}
//           onSelectEvent={ (evt) => { this.togglePop(evt)} }
//           selectable={true}
//           onSelectSlot={ (evt) => { this.togglePop(evt); console.log(evt)} }
//           onShowMore={(evt) => { console.log(evt, 'event')}}
//           popup={true}
//         />
//         {this.state.seen ? <PopUp data = { this.state.createEvent} submit = {this.addEvent} toggle={this.togglePop} /> : null}
//       </div>
//     );
//   }
// }

// export default Dashboard;


// functional with axios realtime db store




// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import PopUp from "../Popup/PopUp"; 
// import parseISO from 'date-fns/parseISO'

// import "./Dashboard.scss";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import axios from '../../axios-order'
// import Layout from '../../components/Layout';


// import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
// init("user_6Xl4utMTC69Y5gqhVr5Uh");



// const localizer = momentLocalizer(moment);

// function Dashboard () {
//     const [events, setEvents] = useState([{
//         start: parseISO('2020-10-07T01:00'),
//         end: parseISO('2020-10-07T02:00'),
//         title: "Some title",
//         seen: false,
//         contacts:['qweqwewq@aads.com']
//       }]);
//     const [createEvent, setCreateEvent] = useState()
//     const [seen, setSeen] = useState(false)

//     React.useEffect(() => {
//       axios.get( `https://schedular-27ac2.firebaseio.com/Events.json` )
//       .then( response => {       
//           const arrayOfObj = Object.entries(response.data).map(e => e[1]);
//            arrayOfObj.forEach((element,i) => {
//                 element.start = parseISO(element.start)
//                 element.end = parseISO(element.end)
//           });
//           setEvents(arrayOfObj);
//           return () => setEvents();
//       } )
//           .catch( error => {
//               console.log(error, 'get')
//           } );
//       },[setEvents]
//     );


//   function togglePop (evt)  {
//     setCreateEvent(evt);
//     setSeen(true)
//   };
//   function togglePopClose() {
//         setSeen(false);
//   }

//   function addEvent (evt) {
//     setSeen(false);
//     setEvents( [ ...events, {
//         start: parseISO(evt.startTime),
//         end: parseISO(evt.endTime),
//         title: evt.title,
//         description: evt.description,
//         contacts: evt.emails,
//         videoCall: evt.videoConferencing,
//         id: Math.random().toString(),
//         videoLink: evt.videoLink,
//         location: evt.location
//     }])

//     const event = {
//         name: 'Abhishek',
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.title,
//         description: evt.description,
//         contacts: evt.emails,
//         videoCall: evt.videoConferencing,
//         id: Math.random().toString(),
//         videoLink: evt.videoLink,
//         location: evt.location
//     }

//     axios.post( `/Events.json`, event )
//         .then( response => {
//             console.log(response)
//         } )
//         .catch( error => {
//             console.log('fail', error)
//     } ); 

//   	const templateId = 'template_dhjdyzc';
//     const serviceId = 'service_sz0at4g';
//     sendFeedback(templateId,serviceId, event)
//   };
  
//   function updateEvent (evt,id) {

//     const event = {
//         name:'Abhishek',
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.description,
//         contacts: evt.emails,
//         videoCall: evt.videoConferencing,
//         id: Math.random().toString(),
//         videoLink: evt.videoLink,
//         location: evt.location
//     }
//     axios.get( `https://schedular-27ac2.firebaseio.com/Events.json` )
//         .then( response => {       
//             const arrayOfObj = Object.entries(response.data).map(e => e[1])
//             var myData = Object.keys(response.data).map(key => {
//                 return key;
//             })    
//             axios.put( `https://schedular-27ac2.firebaseio.com/Events/${myData[arrayOfObj.findIndex(element => element.id === id)]}/.json`, event)
//             .then( response => {           
//             setEvents( [ ...events.filter(task =>  task.id !== id), {
//                   start: parseISO(evt.startTime),
//                   end: parseISO(evt.endTime),
//                   title: evt.description,
//                   contacts: evt.emails,
//                   videoCall: evt.videoConferencing,
//                   id: Math.random().toString(),
//                   videoLink: evt.videoLink,
//                   location: evt.location

//               }])                
//               setSeen(false);
//                 console.log(response, 'delte')
//             } )
//     } ) 
//     const templateId = 'template_dhjdyzc';
//     const serviceId = 'service_sz0at4g';
//     sendFeedback(templateId,serviceId, event)
//   };

//     function sendFeedback (templateId, serviceId, event) {
//     emailjs.send(
//       serviceId, templateId,
//       event
//       ).then(res => {
//         console.log('Email successfully sent!')
//       })
//       // Handle errors here however you like, or use a React error boundary
//       .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
//   };


//   function removeTask(id) {
//         axios.get( `https://schedular-27ac2.firebaseio.com/Events.json` )
//         .then( response => {       
//             const arrayOfObj = Object.entries(response.data).map(e => e[1])
//             var myData = Object.keys(response.data).map(key => {
//                 return key;
//             })    
//             axios.delete( `https://schedular-27ac2.firebaseio.com/Events/${myData[arrayOfObj.findIndex(element => element.id === id)]}/.json` )
//             .then( response => {           
//                 setEvents([...events.filter(task =>  task.id !== id)]);
//                 setSeen(false);
//                 console.log(response, 'delte')
//             } )
//         } )         
//     }
  

//     return (
//       <Layout>
//         <div className="Calender">
//           <Calendar
//             localizer={localizer}
//             defaultDate={new Date()}
//             defaultView="month"
//             views={['month', 'day', 'agenda', 'week',]}
//             events={events}
//             style={{ height: "580px" }}
//             onSelectEvent={ (evt) => { togglePop(evt)} }
//             selectable={true}
//             onSelectSlot={ (evt) => { togglePop(evt)} }
//             // onShowMore={(evt) => { console.log(evt, 'event')}}
//             popup={true}
//           />
//           {seen ? <PopUp data = { createEvent} delete={removeTask} update={updateEvent} submit = {addEvent} toggle={togglePopClose} /> : null}
//         </div>
//       </Layout>
//     );
  
// }

// export default Dashboard;


////////////////////////////////New Timpicker


// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import PopUp from "../Popup/PopUp"; 
// import parseISO from 'date-fns/parseISO'

// import "./Dashboard.scss";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import axios from '../../axios-order'

// import { useSelector } from 'react-redux';
// import {  firestore } from 'firebase';
// import format from 'date-fns/format'
// import toolbar from './Toolbar/Toolbar';




// const localizer = momentLocalizer(moment);


// function Dashboard () {
//     const [events, setEvents] = useState([{
//         start: parseISO('2020-10-07T01:00'),
//         end: parseISO('2020-10-07T02:00'),
//         title: "Some title",
//         seen: false,
//         contacts:['qweqwewq@aads.com']
//       }]);
//     const [createEvent, setCreateEvent] = useState()
//     const [seen, setSeen] = useState(false)
//     const auth = useSelector(state => state.auth);
//     const db = firestore();

        
//   React.useEffect(() => {
//     getDetails();
//     },[]
//   );

//   async function getDetails() {
//     if ( auth.uid !== undefined) {
//           const cityRef =  await db.collection('users').doc(auth.uid).collection('Events').get();
//           const data =  cityRef.docs.map(doc => doc.data());
//           if (!data) {
//             console.log('No such document!');
//           } else {
//           data.forEach((element,i) => {
//             element.start = parseISO(element.start)
//             element.end = parseISO(element.end)
//           });
//           setEvents(data);
//         }
//     }
//   }


//   function togglePop (evt)  {
//     setCreateEvent(evt);
//     setSeen(true)
//   };
//   function togglePopClose() {
//         setSeen(false);
//   }

//   function addEvent (evt) {
//     setSeen(false);
//     const id = Math.random().toString();
//     db.collection('users').doc(auth.uid).collection('Events').doc(id).set(
//       {
//         name: 'Ravindra',
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.title,
//         description: evt.description,
//         contacts: evt.emails,
//         videoCall: evt.videoConferencing,
//         id: id,
//         videoLink: evt.videoLink
//     })
//     .then(() => {
//         console.log('success')
//     })
//     .catch(error => {
//         console.log(error);
//     });
    
//     evt.emails.forEach(element => {
//       const emailBody  = {
//         ids: element,
//         start_time: format(parseISO(evt.startTime), "yyyy-MM-dd' T 'HH:mm"),
//         end_time: format(parseISO(evt.endTime), "yyyy-MM-dd' T 'HH:mm"),
//         message: "Hello World",
//         user: element
//     }
//     console.log(evt, element, 'email')

//     axios.post('http://calendar.altof.io:4002/getDetails', emailBody )
//         .then( response => {
//             console.log(response)
//         } )
//         .catch( error => {
//             console.log('fail', error)
//     } ); 


//     });

//     getDetails();
//     setSeen(false);
    
//   };
  
//   async function updateEvent (evt,id) {
//     db.collection('users').doc(auth.uid).collection('Events').doc(id).update(
//       {
//         name: 'Ravindra',
//         start: (evt.startTime),
//         end: (evt.endTime),
//         title: evt.title,
//         description: evt.description,
//         contacts: evt.emails,
//         videoCall: evt.videoConferencing,
//         id: id,
//         videoLink: evt.videoLink
//     })
//     .then(() => {
//         console.log('success')
//     })
//     .catch(error => {
//         console.log(error);
//     });
//     getDetails();
//     setSeen(false);
  
//   };

    


//   async function removeTask(id) {
//     await db.collection('users').doc(auth.uid).collection('Events').doc(id).delete().then(function() {
//     }).catch(function(error) {
//         console.error("Error removing document: ", error);
//     });
//     getDetails();
//     setSeen(false);
//   }
  

//     return (
//       <div className="calender-dashboard">
//         {/* <Header/> */}
//         <div className="Calender">
//           <Calendar
//             localizer={localizer}
//             defaultDate={new Date()}
//             defaultView="month"
//             views={['month', 'day', 'week',]}
//             events={events}
//             style={{ height: "85vh" }}
//             onSelectEvent={ (evt) => { togglePop(evt)} }
//             selectable={true}
//             onSelectSlot={ (evt) => { togglePop(evt)} }
//             popup={true}
//             components={{
//                toolbar: toolbar }
              
//             }
//           />
//           {seen ? <PopUp data = { createEvent} delete={removeTask} update={updateEvent} submit = {addEvent} toggle={togglePopClose} /> : null}
//         </div>
//         {/* <div className="mini-calender">
         
//         </div> */}
//       </div>
      
        
//     );
// }        

// export default Dashboard;



import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import PopUp from "../Popup/PopUp"; 
import parseISO from 'date-fns/parseISO'

import "./Dashboard.scss";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from '../../axios-order'

import { useSelector } from 'react-redux';
import format from 'date-fns/format'
import toolbar  from './Toolbar/Toolbar';
import Image from 'react-bootstrap/Image'
// import Button from 'react-bootstrap/Button'




import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const localizer = momentLocalizer(moment);


function Dashboard () {
    const [events, setEvents] = useState([{
        start: parseISO('2020-11-07T01:00'),
        end: parseISO('2020-11-07T02:00'),
        title: "Some title",
        seen: false,
        contacts:['qweqwewq@aads.com']
      }]);
    const [createEvent, setCreateEvent] = useState()
    const [seen, setSeen] = useState(false)
    const auth = useSelector(state => state.auth);
    const [startDate, setStartDate] = useState(new Date());
    const [emails, setEmails] = useState([]);



        
  React.useEffect(() => {
    getDetails();
    },[]
  );

  async function getDetails() {
    if ( auth.user_id !== undefined) {
      axios.get(`/getevents/${auth.user_id}` )
      .then( res => {
          let  data = res.data['All Events'];
          data.map((element) => {
                    element.start = new Date(element.event_start)
                    element.end = new Date(element.event_end) 
                    element.title = element.subject
                    element.description = element.meeting_desc
                    element.videoLink = element.conference_link
          });
          setEvents(data);
      } )
      .catch( error => {
          console.log('fail', error)    
      } ); 
    }
  }


  async function togglePop (evt)  {
    await axios.get(`/getparticipants/${auth.user_id}` )
    .then( res => {
        const data = res.data.Participants.filter(element => element.event_id === evt.event_id)
        data.map(element => {
            if( element.participants_email_id !== '' && element.participants_email_id !== null ) {
              setEmails(state => [...state, element.participants_email_id]) 
            }
        });
    } )
    .catch( error => {
        console.log('fail', error)    
    } ); 

    await setCreateEvent(evt);
    

    await setSeen(true)
    console.log(evt)
  };
  function togglePopClose() {
        setSeen(false);
        setEmails([]); 
  }

  function addEvent (evt) {
    const req =  {
        user_id : auth.user_id,
        subject: evt.title,
        event_start: evt.startTime,
        event_end: evt.endTime,
        location: evt.location,
        rem_flag:"1",
        rem_timestamp: new Date(new Date(evt.startTime).setMinutes(-10)),
        event_link: evt.videoLink,
        participants_email_id: evt.emails.join(';'),
        event_description: evt.description
    }
    axios.post(`/cevent`, req )
    .then( res => {
        getDetails();
        setSeen(false);
    } )
    .catch( error => {
        console.log('fail', error)    
    } ); 
   
  };
  
  function updateEvent (evt,id) {
    const req =  {
      user_id : auth.user_id,
      subject: evt.title,
      event_start: evt.startTime,
      event_end: evt.endTime,
      location: evt.location,
      rem_flag:"1",
      rem_timestamp: new Date(new Date(evt.startTime).setMinutes(-10)),
      event_link: evt.videoLink,
      participants_email_id: evt.emails.join(';'),
      event_description: evt.description,
      event_id: id,
  }

    axios.post(`/uevent`, req )
    .then( res => {
        getDetails();
        setSeen(false);
    } )
    .catch( error => {
        console.log('fail', error)    
    } ); 
    axios.post(`/uevent`, req )
    .then( res => {
        getDetails();
        setSeen(false);
    } )
    .catch( error => {
        console.log('fail', error)    
    } ); 
  };

    


  async function removeTask(id) {
    const req = {
      event_id: id,
    }
    axios.post(`/devent`, req )
    .then( res => {
        getDetails();
        setSeen(false);
    } )
    .catch( error => {
        console.log('fail', error)    
    } ); 
    getDetails();
    setSeen(false);
  }
  

    return (
      <div className="calender-dashboard">
        {/* <Header/> */}
        <div className="Calender">
          <Calendar
            localizer={localizer}
            date={startDate}
            defaultView="month"
            views={['month', 'day', 'week',]}
            events={events}
            style={{ height: "100vh" }}
            onSelectEvent={ (evt) => { togglePop(evt);} }
            selectable={true}
            onSelectSlot={ (evt) => { togglePop(evt)} }
            popup={true}
            selected = {startDate}
            step={60}
            timeslots={1}
            onNavigate = {(evt) => { setStartDate(evt)}}
            components={
              {
               toolbar: toolbar
              }
            }
          />
          {seen ? <PopUp emails = {emails} data = {createEvent} delete={removeTask} update={updateEvent} submit = {addEvent} toggle={togglePopClose} /> : null}
        </div>
        <div className="mini-calender">
          
          <div className="bt">
            <Image  src={require('../../ASSETS/calendar-icon.png')} fluid />
            <span className="schedular-date">{startDate.getDate()}</span>  
            <span className="taskheading"> Task Schedular </span>
            <button className="btn" type="button" onClick={() => {setStartDate(new Date())}}>Today</button>
            <button className="btn" type="button" onClick={() => {togglePop({start:startDate,end:startDate, action:'click'})}}>Schedule +</button>
          </div>
          
          <div className="calendar-col">
            <DatePicker
              selected={startDate}
              onChange={
                date =>  { setStartDate(date);}}
              inline
              showYearDropdown
            />
          </div>
        </div>
      </div>
      
        
    );
}        

export default Dashboard;