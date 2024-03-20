import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Greeting(props) {
  const lang = props.lang;
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" id={lang === 'en' ? 'en' : 'hide'} style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h1 className="greeting-text" id={lang === 'ru' ? 'ru' : 'hide'} style={{ color: theme.text }}>
                {greeting.title_ru}
              </h1>
              <h1 className="greeting-text" id={lang === 'de' ? 'de' : 'hide'} style={{ color: theme.text }}>
                {greeting.title_de}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                id={lang === 'en' ? 'en' : 'hide'}
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p
                id={lang === 'ru' ? 'ru' : 'hide'}
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle_ru}
              </p>
              <p
                id={lang === 'de' ? 'de' : 'hide'}
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle_de}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <img className="avatar"
							alt="Yes, it's me"
							src={require(`../../assests/images/portfolio.png`)}
              />
            <div className="button-greeting-div">
              <Button id={lang === 'en' ? 'en' : 'hide'} text="Contact me" theme={theme} href="contact" />
              <Button id={lang === 'ru' ? 'ru' : 'hide'} text="Связь со мной" theme={theme} href="contact" />
              <Button id={lang === 'de' ? 'de' : 'hide'} text="Contact me" theme={theme} href="contact" />
              <Button id={lang === 'en' ? 'en' : 'hide'} text="See my resume" theme={theme} newTab={true} href={greeting.resumeLink} />
              <Button id={lang === 'ru' ? 'ru' : 'hide'} text="Моё резюме" theme={theme} newTab={true} href={greeting.resumeLink} />
              <Button id={lang === 'de' ? 'de' : 'hide'} text="See my resume" theme={theme} newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
