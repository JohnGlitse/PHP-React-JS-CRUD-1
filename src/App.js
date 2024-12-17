 
  import React  from "react";
  //import { BrowserRouter, Routes, Route } from "react-router-dom";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
 
  import Home from "./pages/Home";
  import Create from "./pages/Create";
  import Update from "./pages/Update";
  import Createcopy from "./pages/createcopy";
  import Navbar from "./components/Navbar";
  import "./style/style.css";
 
  
  function App() {
   return (
     <BrowserRouter>
      <Navbar/>
       <div className="App">    
         <Routes>
           <Route index path="/Home" element={<Home/>}></Route>
           <Route path="/Create" element={<Create/>}></Route> 
           <Route path="/Update" element={<Update/>}></Route>
           <Route path="/createcopy" element={<Createcopy/>}></Route>
         </Routes>
       </div>    
     </BrowserRouter>
   );
 }
 
 export default App;
 