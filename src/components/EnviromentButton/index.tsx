import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface EnviromentsButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

const EnviromentButton: React.FC<EnviromentsButtonProps> = ({
  title,
  active = false,
  ...rest
}) => {
  return (
    <Container active={active} {...rest}>
      <Title active={active}>{title}</Title>
    </Container>
  );
};

export default EnviromentButton;
