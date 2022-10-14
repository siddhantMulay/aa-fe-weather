import React, { Component } from "react";

// Pages
import Home from "@src/pages/Home";

// Styles
import "./styles/main.less";

/**
 * Main App
 */
class App extends Component {
  render(): React.ReactNode {
    return <Home />;
  }
}

export default App;
