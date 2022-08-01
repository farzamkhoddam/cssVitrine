import React from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";
import wave from "./images/wave.png";
import { Link } from "react-router-dom";
function ButtonSection() {
  return (
    <Container>
      <ButtonContainer>
        <Type1Button>Type 1</Type1Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type2Button>Type 2</Type2Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type3Button>Type 3</Type3Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type4Button>Type 4</Type4Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type5Button>Type 5</Type5Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type6Button>Type 6</Type6Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type7Button>Type 7</Type7Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type8Button>Type 8</Type8Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type9Button>Type 9</Type9Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type10Button>Type 10</Type10Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type11Button>Type 11</Type11Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type12Button>
          <Span12></Span12>Type 12
        </Type12Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type13Button>Type 13</Type13Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type14Button>
          {" "}
          <span></span>Type 14
        </Type14Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type15Button> Type 15</Type15Button>
      </ButtonContainer>
      <StyledButtonContainer to="/image-section">
        <Type16Button> Type 16</Type16Button>
      </StyledButtonContainer>
      <ButtonContainer>
        <Type17Button>
          {" "}
          <span>B</span>utton 17
        </Type17Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type18Button>
          {" "}
          <span></span> Type 18
        </Type18Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type19Button>
          {" "}
          <span id="wave"></span> Type 19
        </Type19Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type20Button>
          {" "}
          <span></span> Type 20
        </Type20Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type21Button>Type 21</Type21Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type22Button>Type 22</Type22Button>
      </ButtonContainer>
      <ButtonContainer>
        <Type23Button>Type 23</Type23Button>
      </ButtonContainer>
    </Container>
  );
}

export default ButtonSection;
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
const ButtonContainer = styled.div`
  position: relative;
  width: 260px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledButtonContainer = styled(Link)`
  position: relative;
  width: 260px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const Type1Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.7s ease;
  :before {
    border-radius: 0 0 50% 0;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 40%;
    width: 20%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: all 0.9s ease;
  }
  :hover {
    color: white;
    :before {
      transform: rotate(0deg);
      top: 0;
      width: 120%;
      height: 150%;
    }
  }
`;

const Type2Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    left: -100%;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.3s ease;
  }
  :hover {
    color: white;
    :before {
      left: 0;
    }
  }
`;
const Type3Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    transform: rotateX(90deg);
  }

  :hover {
    color: white;
    :before {
      transform: rotateX(0deg);
    }
  }
`;

const Type4Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    transform: rotateX(90deg);
  }
  :after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    z-index: -1;
    transition: all 0.6s ease;
    transform: rotateY(90deg);
  }
  :hover {
    color: white;
    :before {
      transform: rotateX(0deg);
    }
    :after {
      transform: rotateY(0deg);
    }
  }
`;
const Type5Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 3px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  transition: all 0.3s ease;
  font-weight: 300;
  :hover {
    font-weight: bold;
    border: 7px solid white;
    letter-spacing: 10px;
  }
`;
const Type6Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  :before {
    content: "Hello";
    position: absolute;
    left: 0;
    top: -100%;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    transition: all 0.6s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  :hover {
    :before {
      top: 0;
    }
  }
`;
const Type7Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  transition: all 0.6s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    opacity: 0.5;
    height: 50px;
    width: 200%;
    transition: all 0.6s ease;
    transform-origin: bottom left;
    transform: translateX(-100%) translateY(-200%) rotate(45deg);
  }
  :hover {
    color: white;
    background-color: #1ab188;
    :before {
      transform: translateX(100%) translateY(-50%) rotate(45deg);
    }
  }
`;
const Type8Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: #1ab188;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: transparent;
  :before {
    content: "Type 8";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #24313c;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.4s ease;
  }
  :after {
    content: "Type 8";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #24313c;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transform: translate(-100%, 100%);
    transition: all 0.4s ease;
  }
  :hover {
    :before {
      transform: translate(100%, -100%);
    }
    :after {
      transform: translate(0, 0);
    }
  }
`;
const Type9Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  :before {
    content: "Type 9";
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #24313c;
    transition: all 0.4s ease;
    transform: scale(5);
    opacity: 0;
  }
  :hover {
    :before {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const Type10Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 0;
    width: 100%;
    transition: all 0.5s ease;
    z-index: -1;
    border-radius: 0 0 50% 50%;
  }
  :hover {
    :before {
      height: 190%;
    }
  }
`;
const Type11Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  color: white;
  transition: all 0.3s ease;
  :before {
    content: "Type 11";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #327d69;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s 0.3s ease;
    transform-origin: top;
    transform: rotateX(270deg);
  }
  :after {
    content: "Type 11";
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    transform-origin: top;
    transform: rotateX(270deg);
  }
  :hover {
    color: white;
    :before {
      transform: rotateX(0deg);
      transition: all 0.3s ease;
    }
    :after {
      transform: rotateX(0deg);
      transition: all 0.3s 0.3s ease;
    }
  }
`;
const Type12Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: none;
  padding: 1.5rem 3rem;
  position: relative;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    height: 20%;
    width: 10%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    transform-origin: top;
    border-radius: 50%;
    box-shadow: -100px 0 0 white;
    opacity: 0;
    z-index: -1;
  }
  :after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    height: 20%;
    width: 10%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    transform-origin: top;
    border-radius: 50%;
    box-shadow: 100px 0 0 white;
    opacity: 0;
    z-index: -1;
  }
  :hover {
    color: #24313c;
    transition-delay: 0.4s;
    :before {
      transform: translateX(-50%) translateY(-50%);
      left: 50%;
      box-shadow: -30px 0 0 white;
      opacity: 1;
    }
    :after {
      transform: translateX(50%) translateY(-50%);
      right: 50%;
      box-shadow: 30px 0 0 white;
      opacity: 1;
    }
  }
