 import React, {useEffect, useState} from 'react';
 import axios from "axios";

const Home = () => {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    loadUsers();
  }, []); 

 const loadUsers = async () =>{
   try {
    await axios.get("http://localhost/crudapp/home.php")
    .then((response) => {
      setResult(response.data);
      console.log(response.data);
      setLoading(false);
    })
   } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading state is updated even on error
  }
 } 

 //const loadUsers = async () => {
//   try {
//     const response = await axios.get('http://localhost/crudapp/home.php');
//    // console.log('Response data:', response.data);
//     setResult(response.data); // Update users state with fetched data
//     setLoading(false); // Update loading state once data is fetched
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     setLoading(false); // Ensure loading state is updated even on error
//   }
// } 

  return (
    <div>  
  {loading ? (
    <p>Loading...</p>
  ) : (
      <table border={1}>
        <tr>
          <th>Index</th>
          <th>Image</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Telephone</th>
          <th>Email</th>
        </tr>
        {
          result.map((input, id)=> (
            <tr key={id}>
              <td>{input.id}</td>
              <td><img src={`http://localhost/crudapp/files/${input.image}`} width="80" height="50" /></td>
              
              <td>{input.firstname}</td>
              <td>{input.lastname}</td>
              <td>{input.telephone}</td>
              <td>{input.email}</td>
            </tr>
          ))
          } 
      </table>    
      
)}
    </div>
  )

 

}

export default Home


 