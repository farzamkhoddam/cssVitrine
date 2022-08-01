import React from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import ButtonSection from "./ButtonSection";
import ImageSection from "./ImageSection";
import { Route, Routes } from "react-router-dom";
import MenuSection from "./MenuSection";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Container>
            <Title>one of the buttons lead you to the next page</Title>
            <ButtonSection />
          </Container>
        }
      ></Route>
      <Route
        path="/image-section"
        element={
          <Container>
            <Title>one of the images lead you to the next page</Title>
            <ImageSection />{" "}
          </Container>
        }
      ></Route>
      <Route
        path="/menu-section"
        element={
          <Container>
            <Title>one of the menu buttons lead you to the next page</Title>
            <MenuSection />{" "}
          </Container>
        }
      ></Route>
    </Routes>
  );
}

export default App;
const Container = styled.div`
  background-color: #24313c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Title = styled.h1`
  color: white;
  text-transform: uppercase;
`;
