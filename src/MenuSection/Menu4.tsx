import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuSection from ".";

function Menu4() {
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

export default Menu4;
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
  padding: 0.5rem 0;
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    bottom: 0%;
    left: -50%;
    width: 50%;
    height: 2px;
    background-color: #f0f;
    transition: all 0.3s ease;
    transform-origin: left;
  }
  :after {
    content: "";
    position: absolute;
    bottom: 0%;
    right: -50%;
    width: 50%;
    height: 2px;
    background-color: #00bcd4;
    transition: all 0.3s ease;
    transform-origin: right;
  }

  :hover {
    :before {
      left: 50%;
    }
    :after {
      right: 50%;
    }
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
`;
