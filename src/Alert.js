import React from "react";

function Alert({ message }) {
  return (
    <div className="alert alert-danger">
      {message}
    </div>
  );
}

export default Alert;