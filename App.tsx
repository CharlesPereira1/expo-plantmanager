import "react-native-gesture-handler";

import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import * as Notifications from "expo-notifications";

import Routes from "./src/routes";

import { PlantsProps } from "./src/libs/types";

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantsProps;
      }
    );

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
};

export default App;
