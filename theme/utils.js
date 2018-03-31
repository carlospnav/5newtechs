import { css } from "styled-components"

export const media = {
  desktop: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)};
    }
  `
}

export function flexGroup(
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  display = "flex"
) {
  return `
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    display: ${display};
  `
}

function romanizeEpisodeNum(num) {
  const lookup = { X:10, IX:9, V:5, IV:4, I:1 };
  let roman = '';

  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export function createFullEpisodeTitle(episode, title){
  return `Star Wars: ${`Episode ${episode && romanizeEpisodeNum(episode)}`}: ${title}`
}