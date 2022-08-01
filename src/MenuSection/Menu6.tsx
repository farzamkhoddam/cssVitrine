import styled from "styled-components";

function Menu6() {
  return (
    <>
      <MenuContainer>
        <MenuWrapper>
          <ItemContainer>
            <Item>
              <span>Home</span>
              <span>Home</span>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <span>About</span>
              <span>About</span>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <span>Services</span>
              <span>Services</span>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <span>Portfolio</span>
              <span>Portfolio</span>
            </Item>
          </ItemContainer>
          <ItemContainer>
            <Item>
              <span>Contact</span>
              <span>Contact</span>
            </Item>
          </ItemContainer>
        </MenuWrapper>
      </MenuContainer>
    </>
  );
}

export default Menu6;
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
  padding: 0.5rem;
  overflow: hidden;
  width: 15%;
  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    background-color: #16a085;
    transition: all 0.2s 0.2s ease;
    transform-origin: left;
  }

  :hover {
    :before {
      transform: scale(1);
      transform-origin: right;
    }
  }
`;
const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  line-height: 20px;
  width: 100%;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease;
    position: relative;
    color: white;
  }
  ${ItemContainer}:hover & {
    span {
      transform: translateY(-100%);
    }
  }
`;
