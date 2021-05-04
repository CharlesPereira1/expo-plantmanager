import React from "react";
import { Animated } from "react-native";
import { RectButtonProps, Swipeable } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import colors from "../../styles/colors";

import {
  ButtonView,
  ButtonRemove,
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
  handleRemove?: () => void;
}

const PlantCardSecundary: React.FC<PlantProps> = ({
  data,
  handleRemove,
  ...rest
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <ButtonView>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </ButtonView>
        </Animated.View>
      )}
    >
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
