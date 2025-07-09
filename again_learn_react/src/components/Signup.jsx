import React from 'react'
import { useState , useReducer } from 'react';

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const Actions = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state; // <-- MISSING!
    }
  }

  return (
    <div>
      <h1>Signup - {state.count}</h1>
      <button onClick={() => { dispatch({ type: Actions.INCREMENT }) }}>Add</button>
      <button onClick={() => { dispatch({ type: Actions.DECREMENT }) }}>Sub</button>
    </div>
  );
}

export default Signup;
