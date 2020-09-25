import { Maybe } from './index';

interface LocalImg {
  sizes: Maybe<string>
  srcSet: Maybe<string>
  src: Maybe<string>
  aspectRatio: Maybe<number>
  tracedSVG: Maybe<string>
}

export interface Image {
  alt: Maybe<string>
  src: Maybe<string>
  localFile: Maybe<{
    childImageSharp: Maybe<{
      fluid: Maybe<LocalImg>,
      fixed: Maybe<LocalImg>,
    }>
  }>
}