import { Image } from './image'
import { Work as WorkProps } from './work'

export interface Work {
  work: {
    uid: string
    document: WorkProps | null
  }
}

export interface Gallery {
  galleryimage: Image
  gallerycaptions: {
    html: string | null
  }
}

export interface Text {
  text?: {
    html: string | null
  }
}