`;
const Span12 = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  transform: scale(0);
  border-radius: 10px;
  transition: all 0.3s ease;
  z-index: -1;
  ${Type12Button}:hover & {
    transform: scale(1);
    transition-delay: 0.4s;
  }
`;
const Type13Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: none;
  padding: 1.5rem 3rem;
  position: relative;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background-color: #20caff;
    z-index: -1;
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: top;
  }
  :after {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 100%;
    height: 100%;
    background-color: #ff7675;
    z-index: -1;
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: bottom;
  }
  :hover {
    :before {
      top: -6px;
      left: 0;
      transform: perspective(1000px) rotateX(75deg);
    }
    :after {
      top: 6px;
      left: 0;
      transform: perspective(1000px) rotateX(-75deg);
    }
  }
`;
const Type14Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.5s ease;
  span:before {
    content: "";
    position: absolute;
    right: -25%;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 25%;
    z-index: -1;
    transition: all 0.5s ease;
  }
  span:after {
    content: "";
    position: absolute;
    right: 25%;
    bottom: -100%;
    background-color: #1ab188;
    height: 100%;
    width: 25%;
    z-index: -1;
    transition: all 0.5s ease;
  }
  :before {
    content: "";
    position: absolute;
    left: -25%;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 25%;
    z-index: -1;
    transition: all 0.5s ease;
  }
  :after {
    content: "";
    position: absolute;
    left: 25%;
    top: -100%;
    background-color: #1ab188;
    height: 100%;
    width: 25%;
    z-index: -1;
    transition: all 0.5s ease;
  }
  :hover {
    color: white;
    :before {
      left: 0;
    }
    :after {
      top: 0;
    }
    span:before {
      right: 0;
    }
    span:after {
      bottom: 0;
    }
  }
`;
const Type15Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  position: relative;
  // overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.5s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: -20%;
    height: 140%;
    width: 100%;
    z-index: -1;
    transition: all 0.7s ease;
    border-left: 2px solid #1ab188;
    border-right: 2px solid yellow;
  }
  :after {
    content: "";
    position: absolute;
    left: -15%;
    top: 0;
    height: 100%;
    width: 130%;
    z-index: -1;
    transition: all 0.7s 0.2s ease;
    border-top: 2px solid #1ab188;
    border-bottom: 2px solid yellow;
  }
  :hover {
    color: white;
    :before {
      transform: rotateY(180deg);
    }
    :after {
      transform: rotateX(180deg);
    }
  }
`;
const Type16Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  position: relative;
  // overflow: hidden;
  background-color: #1ab188;
  color: white;
  border-radius: 10px;
  z-index: 1;
  transition: all 0.5s ease;
  :before {
    content: "";
    position: absolute;
    left: -5%;
    top: -10%;
    height: 40%;
    width: 20%;
    border-radius: 10px 0 0 0;
    z-index: -1;
    transition: all 0.4s ease;
    border-left: 3px solid #1ab188;
    border-top: 3px solid #1ab188;
  }
  :after {
    content: "";
    position: absolute;
    right: -5%;
    bottom: -10%;
    height: 40%;
    width: 20%;
    border-radius: 0 0 10px 0;
    z-index: -1;
    transition: all 0.4s ease;
    border-right: 3px solid #1ab188;
    border-bottom: 3px solid #1ab188;
  }
  :hover {
    color: white;
    :before {
      width: 100%;
      height: 100%;
    }
    :after {
      width: 100%;
      height: 100%;
    }
  }
`;
const Type17Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  outline: none;
  position: relative;
  // overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.5s ease;
  span {
    color: transparent;
    position: relative;
  }
  span:before {
    content: "B";
    position: absolute;
    color: white;
    transition: all 0.4s ease;
    top: 0;
    left: 0;
  }
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
  }
  :hover {
    color: black;
    :before {
      opacity: 1;
      transform: rotate(15deg);
    }
    span:before {
      font-size: 70px;
      color: black;
      top: -130%;
      left: -200%;
      transform: rotate(360deg);
    }
  }
