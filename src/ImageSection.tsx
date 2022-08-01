import React from "react";
import "./App.css";
import styled, { css } from "styled-components/macro";
import image1 from "./images/image1.webp";
import image2 from "./images/image2.webp";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import {
  ImageContainerStyle,
  ImgStyle,
  CaptionStyle,
  TitleStyle,
  SubtitleStyle,
} from "./typo";
import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <Container>
      <ImageContainer>
        <Img src={image1} />
        <Caption>
          <Title>amazing title</Title>
          <Subtitle>you can write whatever you want here</Subtitle>
        </Caption>
      </ImageContainer>
      <ImageContainer>
        <Img src={image2} />
        <Caption2>
          <Title>amazing title</Title>
          <Subtitle>you can write whatever you want here</Subtitle>
        </Caption2>
      </ImageContainer>
      <ImageContainer>
        <Img3 src={image3} />
        <Caption3>
          <Title3>amazing title</Title3>
          <Subtitle3>you can write whatever you want here</Subtitle3>
        </Caption3>
      </ImageContainer>
      <ImageContainer>
        <Img4 src={image4} />
        <Caption4>
          <Title3>amazing title</Title3>
          <Subtitle4>you can write whatever you want here</Subtitle4>
        </Caption4>
      </ImageContainer>
      <ImageContainer>
        <Img5 src={image5} />
        <Caption5>
          <Title5>amazing title</Title5>
          <Subtitle5>you can write whatever you want here</Subtitle5>
        </Caption5>
      </ImageContainer>
      <ImageContainer6>
        <Img5 src={image6} />
        <Caption6>
          <Title6>amazing title</Title6>
          <Subtitle6>you can write whatever you want here</Subtitle6>
          <Button to="/menu-section">next page</Button>
        </Caption6>
      </ImageContainer6>
      <ImageContainer7>
        <Img7 src={image7} />
        <Caption7>
          <Title7>amazing title</Title7>
          <Subtitle7>you can write whatever you want here</Subtitle7>
        </Caption7>
      </ImageContainer7>
      <ImageContainer7>
        <Img8 src={image8} />
        <Caption8>
          <Title8>amazing title</Title8>
          <Subtitle8>you can write whatever you want here</Subtitle8>
        </Caption8>
      </ImageContainer7>
    </Container>
  );
}

export default ImageSection;
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

const ImageContainer = styled.div`
  ${ImageContainerStyle}
`;
const Img = styled.img`
  ${ImgStyle}
  ${ImageContainer}:hover & {
    transform: scale(1.3) rotate(15deg);
  }
`;
const Caption = styled.div`
  ${CaptionStyle}
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;
const Title = styled.h3`
  ${TitleStyle}
`;
const Subtitle = styled.p`
  ${SubtitleStyle}
`;
const Caption2 = styled.div`
  ${CaptionStyle};
  position: absolute;
  left: -100%;
  top: 0;
  ${ImageContainer}:hover & {
    left: 0;
  }
`;
const Caption3 = styled.div`
  ${CaptionStyle};
  position: absolute;
  left: -100%;
  color: black;
  ${ImageContainer}:hover & {
    left: 0;
  }
`;
const Img3 = styled.img`
  ${ImgStyle}
  position: absolute;
  top: 0;
  right: 0;
  ${ImageContainer}:hover & {
    right: -100%;
  }
`;
const Title3 = styled.h3`
  ${TitleStyle}
  color: white;
`;
const Subtitle3 = styled.p`
  ${SubtitleStyle}
  color: white;
`;
const Img4 = styled.img`
  ${ImgStyle}
  position: absolute;
  top: 0;
  right: 0;
  ${ImageContainer}:hover & {
    top: -40%;
  }
`;
const Caption4 = styled.div`
  ${CaptionStyle};
  position: absolute;
  opacity: 1;
  left: 0;
  bottom: -100%;
  height: 40%;
  background-color: black;
  ${ImageContainer}:hover & {
    bottom: 0;
  }
`;
const Subtitle4 = styled.p`
  ${SubtitleStyle}
  color: white;
  margin: 0;
  margin-bottom: 1rem;
`;
const Img5 = styled.img`
  ${ImgStyle};
