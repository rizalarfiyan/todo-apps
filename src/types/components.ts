export type Links = {
  name?: string
  icon?: string
  link: string
}

export interface DismissType {
  enabled?: boolean
  escapeKey?: boolean
  referencePointerDown?: boolean
  outsidePointerDown?: boolean
  ancestorScroll?: boolean
  bubbles?: boolean
}

export type OffsetType =
  | number
  | {
      mainAxis?: number
      crossAxis?: number
      alignmentAxis?: number | null
    }
