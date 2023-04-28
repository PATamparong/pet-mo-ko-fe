import React, { useState } from "react";
import { Center, Space } from "../../styles";
import Welcome from "../../assets/icons/welcome.svg";
import { Button, Container, Input } from "../../components";
import { useNavigate } from "react-router-dom";
import SplitPane from "../../components/SplitPane";
import { alignment, justifyContent } from "../../themes";
import { useAppContext } from "../../providers";

export default function Home() {
  const navigate = useNavigate();
  const [guestName, setGuestName] = useState<string>("");

  const handleNavigate = () => {
    if (guestName) {
      navigate("/animals");
    }
  };

  return (
    <div>
      <SplitPane
        left={
          <Center VH>
            <img
              src={Welcome}
              width="50"
              alt="Logo"
              className="mr-1"
              style={{
                height: "100vh",
                width: "100%",
                backgroundColor: "grey",
              }}
            />
          </Center>
        }
        right={
          <Container
            alignItem={alignment.center}
            justifyContent={justifyContent.center}
            marginTop={30}
            marginLeft={25}
          >
            <Input
              placeholder="Guest Name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
            <Space T={5} />
            <Button name="GET STARTED" color="white" onClick={handleNavigate} />
          </Container>
        }
      />
    </div>
  );
}
