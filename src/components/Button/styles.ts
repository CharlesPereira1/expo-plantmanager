import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface Props {
  actived?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ actived }) => (actived ? colors.green : "#999")};

  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
