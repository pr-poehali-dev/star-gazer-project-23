import type { ReactNode } from "react"

export interface BulletItem {
  text: string
  icon?: string
}

export interface ObjItem {
  q: string
  a: string
}

export interface CriterionItem {
  criterion: string
  how: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  bullets?: BulletItem[]
  objections?: ObjItem[]
  criteria?: CriterionItem[]
  layout?: 'default' | 'bullets' | 'objections' | 'criteria'
}

export interface SectionProps extends Section {
  isActive: boolean
}
