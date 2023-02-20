import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/index";

import { Loading } from "./src/pages/Loading/Loading";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Volkhov_400Regular } from "@expo-google-fonts/volkhov";
import { Home } from "./src/pages/Home/Home";
import { Sightings } from "./src/pages/Sightings/Sightings";

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_500Medium, Volkhov_400Regular });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Sightings />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
