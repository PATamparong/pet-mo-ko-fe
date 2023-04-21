import styled from "styled-components";

type Props = {
  alignItem?: string;
  justifyContent?: string;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
};

export const Container = styled.div<Props>`
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};
  margin: ${(props: any) => props.marginTop ?? 0}%
    ${(props: any) => props.marginRight ?? 0}%
    ${(props: any) => props.marginBottom ?? 0}%
    ${(props: any) => props.marginLeft ?? 0}%;

  @media (max-width: 600px) {
    margin: 50px 0px 50px 0px;
  }
`;
