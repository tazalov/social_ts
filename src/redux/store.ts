import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { appReducer } from './app-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { profileReducer } from './profile-reducer'
import { usersReducer } from './users-reducer'

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersReducer,
  app: appReducer,
})

//type globalReducer & AppState
type RootReducerT = typeof rootReducer
export type RootStateT = ReturnType<RootReducerT>

//type for all thunks
export type BaseThunkT<AT extends Action, R = Promise<void>> = ThunkAction<
  R,
  RootStateT,
  unknown,
  AT
>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
