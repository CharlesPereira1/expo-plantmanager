import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { plantsEnvironments, plantsService } from "../../services/api";
import { EnviromentsProps, PlantsProps } from "../../libs/types";

import Header from "../../components/Header";
import EnviromentButton from "../../components/EnviromentButton";
import PlantCardPrimary from "../../components/PlantCardPrimary";
import Load from "../../components/Load";
import colors from "../../styles/colors";

import {
  Container,
  ContentHeader,
  Title,
  Subtitle,
  EnviromentList,
  EnviromentListPlants,
} from "./styles";

const PlantSelect: React.FC = () => {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [enviromentsSelect, setEnviromentsSelect] = useState("all");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigate = useNavigation();

  const handlePlantSelect = useCallback((plant) => {
    navigate.navigate("PlantSave", { plant });
  }, []);

  const handleEnviromentSelected = useCallback(
    (enviroment) => {
      setEnviromentsSelect(enviroment);

      if (enviroment === "all") {
        return setFilteredPlants(plants);
      }

      const filtered = plants.filter((plant) =>
        plant.environments.includes(enviroment)
      );

      setFilteredPlants(filtered);
    },
    [filteredPlants, plants]
  );

  const handleFetchMore = useCallback(
    (distance) => {
      if (distance < 1) return;
      setPage((oldValue) => oldValue + 1);
    },
    [page, loadingMore]
  );

  const handleServicePlants = useCallback(() => {
    plantsService(page)
      .then((res) => {
        const { data } = res;

        if (!data) return setLoadingMore(false);

        if (page > 1) {
          setLoadingMore(true);
          setPlants((oldValue) => [...oldValue, ...data]);
          setFilteredPlants((oldValue) => [...oldValue, ...data]);
          return;
        }

        setPlants(res.data);
        setFilteredPlants(res.data);
      })
      .finally(() => {
        setLoadingMore(false);
      });
  }, [page, plants, filteredPlants, loadingMore]);

  useEffect(() => {
    if (page > 1) {
      handleServicePlants();
    }
  }, [page]);

  useEffect(() => {
    plantsEnvironments()
      .then((res) => {
        const { data } = res;
        setEnviroments([{ key: "all", title: "Todos" }, ...data]);
      })
      .catch((err) => {
        console.log(err);
      });

    handleServicePlants();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <ContentHeader>
        <Header />
        <Title>Em qual ambiente</Title>
        <Subtitle>você quer colocar sua planta?</Subtitle>
      </ContentHeader>

      <EnviromentList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={enviroments}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => (
          <EnviromentButton
            title={item.title}
            active={item.key === enviromentsSelect}
            onPress={() => {
              handleEnviromentSelected(item.key);
            }}
          />
        )}
      />
      <EnviromentListPlants
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredPlants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <PlantCardPrimary
            data={item}
            onPress={() => handlePlantSelect(item)}
          />
        )}
        onEndReachedThreshold={0.1}
        onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
        ListFooterComponent={
          loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
        }
      />
    </Container>
  );
};

export default PlantSelect;
