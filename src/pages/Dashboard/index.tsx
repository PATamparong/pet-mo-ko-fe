import React from "react";
import { Center, Space } from "../../styles";
import Welcome from "../../assets/icons/welcome.svg";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <Center VH>
        <img
          src={Welcome}
          width="50"
          alt="Daily Dev Tips Logo"
          className="mr-1"
          style={{ width: "50%", marginTop: "40%", position: "absolute" }}
        />
        <Space T={10} />
        <Center>
          <Button
            name="GET STARTED"
            color="white"
            onClick={() => navigate("/animals")}
          />
        </Center>
      </Center>
    </div>
  );
}
