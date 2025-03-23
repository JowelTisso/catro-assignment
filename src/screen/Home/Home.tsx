import type { NotificationArgsProps } from "antd";
import { Button, notification } from "antd";
import { FcGoogle } from "react-icons/fc";
import banner from "../../assets/banner.jpg";
import caravana from "../../assets/carvana.png";
import fox from "../../assets/fox.png";
import hopa from "../../assets/hopa.png";
import hospital from "../../assets/hospital.png";
import intuit from "../../assets/intuit.png";
import kiva from "../../assets/kiva.png";
import lonelyplanet from "../../assets/lonely-planet.png";
import AlertWrapper from "../../components/Alert/Alert";
import Header from "../../components/Header/Header";
import { Wrapper } from "./HomeStyles";
import { createContext, useEffect, useMemo } from "react";

const bannerData = [caravana, fox, hopa, hospital, intuit, kiva, lonelyplanet];

type NotificationPlacement = NotificationArgsProps["placement"];

const Context = createContext({ name: "Default" });

const Home = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `We use cookies to improve your experience. By continuing, you agree to our Privacy Policy`,
      description: `This message is a simple and user-friendly cookies consent notification commonly used on websites. It informs visitors that cookies are being used to enhance their experience and implies that by continuing to browse, they accept the website’s cookie policy. You can also add a Privacy Policy link for transparency.`,
      placement,
    });
  };

  const contextValue = useMemo(() => ({ name: "Ant Design" }), []);

  useEffect(() => {
    openNotification("bottomRight");
  });
  return (
    <Wrapper>
      <Context.Provider value={contextValue}>
        {contextHolder}
        <Header />
        <AlertWrapper />
        <div className="main">
          <div className="left-content">
            <div className="hero">
              <h1>Slack is where the future works</h1>
              <p>
                Transform the way you work with one place for everyone and
                everything you need to get stuff done.
              </p>
            </div>
            <div className="btn-wrapper">
              <Button
                type="primary"
                className="btn-primary radius"
                size="large"
              >
                TRY FOR FREE
              </Button>
              <Button
                type="primary"
                className="btn-signup radius"
                icon={
                  <div className="icon-google">
                    <FcGoogle />
                  </div>
                }
                size="large"
              >
                SIGN UP WITH GOOGLE
              </Button>
            </div>
          </div>
          <div className="right-content">
            <img src={banner} alt="Banner" className="banner-img" />
          </div>
        </div>
        <div className="client-banner">
          {bannerData.map((src) => (
            <img className="client-logo" src={src} />
          ))}
        </div>
        <div className="main">
          <div className="left-content">
            <iframe
              width="424"
              height="238"
              src="https://www.youtube.com/embed/CIN5hTCxIno"
              title="How Business Works | Slack"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="bottom-right-content">
            <div className="hero">
              <h2>Now is your moment to build a better tomorrow</h2>
              <p>
                We've seen what the future can be. Now it's time to decide what
                it will be.
              </p>
            </div>
            <div className="btn-wrapper">
              <Button className="btn-action radius" size="large">
                WATCH VIDEO
              </Button>
            </div>
          </div>
        </div>
      </Context.Provider>
    </Wrapper>
  );
};

export default Home;
