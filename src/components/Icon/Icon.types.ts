import icons from './Icon.data'

export interface IconProps
  extends Omit<
    React.SVGAttributes<SVGSVGElement>,
    'type' | 'viewBox' | 'xmlns'
  > {
  type: IconType
}

export type IconType = keyof typeof icons
