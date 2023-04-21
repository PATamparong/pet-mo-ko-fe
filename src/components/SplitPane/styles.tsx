import styled from "styled-components";

type Props = {
  alignItem?: string;
  justifyContent?: string;
  windowHeight?: number;
  windowWidth?: number;
};

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  {console.log({${(props) => props.windowHeight! / 4 ?? 10}, ${(props) =>
  props.windowWidth ?? 100}})}
    @media
    (max-width: 600px) {
    box-sizing: border-box;
    flex-direction: column;
    height: ${(props) => props.windowHeight! / 4 ?? 10}px;
    width: ${(props) => props.windowWidth ?? 100}px;
  }
`;

export const LeftPane = styled.div<Props>`
  min-width: 50%;
  height: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    min-width: 60px;
  }
`;

export const RightPane = styled.div<Props>`
  min-width: 50%;
  height: auto;
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};

  @media (max-width: 600px) {
    min-width: 60px;
  }
`;
