import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { S } from '../Sidebar.styled'

type SidebarItemPT = {
  url: string
  icon: IconDefinition
  title: string
}

export const SidebarItem: FC<SidebarItemPT> = ({ title, url, icon }) => {
  return (
    <S.SidebarItem>
      <S.SidebarLink to={url}>
        <FontAwesomeIcon icon={icon} />
        <span>{title}</span>
      </S.SidebarLink>
    </S.SidebarItem>
  )
}
