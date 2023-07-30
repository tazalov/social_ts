import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profile.reducer";
import { dialogsReducer } from "./dialogs.reducer";
import { sideUsersReducer } from "./sideusers.reducer";
import { usersReducer } from "./users.reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sideUsers: sideUsersReducer,
  users: usersReducer,
});

//type globalReducer & AppState
type RootReducerT = typeof rootReducer;
export type AppStateT = ReturnType<RootReducerT>;

export const store = createStore(rootReducer);
