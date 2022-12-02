export interface Translation {
  uk: string,
  ru: string
}

export interface CyrLat {
  cyr: string,
  lat: string
}
export interface Laf extends Translation {
  qt: CyrLat
}

export interface CategoryPlain {
  name: Laf,
  additionalInfo: Translation,
  description: Translation,
  parentCategoryName: string,
  alias: string,
  categories?: CategoryPlain[],
  phrases?: PhrasePlain[]
}

export interface PhrasePlain {
  laf: Laf,
  categoryName: string,
  alias: string
}

export interface PhraseDetails extends PhrasePlain {
  category: CategoryPlain,
}

export interface BreadCrumb {
  title: string
  href?: string
}
