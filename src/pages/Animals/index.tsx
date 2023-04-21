import {
  Input,
  Layout,
  Button,
  Container,
  TextArea,
  Label,
} from "../../components";
import React from "react";
import { Center, Space } from "../../styles";

export default function Animals() {
  return (
    <Layout headerName="Pet Mo Ko">
      <Center VH>
        <Container>
          <Input placeholder="Name" />
          <Space T={10} />
          <Input placeholder="Age" />
          <Space T={5} />
          <Label name="Description:" important={true} />
          <TextArea />
          <Space T={10} />
          <Center STRETCH>
            <Button name="Add Animal" color="white" />
          </Center>
        </Container>
      </Center>
    </Layout>
  );
}
