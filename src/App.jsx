
import React,{useState} from 'react';
import './App.css';
const words = ['hello','world','there']

function App() {

const [currentstate,setcurrentstate] = useState(0);
 const addition = ()=>{
  setcurrentstate((previousstate)=>{
    return Math.min(previousstate +1,words.length -1)
    
})
 }
 const subtraction=()=>{
setcurrentstate((previousstate)=>{
return Math.max(previousstate-1,0)

  
})
 }


  return (
    <div className="App">
      <>
      <button onClick={subtraction}>-</button>
    <p>{words[currentstate]}</p>
    <button onClick={addition}>+</button>
    </>
    </div>
      
    
  );
}

export default App;
