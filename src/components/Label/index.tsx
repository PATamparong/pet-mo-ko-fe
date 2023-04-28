import React from "react";
import * as S from "./styles";

type Props = {
  name: string;
  important?: boolean;
};

export default function Label(props: Props) {
  const { name, important } = props;

  return (
    <div className="relative h-7 w-7">
      <S.Text className="absolute left-0 top-0 h-10 w-10">
        {name} {important ? "*" : false}
      </S.Text>
    </div>
  );
}
