import React, { useState } from "react";
import Child from "./Child";
let [showModal, setShowModal] = useState(false);

const Parent = () => {
  return (
    <div className="parent">
      <h1> Parent Component </h1>
      <Child showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Parent;
