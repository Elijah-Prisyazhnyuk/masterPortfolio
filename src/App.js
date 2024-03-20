import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useSelector } from 'react-redux';


function App() {
  const currentLang = useSelector(state => state.language.currentLang);
  return (
    <ThemeProvider theme={chosenTheme}>
      
      <>
        <GlobalStyles />
        <div>
          <Main lang={currentLang} theme={chosenTheme}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
