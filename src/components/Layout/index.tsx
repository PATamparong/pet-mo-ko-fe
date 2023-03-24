import React from "react";
import "../../assets/styles/header.css";
import Footer from "../Footer";
import Header from "../Header";
import { Center, Space } from "../../styles";

type Props = {
  placeholder?: string;
  children: any;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div>
      <Header>
        <h4>Animals</h4>
      </Header>
      <Space T={3} />
      {children}
      <Space T={3} />
      <Footer />
    </div>
  );
}
