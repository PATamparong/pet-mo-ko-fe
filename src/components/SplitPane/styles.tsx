import styled from "styled-components";

type Props = { alignItem?: string; justifyContent?: string };

export const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
export const LeftPane = styled.div<Props>`
  min-width: 50%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const RightPane = styled.div<Props>`
  min-width: 50%;
  height: auto;
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};
`;
