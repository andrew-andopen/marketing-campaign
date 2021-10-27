import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

import "./base.css";
import "./styles.js";

import { GlobalFonts } from "./fonts/fonts";
import {
  AppContainer,
  GlobalStyle,
  Overflow,
  StyledPEmphasised,
} from "./styles";

import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import FormPanel from "./components/FormPanel";

import Image_1 from "../src/images/image_1.png";
import Image_2 from "../src/images/image_2.png";
import Image_3 from "../src/images/image_3.png";
import Image_4 from "../src/images/image_4.png";
import Image_5 from "../src/images/image_5.png";
import Image_6 from "../src/images/image_6.png";

const data = [
  {
    title: (
      <div>
        &Open up
        <br /> better gifting
      </div>
    ),
    body: (
      <div>
        A tale as old as time, the holiday season calls upon gifting to{" "}
        <StyledPEmphasised>deliver feelings of connectedness</StyledPEmphasised>
        , sincere appreciation and care.
        <br />
        <br /> And yet in a corporate setting, this can feel especially
        underwhelming...
      </div>
    ),
    image: Image_1,
    color: "#4e7565",
  },
  {
    title: (
      <div>
        So let us help
        <br /> you give them
        <br /> something great
      </div>
    ),
    body: (
      <div>
        Something that lasts.{" "}
        <StyledPEmphasised>Something truly memorable.</StyledPEmphasised>
      </div>
    ),
    image: Image_2,
    color: "#486759",
  },
  {
    title: <div>We make it simple</div>,
    body: (
      <div>
        Finding just the right something for customers, employees, partners and
        clients. After our team discovers and designs the perfect gifts, simply
        <StyledPEmphasised> select, dedicate and send</StyledPEmphasised> them
        on their merry way.
      </div>
    ),
    image: Image_3,
    color: "#42594e",
  },
  {
    title: "We make it global",
    body: (
      <div>
        Near or far, 100 or 10,000, our intelligent shipping logistics and{" "}
        <StyledPEmphasised>powerful SaaS platform</StyledPEmphasised> ships
        gifts anywhere in the world — fast.
      </div>
    ),
    image: Image_4,
    color: "#3a4e44",
  },
  {
    title: "And we make it especially thoughtful",
    body: (
      <div>
        <StyledPEmphasised>No more cheap merch.</StyledPEmphasised> Whether it’s
        a sustainably-made object*, charitable donation or digital subscription,
        we ensure the best gifts are delivered to the right people.
      </div>
    ),
    image: Image_5,
    color: "#32433a",
  },
  {
    title: (
      <div>
        Introduce the
        <br /> human touch back
        <br /> into mass gifting
      </div>
    ),
    body: (
      <div>
        And you’re left with loyal brand advocates{" "}
        <StyledPEmphasised>(and very happy people).</StyledPEmphasised>
      </div>
    ),
    image: Image_6,
    color: "#293831",
  },
  {
    title: "Care to learn more?",
    body: (
      <div>
        Whether you want to send a thoughtful digital gift from your brand to
        the world for the holidays, or discover meaningful gifting experiences
        for 2022,{" "}
        <StyledPEmphasised>
          our gifting experts are here to help.
        </StyledPEmphasised>
      </div>
    ),
    image: Image_6,
    color: "#293831",
  },
  {
    title: "Thanks",
    body: "Take care and in the meantime visit our homepage to learn more about what we do.",
  },
  {
    title: "",
    body: "",
    image: Image_6,
    color: "#293831",
  },
];

export default function App() {
  const [content, setContent] = useState(data[0]);
  const [imageNumber, setImageNumber] = useState(0);
  const [formPanel, setFormPanel] = useState(false);
  const [mobileBottom, setMobileBottom] = useState(false);

  const handleShowFormPanel = (visibility) => {
    setFormPanel(visibility);
  };

  const changeContent = (number) => {
    setContent(data[number]);
    setImageNumber(number);
  };

  const BodyTag = useRef();

  useEffect(() => {
    const scrollListener = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const pixels = window.pageYOffset;
      const pageHeight = BodyTag.current.getBoundingClientRect().height;

      const totalScrollableDistance = pageHeight - windowHeight;
      const percentage = pixels / totalScrollableDistance;

      if (windowWidth > 768) {
        setMobileBottom(false);
        percentage === 0 && changeContent(0);
        percentage > 0.2 && changeContent(1);
        percentage > 0.4 && changeContent(2);
        percentage > 0.6 && changeContent(3);
        percentage > 0.8 && changeContent(4);
        pixels >= pageHeight - windowHeight && changeContent(5);
      } else {
        percentage === 0 && changeContent(0);
        percentage > 0.14 && changeContent(1);
        percentage > 0.28 && changeContent(2);
        percentage > 0.42 && changeContent(3);
        percentage > 0.56 && changeContent(4);
        percentage > 0.7 && changeContent(5);
        percentage > 0.84 ? setMobileBottom(true) : setMobileBottom(false);
      }
    };

    const resizeListener = () => {
      window.innerWidth > 768 && setMobileBottom(false);
    };

    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, []);

  return (
    <Overflow ref={BodyTag}>
      <GlobalFonts />
      <GlobalStyle />
      <AppContainer>
        <LeftPanel
          data={data}
          imageNumber={imageNumber}
          content={content}
          handleShowFormPanel={handleShowFormPanel}
        />
        <Transition in={formPanel} timeout={300}>
          {(state) => (
            <FormPanel
              data={data}
              handleShowFormPanel={handleShowFormPanel}
              state={state}
            />
          )}
        </Transition>
        <RightPanel
          content={content}
          imageNumber={imageNumber}
          handleShowFormPanel={handleShowFormPanel}
          mobileBottom={mobileBottom}
        />
      </AppContainer>
    </Overflow>
  );
}
