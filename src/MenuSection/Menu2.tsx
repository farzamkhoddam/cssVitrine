import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuSection from ".";

function Menu2() {
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

export default Menu2;
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
  top: 5%;
  padding: 0;
`;
const ItemContainer = styled.li`
  list-style: none;
  width: 10%;
  color: white;
  position: relative;
  transition: all 0.5s ease;
  padding: 1rem 0;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-left: 2px solid #e91e63;
    border-bottom: 2px solid #e91e63;
    opacity: 0;
    transition: all 0.5s ease;
  }
  :after {
    content: "";
    position: absolute;
    top: 0%;
    right: 0;
    width: 20px;
    height: 20px;
    border-right: 2px solid #e91e63;
    border-top: 2px solid #e91e63;
    opacity: 0;
    transition: all 0.5s ease;
  }

  :hover {
    background-color: #e91e63;
    :before {
      opacity: 1;
      bottom: -15%;
      left: -5%;
    }
    :after {
      opacity: 1;
      top: -15%;
      right: -5%;
    }
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
  ${ItemContainer}:hover & {
  }
`;
