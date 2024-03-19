import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { LanguageSelector } from '../src/components/header/LanguageSelector';


function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      
      <>
        <GlobalStyles />
        <div>
        <LanguageSelector>
          <Main theme={chosenTheme}/>
          </LanguageSelector>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
