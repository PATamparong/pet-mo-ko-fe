import React from "react";
import * as S from "./styles";
import { alignment, justifyContent } from "../../themes";

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export default function SplitPane(props: Props) {
  const { right, left } = props;

  return (
    <S.Wrapper>
      <S.LeftPane>{left}</S.LeftPane>
      <S.RightPane
        alignItem={alignment.center}
        justifyContent={justifyContent.center}
      >
        {right}
      </S.RightPane>
    </S.Wrapper>
  );
}
