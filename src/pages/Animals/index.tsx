import {
  Input,
  Layout,
  Button,
  Container,
  TextArea,
  Label,
} from "../../components";
import AnimalList from "./components/AnimalList";
import React, { useState } from "react";
import { Center, Space } from "../../styles";
import { useAnimalContext } from "../../providers";

export default function Animals() {
  const { animals, setAnimals } = useAnimalContext();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const handleAddAnimal = () => {
    if (!name) return;
    if (!age && age <= 0) return;

    setAnimals({ name, age, description });
    setName("");
    setAge(0);
    setDescription("");
  };

  return (
    <Layout headerName="Pet Mo Ko">
      <Center VH>
        <Container>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Space T={10} />
          <Input
            placeholder="Age"
            type={"number"}
            value={age!}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <Space T={5} />
          <TextArea
            label="Description:"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Space T={10} />
          <Center STRETCH>
            <Button name="Add Animal" color="white" onClick={handleAddAnimal} />
          </Center>
        </Container>
      </Center>
      <Space T={2} />
      <Center VH>
        <Container>
          <AnimalList animals={animals} />
        </Container>
      </Center>
    </Layout>
  );
}
