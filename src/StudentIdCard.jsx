import { useState } from "react";
import './id-card.css';

function StudentIdCard(){
    const [name,setName] = useState("");
    const [clgName,setClgName] = useState("");
    const [location,setLocation] = useState("");

    const [textName,setTextName] = useState();
    const [textClgName,setTextClgName] = useState();
    const [textLocation,setTextLocation] = useState();

  function handleOnChange(e) {
setName(e.target.value);
} 
function handleOnChange1(e) {
    setClgName(e.target.value);
    } 
    function handleOnChange2(e) {
        setLocation(e.target.value);
        } 
function handleOnClick(e){
    e.preventDefault();
    setTextName(name);
    setTextClgName(clgName);
    setTextLocation(location);
}
 function reset(){
    window.location.reload(false);
 }
    return(
        <>
        <div className='app-container'>
            <div className='app-head'>
            <h1>
            <span className='fa fa-id-card'></span>
            <span className='title'>Student Id Card Generator</span>
            </h1>
            </div>
            <div className='app-body'>
                <div className="id-card">
                    <div className="input-form">
                    <h2>Input Form</h2>
<form onSubmit={handleOnClick}>
    <div className="inputs">
       <label htmlFor="name">Enter Name:&nbsp; </label>
        <input type="text" id="name" placeholder="Enter Name"
        value={name} onChange={handleOnChange} autoComplete="on"/>
    </div>
    <div className="inputs">
       <label htmlFor="clg-name">Enter College Name: &nbsp;</label>
        <input type="text" id="clg-name" placeholder="Enter College Name"
        value={clgName} onChange={handleOnChange1} autoComplete="on"/>
    </div>
    <div className="inputs">
        <label htmlFor="location">Enter Location: &nbsp;</label>
       <input type="text" id="location" placeholder="Enter Location"
        value={location}  onChange={handleOnChange2} autoComplete="on"/>
    </div>

    <button type="submit">Generate Id</button>
    <button type="submit" onClick={reset}>Reset</button>

</form>
                    </div>
                    <div className="output-card">
<h2>Generated Id</h2>
<div className="card-wrapper">
    <div className="user-card">
        <span className="fa fa-user-circle"></span>
    </div>
    <div className="card-info">
<h3>Name : <span>{textName}</span></h3>
<h3>College Name : <span>{textClgName}</span></h3>
<h3>Location : <span>{textLocation}</span></h3>

    </div>
</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default StudentIdCard;