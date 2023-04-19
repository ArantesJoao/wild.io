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

import { Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";
import { GlobalProvider } from "./globalContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Routes />
        <StatusBar style="auto" />
      </GlobalProvider>
    </ThemeProvider>
  );
}
