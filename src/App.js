import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { LanguageSelector } from '../src/components/header/LanguageSelector';
import Certifications from "./containers/certifications/Certifications";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      
      <>
        <GlobalStyles />
          <LanguageSelector>
            <Certifications/>
          </LanguageSelector>
        <div>
          <Main theme={chosenTheme}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
