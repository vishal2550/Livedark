import React,{useState} from 'react'

export default function About(props) {
    const[mystyle, setmystyle] = useState( 
        {backgroundColor :"White",
        color: "black",
        height : "100vh"}
    )
    function setdark() {
        if (mystyle.color === "white") {
            setmystyle({
                backgroundColor :"white",
        color: "black",
        height : "100vh"

            })
            two("Enable light Mode")
            
        } else {
            setmystyle({
                backgroundColor :"black",
                color: "white",
                height : "100vh"
            })
            two("Enable Dark Mode")

            
        }
        
    }

    const[one, two] = useState("Enable Dark Mode")


  
    
      
    
  return (
    <div style={mystyle}>
        jdslkfj jsfda fdsjkl 
        <h1>vishal is a good boy</h1>
      
      <div>
        <button className='btn btn-primary' onClick={setdark}>{one}</button>
      </div>
    </div>
  )
}
