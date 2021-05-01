import styled from "styled-components/native";
import { FlatList } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { EnviromentsProps as EnviProps, PlantsProps } from "../../libs/types";

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const ContentHeader = styled.View`
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const Subtitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${colors.heading};
`;

//trazer interface da listagem de propriedades do data
export const EnviromentList = styled(FlatList as new () => FlatList<EnviProps>)`
  flex: 1;
  max-height: 45px;
  padding-bottom: 5px;
  margin: 32px 0px 15px 32px;
`;

//trazer interface da listagem de propriedades do data
export const EnviromentListPlants = styled(
  FlatList as new () => FlatList<PlantsProps>
)`
  flex: 1;
  padding: 0 32px;
`;
