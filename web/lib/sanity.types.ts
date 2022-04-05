type Slug = {
  _type: string
  current: string
}

export type Image = {
  _key: string
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
  alt?: string
  lqip?: string
  dimensions?: {
    height: number
    width: number
    aspectRatio: number
  }
  bleed?: boolean
  hasBorder?: boolean
}

type Seo = {
  image?: Image
  title?: string
  description?: string
}

interface SanityDocument {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

export interface Post extends SanityDocument {
  _type: "post"
  body: any[]
  description: string
  image?: Image
  seo?: Seo
  slug: Slug
  tags: Tag[]
  title: string
  isProject: boolean
}

export interface Tag extends SanityDocument {
  _type: "tag"
  slug: Slug
  title: string
  description?: string
}

export interface Settings extends SanityDocument {
  _type: "settings"
  image: Image
}
