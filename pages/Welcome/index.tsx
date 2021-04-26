import React from "react";
import { View } from "react-native";

import { Container, WelcomeDescription } from "./styles";

const Welcome: React.FC = () => {
  return (
    <Container>
      <WelcomeDescription>
        Gerencie suas pantas de forma fácil
      </WelcomeDescription>
    </Container>
  );
};

export default Welcome;
