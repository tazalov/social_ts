import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { ContainerStyled } from "./components/Container.styled";
import { BrowserRouter, Route } from "react-router-dom";
import { Users } from "./layout/users/Users";
import { FlexWrapperStyled } from "./components/FlexWrapper.styled";
import { AppStateT } from "./redux/store";
import { DialogsAT } from "./redux/dialogs.reducer";
import { ProfileAT } from "./redux/profile.reducer";
import Dialogs from "./pages/dialogs/DialogsContainer";
import Profile from "./pages/profile/ProfileContainer";

export type CombineActionsT = ProfileAT | DialogsAT;

type AppPT = {
  state: AppStateT;
  dispatch: (value: CombineActionsT) => void;
};

export function App({ state, dispatch }: AppPT) {
  return (
    <BrowserRouter>
      <Header />
      <ContainerStyled>
        <FlexWrapperStyled gap={"20px"}>
          <FlexWrapperStyled direction={"column"} gap={"20px"}>
            <Sidebar />
            <Users sideUsers={state.sideUsers} />
          </FlexWrapperStyled>
          <Main>
            <Route render={() => <Profile />} path={"/profile"} />
            <Route render={() => <Dialogs />} path={"/dialogs"} />
          </Main>
        </FlexWrapperStyled>
      </ContainerStyled>
    </BrowserRouter>
  );
}
