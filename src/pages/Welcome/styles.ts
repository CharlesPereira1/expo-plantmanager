import styled from "styled-components/native";
import { Dimensions } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const ContainerSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
  font-family: ${fonts.heading};
  line-height: 38px;
`;

export const ImgLogo = styled.Image`
  height: ${`${Dimensions.get("window").width * 0.7}px`};
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  font-family: ${fonts.text};
  color: ${colors.heading};
`;

export const ButtonNext = styled.TouchableOpacity`
  background: ${colors.green};
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  width: 56px;
  height: 56px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;
