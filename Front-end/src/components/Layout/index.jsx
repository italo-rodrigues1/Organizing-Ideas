import React from "react";

import Header from "../Header/index";
import IdeasList from "../IdeasList/index";

import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <IdeasList />
    </Container>
  );
}