import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar"
import Detail from "./Detail"

function App(props) {
  return (
    <div>
    <p>{props.id}</p>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img = {props.img}/>
        </div>
        <div className="bottom">
          <Detail info = {props.ph} />
          <Detail info = {props.mail} />
        </div>
      </div>
    </div>
  );
}

// function CreateCard(contacts){
//   return (<App 
//     key = {contacts.id}
//     id = {contacts.id}
//     name = {contacts.name}
//     img = {contacts.imgURL}
//     ph = {contacts.phone}
//     mail = {contacts.email}
// />
// )
//   }


// function App2(){
//   return (<div>
//   <h1 className="heading">My Contacts</h1>
//    {contacts.map( CreateCard)}
//   </div>
//   ) 
// }
function App2(){
  return (<div>
  <h1 className="heading">My Contacts</h1>
   {contacts.map( contacts =><App key = {contacts.id} id = {contacts.id} name = {contacts.name} img = {contacts.imgURL} ph = {contacts.phone} mail = {contacts.email}/>
)}
  </div>
  ) 
}

export default App2;
