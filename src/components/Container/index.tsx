import React from "react";
import "../../assets/styles/container.css";
import * as S from "./styles";

type Props = {
  children: any;
  alignItem?: string;
  justifyContent?: string;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
};

export default function Container(props: Props) {
  const {
    children,
    alignItem,
    justifyContent,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
  } = props;

  return (
    <S.Container
      className="container max-w-sm rounded shadow-lg md:mx-auto"
      alignItem={alignItem}
      justifyContent={justifyContent}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
    >
      {children}
    </S.Container>
  );
}
