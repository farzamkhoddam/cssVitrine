import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuSection from ".";

function Menu5() {
  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <ItemContainer>
            <Item>Home</Item>
          </ItemContainer>
          <ItemContainer>
            <Item>About</Item>
          </ItemContainer>
          <ItemContainer>
            <Item>Services</Item>
          </ItemContainer>
          <ItemContainer>
            <Item>Portfolio</Item>
          </ItemContainer>
          <ItemContainer>
            <Item>Contact</Item>
          </ItemContainer>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
}

export default Menu5;
const MenuContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const MenuWrapper = styled.ul`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  padding: 0;
`;
const ItemContainer = styled.li`
  list-style: none;
  position: relative;
  transition: all 0.3s ease;
  width: 14%;
  padding: 1rem 0.5rem;
  :hover {
    transform: scale(1.3);
    text-align: center;
    background-color: orange;
    filter: none !important;
  }
  ${MenuWrapper}:hover & {
    filter: blur(4px);
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
`;
