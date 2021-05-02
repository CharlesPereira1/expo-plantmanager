import React from "react";
import { RectButtonProps, Swipeable } from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import {
  Container,
  ButtonTitle,
  ImageSVG,
  Details,
  DetailLabel,
  DetailHour,
} from "./styles";

interface PlantProps extends RectButtonProps {
  data: {
    name?: string;
    photo: string;
    hour: string;
  };
}

const PlantCardSecundary: React.FC<PlantProps> = ({ data, ...rest }) => {
  return (
    <Swipeable>
      <Container {...rest}>
        <ImageSVG uri={data.photo} width={50} height={50} />
        <ButtonTitle>{data.name}</ButtonTitle>

        <Details>
          <DetailLabel>Regar ás</DetailLabel>
          <DetailHour>{data.hour}</DetailHour>
        </Details>
      </Container>
    </Swipeable>
  );
};

export default PlantCardSecundary;
