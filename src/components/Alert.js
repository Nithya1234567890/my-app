import React from 'react'

export default function Alert(props) {
    
    const caps=(word)=>{
        word=word.trim();
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    }
  return (
    <div style={{height:'20px'}}>
      {props.alert&&<div style={{width:'100%'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{caps(props.alert.type)}</strong> {props.alert.msg}
</div>}
    </div>
  )
}
