import React, { useCallback, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Alert, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { isBefore, format } from "date-fns";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";

import { PlantsProps } from "../../libs/types";
import { loadPlant, savePlant } from "../../libs/storage";

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
  const navigation = useNavigation();

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

  const handleSave = useCallback(async () => {
    await savePlant({
      ...plant,
      dateTimeNotification: selectedDateTime,
    });

    navigation.navigate("Confirmation", {
      title: "Tudo certo",
      buttonTitle: "Muito obrigado",
      icon: "hug",
      nextScreen: "MyPlants",
      subtitle:
        "Fique tranquilo que sempre vamos lembrar você de cuidar das sua plantinha com muito cuidado.",
    });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
          <AlertLabel>Escolha o melhor horario para ser lembrado:</AlertLabel>

          {showDateTime && (
            <DateTimePicker
              style={
                Platform.OS === "ios" && {
                  width: 320,
                  height: 150,
                  backgroundColor: "white",
                }
              }
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
            onPress={handleSave}
          />
        </Controller>
      </Container>
    </ScrollView>
  );
};

export default PlantSave;
