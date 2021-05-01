import { FlatList } from "react-native";
import styled from "styled-components/native";

import { PlantsProps } from "../../libs/types";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 0 30px;
  background-color: ${colors.background};
`;

export const SpotLight = styled.View`
  background-color: ${colors.blueLight};
  padding: 0 10px 0 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SpotLighImage = styled.Image`
  height: 60px;
  width: 60px;
`;

export const SpotLightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  margin: 20px 0;
`;

export const PlantList = styled(FlatList as new () => FlatList<PlantsProps>)`
  flex: 1;
`;
