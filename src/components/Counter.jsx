import React, { useState } from "react";
import { Link } from "react-router-dom";

function Counter({ count, sub, add, show, condition }) {
  return (
    <>
      <button className="btn btn-danger" onClick={sub} disabled={condition || count === 0}></button>
    </>
  );
}