`;
const Type18Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  position: relative;
  // overflow: hidden;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  z-index: 1;
  transition: all 0.5s ease;
  span:before {
    content: "";
    position: absolute;
    left: 0%;
    bottom: 0%;
    height: 0;
    width: 4px;
    z-index: -1;
    transition: all 0.4s ease;
    background-color: white;
  }
  span:after {
    content: "";
    position: absolute;
    right: 0%;
    top: 0%;
    height: 0;
    width: 4px;
    z-index: -1;
    transition: all 0.4s ease;
    background-color: white;
  }
  :before {
    content: "";
    position: absolute;
    left: 0%;
    top: 0%;
    height: 4px;
    width: 0;
    z-index: -1;
    transition: all 0.4s ease;
    background-color: white;
  }
  :after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 4px;
    width: 0;
    z-index: -1;
    transition: all 0.4s ease;
    background-color: white;
  }
  :hover {
    color: white;
    span:before {
      height: 100%;
    }
    span:after {
      height: 100%;
    }
    :before {
      width: 100%;
    }
    :after {
      width: 100%;
    }
  }
`;
const waving = keyframes`
0%{
  background-position-x: 0
}
100%{
  background-position-x:118px;
}
`;
const Type19Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  color: white;
  z-index: 1;
  border: 5px solid #00aeff;
  transition: all 0.5s ease;
  span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100% + 22px);
    left: 0;
    background-color: #00aeff;
    transition: all 1s ease;
    z-index: -1;
  }
  span:before {
    content: "";
    position: absolute;
    left: 0%;
    top: -22px;
    height: 22px;
    width: 100%;
    transition: all 0.4s ease;
    background-image: url(${wave});
    animation: ${waving} 0.5s linear infinite;
    z-index: -1;
  }
  :hover {
    color: white;
    span {
      top: 0;
    }
  }
`;
const Type20Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  padding: 1.5rem 3rem;
  outline: none;
  border: none;
  position: relative;
  color: white;
  z-index: 1;
  transition: all 0.5s ease;
  overflow: hidden;
  span {
    width: 94%;
    height: 88%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border: 5px solid #1ab188;
  }
  span:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    height: 600%;
    width: 8%;
    background-color: #24313c;
    transition: all 0.4s ease;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :hover {
    span:before {
      width: 100%;
      background-color: #1ab188;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;
const Type21Button = styled.button`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 24px;
  padding: 1.5rem 3rem;
  border: none;
  outline: none;
  position: relative;
  // overflow: hidden;
  color: white;
  border-radius: 10px;
  background-color: transparent;
  z-index: 1;
  transition: all 0.5s ease;
  :before {
    content: "";
    position: absolute;
    left: 0%;
    top: 5px;
    height: 80%;
    width: 50%;
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background-color: #ee5253;
    transform: skewX(30deg);
  }
  :after {
    content: "";
    position: absolute;
    left: 53%;
    top: 10px;
    height: 80%;
    width: 50%;
    background-color: #0a3d62;
    transform: skewX(30deg);
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  :hover {
    color: white;
    :before {
      transform: skewX(0deg);
      left: 50%;
      top: 10px;
    }
    :after {
      transform: skewX(0deg);
      left: 0;
    }
  }
`;
const Type22Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: white;
  border: none;
  padding: 1.5rem 5rem;
  border-radius: 100px;
  position: relative;
  color: black;
  z-index: 1;
  transition: all 0.4s ease;
  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    opacity: 1;
    background-color: white;
    border-radius: 100px;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  :hover {
    transform: translateY(-5px);
    filter: drop-shadow(2px 4px 6px black);
    :before {
      transition: all 0.4s ease;
      transform: scaleX(1.4) scaleY(1.2);
      opacity: 0;
      visibility: hidden;
    }
  }
  :focus {
    :before {
      transition: all 0.4s ease;
      transform: scaleX(1.4) scaleY(1.2);
      opacity: 0;
      visibility: hidden;
    }
  }
`;
const Type23Button = styled.button`
  text-decoration: none;
  outline: none;
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: 5px solid white;
  padding: 1.5rem 3rem;
  position: relative;
  overflow: hidden;
  color: white;
  z-index: 1;
  transition: all 0.7s ease;
  :before {
    content: "";
    width: 100%;
    position: absolute;
    left: -120%;
    top: 0;
    background-color: transparent;
    border-top: 38px solid #1ab188;
    border-bottom: 38px solid #1ab188;
    border-right: 30px solid transparent;
    z-index: -1;
    transform-origin: bottom left;
    transition: all 0.7s ease;
  }
  :after {
    content: "";
    width: 100%;
    position: absolute;
    right: -120%;
    top: 0;
    background-color: transparent;
    border-top: 38px solid #1ab188;
    border-bottom: 38px solid #1ab188;
    border-left: 30px solid transparent;
    z-index: -1;
    transform-origin: bottom left;
    transition: all 0.7s ease;
  }
  :hover {
    color: white;
    :before {
      left: 0;
    }
    :after {
      right: 0;
    }
  }
`;
