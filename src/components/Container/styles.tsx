import styled from "styled-components";

type Props = {
  alignItem?: string;
  justifyContent?: string;
  marginTop?: number;
  withMargin?: boolean;
};

export const Container = styled.div<Props>`
  align-items: ${(props) => props.alignItem};
  justify-content: ${(props) => props.justifyContent};

  ${(props) =>
    props.withMargin && `margin: ${(props: any) => props.marginTop}% 0% 0px;`}
`;
