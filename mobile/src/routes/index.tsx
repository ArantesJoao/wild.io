import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import { AppRoutes } from "./app.routes";
import { Container } from "./style";

export function Routes() {
  return (
    <Container>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Container>
  );
}
