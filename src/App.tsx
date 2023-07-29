import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Container } from "./components/Container";
import { Profile } from "./pages/profile/Profile";
import { Dialogs } from "./pages/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionsT, StateT } from "./redux/_store";
import { Users } from "./layout/users/Users";
import { FlexWrapper } from "./components/FlexWrapper";

type AppPT = {
  state: StateT;
  dispatch: (value: ActionsT) => void;
};

export function App({ state, dispatch }: AppPT) {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <FlexWrapper gap={"20px"}>
          <FlexWrapper direction={"column"} gap={"20px"}>
            <Sidebar />
            <Users sideUsers={state.sideUsers} />
          </FlexWrapper>
          <Main>
            <Route
              render={() => (
                <Profile profile={state.profile} dispatch={dispatch} />
              )}
              path={"/profile"}
            />
            <Route
              render={() => (
                <Dialogs dialogs={state.dialogs} dispatch={dispatch} />
              )}
              path={"/dialogs"}
            />
          </Main>
        </FlexWrapper>
      </Container>
    </BrowserRouter>
  );
}
