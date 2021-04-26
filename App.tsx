import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Welcome from "./src/pages/Welcome";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Welcome />
    </View>
  );
};

export default App;
