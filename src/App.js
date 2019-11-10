import React from "react";
import "./App.css";
import { connect } from "react-redux";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <div className="card-content">
            <h2 className="title">simple counter</h2>
            <div>
              <button
                class="button is-info is-medium"
                onClick={this.increment}
                disabled={this.props.count === 100}
              >
                +1
              </button>
              <span className="title is-1">{this.props.count}</span>
              <button
                class="button is-danger is-medium"
                onClick={this.decrement}
                disabled={this.props.count === 0}
              >
                -1
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
