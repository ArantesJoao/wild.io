import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {
  BoldWarningText,
  Container,
  Title,
  InformationalText,
  SafeView,
  WarningContainer,
  WarningIcon,
  WarningText,
} from "./style";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BackButton } from "../../components/BackButton";

export function About() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeView>
      <Container>
        <WarningContainer>
          <WarningIcon name="warning" />
          <WarningText>
            O intuito do aplicativo é registrar avistamentos em{" "}
            <BoldWarningText>espaços urbanos</BoldWarningText>. Não encorajamos
            de forma alguma a invasão do habitat natural de quaisquer espécies.
          </WarningText>
        </WarningContainer>
        <Title>O que é o Wild.io</Title>
        <InformationalText>
          O Wild.io foi desenvolvido por João Víctor B. Arantes, atual graduando
          de Sistemas de Informação pela Universidade Federal de Santa Catarina
          como um Trabalho de Conclusão de Curso. O objetivo do projeto é ajudar
          com a educação e conscientização ambiental relacionada à flora e fauna
          silvestre por meio de registro, publicação e identificação de
          avistamentos.
        </InformationalText>
        <BackButton onPress={() => navigate("home")} />
      </Container>
    </SafeView>
  );
}
