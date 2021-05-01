import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ButtonText } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  actived?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, actived, ...rest }) => {
  return (
    <Container {...rest} actived={actived}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
