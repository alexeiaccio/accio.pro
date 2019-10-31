interface LocalImg {
  sizes: string | null
  srcSet: string | null
  src: string | null
  aspectRatio: number | null
  tracedSVG: string | null
}

export interface Image {
  alt: string | null
  src: string | null
  localFile?: {
    childImageSharp: {
      fluid: LocalImg | null,
      fixed: LocalImg | null,
    } | null
  }
}