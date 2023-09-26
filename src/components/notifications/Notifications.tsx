import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotificationsSystem, { wyboTheme, dismissNotification } from 'reapop'

import { RootStateT } from '../../redux/store'

export const Notifications = () => {
  const dispatch = useDispatch()

  const notifications = useSelector((state: RootStateT) => state.notifications)

  return (
    <div>
      <NotificationsSystem
        notifications={notifications}
        dismissNotification={(id) => dispatch(dismissNotification(id))}
        theme={wyboTheme}
      />
    </div>
  )
}
