import React from "react";
import Header from "./layout/header/HeaderContainer";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import { SideUsers } from "./layout/sideUsers/SideUsers";
import { AppStateT } from "./redux/store";
import Dialogs from "./pages/dialogs/DialogsContainer";
import Profile from "./pages/profile/ProfileContainer";
import Users from "./pages/users/UsersContainer";
import { C } from "./components/Common.styled";

type AppPT = {
  state: AppStateT;
};

export function App({ state }: AppPT) {
  return (
    <BrowserRouter>
      <Header />
      <C.Container>
        <C.FlexWrapper gap={"20px"}>
          <C.FlexWrapper direction={"column"} gap={"20px"}>
            <Sidebar />
            <SideUsers sideUsers={state.sideUsers} />
          </C.FlexWrapper>
          <Main>
            <Route render={() => <Profile />} path={"/profile/:userId?"} />
            <Route render={() => <Dialogs />} path={"/dialogs"} />
            <Route render={() => <Users />} path={"/users"} />
          </Main>
        </C.FlexWrapper>
      </C.Container>
    </BrowserRouter>
  );
}
