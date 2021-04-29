import React from "react";

import Loading from "../../assets/load.json";

import { Container, Lottie } from "./styles";

const Load: React.FC = () => {
  return (
    <Container>
      <Lottie source={Loading} autoPlay loop />
    </Container>
  );
};

export default Load;
