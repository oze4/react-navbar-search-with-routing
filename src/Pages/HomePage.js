import React from "react";

export default class HomePage extends React.Component {
  render() {
    return (
      <div style={{ margin: "20px 0px 0px 20px" }}>
        <h1>Home Page</h1>
        <p>
          <small>
            Type some search text in the Search Bar above, then hit the Search
            Button!
          </small>
        </p>
        <h5>We recommend trying these searches:</h5>
        <ul>
          <li>a</li>
          <li>ab</li>
          <li>lo</li>
        </ul>
      </div>
    );
  }
}
