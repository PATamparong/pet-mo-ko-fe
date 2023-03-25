import styled, { css } from "styled-components";

interface PropTypes {
  V?: any;
  H?: any;
  VH?: any;
  LEFT?: any;
  STRETCH?: any;
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

export const AlignLeft = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Stretch = css`
  display: flex;
  align-self: stretch;
`;

export const Center = styled.div<PropTypes>`
  /* This is an example of a nested interpolation */
  ${(props: any) => (props.V ? CenterV : "")}
  ${(props: any) => (props.H ? CenterH : "")}
  ${(props: any) => (props.VH ? CenterVH : "")}
  ${(props: any) => (props.LEFT ? AlignLeft : "")}
  ${(props: any) => (props.STRETCH ? Stretch : "")}
`;
