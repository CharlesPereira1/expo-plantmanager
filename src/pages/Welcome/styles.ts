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
  /* margin-bottom: 50px; */
`;

export const ImgLogo = styled.Image`
  width: 292px;
  height: 284px;
  /* margin-bottom: 50px; */
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
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
