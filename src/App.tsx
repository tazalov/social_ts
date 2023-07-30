import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { ContainerStyled } from "./components/Container.styled";
import { Profile } from "./pages/profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { Users } from "./layout/users/Users";
import { FlexWrapperStyled } from "./components/FlexWrapper.styled";
import { AppStateT } from "./redux/store";
import { DialogsAT } from "./redux/dialogs.reducer";
import { ProfileAT } from "./redux/profile.reducer";
import { DialogsContainer } from "./pages/dialogs/DialogsContainer";

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
            <Route
              render={() => (
                <Profile profile={state.profile} dispatch={dispatch} />
              )}
              path={"/profile"}
            />
            <Route
              render={() => (
                <DialogsContainer dialogs={state.dialogs} dispatch={dispatch} />
              )}
              path={"/dialogs"}
            />
          </Main>
        </FlexWrapperStyled>
      </ContainerStyled>
    </BrowserRouter>
  );
}
