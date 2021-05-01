import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantsProps, StoragePlantProps } from "./types";
import { format } from "date-fns";

export const savePlant = async (plant: PlantsProps): Promise<void> => {
  const data = await AsyncStorage.getItem("AsyncPlants");
  const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

  const newPlant = {
    [plant.id]: {
      data: plant,
    },
  };

  await AsyncStorage.setItem(
    "AsyncPlants",
    JSON.stringify({ ...newPlant, ...oldPlants })
  );
};

export const loadPlant = async (): Promise<PlantsProps[]> => {
  const data = await AsyncStorage.getItem("AsyncPlants");
  const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

  const plantsSorted = Object.keys(plants)
    .map((p) => p)
    .map((p) => {
      return {
        ...plants[p].data,
        hour: format(new Date(plants[p].data.dateTimeNotification), "HH:mm"),
      };
    })
    .sort((a, b) =>
      Math.floor(
        new Date(a.dateTimeNotification).getTime() / 1000 -
          Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
      )
    );

  return plantsSorted;
};
