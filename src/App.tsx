import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { ContainerStyled } from "./components/Container.styled";
import { BrowserRouter, Route } from "react-router-dom";
import { SideUsers } from "./layout/sideUsers/SideUsers";
import { FlexWrapperStyled } from "./components/FlexWrapper.styled";
import { AppStateT } from "./redux/store";
import Dialogs from "./pages/dialogs/DialogsContainer";
import Profile from "./pages/profile/ProfileContainer";
import Users from "./pages/users/UsersContainer";

type AppPT = {
  state: AppStateT;
};

export function App({ state }: AppPT) {
  return (
    <BrowserRouter>
      <Header />
      <ContainerStyled>
        <FlexWrapperStyled gap={"20px"}>
          <FlexWrapperStyled direction={"column"} gap={"20px"}>
            <Sidebar />
            <SideUsers sideUsers={state.sideUsers} />
          </FlexWrapperStyled>
          <Main>
            <Route render={() => <Profile />} path={"/profile/:userId?"} />
            <Route render={() => <Dialogs />} path={"/dialogs"} />
            <Route render={() => <Users />} path={"/users"} />
          </Main>
        </FlexWrapperStyled>
      </ContainerStyled>
    </BrowserRouter>
  );
}
