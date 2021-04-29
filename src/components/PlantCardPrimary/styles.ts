import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 10px 0;
  align-items: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: ${colors.greenDark};
  font-family: ${fonts.heading};
  margin: 16px 0;
`;

export const ImageSVG = styled(SvgFromUri)``;
