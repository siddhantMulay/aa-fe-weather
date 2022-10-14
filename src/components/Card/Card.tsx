import React, { Component } from "react";
import "./Card.less";

// Type for Card
type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Main Card component to render data
 */
class Card extends Component<Props> {
  render() {
    const { children, className } = this.props;
    return <div className={`card ${className ? className : ""}`}>{children}</div>;
  }
}

export default Card;
