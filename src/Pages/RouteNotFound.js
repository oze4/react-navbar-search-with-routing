import React from "react";

export default class RouteNotFound extends React.Component {
  render() {
    let r = [];
    [...Array(10).keys()].forEach(i =>
      r.push(<h1 key={i}>Unable to find that...</h1>)
    );
    return r;
  }
}
