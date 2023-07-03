import React, { useState } from "react";
import { Center, Space } from "../../styles";
import { Button, Container, Input } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState<string>("");

  const handleNavigate = () => {
    if (guestName) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <Space T={20} />
      <Center VH>
        <Container>
          <Input
            placeholder="Guest Name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
          <Space T={5} />
          <Button name="GET STARTED" color="white" onClick={handleNavigate} />
        </Container>
      </Center>
    </div>
  );
}
