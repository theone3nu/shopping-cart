import React from "react";
import "./styles/global.css";
import LayoutContainer from "./components/LayoutContainer";
import Header from "./components/Header";
import Content from "./components/Content";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <LayoutContainer>
      <Header title={"Hacker Shop"} />
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
    </LayoutContainer>
  );
}

export default App;
