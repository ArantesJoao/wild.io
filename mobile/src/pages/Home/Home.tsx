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
} from "./style";

import { customMap } from "../../utils/mapStyle";
import parksIcon from "../../assets/parks.png";
import wildLifeIcon from "../../assets/wildlife.png";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Platform, Text } from "react-native";
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

  return (
    <SafeView>
      <Container>
        <Title>Olá, boa tarde!</Title>
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
              name="Registrar avistamento"
              icon={wildLifeIcon}
              onPress={() => navigate("sightings")}
            />
            <MainMenuButton
              name="Visualizar parques mais próximos"
              icon={parksIcon}
              onPress={() => navigate("nearest_parks")}
            />
          </ButtonSection>
        </Content>
      </Container>
    </SafeView>
  );
}
