import styled from "styled-components";

interface PropTypes {
  T?: any;
  B?: any;
  L?: any;
  R?: any;
}

export const Space = styled.div<PropTypes>`
  margin: ${(props?: any) => `${props.T}% ${props.R}% ${props.B}% ${props.L}%`};
  margin-top: ${(props?: any) => `${props.T}%`};
  margin-bottom: ${(props?: any) => `${props.B}%`};
  margin-left: ${(props?: any) => `${props.L}%`};
  margin-right: ${(props?: any) => `${props.R}%`};
`;
