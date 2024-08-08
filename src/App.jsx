import { useState } from 'react'
import './App.css'
import Navbar from './Compo/Navbar'
import About from './Compo/About'
import Text from './Compo/Text'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  } from 'react-router-dom'
import Alert from './Compo/Alert'
function App() {
  const [mode, setMode]=useState('light')
  const[btn,setBtn]=useState("Enabel DarkMode")
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null)
},1000)
  }
  const toggelMode=()=>{
    if(mode==='light'){
    setMode('dark')
      document.body.style.backgroundColor = '#13234f';
      showAlert("Darkmode has been enabeled","success")
      document.title="TextUtils - DarkMode"
      setBtn("Enabel LightMode")
    }else{
      setMode('light') 
         document.body.style.backgroundColor = 'white';
         showAlert("Lightmode has been enabeled","success")
               document.title="TextUtils - Home"
               setBtn("Enabel DarkMode")
    }

    
  }
  


  return (
    <>
 
    <Router>
    <Navbar mode={mode} toggelMode={toggelMode} btn={btn}/>
    <Alert alert={alert}/>
    <div className='container my-3'>  
     
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Text showAlert={showAlert} mode={mode} />} />
      </Routes>

    </div>
    </Router>
   
   
    
    </>
  )
}

export default App
