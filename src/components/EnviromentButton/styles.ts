import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface EnviromentProps {
  active?: boolean;
}

export const Container = styled(RectButton)<EnviromentProps>`
  background-color: ${colors.shape};
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: ${colors.greenLight};
    `}
`;

export const Title = styled.Text<EnviromentProps>`
  color: ${colors.heading};
  font-family: ${fonts.text};

  ${({ active }) =>
    active &&
    css`
      font-family: ${fonts.heading};
      color: ${colors.greenDark};
    `};
`;
