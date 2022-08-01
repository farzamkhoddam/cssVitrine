import { css } from "styled-components/macro";

export const ImageContainerStyle = css`
  width: 300px;
  height: 300px;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
`;
export const ImgStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;
export const CaptionStyle = css`
  width: 100%;
  height: 100%;
  background-color: #00000091;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  transition: all 0.3s ease;
`;
export const TitleStyle = css`
  font-size: 21px;
  line-heigth: 14px;
  font-weight: normal;
`;
export const SubtitleStyle = css`
  font-size: 17px;
  line-heigth: 12px;
  font-weight: normal;
  padding: 0 0.5rem;
`;
