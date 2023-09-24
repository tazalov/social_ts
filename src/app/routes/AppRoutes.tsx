import { FC, lazy, Suspense } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { Preloader } from '../../components'

const Dialogs = lazy(() => import('../../pages/dialogs/DialogsContainer'))
const Login = lazy(() => import('../../pages/login/Login'))
const Profile = lazy(() => import('../../pages/profile/ProfileContainer'))
const Users = lazy(() => import('../../pages/users/UsersContainer'))

export const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<Preloader size={150} />}>
      <Route exact path={'/'} render={() => <Redirect to={'/profile'} />} />
      <Route path={'/profile/:userId?'} render={() => <Profile />} />
      <Route path={'/dialogs'} render={() => <Dialogs />} />
      <Route path={'/users'} render={() => <Users />} />
      <Route path={'/login'} render={() => <Login />} />
    </Suspense>
  )
}
