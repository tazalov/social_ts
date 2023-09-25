import { faComments, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'

import { S } from './Sidebar.styled'
import { SidebarItem } from './sidebarItem/SidebarItem'

import { C } from '../../app/styles/Common.styled'

const sidebarItems = [
  { url: '/profile', icon: faUser, title: 'Profile' },
  { url: '/dialogs', icon: faMessage, title: 'Dialogs' },
  { url: '/2', icon: faComments, title: 'Chat' },
]

export const Sidebar = () => {
  const items = sidebarItems.map((el, i) => <SidebarItem key={i} url={el.url} icon={el.icon} title={el.title} />)
  return (
    <S.Sidebar>
      <C.ShadowContainer as={'ul'}>{items}</C.ShadowContainer>
    </S.Sidebar>
  )
}
