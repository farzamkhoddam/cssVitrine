import React from "react";
import styled from "styled-components";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";
import Menu5 from "./Menu5";
import Menu6 from "./Menu6";
import Menu7 from "./Menu7";

function MenuSection() {
  return (
    <Container>
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
      <Menu5 />
      <Menu6 />
      <Menu7 />
    </Container>
  );
}

export default MenuSection;
const Container = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  min-height: 100vh;
`;
