import React from "react";
import { Center } from "../../styles";
import Welcome from "../../assets/icons/welcome.svg";

export default function Dashboard() {
  return (
    <Center VH>
      <img
        src={Welcome}
        width="50"
        alt="Daily Dev Tips Logo"
        className="mr-1"
        style={{ width: "50%", marginTop: "5%" }}
      />
    </Center>
  );
}
