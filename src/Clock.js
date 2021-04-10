import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;

//with clean up function: 

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timerID = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // returning a cleanup function
//     return function cleanup() {
//       clearInterval(timerID);
//     };
//   }, []);

//   return <div>{time.toString()}</div>;
// } 