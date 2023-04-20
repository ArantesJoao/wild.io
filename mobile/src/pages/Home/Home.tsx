import { Platform } from "react-native";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { ParamListBase, useNavigation } from "@react-navigation/native";

import { MainMenuButton } from "../../components/MainMenuButton";
import {
  Container,
  Title,
  Content,
  ButtonSection,
  SafeView,
  Map,
  NoLocationAccessWarning,
  NoLocationContainer,
  NoLocationText,
  ScreenHeader,
  LogoutIcon,
  LogoutButton,
} from "./style";

import { customMap } from "../../utils/mapStyle";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";
import { useGlobalContext } from "../../../globalContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NoLocationAccessModal from "../../components/NoLocationAccessModal";
import { NoAccessIOSTemplate } from "../../components/NoAccessIOSTemplate";
import { NoAccessAndroidTemplate } from "../../components/NoAccessAndroidTemplate";

let mapStyle = customMap;

export function Home() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [noAccessModalVisible, setNoAccessModalVisible] = useState(false);

  const [errorMsg, setErrorMsg] = useState(String);

  const currentUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("O aplicativo não tem acesso à localização do usuário");
      return;
    }

    let location = await Location.getLastKnownPositionAsync();
    setMapRegion({
      latitude:
        location != null ? location.coords.latitude : -27.597664753388656,
      longitude:
        location != null ? location.coords.longitude : -48.52063085134813,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    currentUserLocation();
  }, []);

  function AskLocalPermission() {
    setNoAccessModalVisible(!noAccessModalVisible);
  }

  const { name, isUserLogged, setIsUserLogged, setId, setName, setEmail } =
    useGlobalContext();

  function handleLogout() {
    setIsUserLogged(false);
    setId("");
    setName("");
    setEmail("");
  }

  return (
    <SafeView>
      <Container>
        {isUserLogged ? (
          <ScreenHeader>
            <Title>Olá, {name}!</Title>
            <LogoutButton onPress={handleLogout}>
              <LogoutIcon name="logout" size={28} />
            </LogoutButton>
          </ScreenHeader>
        ) : (
          <ScreenHeader>
            <Title>Olá, seja bem-vindo!</Title>
          </ScreenHeader>
        )}
        <Content>
          <Map
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            region={mapRegion}
            showsUserLocation={true}
          ></Map>
          <NoLocationAccessModal
            visible={noAccessModalVisible}
            onClose={() => {
              setNoAccessModalVisible(false);
            }}
          >
            <>
              {Platform.OS === "ios" ? (
                <NoAccessIOSTemplate />
              ) : (
                <NoAccessAndroidTemplate />
              )}
            </>
          </NoLocationAccessModal>
          {errorMsg !== "" && (
            <NoLocationContainer
              onPress={() => {
                AskLocalPermission();
              }}
              activeOpacity={0.7}
            >
              <NoLocationAccessWarning name="exclamation-triangle" />
              <NoLocationText>
                Acesso à localização não concedido
              </NoLocationText>
            </NoLocationContainer>
          )}
          <ButtonSection>
            <MainMenuButton
              name="Visualizar avistamentos"
              icon={wildLifeIcon}
              onPress={() => navigate("sightings")}
            />
            <MainMenuButton
              name="Visualizar parques "
              icon={parksIcon}
              onPress={() => navigate("nearest_parks")}
            />
            <MainMenuButton
              name="Visualizar flora "
              icon={parksIcon}
              onPress={() => navigate("flora_sightings")}
            />
          </ButtonSection>
        </Content>
      </Container>
    </SafeView>
  );
}
