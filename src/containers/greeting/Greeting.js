import React, { useEffect, useRef } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";


export default function Greeting(props) {
  const lang = props.lang;
  const theme = props.theme;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const avatarRef = useRef(null);

  useEffect(() => {
    const avatar = avatarRef.current;

    const init = () => {
      bindMouse();
      tilt(4, 4);
    };

    const bindMouse = () => {
      document.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseMove = (event) => {
      const x = event.clientX - (width / 2);
      const y = event.clientY - (height / 2);
      tilt(x, y);
    };


    const tilt = (x, y) => {
      let force = 35;
      if (y < height / 2) {
        // Увеличиваем силу параллакса в верхней части экрана
        force = 30;
      } else {
        // Уменьшаем силу параллакса в нижней части экрана
        force = 40;
    }
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
              ref={avatarRef}
							alt="Yes, it's me"
							src={require(`../../assests/images/portfolio.png`)}
              />
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
