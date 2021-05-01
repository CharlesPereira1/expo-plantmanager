import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "../../components/Button";

import { ConfirmationProps } from "../../libs/types";

import { Container, Content, Emoji, Title, SubTitle, Footer } from "./styles";

const emojins = {
  hug: "🤗",
  smile: "😄",
};

const Confirmation: React.FC = () => {
  const navigate = useNavigation();
  const routes = useRoute();

  const {
    title,
    buttonTitle,
    icon,
    nextScreen,
    subtitle,
  } = routes.params as ConfirmationProps;

  const handleStart = () => {
    navigate.navigate(nextScreen);
  };

  return (
    <Container>
      <Content>
        <Emoji>{emojins[icon]}</Emoji>

        <Title>{title}</Title>

        <SubTitle>{subtitle}</SubTitle>
        <Footer>
          <Button title={buttonTitle} actived onPress={handleStart} />
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
