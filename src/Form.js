import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { global_data } from "./Data";
import { fetchD } from "./Data";
import "./Form.css"

export default function Form() {
  const inputData = useRef("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(inputData.current.value);
    dispatch(global_data.setLocation(inputData.current.value));

    inputData.current.value === 0
      ? dispatch(global_data.setEmpty(true))
      : dispatch(global_data.setEmpty(false));
    dispatch(fetchD(inputData.current.value));
  };

  
  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="location"
        type="text"
        ref={inputData}
        placeholder="Enter the Location Name"
      />
      <button className="btn" type="submit" onClick={submitHandler}>
        Search
      </button>
    </form>
  );
}
