import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import { Container, ButtonText, ImageSVG } from "./styles";

interface PlantProps extends RectButtonProps {
  data: {
    name?: string;
    photo: string;
  };
}

const PlantCardPrimary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <ImageSVG uri={data.photo} width={70} height={70} />
      <ButtonText>{data.name}</ButtonText>
    </Container>
  );
};

export default PlantCardPrimary;
