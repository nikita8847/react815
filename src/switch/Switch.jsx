import React from "react";
import "./switch.css";

function Switch() {
  const [value, setValue] = React.useState(false);
  return (
    <div className={`switch-wrapper `} onClick={() => setValue(!value)}>
      <div className={`toggler ${value ? "active" : ""}`}></div>
    </div>
  );
}

export default Switch;
