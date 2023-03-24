import { Input, Layout, Button, Container } from "../../components";
import React from "react";
import { Center, Space } from "../../styles";

export default function Animals() {
  return (
    <Layout>
      <Center VH>
        <Container>
          <Center VH>
            <Input placeholder="please input animal name" />
          </Center>
          <Space T={10} />
          <Center VH>
            <Button name="Add Animal" color="white" />
          </Center>
        </Container>
      </Center>
    </Layout>
  );
}
