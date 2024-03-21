import React, {useEffect} from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Greeting(props) {
  const lang = props.lang;
  const theme = props.theme;
  useEffect(() => {
    const avatar = document.getElementById('avatar');
    const gloss = avatar.querySelector('.card__gloss');
    const width = window.innerWidth;
    const height = window.innerHeight;

    const init = () => {
      bindMouse();
      light(350, -125);
      tilt(350, -125);
    };

    const bindMouse = () => {
      document.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseMove = (event) => {
      const x = event.clientX - (width / 2);
      const y = event.clientY - (height / 2);
      light(x, y);
      tilt(x, y);
    };

    const light = (x, y) => {
      const angle = (Math.atan2(y, x) * 180) / Math.PI - 90;
      gloss.style.background = `linear-gradient(${angle}deg, rgba(255, 255, 255, ${y / height * .9}) 0%, rgba(255, 255, 255, 0) 80%)`;
    };

    const tilt = (x, y) => {
      const force = 80;
      const rx = (x / width) * force;
      const ry = (y / height) * -force;
      avatar.style.transform = `rotateY(${rx}deg) rotateX(${ry}deg)`;
    };

    init();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting[`title_${lang}`]}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting[`subTitle_${lang}`]}
              </p>
              <SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <img className="avatar"
							alt="Yes, it's me"
							src={require(`../../assests/images/portfolio.png`)}
              >
                <div className="card__gloss"/>
              </img>
            <div className="button-greeting-div">
              <Button text={greeting.btn_contact[lang]} theme={theme} href="contact" />
              <Button text={greeting.btn_resume[lang]} theme={theme} newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
