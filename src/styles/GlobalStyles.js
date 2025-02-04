import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
   
    --col-brand-1: #000;
    --col-brand-2: #9d4edd;
    --col-brand-3: #c77dff;


    --col-grey-50: #F9FAFB;
    --col-grey-100: #F3F4F6;
    --col-grey-200: #E5E7EB;
    --col-grey-300: #D1D5DB;
    --col-grey-400: #9CA3AF;
    --col-grey-700: #374151;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.08);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.10);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    --font-title: "Anton SC", serif;
    --font-body:  "Questrial", serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;
}

body {
font-family: "Questrial", serif;
  font-weight: 400;
  color: var(--color-grey-700);
  transition: color 0.3s, background-color 0.3s;
  line-height: 1.5;
  font-size: 1.6rem;
  
}


`;

export default GlobalStyles;
