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
