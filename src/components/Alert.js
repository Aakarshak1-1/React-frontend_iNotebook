import React, { useState, useEffect } from "react";

export default function Alert(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return (
    showAlert && (
      <div className={`alert alert-${props.type} text-center`} role="alert">
        {props.message}
      </div>
    )
  );
}
