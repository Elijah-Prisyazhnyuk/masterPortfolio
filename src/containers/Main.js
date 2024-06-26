import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Hobby from "../pages/hobby/Hobbies.js";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} lang={this.props.lang} theme={this.props.theme} />
              ) : (
                <Home {...props} lang={this.props.lang} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} lang={this.props.lang} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} lang={this.props.lang} theme={this.props.theme} />
            )}
            />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} lang={this.props.lang} theme={this.props.theme} />
            )}
          />
          <Route
            path="/hobby"
            render={(props) => (
              <Hobby {...props} lang={this.props.lang} theme={this.props.theme} />
            )}
            />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} lang={this.props.lang} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} lang={this.props.lang} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/projects"
            render={(props) => <Projects {...props} lang={this.props.lang} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} lang={this.props.lang} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
