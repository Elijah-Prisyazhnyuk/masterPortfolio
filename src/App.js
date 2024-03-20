import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';


function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
