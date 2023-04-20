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
  CalloutImage,
} from "./style";
import { BackButton } from "../../components/BackButton";
import {
  useNavigation,
  ParamListBase,
  useFocusEffect,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AddFlora } from "../../components/AddFlora";
import { Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { customMap } from "../../utils/mapStyle";
// import useFlora from "../../hooks/useFlora";
import { useGlobalContext } from "../../../globalContext";
import InformLocationModal from "../../components/InformLocationModal";
import { InformLocationContent } from "../../components/InformLocationContent";
import useFlora from "../../hooks/useFlora";

let mapStyle = customMap;

export function FloraSightings() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { floraSightings, fetchFlora, loading, error } = useFlora();

  const { isUserLogged } = useGlobalContext();

  useFocusEffect(
    React.useCallback(() => {
      fetchFlora();
    }, [])
  );

  const [floraModalVisible, setFloraModalVisible] = useState(false);

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  // Modal handling
  const [necessaryLoginModalInfo, setNecessaryLoginModalInfo] = useState(false);

  const showFlora = () => {
    return floraSightings.map((flora: any, index: any) => {
      return (
        <PinPoint
          key={index}
          coordinate={flora.location}
          calloutAnchor={{
            x: 0.5,
            y: 0.1,
          }}
        >
          <PinPointIcon source={require("../../assets/wildlife_marker.png")} />
          <Callout tooltip>
            <CalloutContainer>
              <CalloutView>
                {flora.photo == null || flora.photo == "" ? (
                  <NoPhotoContainer>
                    <NoPhotoIcon name="no-photography" size={64} />
                  </NoPhotoContainer>
                ) : (
                  <CalloutImage
                    source={{
                      uri: flora.photo,
                    }}
                  />
                )}
                {flora.species == "" ? (
                  <CalloutTitle>Espécie não identificada</CalloutTitle>
                ) : (
                  <CalloutTitle>{flora.species}</CalloutTitle>
                )}
                <CalloutDescription numberOfLines={6}>
                  {flora.description}
                </CalloutDescription>
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

  function handleAddFlora() {
    if (isUserLogged) {
      navigate("register_flora");
    } else {
      setNecessaryLoginModalInfo(true);
    }
  }

  return (
    <Container>
      <InformLocationModal
        visible={necessaryLoginModalInfo}
        onClose={() => {
          setNecessaryLoginModalInfo(false);
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
        {showFlora()}
      </Map>
      <AddFlora onPress={handleAddFlora} activeOpacity={0.7} />
      <BackButton onPress={() => navigate("home")} />
    </Container>
  );
}
