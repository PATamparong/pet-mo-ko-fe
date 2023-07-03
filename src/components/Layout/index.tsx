import React from "react";
import "../../assets/styles/layout.css";
import Footer from "../Footer";
import Header from "../Header";
import { Space } from "../../styles";

type Props = {
  placeholder?: string;
  children: any;
  headerName?: string;
  user?: string;
};

export default function Layout(props: Props) {
  const { children, headerName, user } = props;

  return (
    <div className="layout">
      <div className="content">
        <Header user={user}>
          <h4>{headerName}</h4>
        </Header>
        <Space T={5} />
        {children}
        <Space T={5} />
      </div>
      <Footer />
    </div>
  );
}
