import styled from "styled-components/native";
import { SvgFromUri } from "react-native-svg";
import colors from "../../styles/colors";
import { getBottomSpace } from "react-native-iphone-x-helper";
import fonts from "../../styles/fonts";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${colors.shape};
`;

export const PlantInfo = styled.View`
  /* flex: 1; */
  padding: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ImageSVG = styled(SvgFromUri)`
  width: 150px;
  height: 150px;
`;

export const PlantAbout = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.heading};
  text-align: center;
  margin-top: 10px;
`;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const Controller = styled.View`
  padding: 20px 20px 0 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  /* padding-bottom: ${`${getBottomSpace()}px` || "20px"}; */
  background-color: ${colors.white};
`;

export const TipController = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blueLight};

  padding: 20px;
  border-radius: 20px;
  position: relative;
  bottom: 75px;
`;

export const AvatarPlant = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  font-size: 17px;
  color: ${colors.blue};
`;

export const AlertLabel = styled.Text`
  /* margin: 5px 0; */
  font-family: ${fonts.complement};
  font-size: 12px;
  color: ${colors.heading};
  text-align: center;
  position: relative;
  bottom: 45px;
`;

export const DatePickerButtonAndroid = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DatePickerTextAndroid = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`;
