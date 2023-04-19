import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import {
  Container,
  Map,
  PinPoint,
  PinPointIcon,
  CalloutContainer,
  CalloutView,
  CalloutTitle,
  CalloutDescription,
  NoPhotoIcon,
  NoPhotoContainer,
  ReportIcon,
  CalloutImage,
  ReportButton,
} from "./style";
import { BackButton } from "../../components/BackButton";
import {
  useNavigation,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AddSighting } from "../../components/AddSighting";
import { Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { customMap } from "../../utils/mapStyle";
import useSightings from "../../hooks/useSightings";
import { useGlobalContext } from "../../../globalContext";
import InformLocationModal from "../../components/InformLocationModal";
import { InformLocationContent } from "../../components/InformLocationContent";

let mapStyle = customMap;

export function Sightings() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { sightings, fetchSightings, loading, error } = useSightings();

  useFocusEffect(
    React.useCallback(() => {
      fetchSightings();
    }, [])
  );

  const [sightingModalVisible, setSightingModalVisible] = useState(false);

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const { id, email, name } = useGlobalContext();

  // Modal handling
  const [informLocationModalVisible, setInformLocationModalVisible] =
    useState(false);

  function handleReport() {
    console.log("bateu aqui");
    if (id == "") {
      setInformLocationModalVisible(true);
    }
  }

  const showSightings = () => {
    return sightings.map((sighting, index) => {
      return (
        <PinPoint
          key={index}
          coordinate={sighting.location}
          calloutAnchor={{
            x: 0.5,
            y: 0.1,
          }}
        >
          <PinPointIcon source={require("../../assets/wildlife_marker.png")} />
          <Callout tooltip>
            <CalloutContainer>
              <CalloutView>
                {sighting.photo == null || sighting.photo == "" ? (
                  <NoPhotoContainer>
                    <NoPhotoIcon name="no-photography" size={64} />
                  </NoPhotoContainer>
                ) : (
                  <CalloutImage
                    source={{
                      uri: sighting.photo,
                    }}
                  />
                )}
                {sighting.species == "" ? (
                  <CalloutTitle>Espécie não identificada</CalloutTitle>
                ) : (
                  <CalloutTitle>{sighting.species}</CalloutTitle>
                )}
                <CalloutDescription numberOfLines={6}>
                  {sighting.description}
                </CalloutDescription>
                <ReportButton onPress={handleReport}>
                  <ReportIcon name="report" size={32} />
                </ReportButton>
              </CalloutView>
            </CalloutContainer>
          </Callout>
        </PinPoint>
      );
    });
  };

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

  function handleOpenAddSightingModal() {
    setSightingModalVisible(!sightingModalVisible);
  }

  return (
    <Container>
      <InformLocationModal
        visible={informLocationModalVisible}
        onClose={() => {
          setInformLocationModalVisible(false);
        }}
      >
        <InformLocationContent info="Essa função é exclusiva para usuários logados!" />
      </InformLocationModal>
      <Map
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        region={mapRegion}
        showsUserLocation={true}
      >
        {showSightings()}
      </Map>
      <AddSighting
        onPress={() => navigate("register_sighting")}
        activeOpacity={0.7}
      />
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
