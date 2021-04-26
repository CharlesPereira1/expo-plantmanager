import styled from "styled-components/native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  color: ${colors.heading};
  margin-top: 38px;
`;

export const ImgLogo = styled.Image``;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
`;

export const ButtonNext = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text``;
