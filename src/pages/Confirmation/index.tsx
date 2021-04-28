import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";

import { Container, Content, Emoji, Title, SubTitle, Footer } from "./styles";

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button title="Confirmar" />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
