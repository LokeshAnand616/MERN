import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement, incrementByAmount } from "../Features/createSlice";

function ReduxInc() {
  const count = useSelector((state) => state.counter.count); 
  const dispatch = useDispatch(); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
}

export default ReduxInc;
