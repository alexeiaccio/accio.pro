import { css, keyframes } from '@emotion/core'

const hover = keyframes`
  0% {
    fill-opacity: 1;
    stroke-opacity: 1;
    stroke-width: 1;
  }
  50% {
    fill-opacity: 1;
    stroke-opacity: 1;
    stroke-width: 250;
  }
  60% {
    fill-opacity: 0;
    stroke-width: 250;
  }
  100% {
    fill-opacity: 0;
    stroke-width: 0;
  }
`

export const svgStyles = css`
  transition: opacity 400ms linear;

  & .back {
    fill-opacity: 0;
    transition: fill-opacity 200ms linear;
  }

  & .hover {
    fill: var(--bg-color);
    stroke: var(--text-color);
    stroke-width: 1;
  }
  &:hover {
    & .back {
      fill-opacity: 1;
      transition: fill-opacity 200ms ease-in-out 200ms;
    }

    & .hover {
      stroke: currentColor;
      transition: stroke 0ms;
      animation: ${hover} 400ms linear normal 1 forwards;
    }
  }
`
