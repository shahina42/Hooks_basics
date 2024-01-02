import React ,{useContext,useState,useEffect}from 'react'
import{ToggleTheme} from './UseState'
import '../App.css'

function UseContext() {
    const [currLike,setCurrLike]=useState(0);
    const [currContent,setContent]=useState(false);
    const [showAlert,setShowAlert]=useState(false);

useEffect(()=>{
    if(showAlert){
        window.alert("Content button is clicked");
        setContent((prevLike)=>!prevLike);
        setShowAlert(false);
    }
},[showAlert]
);

const handleContent=()=>{
    setShowAlert(true);
};

const handleLike=()=>{
setCurrLike((prevLike)=>prevLike+1);
};

const theme=useContext(ToggleTheme);
const themeStyle={
    backgroundColor:theme?"black" :"white",
    color:theme? "white":"black" ,
    padding:"2em",
    margin:"2em",
    border:"2px solid black",
};

  return (
    <div className='Bigdiv' style={themeStyle}>
        {currContent ? <h1>This is made by Kalvium</h1>:null}
        <button onClick={handleContent}>Content</button>
        <h1>{currLike}</h1>
        <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UseContext