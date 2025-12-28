import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decreament, increament } from "../store/features/counter/counterSlice";

const Counter = () => {
  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(state);

  const handleIncreament = () => {
    dispatch(increament());
  };
  const handleDecrement = () => {
    dispatch(decreament());
  };

  return (
    <div>
      {state.value}
      <div className="flex flex-col gap-2.5">
        <button onClick={handleIncreament} className="text-purple-400">increment </button>
        <button onClick={handleDecrement}>decrement </button>
      </div>
    </div>
  );
};

export default Counter;
