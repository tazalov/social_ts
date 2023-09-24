import { FC } from 'react'
import { Redirect, Route } from 'react-router-dom'

import Dialogs from '../../pages/dialogs/DialogsContainer'
import Login from '../../pages/login/Login'
import Profile from '../../pages/profile/ProfileContainer'
import Users from '../../pages/users/UsersContainer'

export const AppRoutes: FC = () => {
  return (
    <>
      <Route exact path={'/'} render={() => <Redirect to={'/profile'} />} />
      <Route path={'/profile/:userId?'} render={() => <Profile />} />
      <Route path={'/dialogs'} render={() => <Dialogs />} />
      <Route path={'/users'} render={() => <Users />} />
      <Route path={'/login'} render={() => <Login />} />
    </>
  )
}
