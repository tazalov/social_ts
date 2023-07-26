import React from "react";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";
import { Sidebar } from "./layout/sidebar/Sidebar";
import { Container } from "./components/Container";
import styled from "styled-components";
import { Profile } from "./pages/profile/Profile";
import { Dialogs } from "./pages/dialogs/Dialogs";

export function App() {
  return (
    <>
      <Header />
      <Container>
        <GridContainer>
          <Sidebar />
          <Main>
            {/*<Profile />*/}
            <Dialogs />
          </Main>
        </GridContainer>
      </Container>
    </>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template: auto / min-content 1fr;
  grid-template-areas: "sidebar main";
  gap: 10px;
`;
