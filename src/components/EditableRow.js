import React from 'react';

const EditableRow=({editFormData,handleEditFormChange,handleCancelClick})=>{


	// <input onChange={handleEditFormChange} value={editFormData.city} style={{width : "120px"}} type="text" name="city" required="required" placeholder="Enter city"/>

// <input onChange={handleEditFormChange} value={editFormData.state} style={{width : "100px"}} type="text" name="state" required="required" placeholder="Enter state"/>
 // it is taking styles from Popup.css

	return(
		<div className="popup-back">
		<div className="popup-content">
		<div className="popup-table">
		    <h3>Name : <input style={{width : "60%"}} value={editFormData.fullName} onChange={handleEditFormChange} type="text" name="fullName" required="required" placeholder="Enter name"/></h3>
		    <h3>Designation : <input style={{width : "50%"}} value={editFormData.designation} onChange={handleEditFormChange} type="text" name="designation" required="required" placeholder="Enter designation"/></h3>
		    <h3>Role : <input style={{width : "60%"}} value={editFormData.role} onChange={handleEditFormChange} type="text" name="role" required="required" placeholder="Enter role"/></h3>
		    <h3>Gender : Male<input style={{width:"15px",height:"15px"}} onChange={handleEditFormChange} value={editFormData.gender} type="radio" value="Male" name="gender" required="required"/></h3>
		                <h3>Female<input style={{width:"15px",height:"15px"}} onChange={handleEditFormChange} value={editFormData.gender} type="radio" value="Female" name="gender" required="required"/></h3>
		    <h3>Salary : <input onChange={handleEditFormChange} value={editFormData.salary} style={{width : "60%"}} type="text" name="salary" required="required" placeholder="Enter salary"/></h3>
		      
		    <h3>City : <select name="city" onChange={handleEditFormChange} value={editFormData.city} name="city">
		    <option>Choose city</option>
		    <option value="Guwahati">Guwahati</option>
		    <option value="Banglore">Banglore</option>
		    <option value="Hyderabad">Hyderabad</option>
		    <option value="Pune">Pune</option>
		    <option value="Delhi">Delhi</option>
		    </select></h3> 
		      
		      
		    <h3>State : <select name="state" onChange={handleEditFormChange} name="state" value={editFormData.state} >
		    <option>Choose state</option>
		    <option value="Assam">Assam</option>
		    <option value="Karnataka">Karnataka</option>
		    <option value="Telangana">Telangana</option>
		    <option value="Maharashtra">Maharashtra</option>
		    <option value="Haryana">Haryana</option>
		    </select></h3>
		      
		    <h3>Zip : <input onChange={handleEditFormChange} value={editFormData.zip} style={{width : "80px"}} type="text" name="zip" required="required" placeholder="Enter zip"/></h3>
		    <h3>Address : <input onChange={handleEditFormChange} value={editFormData.address} style={{width : "150px"}} type="text" name="address" required="required" placeholder="Enter address"/></h3>
		    
		    <div style={{textAlign : "center"}}> 
		      <button type="submit">Save</button>
		      <button onClick={handleCancelClick}>Cancel</button>
		    </div>  
		     	      
		</div>
		</div>
		</div>
		);
}

export default EditableRow;