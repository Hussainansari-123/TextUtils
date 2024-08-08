import React from 'react'

const Alert = (props) => {
    const captiliaze=(word)=>{
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
 
   props.alert && <div className="alert alert-success  alert-dismissible show" role="alert">
 <strong> { captiliaze (props.alert.type)}</strong>: {props.alert.msg}
 
</div>
   
  )
}

export default Alert
