import React, { useEffect, useState } from 'react'
import axios from "axios";
import "../style/style.css";


const Create = () => {
  /// CFDAGING A USER VARIABLE TO HOLD NAME:VALUE PAIR OF THE DATA
  const [user, setUser] = useState({
    image: null,
    firstname: "",
    lastname: "",
    telephone: "",
    email: "",
    password: ""
});

   /// ASSIGNING EACH VARIABLE TO THE VALUES STORED IN USER VARIABLE USING ARRAY DISTRUCTURING
  const {image, firstname, lastname, telephone, email, password } = user;
 
  // GRABBING THE VALUES OF THE INPUT FIELD
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = name === 'image' ? event.target.files[0] : event.target.value;

    setUser({...user, [name]: value});
  }


  /// SENDING THE DATA TO THE SERVER 
  const handFormSubmit = async (e) =>{
     e.preventDefault();
     /// SENDS THE INPUT VALUES WITHOUT THE IMAGE
    // await axios.post("http://localhost/crudapp/create.php", user).
    // then((response) =>{
    //   console.log(user);
    //   const users = response.data;
    // });
     
    // THIS MAKES POSSIBLE TO SEND ALL FIELDS INCLUDING THE IMAGES
    const users = new FormData();
    users.append('image', image);
    users.append('firstname', firstname);
    users.append('lastname', lastname);
    users.append('telephone', telephone);
    users.append('email', email);
    users.append('password', password);

    await axios.post("http://localhost/crudapp/create.php", users, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      //console.log(user);
      //const restult = response.data;
    }).catch((error) => {
      console.error('Error during submission:', error);
    });

  }
 
  
  return (
    <div className='form'>
      <form onSubmit={(e)=>handFormSubmit(e)}>
        <input type='file' name='image' placeholder='User Image' onChange={(event)=>handleChange(event)}/>
        <input type='text' name='firstname' value={firstname} placeholder='Firstname' onChange={(event)=>handleChange(event)}/>
        <input type='text' name='lastname' value={lastname} placeholder='Lastname' onChange={(event)=>handleChange(event)}/>
        <input type='number' name='telephone' value={telephone} placeholder='Telephone' onChange={(event)=>handleChange(event)}/> 
        <input type='email' name='email' value={email} placeholder='Email'onChange={(event)=>handleChange(event)}/>
        <input type='password' name='password' value={password} placeholder='Password' onChange={(event)=>handleChange(event)}/>
        <div className='button'><button type='submit'>Create</button></div>
      </form>
      <br/><br/><br/>

    </div>
  )
}

export default Create

