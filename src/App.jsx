import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";

import "./base.css";
import "./styles.js";

import { GlobalFonts } from "./fonts/fonts";
import {
  AppContainer,
  GlobalStyle,
  Overflow,
  StyledPEmphasised,
  OpacityFade,
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

import Logo from "../src/images/ao_logo.svg";

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
        The holiday season calls upon gifting to deliver feelings of
        connectedness, sincere appreciation, and care.
        <br />
        <br />
        Let us help you give something great. Something that lasts. Something
        truly memorable.
        <br />
        <br />
        <StyledPEmphasised>
          We make global gifting simple and especially thoughtful for companies
          that care.
        </StyledPEmphasised>
      </div>
    ),
    image: Image_6,
    color: "#293831",
  },
  {
    title: <div>So let us help you give them something great</div>,
    body: (
      <div>
        Something that lasts.
        <br />
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
        <StyledPEmphasised>powerful platform</StyledPEmphasised> ships gifts
        anywhere in the world — fast.
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
        a sustainably-made object, charitable donation or digital subscription,
        we ensure the best gifts are delivered to the right people.*
      </div>
    ),
    image: Image_5,
    color: "#32433a",
  },
  {
    title: <div>Introduce the human touch back into mass gifting</div>,
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
        the world or discover meaningful gifting experiences for 2022,{" "}
        <StyledPEmphasised>
          our holiday gifting experts are here to help.
        </StyledPEmphasised>
      </div>
    ),
    image: Image_6,
    color: "#293831",
  },
  {
    title: "Thanks",
    body: (
      <div>
        Introduce the human touch back into mass gifting and you’re left with
        loyal brand advocates{" "}
        <StyledPEmphasised>(and very happy people).</StyledPEmphasised>
        <br />
        <br />
        Visit our homepage to learn more about what we do.
      </div>
    ),
  },
  {
    title: "",
    body: "",
    image: Image_6,
    color: "#293831",
  },
];

export const StyledLogo = styled.img`
  filter: ${({ $intersection }) =>
    $intersection === "white" && "invert(1) brightness(2)"};
  ${OpacityFade}
  max-width: 140px;
  position: fixed;
  top: 3rem;
  left: 3rem;
  z-index: 9;
  display: none;

  @media only screen and (max-width: 768px) {
    margin-bottom: 3rem;
    display: block;
  }

  @media only screen and (max-width: 500px) {
    max-width: 80px;
  }
`;

export default function App() {
  const [content, setContent] = useState(data[0]);
  const [imageNumber, setImageNumber] = useState(0);
  const [formPanel, setFormPanel] = useState(false);
  const [mobileBottom, setMobileBottom] = useState(false);
  const [intersection, setIntersection] = useState(false);

  const handleShowFormPanel = (visibility) => {
    setFormPanel(visibility);
  };

  // const changeContent = (number) => {
  //   setContent(data[number]);
  //   setImageNumber(number);
  // };

  const BodyTag = useRef();
  const RightPanelTag = useRef();
  const LogoTag = useRef();

  useEffect(() => {
    // const scrollListener = () => {
    //   const windowHeight = window.innerHeight;
    //   const windowWidth = window.innerWidth;

    //   const pixels = window.pageYOffset;
    //   const pageHeight = BodyTag.current.getBoundingClientRect().height;

    //   const totalScrollableDistance = pageHeight - windowHeight;
    //   const percentage = pixels / totalScrollableDistance;

    //   if (windowWidth > 768) {
    //     setMobileBottom(false);
    //     percentage === 0 && changeContent(0);
    //     percentage > 0.2 && changeContent(1);
    //     percentage > 0.4 && changeContent(2);
    //     percentage > 0.6 && changeContent(3);
    //     percentage > 0.8 && changeContent(4);
    //     pixels >= pageHeight - windowHeight && changeContent(5);
    //   } else {
    //     percentage === 0 && changeContent(0);
    //     percentage > 0.14 && changeContent(1);
    //     percentage > 0.28 && changeContent(2);
    //     percentage > 0.42 && changeContent(3);
    //     percentage > 0.56 && changeContent(4);
    //     percentage > 0.7 && changeContent(5);
    //     percentage > 0.84 ? setMobileBottom(true) : setMobileBottom(false);
    //   }
    // };

    // const scrollListener = () => {
    //   const windowHeight = window.innerHeight;
    //   const windowWidth = window.innerWidth;

    //   const pixels = window.pageYOffset;
    //   const pageHeight = BodyTag.current.getBoundingClientRect().height;

    //   const totalScrollableDistance = pageHeight - windowHeight;
    //   const percentage = pixels / totalScrollableDistance;

    //   if (windowWidth > 768) {
    //     setMobileBottom(false);
    //   } else {
    //     percentage > 0.84 ? setMobileBottom(true) : setMobileBottom(false);
    //   }
    // };

    const scrollListener = () => {
      const windowHeight = window.innerHeight;
      const windowTop = window.pageYOffset;
      const LogoBottom = LogoTag.current.getBoundingClientRect().bottom;

      const intersectionPoint = windowHeight - LogoBottom;

      windowTop >= intersectionPoint
        ? setIntersection(true)
        : setIntersection(false);
    };

    window.addEventListener("scroll", scrollListener);

    const resizeListener = () => {
      window.innerWidth > 768 && setMobileBottom(false);
    };

    window.addEventListener("resize", resizeListener);
    // window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("resize", scrollListener);
    };
  }, []);

  return (
    <Overflow ref={BodyTag}>
      <GlobalFonts />
      <GlobalStyle />
      <StyledLogo
        src={Logo}
        $intersection={`${intersection && "white"}`}
        ref={LogoTag}
      />
      <AppContainer>
        <LeftPanel
          data={data}
          imageNumber={imageNumber}
          content={content}
          handleShowFormPanel={handleShowFormPanel}
          mobileBottom={mobileBottom}
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
        <div ref={RightPanelTag}>
          <RightPanel
            content={content}
            imageNumber={imageNumber}
            handleShowFormPanel={handleShowFormPanel}
            mobileBottom={mobileBottom}
          />
        </div>
      </AppContainer>
    </Overflow>
  );
}
