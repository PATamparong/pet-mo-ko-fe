import React from "react";
import { Center } from "../../styles";
import Welcome from "../../assets/icons/welcome.svg";
import { Layout } from "../../components";

export default function Dashboard() {
  return (
    <Layout>
      <Center VH>
        <img
          src={Welcome}
          width="50"
          alt="Logo"
          className="mr-1"
          style={{
            height: "50vh",
            width: "50%",
          }}
        />
      </Center>
    </Layout>
  );
}
