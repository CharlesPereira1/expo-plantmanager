import React from "react";
import { useRoute } from "@react-navigation/native";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";

import { PlantsProps } from "../../types";

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
} from "./styles";

interface Params {
  plant: PlantsProps;
}

const PlantSave: React.FC = () => {
  const route = useRoute();
  const { plant } = route.params as Params;

  console.log(route);

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
