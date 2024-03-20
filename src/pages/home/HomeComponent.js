import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    const lang = this.props.lang
    return (
      <div>
        <Header lang={lang} theme={this.props.theme} />
        <Greeting lang={lang} theme={this.props.theme} />
        <Skills lang={lang} theme={this.props.theme} />
        <Footer lang={lang} theme={this.props.theme} />
        <TopButton lang={lang} theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
