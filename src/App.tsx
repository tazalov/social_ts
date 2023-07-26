import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Container } from "./components/Container";
import styled from "styled-components";
import { Profile } from "./pages/profile/Profile";
import { Dialogs } from "./pages/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <GridContainer>
          <Sidebar />
          <Main>
            <Route component={Profile} path={"/profile"} />
            <Route component={Dialogs} path={"/dialogs"} />
          </Main>
        </GridContainer>
      </Container>
    </BrowserRouter>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template: auto / min-content 1fr;
  grid-template-areas: "sidebar main";
  gap: 10px;
`;
