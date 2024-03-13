import React from "react";

function Title({ ...props }) {
  return (
    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{props.children}</p>
  );
}

export default Title;
