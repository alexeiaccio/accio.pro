import { Image } from './image'
import { Gallery, Text, Work } from './slices'

export interface WorkBodyText {
  __typename: 'PrismicWorkBodyText'
  items: null
  primary: Text
}

export interface WorkBodyImageGallery {
  __typename: 'PrismicWorkBodyImageGallery'
  items: Array<Gallery> | null
  primary: {
    type: 'list' | 'left' | 'right' | 'slider' | 'comparison'
  }
}

export type WorkBody = (WorkBodyText | WorkBodyImageGallery)

export interface Work {
  data: {
    title: {
      html: string | null
      text: string | null
    }
    image: Image
    theme: string
    body: Array<WorkBody>
  }
}
