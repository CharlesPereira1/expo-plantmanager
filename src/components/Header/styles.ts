import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: ${`${getStatusBarHeight()}px`};
`;

export const ProfileName = styled.View`
  flex-direction: column;
`;

export const Greeting = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const ProfileImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
