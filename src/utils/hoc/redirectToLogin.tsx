import React, { ComponentType, FC } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppST } from '../../redux/app-reducer'
import { RootStateT } from '../../redux/store'

export const redirectToLogin = (Component: ComponentType<any>) => {
  const MyRedirect: FC<MapStatePT> = ({ isAuth, ...restProps }) => {
    return isAuth ? <Component {...restProps} /> : <Redirect to={'/login'} />
  }

  type MapStatePT = Pick<AppST, 'isAuth'>

  const mapStateToProps = (state: RootStateT): MapStatePT => ({
    isAuth: state.app.isAuth,
  })

  return connect<MapStatePT, unknown, unknown, RootStateT>(mapStateToProps)(MyRedirect)
}
