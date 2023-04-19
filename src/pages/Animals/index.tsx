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
import { useLocation } from "react-router-dom";

export default function Animals() {
  const { state } = useLocation();

  return (
    <Layout headerName="Pet Mo Ko" user={state.name}>
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
