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
  const { animalData, setAnimals, setAnimalData } = useAnimalContext();
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const handleAddAnimal = () => {
    if (name && age && description) {
      setAnimals({ name, age, description });
      setAnimalData([{ name, age, description }, ...animalData]);
      setName("");
      setAge(0);
      setDescription("");
    }
  };

  return (
    <Layout headerName="Pet Mo Ko">
      <Center VH>
        <Container>
          <Label name="Name:" />
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Space T={10} />
          <Label name="Age:" />
          <Input
            placeholder="Age"
            type={"number"}
            value={age!}
            onChange={(e) => setAge(e.target.valueAsNumber)}
          />
          <Space T={5} />
          <Label name="Description:" important={true} />
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Space T={10} />
          <Label name="Picture:" />
          <Input type={"file"} onChange={() => {}} />
          <Space T={10} />
          <Center STRETCH>
            <Button name="Add Animal" color="white" onClick={handleAddAnimal} />
          </Center>
        </Container>
      </Center>
      <Space T={2} />
      <Center VH>
        <Container>
          <AnimalList animals={animalData} />
        </Container>
      </Center>
    </Layout>
  );
}
