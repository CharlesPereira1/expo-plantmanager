import React, { useCallback, useState } from "react";
import { Alert, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoute } from "@react-navigation/native";
import { isBefore, format } from "date-fns";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";

import { PlantsProps } from "../../libs/types";

import {
  Container,
  PlantInfo,
  ImageSVG,
  PlantName,
  PlantAbout,
  Controller,
  TipController,
  AvatarPlant,
  TipText,
  AlertLabel,
  DatePickerButtonAndroid,
  DatePickerTextAndroid,
} from "./styles";

interface Params {
  plant: PlantsProps;
}

const PlantSave: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDateTime, setShowDateTime] = useState(Platform.OS === "ios");

  const route = useRoute();
  const { plant } = route.params as Params;

  const handleOpenDatePickerForAndroid = useCallback(() => {
    setShowDateTime((oldState) => !oldState);
  }, []);

  const handleChangeTime = useCallback((_, dateTime: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDateTime((oldState) => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());

      return Alert.alert("Aviso", "Escolha uma hora no futuro!");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }, []);

  return (
    <Container>
      <PlantInfo>
        <ImageSVG uri={plant.photo} />

        <PlantName>{plant.name}</PlantName>

        <PlantAbout>{plant.about}</PlantAbout>
      </PlantInfo>

      <Controller>
        <TipController>
          <AvatarPlant source={waterdrop} />

          <TipText>{plant.water_tips}</TipText>
        </TipController>

        <AlertLabel>Escolha o melhor ho´rario para ser lembrado:</AlertLabel>

        {showDateTime && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display="spinner"
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === "android" && (
          <DatePickerButtonAndroid
            onPress={() => handleOpenDatePickerForAndroid()}
          >
            <DatePickerTextAndroid>{`Mudar ${format(
              selectedDateTime,
              "HH:mm"
            )}`}</DatePickerTextAndroid>
          </DatePickerButtonAndroid>
        )}

        <Button
          title="Cadastrar planta"
          style={{ width: "100%" }}
          actived
          onPress={() => {}}
        />
      </Controller>
    </Container>
  );
};

export default PlantSave;
