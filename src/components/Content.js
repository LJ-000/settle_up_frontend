import React, { Component } from "react";

class Content extends Component {
  render() {
    const contentClass = this.props.isOpen ? "content open" : "content";
    return <div></div>;
  }
}

export default Content;