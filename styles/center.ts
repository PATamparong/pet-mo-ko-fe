import styled, { css } from "styled-components";

interface PropTypes {
  V: any;
  H: any;
}

export const CenterV = css`
  display: flex;
  align-items: center;
`;

export const CenterH = css`
  display: flex;
  justify-content: center;
`;

export const CenterVH = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div<PropTypes>`
  /* This is an example of a nested interpolation */
  ${(props) => (props.V ? CenterV : "")}
  ${(props) => (props.H ? CenterH : "")}
`;
