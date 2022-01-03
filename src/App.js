import logo from './logo.svg';
import UseForm from './components/UseForm';
import UserTable from './components/UserTable';
import './App.css';
import { useState } from 'react';

function App() {
  const[userFormData,setUserFormData]=useState([])

  let getUserData=(userData)=>{
    //console.log("parent data from child:',userData);
    //always update state like below (array or object)
    //1.take a copy of the state array
    //console.log(userData);
    const userFormDataCopy=[...userFormData]
    //2.do all the neccesary changes/code changes
    userFormDataCopy.push(userData)
    //3. set the copied array to the state
    setUserFormData(userFormDataCopy)
  }
  return (
    <div className="App">
     
     <UseForm getUserData={getUserData}/>
     <UserTable userFormData={userFormData}/>
    </div>
  );
}

export default App;
