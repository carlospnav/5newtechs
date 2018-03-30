import styled from "styled-components"

export default styled.img.attrs({
  src: "/static/search/icn-search.svg",
  alt: "Search Icon"
})`
  position: absolute;
  right: 20px;
  top: 16px;

  @media (min-width: 500px){
    right: 40px;
  }
`