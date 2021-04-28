import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import wateringImg from "../../assets/watering.png";

import {
  ContainerSafeAreaView,
  Container,
  Title,
  ImgLogo,
  SubTitle,
  ButtonNext,
} from "./styles";

const Welcome: React.FC = () => {
  return (
    <ContainerSafeAreaView>
      <Container>
        <Title>
          Gerencie {"\n"} suas pantas {"\n"} de forma fácil
        </Title>

        <ImgLogo source={wateringImg} />

        <SubTitle>
          Não esqueça mais de regrar suas {"\n"} plantas. Nós cuidamos de
          lembrar você sempre que precisar.
        </SubTitle>

        <ButtonNext activeOpacity={0.7}>
          <Feather name="chevron-right" size={32} color="#fff" />
        </ButtonNext>
      </Container>
    </ContainerSafeAreaView>
  );
};

export default Welcome;
