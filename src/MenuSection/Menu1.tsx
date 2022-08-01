import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuSection from ".";

function Menu1() {
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

export default Menu1;
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
  background-color: black;
`;
const ItemContainer = styled.li`
  list-style: none;
  width: 20%;
  color: #fdb827;
  position: relative;
  transition: all 0.5s ease;
  padding: 1.5rem 0;
  :before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #fdb827;
    transition: all 0.5s ease;
    transform-origin: left;
    transform: scale(0);
  }
  :after {
    content: "";
    position: absolute;
    top: 0%;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: #fdb827;
    transition: all 0.5s ease;
    transform-origin: right;
    transform: scale(0);
  }

  :hover {
    :before {
      transform: scale(1);
    }
    :after {
      transform: scale(1);
    }
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
`;
