import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
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
        <Type14Button>Type 14</Type14Button>
      </ButtonContainer>
    </Container>
  );
}

export default App;
const Container = styled.div`
  background-color: #24313c;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
  flex-wrap: wrap;
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 260px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Type1Button = styled.button`
  text-decoration: none;
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
    position: absolute;
    left: 0;
    top: 0;
    background-color: #1ab188;
    height: 100%;
    width: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: all 0.7s ease;
  }
  :hover {
    color: white;
    :before {
      transform: rotate(0deg);
    }
  }
`;

const Type2Button = styled.button`
  text-decoration: none;
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
  font-family: sans-serif;
  font-size: 24px;
  background-color: transparent;
  border: none;
  padding: 1.5rem 3rem;
  position: relative;
  color: white;
  z-index: 1;
  overflow: hidden;
  transition: all 0.3s ease;
  :before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
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
    top: 10px;
    left: 10px;
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
      transform: perspective(1000px) rotateX(-75deg);
    }
    :after {
      top: 6px;
      left: 0;
      transform: perspective(1000px) rotateX(75deg);
    }
  }
`;
