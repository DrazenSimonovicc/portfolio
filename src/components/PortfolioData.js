import { Component } from "react";

import "./PortfolioStyle.css";

class PortfolioData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h3>{this.props.heading}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default PortfolioData;
