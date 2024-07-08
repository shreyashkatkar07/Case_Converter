/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";

export const Alert = React.memo((props) => {
  if (!props.alert) return null;

  return (
    <div className="alert alert-info" role="alert">
      {props.alert}
    </div>
  );
});
