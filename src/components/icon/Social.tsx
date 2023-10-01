import { FC } from 'react'
import styled, { css, useTheme } from 'styled-components'

import iconsSprite from '../../app/assets/images/icon/social-icon-sprite.svg'
import { addHttpsPrefix } from '../../utils/string/addHttpPrefix'

export enum SocialId {
  GITHUB = 'github',
  VK = 'vk',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  WEBSITE = 'website',
  YOUTUBE = 'youtube',
  MAIN_LINK = 'mainLink',
  INSTAGRAM = 'instagram',
}

type SocialPT = {
  iconId: SocialId
  link: string
}

export const Social: FC<SocialPT> = ({ iconId, link }) => {
  const theme = useTheme()
  const linkWithPrefix = addHttpsPrefix(link)
  return (
    <Link href={linkWithPrefix}>
      <StyledSocial
        width={'30px'}
        height={'30px'}
        viewBox={'0 0 24 24'}
        xmlns='http://www.w3.org/2000/svg'
        $link={iconId}
      >
        {iconId === 'instagram' && (
          <radialGradient id='gradient' r='150%' cx='30%' cy='107%'>
            <stop stopColor={theme.colors.svg.gradientStops.stop1} offset='0' />
            <stop stopColor={theme.colors.svg.gradientStops.stop2} offset='0.05' />
            <stop stopColor={theme.colors.svg.gradientStops.stop3} offset='0.45' />
            <stop stopColor={theme.colors.svg.gradientStops.stop4} offset='0.6' />
            <stop stopColor={theme.colors.svg.gradientStops.stop5} offset='0.9' />
          </radialGradient>
        )}
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
      </StyledSocial>
    </Link>
  )
}

const Link = styled.a``

type StyledSocialPT = {
  $link: SocialId
}

const StyledSocial = styled.svg<StyledSocialPT>`
  transition: all 0.2s linear;
  ${(props) => {
    switch (props.$link) {
      case SocialId.GITHUB: {
        return css`
          &:hover {
            fill: grey;
          }
        `
      }
      case SocialId.VK: {
        return css`
          &:hover {
            fill: #0077ff;
          }
        `
      }
      case SocialId.FACEBOOK: {
        return css`
          &:hover {
            fill: #3b5998;
          }
        `
      }
      case SocialId.INSTAGRAM: {
        return css`
          fill: url(#gradient);
          stop {
            transition: all 0.2s linear;
          }
          &:hover stop:nth-child(1) {
            stop-color: #fdf497;
          }
          &:hover stop:nth-child(2) {
            stop-color: #fdf497;
          }
          &:hover stop:nth-child(3) {
            stop-color: #fd5949;
          }
          &:hover stop:nth-child(4) {
            stop-color: #d6249f;
          }
          &:hover stop:nth-child(5) {
            stop-color: #285aeb;
          }
        `
      }
      case SocialId.TWITTER: {
        return css`
          &:hover {
            fill: #00acee;
          }
        `
      }
      case SocialId.WEBSITE: {
        return css`
          &:hover {
            fill: #3b9869;
          }
        `
      }
      case SocialId.YOUTUBE: {
        return css`
          &:hover {
            fill: rgb(204, 23, 23);
          }
        `
      }
      case SocialId.MAIN_LINK: {
        return css`
          &:hover {
            fill: #22d97d;
          }
        `
      }
    }
  }}
`
