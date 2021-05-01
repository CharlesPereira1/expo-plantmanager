import React, { useCallback, useEffect, useState } from "react";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import Header from "../../components/Header";
import PlantCardSecundary from "../../components/PlantCardSecundary";
import Load from "../../components/Load";

import { loadPlant } from "../../libs/storage";
import { PlantsProps } from "../../libs/types";

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

const MyPlants: React.FC = () => {
  const [myPlants, setMyPlants] = useState<PlantsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWater, setNextWater] = useState<string>();

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
          renderItem={({ item }) => <PlantCardSecundary data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </Plants>
    </Container>
  );
};

export default MyPlants;
