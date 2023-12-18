import "./Textarea.css"
import React, {useState} from 'react'

export default function Textarea(props) {
  function changefont() {
   let  nsew = text.toUpperCase()
    settext(nsew)
    console.log(nsew)
    props.showalert("change to uppercase", "success")
    document.title = "UpperCase is Eneble"

   
    
  }
  function changefont2() {
    let a = text.toLowerCase()
    settext(a)
    document.title = "LowerCase is Eneble"
  
   
    
  }

  
  
  function bigfontsize(event) {
    settext(event.target.value)
    console.log('hjkfd')
    let v = text.length
    console.log(v)
    
  }
  const[text, settext] =useState("")

  

  return (
    <div>



    <div style={{backgroundColor : props.mode==="dark"?"gray":"white", color: props.mode==="dark"?"white":"black"}} >
        <h1 >Example Textarea</h1>
        <textarea   style={{backgroundColor: props.mode==="dark"?"gray":"white", color: props.mode==="dark"?"white":"black", border: props.mode==="dark"?"5px solid white": "4px solid black"}}  onChange={bigfontsize} id="vis" value={text}  cols={100} rows={15}></textarea>
      
    </div>
    <button className="btn btn-primary mx-2" onClick={changefont}>Change to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={changefont2}>Change to lowerCase</button> <br>
    </br>

    <h2>letter = <span>{text.length}</span></h2>
    <h2>word = <span>{text.split(" ").length }</span></h2>

    <p>{text.length===0?"please enter text":text}</p>
    </div>
  )
}
