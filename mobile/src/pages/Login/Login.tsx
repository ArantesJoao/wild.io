import React, { useEffect, useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {
  Caption,
  Container,
  GoogleIcon,
  LoginButton,
  LoginText,
  Logo,
  SafeView,
  Title,
  WildIoText,
} from "./style";

import logoPath from "../../assets/icon.png";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Login() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <SafeView>
      <Container>
        <Logo source={logoPath} />
        <Title>
          Faça parte do <WildIoText>Wild.io</WildIoText>
        </Title>
        <Caption>Descubra a Natureza, Compartilhe a Vida</Caption>
        <LoginButton onPress={() => navigate("home")}>
          <GoogleIcon name="google" size={24} color="black">
            <LoginText>Login com Google</LoginText>
          </GoogleIcon>
        </LoginButton>
      </Container>
    </SafeView>
  );
}
