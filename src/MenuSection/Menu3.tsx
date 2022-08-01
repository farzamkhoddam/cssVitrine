import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import MenuSection from ".";

function Menu3() {
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

export default Menu3;
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
  z-index: 1;
  :before {
    content: "";
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 0;
    transform-origin: top;
    transition: all 0.2s ease;
    z-index: -1;
  }
  :after {
    content: "";
    background-color: black;
    position: absolute;
    top: 0%;
    left: 25%;
    width: 25%;
    height: 0;
    transform-origin: top;
    transition: all 0.2s 0.1s ease;
    z-index: -1;
  }

  :hover {
    color: #43d8c9;
    :before {
      height: 100%;
    }
    :after {
      height: 100%;
    }
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
  :before {
    content: "";
    background-color: black;
    position: absolute;
    top: 0;
    left: 50%;
    width: 25%;
    height: 0;
    transform-origin: top;
    transition: all 0.2s 0.2s ease;
    z-index: -1;
  }
  :after {
    content: "";
    background-color: black;
    position: absolute;
    top: 0;
    left: 75%;
    width: 25%;
    height: 0;
    transform-origin: top;
    transition: all 0.2s 0.3s ease;
    z-index: -1;
  }
  ${ItemContainer}:hover & {
    :before {
      height: 100%;
    }
    :after {
      height: 100%;
    }
  }
`;
