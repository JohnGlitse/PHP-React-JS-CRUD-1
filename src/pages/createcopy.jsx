import React, { useState } from 'react'
import axios from "axios";
import "../style/style.css";


const Create = () => {
  const [user, setUser] = useState({
    image: null,
    firstname: "",
    lastname: "",
    telephone: "",
    email: "",
    password: ""
  });

  const { image, firstname, lastname, telephone, email, password } = user;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = name === 'image' ? event.target.files[0] : event.target.value; // Handle file and other inputs differently

    setUser({ ...user, [name]: value });
  }

  const handFormSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', image);
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('telephone', telephone);
    data.append('email', email);
    data.append('password', password);

    await axios.post("http://localhost/crudapp/create.php", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      console.log(user);
      const users = response.data;
    }).catch((error) => {
      console.error('Error during submission:', error);
    });
  }

  return (
    <div className='form'>
      <form onSubmit={(e) => handFormSubmit(e)}>
        <input type='file' name='image' placeholder='User Image' onChange={(event) => handleChange(event)} />
        <input type='text' name='firstname' value={firstname} placeholder='Firstname' onChange={(event) => handleChange(event)} />
        <input type='text' name='lastname' value={lastname} placeholder='Lastname' onChange={(event) => handleChange(event)} />
        <input type='number' name='telephone' value={telephone} placeholder='Telephone' onChange={(event) => handleChange(event)} />
        <input type='email' name='email' value={email} placeholder='Email' onChange={(event) => handleChange(event)} />
        <input type='password' name='password' value={password} placeholder='Password' onChange={(event) => handleChange(event)} />
        <div className='button'><button type='submit'>Create</button></div>
      </form>
      <br /><br /><br />
      <table>
        <tr>
          <th>Index</th>
          <th>Image</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Telephone</th>
          <th>Email</th>
        </tr>
        <tr></tr>
      </table>
    </div>
  )
}

export default Create;
