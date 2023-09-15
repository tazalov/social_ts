import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AuthST } from '../../redux/auth/reducer/types'
import { AppStateT } from '../../redux/store'

export const redirectToLogin = (Component: ComponentType<any>) => {
  const MyRedirect: FC<MapStatePT> = ({ isAuth, ...restProps }) => {
    return isAuth ? <Component {...restProps} /> : <Redirect to={'/login'} />
  }

  type MapStatePT = Pick<AuthST, 'isAuth'>

  const mapStateToProps = (state: AppStateT): MapStatePT => ({
    isAuth: state.auth.isAuth,
  })

  return connect<MapStatePT, unknown, unknown, AppStateT>(mapStateToProps)(MyRedirect)
}
