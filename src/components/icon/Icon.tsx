import { FC } from 'react'

import iconsSprite from '../../app/assets/images/icon/icon-sprite.svg'

type IconPT = {
  iconId: string
  width?: string
  height?: string
  viewBox?: string
}

export const Icon: FC<IconPT> = ({ iconId, height = '50', viewBox = '0 0 50 50', width = '50' }) => {
  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns='http://www.w3.org/2000/svg'>
      <use xlinkHref={`${iconsSprite}#${iconId}`} />
    </svg>
  )
}
