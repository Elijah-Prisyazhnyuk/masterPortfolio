import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class Home extends Component {
  render() {
    console.log("home ",this.props.lang)
    return (
      <div>
        <Header lang={this.props.lang} theme={this.props.theme} />
        <Greeting lang={this.props.lang} theme={this.props.theme} />
        <Skills lang={this.props.lang} theme={this.props.theme} />
        <Footer lang={this.props.lang} theme={this.props.theme} />
        <TopButton lang={this.props.lang} theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
