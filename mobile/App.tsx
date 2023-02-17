import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/theme/index";

import { Loading } from "./src/components/Loading/Loading";

import { useFonts, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Volkhov_400Regular } from "@expo-google-fonts/volkhov";

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_500Medium, Volkhov_400Regular });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
