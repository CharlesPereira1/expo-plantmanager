import React from "react";
import { SafeAreaView } from "react-native";

import wateringImg from "../../assets/watering.png";

import {
  Container,
  Title,
  ImgLogo,
  SubTitle,
  ButtonNext,
  ButtonText,
} from "./styles";

const Welcome: React.FC = () => {
  return (
    <Container>
      <SafeAreaView>
        <Title>
          Gerencie {"\n"} suas pantas {"\n"} de forma fácil
        </Title>

        <ImgLogo source={wateringImg} />

        <SubTitle>
          Não esqueça mais de regrar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </SubTitle>

        <ButtonNext>
          <ButtonText>{">"}</ButtonText>
        </ButtonNext>
      </SafeAreaView>
    </Container>
  );
};

export default Welcome;
