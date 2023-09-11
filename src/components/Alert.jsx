import React from "react";

export default function Alert(props) {
  return (
    
    <div style={{height:'1rem'}}>
    {props.alert && 
      <div className="alert alert-info" role="alert">
        {props.alert} 
      </div>}
    </div>
    
  );
}
