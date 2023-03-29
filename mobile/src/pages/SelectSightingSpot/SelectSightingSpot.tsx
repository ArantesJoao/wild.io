import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { MapContainer, Map, MarkerIcon } from "./style";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  PROVIDER_GOOGLE,
  Marker,
  LatLng,
  MapPressEvent,
} from "react-native-maps";
import { customMap } from "../../utils/mapStyle";
import { ConfirmSightingLocation } from "../../components/ConfirmSightingLocation";
import { BackButton } from "../../components/BackButton";

let mapStyle = customMap;

// export function SelectSightingSpot() {
//   const { navigate } =
//     useNavigation<NativeStackNavigationProp<ParamListBase>>();

//   const [mapRegion, setMapRegion] = useState({
//     latitude: -27.597664753388656,
//     longitude: -48.52063085134813,
//     latitudeDelta: 0.1,
//     longitudeDelta: 0.1,
//   });

//   const [errorMsg, setErrorMsg] = useState(String);

//   const currentUserLocation = async () => {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       setErrorMsg("O aplicativo não tem acesso à localização do usuário");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync();
//     setMapRegion({
//       latitude: location.coords.latitude,
//       longitude: location.coords.longitude,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     });
//   };

//   const handleMarkerPress = ({ nativeEvent }) => {
//     setMarkerCoordinates(nativeEvent.coordinate);
//   };

//   useEffect(() => {
//     currentUserLocation();
//   }, []);

//   return (
//     <Container>
//       <Map
//         provider={PROVIDER_GOOGLE}
//         customMapStyle={mapStyle}
//         region={mapRegion}
//         showsUserLocation={true}
//       ></Map>
//       <ConfirmSightingLocation title="CONFIRMAR" activeOpacity={0.9} />
//     </Container>
//   );
// }

const SelectSightingSpot: React.FC = () => {
  const [markerCoordinates, setMarkerCoordinates] = useState<LatLng | null>(
    null
  );

  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [errorMsg, setErrorMsg] = useState(String);

  const [mapRegion, setMapRegion] = useState({
    latitude: -27.597664753388656,
    longitude: -48.52063085134813,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const currentUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("O aplicativo não tem acesso à localização do usuário");
      return;
    }

    let location = await Location.getCurrentPositionAsync();
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  useEffect(() => {
    currentUserLocation();
  }, []);

  const handleMapPress = (event: MapPressEvent) => {
    const { coordinate } = event.nativeEvent;
    setMarkerCoordinates(coordinate);
  };

  const handleMarkerButtonPress = () => {
    console.log(markerCoordinates);
  };

  return (
    <MapContainer>
      <Map
        region={mapRegion}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        onPress={handleMapPress}
      >
        {markerCoordinates && (
          <Marker coordinate={markerCoordinates}>
            <MarkerIcon source={require("../../assets/wildlife_marker.png")} />
          </Marker>
        )}
      </Map>
      {markerCoordinates ? (
        <ConfirmSightingLocation
          onPress={handleMarkerButtonPress}
          title="CONFIRMAR"
          activeOpacity={0.9}
        />
      ) : (
        <ConfirmSightingLocation
          onPress={handleMarkerButtonPress}
          title="CONFIRMAR"
          activeOpacity={0.9}
          disabled
          style={{ backgroundColor: "#808080" }}
        />
      )}
      <BackButton onPress={() => navigate("register_sighting")} />
    </MapContainer>
  );
};

export default SelectSightingSpot;
