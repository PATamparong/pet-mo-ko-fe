import { Header, Input } from "../../components";
import React from "react";
import { Center, Space } from "../../styles";

export default function Animals() {
  return (
    <div>
      <Header>
        <h4>Animals</h4>
      </Header>
      <Space T={3} />
      <Input />
      <Space T={3} />
      <Center VH>
        <button>hello</button>
      </Center>
    </div>
  );
}
