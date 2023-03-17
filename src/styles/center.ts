import styled, { css } from "styled-components";

interface PropTypes {
  V?: any;
  H?: any;
  VH?: any;
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
  ${(props: any) => (props.V ? CenterV : "")}
  ${(props: any) => (props.H ? CenterH : "")}
  ${(props: any) => (props.VH ? CenterVH : "")}
`;
