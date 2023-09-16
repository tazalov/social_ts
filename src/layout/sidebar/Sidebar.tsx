import {
  faComments,
  faMessage,
  faMusic,
  faUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { C } from '../../app/styles/Common.styled'
import { S } from './Sidebar.styled'

export const Sidebar = () => (
  <S.Sidebar>
    <C.ShadowContainer as={'ul'}>
      <S.SidebarItem>
        <S.SidebarLink to={'/profile'}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to={'/dialogs'}>
          <FontAwesomeIcon icon={faMessage} />
          <span>Dialogs</span>
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to={'/music'}>
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to={'/1'}>
          <FontAwesomeIcon icon={faUserGroup} />
          <span>Friends</span>
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink to={'/2'}>
          <FontAwesomeIcon icon={faComments} />
          <span>Chat</span>
        </S.SidebarLink>
      </S.SidebarItem>
    </C.ShadowContainer>
  </S.Sidebar>
)
