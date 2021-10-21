import { createGlobalStyle } from "styled-components";

import Saol from "./Saol_Text_Semibold.otf";
import Leitura from "./leitura-news-roman-1.otf";
import NittiLight from "./NittiGrotesk-Light.otf";
import NittiMedium from "./NittiGrotesk-Medium.otf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: Saol;
      src: url(${Saol}) format('opentype');
    };
    @font-face {
      font-family: Leitura;
      src: url(${Leitura}) format('opentype');
    };
    @font-face {
      font-family: NittiLight;
      src: url(${NittiLight}) format('opentype');
    };
    @font-face {
      font-family: NittiMedium;
      src: url(${NittiMedium}) format('opentype');
    }
`;
