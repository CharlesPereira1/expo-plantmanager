import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const ButtonView = styled.View``;

export const ButtonRemove = styled(RectButton)`
  width: 100px;
  height: 90px;
  background: ${colors.red};
  margin-top: 15px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 15px;
`;

export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${colors.shape};
  border-radius: 20px;
  padding: 25px 10px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonTitle = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  font-size: 17px;
  color: ${colors.heading};
`;

export const ImageSVG = styled(SvgFromUri)``;

export const Details = styled.View`
  align-items: flex-end;
`;

export const DetailLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.bodyLight};
`;

export const DetailHour = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.bodyDark};
`;
