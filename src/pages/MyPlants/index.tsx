import React, { useCallback, useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import Header from "../../components/Header";
import PlantCardSecundary from "../../components/PlantCardSecundary";
import Load from "../../components/Load";

import { loadPlant, removePlants } from "../../libs/storage";
import { PlantsProps, StoragePlantProps } from "../../libs/types";

import waterdrop from "../../assets/waterdrop.png";

import {
  Container,
  SpotLight,
  SpotLighImage,
  SpotLightText,
  Plants,
  PlantText,
  PlantList,
} from "./styles";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWater, setNextWater] = useState<string>();

  const handleRemove = useCallback((plant) => {
    Alert.alert("Remover", `Deseja realmente remover a planta ${plant.name}?`, [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          await removePlants(plant.id);

          setMyPlants((oldData) =>
            oldData.filter((item) => item.id !== plant.id)
          );
        },
      },
    ]);
  }, []);

  const loadStorageData = useCallback(async () => {
    const plantsStoraged = await loadPlant();

    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    setNextWater(
      `Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime}.`
    );

    setMyPlants(plantsStoraged);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStorageData();
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Header />

      <SpotLight>
        <SpotLighImage source={waterdrop} />

        <SpotLightText>{nextWater}</SpotLightText>
      </SpotLight>

      <Plants>
        <PlantText>Próximas regadas</PlantText>

        <PlantList
          data={myPlants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlantCardSecundary
              data={item}
              handleRemove={() => handleRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
