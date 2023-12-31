import "./App.css";
import Name from "./2nd.js"
import {Clans} from "./3rd.js"
const Vikas=()=>{
  return(
    <div id="parent">
    <div id="child">
      <h1>hey this is vikas :) and i am learning react </h1>
      <br />
      <fieldset id="outer">
      <legend>hey submit this form</legend>
      <form action="">
      <label htmlFor="fname">enter your first name</label> <input type="text" name="" id="fname"  className="feilds" placeholder="enter your details"/>
      <br /> 
      <label htmlFor="lname">enetr the last name </label> <input type="text" name="" id="lname"  className="feilds" placeholder="enter your details"/>
      <br />
      <input type="submit" value="click to submit the form"/>

      </form>

      </fieldset>
    </div>

    <Name/>
    <Clans/>
    </div>
  )
};

export default Vikas;
