import React from "react";
import { useSelector } from "react-redux";

export default function Display() {
  const sel = useSelector((state) => state.globalData.res);
  const notFound=useSelector((state)=>state.globalData.notFound)
  return (
    <div>
      {sel && !sel.empty ? (
        <div style={{ fontFamily: "Anybody" }}>
          <h1>
            {sel.location.name} ({sel.location.country})
          </h1>
          <p>Condition : {sel.current.condition.text}</p>
          <p>Wind Direction : {sel.current.wind_dir}</p>
          <p>Wind Speed : {sel.current.wind_kph}</p>
          <p>T in C : {sel.current.temp_c}</p>
          <p>T in f : {sel.current.temp_f}</p>
          <p>Humidity : {sel.current.humidity}</p>
          <p>Cloud : {sel.current.cloud}</p>
        </div>
      ) : notFound ? (
        <h3>No Results Found</h3>
      ) : (
        ""
      )}
    </div>
  );
}
