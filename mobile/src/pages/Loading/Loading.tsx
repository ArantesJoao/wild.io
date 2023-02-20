import { ActivityIndicator } from "react-native";
import { Container, Logo, Title } from "./style";
import { theme } from "../../theme";

import logoPath from "../../assets/icon.png";

export function Loading() {
  return (
    <Container>
      <Logo source={logoPath}></Logo>
      <Title>Wild.io</Title>
      <ActivityIndicator size="large" color={theme.colors.loading_bar} />
    </Container>
  );
}
