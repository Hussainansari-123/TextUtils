import React, { useState } from 'react'

const Text = (props) => {
  const [text,setText]=useState('')
  const handelchange=(e)=>{
    setText(e.target.value)
  }
  const handelConvert=()=>{

    let  newtext= text.toUpperCase()
    setText(newtext)
    props.showAlert("Converted to UpperCase!","success")
  }
  const handelconvert=()=>{
    let  newtext= text.toLowerCase()
    setText(newtext)
    props.showAlert("Converted to lowerCase!","success")
  }
  const handelClear=()=>{
    setText('')
  }
  const handelCopy=()=>{
  
    navigator.clipboard.writeText(text)
  };
  const handelSpace=()=>{
    let  newtext=text.replace(/\s+/g," ").trim()
    setText(newtext) 
  }
  return (
    <div className={`container `}style={{color:props.mode==='light'?'black':'white'}} >
    <div className='my-3'>
    <div className="mb-3">
        <label htmlFor="exam" className="form-label">Example Textarea</label>
      <textarea className="form-control" id="exam" rows="5" value={text} style={{backgroundColor:props.mode==='light'?'white':'#13234f',color:props.mode==='light'?'black':'white'}} onChange={handelchange}></textarea>
    </div>
    <div className='container'>
    <button className='btn btn-primary mx-3 my-1'onClick={handelConvert}>Convert to UpperCase</button>
    <button className='btn btn-primary mx-3 my-1'onClick={handelconvert}>Convert to LowerCase</button>
    <button className='btn btn-primary mx-3 my-1'onClick={handelClear}>Clear text</button>
    <button className='btn btn-primary mx-3 my-1'onClick={handelCopy}>Copytoclipboard</button>
    <button className='btn btn-primary mx-3 my-1'onClick={handelSpace}>Remove Extraspace</button>
    </div>
    <h1>Your Text Summary</h1>
    <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words {text.length} character</p>
    <p>{0.008*text.split(" ").length} Minute read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter some text"}</p>
    </div>
    </div>
  )
}

export default Text
