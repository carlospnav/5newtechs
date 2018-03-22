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

function imageProps(type){
  return function (size){
    const paths = {
      bg: `bg-${size ? 'inside' : 'index'}`,
      logo: `logo-${size ? 'small' : 'big'}`,
      avatar: `icn-avatar-${size ? 'small' : 'big'}`
    }

    const props = {
      src: `/static/${type}/${paths[type]}.${type === 'bg' ? 'jpg' : 'svg'}`,
    }

    if (type === 'bg')
      props['srcSet'] = `
        /static/${type}/${paths[type]}@2x.jpg 2x, 
        /static/${type}/${paths[type]}@3x.jpg 3x`;

    return props;
  }
}

export const bgProps = imageProps('bg');
export const logoProps = imageProps('logo');
export const avatarProps = imageProps('avatar');
