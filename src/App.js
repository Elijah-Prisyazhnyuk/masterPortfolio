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
        <LanguageSelector>
        <div>
          <Main theme={chosenTheme}/>
        </div>
        </LanguageSelector>
      </>
    </ThemeProvider>
  );
}

export default App;
