import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () =>{
        // console.log("upperCaseIsClicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
      // console.log("upperCaseIsClicked" + text)
      let newText = text.toLowerCase();
      setText(newText)
  }
    
    const handleOnChange = (event) =>{
        // console.log("onChange")
        setText(event.target.value);
    }
    
  return (
    <div style={{color:props.mode === 'light'?'black':'white'}}>
      
        <h1 >{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control " value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" style={{backgroundColor:props.mode === 'light'?'white':'black', color:props.mode === 'light'?'black':'white'}} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowercase</button>
        <div className='container my-3'>
         <h2>Your Text summery</h2>
         <p>{text.split(" ").length} words & {text.length} characters</p>
         <p>{text.split(" ").length*0.008} Minutes To Read</p>
        </div>
    </div>
  )
}
