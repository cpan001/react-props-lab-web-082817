// Code The Spaceship Component Here
import React from "react";

export default class Spaceship extends React.Component {
  render() {
    const hasRockets = this.props.hasRockets ? "yes!" : "boo";
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {hasRockets}</p>
        <p>Colors: {this.props.colors.join(", ")}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
};
