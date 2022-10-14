import React, { Component, memo } from "react";

// Constants
import { CITIES } from "@src/constants";

// Styles
import "./Navbar.less";

// Type for Navbar
type Props = {
  onNavClick: (index: number) => void;
  activeItem: number;
};

/**
 * Navbar component to navigate between tabs
 */
class Navbar extends Component<Props> {
  // Gathers list of cities from constants and returns list of li elements
  renderNavOptions = (): React.ReactNode[] => {
    const { activeItem, onNavClick } = this.props;
    const retArr = [];

    CITIES.forEach((item, index) => {
      retArr.push(
        <li
          className={`${activeItem === index ? "active" : ""}`}
          key={`nav-${index}`}
          onClick={() => onNavClick(index)}
        >
          {item.name}
        </li>
      );
    });

    return retArr;
  };

  render(): React.ReactNode {
    return (
      <nav className="navbar">
        <ul>{this.renderNavOptions()}</ul>
      </nav>
    );
  }
}

export default memo(Navbar);
