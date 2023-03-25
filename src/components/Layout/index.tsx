import React from "react";
import "../../assets/styles/layout.css";
import Footer from "../Footer";
import Header from "../Header";
import { Space } from "../../styles";

type Props = {
  placeholder?: string;
  children: any;
  headerName?: string;
};

export default function Layout(props: Props) {
  const { children, headerName } = props;

  return (
    <div className="layout">
      <Header>
        <h4>{headerName}</h4>
      </Header>
      <div className="content">
        <Space T={5} />
        {children}
        <Space T={5} />
      </div>
      <Footer />
    </div>
  );
}
