import { injectGlobal } from "styled-components"

injectGlobal`
  html {
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    overflow-y: auto;
    width: 100%;
    background-color: black;
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

`
