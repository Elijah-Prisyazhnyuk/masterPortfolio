import React from "react";
import { pageEnabled } from "../../portfolio";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { HobbiesCard } from "../../components/hobbiesCard/HobbiesCard";
import { TopButton } from "../../components/topButton/TopButton";
import { HobbiesSection } from "../../containers/hobbiesSection/HobbiesSection";


const Hobbies = (props) => {
  const theme = props.theme;
  console.log("1st: ", props.theme.lang);
  if (!pageEnabled.hobbies) {
    return null;
  }
  return (
    <div className="main-page">
      <Header theme={theme} />
      <HobbiesSection theme={theme} />
      <HobbiesCard theme={theme} />
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Hobbies;
