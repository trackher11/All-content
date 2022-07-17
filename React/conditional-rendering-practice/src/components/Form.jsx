import React from "react";
import Input from "./Input.js";
import Button from "./Button.js";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password" />
      {props.userIsRegistered ? null :<Input type="password" placeholder="Confirm Password" /> }
      {props.userIsRegistered ? <Button type="submit" content = "Login" /> : <Button type="submit" content = "Register" />}
    </form>
  );
}

export default Form;
