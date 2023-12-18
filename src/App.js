import React,{useState} from 'react'
import Navbar from './component/Navbar'
import Textarea from './component/Textarea'
import About from './component/About'
import Alert from './component/Alert'

export default function App() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showalert =(massae, type)=>{
    setalert({
      msg: massae,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1000);

  }

  


  function btn1() {
    
    if (mode=== "light") {
      setmode("dark")
      document.body.style.backgroundColor = "gray"
      document.body.style.color = "white"
      showalert("Enable Dark mode", "success")
      document.title = "Dark Mode Enable"
      
    } else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showalert("Enable Light mode", "success")
      document.title = "Light Mode Enable"

      
    }
    
  }



  return (
    <div>
        <Navbar About = "About" mode = {mode} btn1 = {btn1}></Navbar>
        <Alert alert = {alert}  mode={mode}></Alert>
       <Textarea showalert = {showalert} mode ={mode} ></Textarea>
      
      
    </div>
  )
}
