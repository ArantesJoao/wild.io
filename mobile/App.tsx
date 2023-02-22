import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/index";

import { Routes } from "./src/routes";
import { Loading } from "./src/pages/Loading/Loading";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Volkhov_400Regular } from "@expo-google-fonts/volkhov";

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_500Medium, Volkhov_400Regular });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
