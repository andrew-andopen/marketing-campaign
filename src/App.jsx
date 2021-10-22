import { useState, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

import "./base.css";
import "./styles.js";

import { GlobalFonts } from "./fonts/fonts";
import { AppContainer, GlobalStyle, Overflow } from "./styles";

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
        Open up
        <br /> better gifting
      </div>
    ),
    body: "A tale as old as time, the holiday season calls upon gifting to deliver feelings of connectedness, sincere appreciation and care.  And yet in a corporate setting, this can feel especially underwhelming... ",
    image: Image_1,
    color: "#42594e",
  },
  {
    title: (
      <div>
        So let us help
        <br /> you give them
        <br /> something great
      </div>
    ),
    body: "Something that lasts.Something truly memorable.",
    image: Image_2,
    color: "#42594e",
  },
  {
    title: "We make it simple",
    body: "Finding just the right something for customers, employees, partners and clients. After our team discovers and designs the perfect gifts, simply select, dedicate and send them on their merry way.",
    image: Image_3,
    color: "#42584d",
  },
  {
    title: "We make it global",
    body: "Near or far, 100 or 10,000, our intelligent shipping logistics and powerful SaaS platform ships gifts anywhere in the world — fast. ",
    image: Image_4,
    color: "#3a4e44",
  },
  {
    title: "And we make it especially thoughtful",
    body: "No more cheap merch. Whether it’s a sustainably-made object, charitable donation, slab of chocolate or digital subscription, we ensure the best gifts are delivered to the right people.",
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
    body: "And you’re left with loyal brand advocates (and very happy people).",
    image: Image_6,
    color: "#293831",
  },
  {
    title: "Care to have a chat?",
    body: "Whether you want to send a thoughtful digital gift from your brand to the world for the holidays, or discover meaningful gifting experiences for 2022, our gifting experts are here to help.",
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

  const firstFunction = () => {
    setContent(data[0]);
    setImageNumber(0);
  };

  const secondFunction = () => {
    setContent(data[1]);
    setImageNumber(1);
  };

  const thirdFunction = () => {
    setContent(data[2]);
    setImageNumber(2);
  };

  const fourthFunction = () => {
    setContent(data[3]);
    setImageNumber(3);
  };

  const fifthFunction = () => {
    setContent(data[4]);
    setImageNumber(4);
  };

  const sixthFunction = () => {
    setContent(data[5]);
    setImageNumber(5);
  };

  const BodyTag = useRef();

  useEffect(() => {
    window.onscroll = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const pixels = window.pageYOffset;
      const pageHeight = BodyTag.current.getBoundingClientRect().height;

      const totalScrollableDistance = pageHeight - windowHeight;
      const percentage = pixels / totalScrollableDistance;

      if (windowWidth > 768) {
        setMobileBottom(false);
        percentage === 0 && firstFunction();
        percentage > 0.2 && secondFunction();
        percentage > 0.4 && thirdFunction();
        percentage > 0.6 && fourthFunction();
        percentage > 0.8 && fifthFunction();
        pixels >= pageHeight - windowHeight && sixthFunction();
      } else {
        percentage === 0 && firstFunction();
        percentage > 0.14 && secondFunction();
        percentage > 0.28 && thirdFunction();
        percentage > 0.42 && fourthFunction();
        percentage > 0.56 && fifthFunction();
        percentage > 0.7 && sixthFunction();
        percentage > 0.84 ? setMobileBottom(true) : setMobileBottom(false);
        // pixels >= windowHeight * 2.8 && sixthFunction();
      }
    };
  }, []);

  useEffect(() => {
    window.onresize = () => {
      window.innerWidth > 768 && setMobileBottom(false);
    };
  });

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
