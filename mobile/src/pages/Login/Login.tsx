import React, { useEffect, useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {
  Caption,
  Container,
  GoogleIcon,
  LoginButton,
  LoginButtonContent,
  LoginText,
  Logo,
  NoLoginText,
  NoLoginTouchable,
  SafeView,
  Title,
  WildIoText,
} from "./style";

import logoPath from "../../assets/icon.png";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import * as AuthSession from "expo-auth-session";
import { useGlobalContext } from "../../../globalContext";
import { TouchableOpacity } from "react-native";

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function Login() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { setId, setName, setEmail } = useGlobalContext(); // Just so I can access this data in any screen

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID =
        "320424985365-u287vmlesm31af6e29a3abbjh1o1rdgs.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@joaoarantes/Wild.io";
      const SCOPE = encodeURI("profile email");
      const RESPONSE_TYPE = "token";

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const user = await response.json();

        // Setting these data as global states
        setId(user.id);
        setName(user.given_name);
        setEmail(user.email);

        navigate("home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeView>
      <Container>
        <Logo source={logoPath} />
        <Title>
          Faça parte do <WildIoText>Wild.io</WildIoText>
        </Title>
        <Caption>Descubra a Natureza, Compartilhe a Vida</Caption>
        <LoginButton onPress={handleGoogleSignIn}>
          <LoginButtonContent>
            <GoogleIcon name="google" size={24} />
            <LoginText>Login com Google</LoginText>
          </LoginButtonContent>
        </LoginButton>
        <NoLoginTouchable onPress={() => navigate("home")}>
          <NoLoginText>Seguir sem autenticação</NoLoginText>
        </NoLoginTouchable>
      </Container>
    </SafeView>
  );
}
