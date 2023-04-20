import React from "react";
import { LatLng } from "react-native-maps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  useNavigation,
  ParamListBase,
  useRoute,
  RouteProp,
} from "@react-navigation/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

import { Container } from "./style";
import { BackButton } from "../../components/BackButton";
import { Form } from "../../components/AddFloraFormComponents/Form";

export interface RegisterEntityRouteParams {
  coordinates: LatLng;
}

type RegisterFloraScreenRouteProp = RouteProp<
  ParamListBase & { register_sighting: RegisterEntityRouteParams },
  "register_sighting"
>;

export function RegisterFlora() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute<RegisterFloraScreenRouteProp>();
  const markerCoordinates = route.params?.coordinates;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <>
          <Form coordinates={markerCoordinates} />
        </>
        <BackButton
          style={{ height: "8%", marginLeft: "2%" }} // inline styled because this was a specific change for this screen
          onPress={() => navigate("sightings")}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}
