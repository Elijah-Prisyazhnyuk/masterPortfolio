import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useLanguage } from "../src/components/header/LanguageSelector";

function App() {
  return (
    <ThemeProvider theme={chosenTheme} currentLang={useLanguage}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} currentLang={useLanguage}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
