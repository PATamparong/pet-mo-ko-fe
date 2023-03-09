import { Input } from "../../components";
import React from "react";
import { Center, Space } from "../../styles";

export default function Animals() {
  return (
    <div>
      <h4>Animal</h4>
      <Input />
      <Space T={4} />
      <Center VH>
        <button>hello</button>
      </Center>
    </div>
  );
}
