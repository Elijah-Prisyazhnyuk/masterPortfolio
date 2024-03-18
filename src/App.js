import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { currentLang } from "../src/components/header/LanguageSelector"

function App() {
  return (
    <ThemeProvider theme={chosenTheme} lang={currentLang}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} lang={currentLang}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
