import * as React from "react";
import { render } from "react-dom";
import { Container } from '@material-ui/core';

import ChipRede from './components/ChipRede'

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Container className="Container" maxWidth="xl">
        <ChipRede></ChipRede>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
