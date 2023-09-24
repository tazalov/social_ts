import { FC } from 'react'

import iconsSprite from '../../app/assets/images/icon/icon-sprite.svg'

type IconPT = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: FC<IconPT> = ({ iconId, height, viewBox, width }) => {
  return (
    <svg
      width={width || '50'}
      height={height || '50'}
      viewBox={viewBox || '0 0 50 50'}
      xmlns='http://www.w3.org/2000/svg'
    >
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
