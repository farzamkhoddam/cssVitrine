import React from "react";
import styled from "styled-components";

function Menu7() {
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

export default Menu7;
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
  top: 1rem;
  padding: 0;
`;
const ItemContainer = styled.li`
  list-style: none;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem;
  width: 15%;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    transform: scaleY(2);
    transition: all 0.3s ease;
  }
  :after {
    content: "";
    background-color: white;
    width: 100%;
    height: 100%;
    transform: scale(0);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s ease;
  }
  :hover {
    color: black;
    :before {
      opacity: 1;
      transform: scaleY(1.4);
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
`;
