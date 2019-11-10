import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./App.js";

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  // if (action.type === "INCREMENT") {
  //   return {
  //     count: state.count + 1
  //   };
  // } else if (action.type === "DECREMENT") {
  //   return {
  //     count: state.count - 1
  //   };
  // }
  // return state;
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
