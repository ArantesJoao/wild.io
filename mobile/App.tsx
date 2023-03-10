import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/index";

import { Routes } from "./src/routes";
import { Loading } from "./src/pages/Loading/Loading";

import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

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
