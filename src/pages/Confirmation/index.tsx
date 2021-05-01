import React from "react";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";

import { Container, Content, Emoji, Title, SubTitle, Footer } from "./styles";

const Confirmation: React.FC = () => {
  const navigate = useNavigation();

  const handleStart = () => {
    navigate.navigate("PlantSelect");
  };

  return (
    <Container>
      <Content>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button title="Confirmar" actived onPress={handleStart} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