`;
const Caption5 = styled.div`
  ${CaptionStyle};
  position: absolute;
  background-color: #38a1cca1;
  bottom: -100%;
  transition-delay: 0.3s;
  ${ImageContainer}:hover & {
    bottom: 0;
    transition-delay: 0s;
  }
`;
const Title5 = styled.h3`
  ${TitleStyle};
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.3s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s 0.3s ease;
  }
`;
const Subtitle5 = styled.p`
  ${SubtitleStyle};
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.3s ease;
  ${ImageContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.3s 0.3s ease;
  }
`;
const ImageContainer6 = styled.div`
  ${ImageContainerStyle};
  overflow: hidden;
  :before {
    content: "";
    position: absolute;
    bottom: -210%;
    right: -100%;
    width: 160%;
    height: 220%;
    transform: rotate(45deg);
    transition: all 0.5s ease;
    background-color: #d0c525b3;
  }
  :hover {
    :before {
      bottom: -50%;
      right: -50%;
    }
  }
`;
const Caption6 = styled.div`
  ${CaptionStyle};
`;
const Title6 = styled.h3`
  ${TitleStyle};
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: absolute;
  top: -100%;
  right: -100%;
  transform: rotate(45deg);
  padding: 1rem 0;
  transition: all 0.4s ease;

  ${ImageContainer6}:hover & {
    top: 5%;
    right: 0;
    transform: rotate(0deg);
    transition: all 0.4s 0.2s ease;
  }
`;
const Subtitle6 = styled.p`
  ${SubtitleStyle};
  width: 100%;
  position: absolute;
  left: -100%;
  bottom: -100%;
  transform: rotate(45deg);
  transition: all 0.4s ease;

  ${ImageContainer6}:hover & {
    left: 0;
    bottom: 30%;
    transform: rotate(0deg);
    transition: all 0.4s 0.2s ease;
    color: black;
  }
`;
const Button = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-size: 18px;
  line-heigth: 13px;
  font-weight: normal;
  padding: 1rem;
  position: absolute;
  left: -100%;
  bottom: -100%;
  transform: rotate(45deg);
  transition: all 0.4s ease;
  background-color: rgba(0, 0, 0, 0.8);
  ${ImageContainer6}:hover & {
    left: 30%;
    bottom: 10%;
    transform: rotate(0deg);
    transition: all 0.4s 0.2s ease;
  }
`;
const ImageContainer7 = styled.div`
  ${ImageContainerStyle};
  background-color: #252525;
`;
const Img7 = styled.img`
  ${ImgStyle};
  transition-delay: 0.3s;
  ${ImageContainer7}:hover & {
    transform: scale(0);
    transition-delay: 0s;
  }
`;
const Caption7 = styled.div`
  ${CaptionStyle};
  transform: scale(0);
  position: absolute;
  top: 0;
  left: 0;
  ${ImageContainer7}:hover & {
    transform: scale(1) rotate(360deg);
    transition-delay: 0.3s;
  }
`;
const Title7 = styled.h3`
  ${TitleStyle};
  position: absolute;
  top: 5%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 1rem 0;
  opacity: 0;
  transition: all 0.3s ease;
  ${ImageContainer7}:hover & {
    opacity: 1;
    transition-delay: 0.6s;
  }
`;
const Subtitle7 = styled.p`
  ${SubtitleStyle};
  position: absolute;
  left: 0;
  bottom: 30%;
  width: 100%;
  padding: 1rem 0;
  opacity: 0;
  transition: all 0.3s ease;
  ${ImageContainer7}:hover & {
    opacity: 1;
    transition-delay: 0.6s;
  }
`;
const Img8 = styled.img`
  ${ImgStyle};
`;
const Caption8 = styled.div`
  ${CaptionStyle};
  position: absolute;
  left: 0;
  top: 0;
  transform: scale(10);
  opacity: 0;
  ${ImageContainer7}:hover & {
    transform: scale(1);
    opacity: 1;
  }
`;
const Title8 = styled.h3`
  ${TitleStyle};
  position: absolute;
  top: 5%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  padding: 1rem 0;
`;
const Subtitle8 = styled.p`
  ${SubtitleStyle};
`;
