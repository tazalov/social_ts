import { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from '../../../../redux/store'

export const StoreProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
