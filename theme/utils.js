import { css } from "styled-components"

export const media = {
  desktop: (...args) => css`
    @media (max-width: 1280px) {
      ${css(...args)}
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

export function romanizeEpisodeNum(num) {
  const lookup = { X:10, IX:9, V:5, IV:4, I:1 };
  let roman = '';

  if (isNaN(Number(num)))
    return "Num could not be romanized. Are you sure num is a number?"

  for ( let i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

export function createFullEpisodeTitle(episode, title){
  if (episode !== undefined && isNaN(Number(episode)) || !title){
    return "Oops. Could not create the title with the information provided. It's a trap!"
  }
  return `Star Wars:${episode ? ` Episode ${romanizeEpisodeNum(episode)}` : ""}: ${title}`
}