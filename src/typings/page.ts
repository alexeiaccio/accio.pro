import { Gallery, Text, Work } from './slices'

export interface PageBodyWork {
  __typename: 'PrismicPageBodyWorks'
  items: Array<Work> | null
  primary: null
}

export interface PageBodyText {
  __typename: 'PrismicPageBodyText'
  items: null
  primary: Text
}

export interface PageBodyImageGallery {
  __typename: 'PrismicPageBodyImageGallery'
  items: Array<Gallery> | null
  primary: {
    type: 'list' | 'left' | 'right' | 'slider' | 'comparison'
  }
}

export type PageBody = (PageBodyWork | PageBodyText | PageBodyImageGallery)

export interface Page {
  uid: string
  data: {
    title: {
      html: string | null
      text: string | null
    }
    body: Array<PageBody>
  }
}
