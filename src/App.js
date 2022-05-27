import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/counterActions";
import { login, logout } from "./actions/loginActions";

function App() {
  let counter = useSelector((state) => state.counter);
  let isLoggedIn = useSelector((state) => state.isLoggedIn);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>

      <hr />
      <button
        onClick={() => {
          dispatch(login());
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
      {isLoggedIn && <h1>Maxfiy ma'lumot</h1>}
    </div>
  );
}

export default App;
