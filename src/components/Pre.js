import React from "react";
function Pre(props) {
  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      style={{ backgroundColor: "#5B8FB9", color: "black" }}
    ></div>
  );
}

export default Pre;
