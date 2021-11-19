import React from 'react';
import './Popup.css'

const Popup=(props)=>{

// <input onChange={props.handleAddFormChange} style={{width : "60%"}} type="text" name="city" required="required" placeholder="Enter city"/>	

// <input onChange={props.handleAddFormChange} style={{width : "60%"}} type="text" name="state" required="required" placeholder="Enter state"/>


	return(
		<div className="popup-back">
		<div className="popup-content">
		<div className="popup-close" onClick={props.closePopup}>X</div>
		<div className="popup-table">		    
		      <h3>Name : <input style={{width : "60%"}} onChange={props.handleAddFormChange} type="text" name="fullName" required="required" placeholder="Enter name"/></h3>
		      <h3>Designation : <input style={{width : "50%"}} onChange={props.handleAddFormChange} type="text" name="designation" required="required" placeholder="Enter designation"/></h3>
		      <h3>Role : <input style={{width : "60%"}} onChange={props.handleAddFormChange} type="text" name="role" required="required" placeholder="Enter role"/></h3>
		      <h3>Gender : Male<input style={{width:"15px",height:"15px"}} onChange={props.handleAddFormChange} type="radio" value="Male" name="gender" required="required"/>Female<input style={{width:"15px",height:"15px"}} onChange={props.handleAddFormChange} type="radio" value="Female" name="gender" required="required"/></h3>
		      <h3>Salary : <input onChange={props.handleAddFormChange} style={{width : "60%"}} type="text" name="salary" required="required" placeholder="Enter salary"/></h3>
		      <h3>City :<select name="city" onChange={props.handleAddFormChange}>
		      <option>Choose city</option>
		      <option value="Guwahati">Guwahati</option>
		      <option value="Banglore">Banglore</option>
		      <option value="Hyderabad">Hyderabad</option>
		      <option value="Pune">Pune</option>
		      <option value="Delhi">Delhi</option>
		      </select> </h3>
		      <h3>State : <select name="state" onChange={props.handleAddFormChange}>
		      <option>Choose state</option>
		      <option value="Assam">Assam</option>
		      <option value="Karnataka">Karnataka</option>
		      <option value="Telangana">Telangana</option>
		      <option value="Maharashtra">Maharashtra</option>
		      <option value="Haryana">Haryana</option>
		      </select> </h3>
		      <h3>Zip : <input onChange={props.handleAddFormChange} style={{width : "60%"}} type="text" name="zip" required="required" placeholder="Enter zip"/></h3>
		      <h3>Address : <input style={{width : "60%"}} onChange={props.handleAddFormChange} type="text" name="address" required="required" placeholder="Enter address"/></h3>
		      <div style={{textAlign : "center"}}><button onClick={props.handleAddFormSubmit}>Add</button></div>	
		</div>
		</div>
		</div>
		);
}

export default Popup;