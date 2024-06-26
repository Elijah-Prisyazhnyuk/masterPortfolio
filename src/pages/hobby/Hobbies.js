import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HobbiesCard from "../../components/hobbiesCard/HobbiesCard";
import TopButton from "../../components/topButton/TopButton";
import HobbiesSection from "../../containers/hobbiesSection/HobbiesSection";


const Hobbies = (props) => {
  const theme = props.theme;
  const lang = props.lang;
  return (
    <div className="main-page">
      <Header lang={lang} theme={theme} />
      <HobbiesSection lang={lang} theme={theme} />
      <HobbiesCard lang={lang} theme={theme} />
      <Footer lang={lang} theme={theme} onToggle={props.onToggle} />
      <TopButton lang={lang} theme={theme} />
    </div>
  );
};

export default Hobbies;
