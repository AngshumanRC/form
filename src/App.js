import React,{useState} from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Popup from './Popup';
import Data from './Data.json'
// import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

const App=()=>{
	const [open,isOpen]=useState(false);
	const [contacts,setContacts]=useState(Data);
	const [addFormData,setAddFormData]=useState({
		fullName:'',
		designation:'',
		role:'',
		gender:'',
		salary:'',
		city:'',
		state:'',
		zip:'',
		address:''
	});

	const [editFormData,setEditFormData]=useState({
	    fullName:'',
		designation:'',
		role:'',
		gender:'',
		salary:'',
		city:'',
		state:'',
		zip:'',
		address:''	
	});

	const [editContactId,setEditContactId]=useState(null);

	const handleAddFormChange=(event)=>{
		event.preventDefault();

		const fieldName=event.target.getAttribute('name');
		const fieldValue=event.target.value;

		const newFormData={...addFormData};
		newFormData[fieldName]=fieldValue;

		setAddFormData(newFormData);
	}

	const handleEditFormChange=(event)=>{
		event.preventDefault();

		const fieldName=event.target.getAttribute('name');
		const fieldValue=event.target.value;

		const newFormData={...editFormData};
		newFormData[fieldName]=fieldValue;

		setEditFormData(newFormData);
	}


	const handleAddFormSubmit=(event)=>{
		event.preventDefault();

		const newContact={
			id:nanoid(),
			fullName : addFormData.fullName,
			designation: addFormData.designation,			
			role:addFormData.role,
			gender:addFormData.gender,
			salary:addFormData.salary,
			city:addFormData.city,
			state:addFormData.state,
			zip:addFormData.zip,
			address:addFormData.address
		};

		const newContacts=[...contacts,newContact];
		setContacts(newContacts);

		isOpen(false);
	}

	const handleEditFormSubmit=(event)=>{
		event.preventDefault();

		const editedContact={
			fullName : editFormData.fullName,
			designation: editFormData.designation,			
			role:editFormData.role,
			gender:editFormData.gender,
			salary:editFormData.salary,
			city:editFormData.city,
			state:editFormData.state,
			zip:editFormData.zip,
			address:editFormData.address
		}

		const newContacts=[...contacts];

		const index=contacts.findIndex((contact)=> contact.id===editContactId );

		newContacts[index]=editedContact;

		setContacts(newContacts);
		setEditContactId(null);
	}

	const handleEditClick=(event,contact)=>{
		event.preventDefault();
		setEditContactId(contact.id);

		const formValues={
			fullName : contact.fullName,
			designation: contact.designation,			
			role:contact.role,
			gender:contact.gender,
			salary:contact.salary,
			city:contact.city,
			state:contact.state,
			zip:contact.zip,
			address:contact.address
		}

		setEditFormData(formValues);
	}

	const handleCancelClick=()=>{
		setEditContactId(null);
	}

	const handleDeleteClick=(contactId)=>{
        const newContacts=[...contacts];

        const index=contacts.findIndex((contact)=> contact.id===contactId);

        newContacts.splice(index,1);

        setContacts(newContacts);
	}

	const openPopup=()=>{
		isOpen(true);
	}

	const closePopup=()=>{
        isOpen(false);
    }
	return(
		<div>
		<div className="popup-open" onClick={openPopup}>Create new</div>
		<br/>
		<form onSubmit={handleEditFormSubmit}>
		<table border="1">
		  <thead>
		    <tr>
		      <th style={{width:"15%"}}>Name</th>
		      <th style={{width:"10%"}}>Designation</th>
		      <th style={{width:"8%"}}>Role</th>
		      <th>Gender</th>
		      <th style={{width:"7%"}}>Salary</th>
		      <th style={{width:"10%"}}>City</th>
		      <th style={{width:"8%"}}>State</th>
		      <th style={{width:"7%"}}>Zip</th>
		      <th style={{width:"15%"}}>Address</th>
		      <th style={{width:"20%"}}>Operations</th>
		    </tr>
		  </thead>
		  <tbody>
		    {
		    	contacts.map((contact)=>(
		    		    <>
		    		    {editContactId===contact.id ? <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/> : <tr key={contact.id}>
		                                                                                                                                                                                <td>{contact.fullName}</td>
		                                                                                                                                                                                <td>{contact.designation}</td>
		                                                                                                                                                                                <td>{contact.role}</td>
		                                                                                                                                                                                <td>{contact.gender}</td>
		                                                                                                                                                                                <td>{contact.salary}</td>
		                                                                                                                                                                                <td>{contact.city}</td>
		                                                                                                                                                                                <td>{contact.state}</td>
		                                                                                                                                                                                <td>{contact.zip}</td>
		                                                                                                                                                                                <td>{contact.address}</td>
		                                                                                                                                                                                <td><button onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
		                                                                                                                                                                                <button onClick={()=>handleDeleteClick(contact.id)}>Delete</button>
		                                                                                                                                                                                </td>
		                                                                                                                                                                                </tr>   
                     	} 
		    		    </>
		    	))
		    }
		  </tbody>
		</table>
		</form>
		{ open ? <Popup closePopup={closePopup} handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit}/> : ""}
		</div>
		);
}

export default App;