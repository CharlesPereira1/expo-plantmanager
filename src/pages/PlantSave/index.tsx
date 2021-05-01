import React from "react";

import waterdrop from "../../assets/waterdrop.png";
import Button from "../../components/Button";

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

const PlantSave: React.FC = () => {
  return (
    <Container>
      <PlantInfo>
        <ImageSVG uri="" />

        <PlantName>Nome da Planta</PlantName>

        <PlantAbout>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nostrum nihil nemo, ipsa sunt harum placeat corporis magnam iusto?
        </PlantAbout>
      </PlantInfo>

      <Controller>
        <TipController>
          <AvatarPlant source={{}} />

          <TipText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </TipText>
        </TipController>

        <AlertLabel>Escolha o melhor ho´rario para ser lembrado:</AlertLabel>

        <Button title="Cadastrar planta" actived onPress={() => {}} />
      </Controller>
    </Container>
  );
};

export default PlantSave;
