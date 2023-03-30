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

import { Container, Content } from "./style";
import { BackButton } from "../../components/BackButton";
import { RegisterEntityRouteParams } from "../RegisterSighting";
import { Form } from "../../components/AddParkFormComponents/Form";

type RegisterParkScreenRouteProp = RouteProp<
  ParamListBase & { register_park: RegisterEntityRouteParams },
  "register_park"
>;

export function RegisterPark() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute<RegisterParkScreenRouteProp>();
  const markerCoordinates = route.params?.coordinates;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Content>
          <Form coordinates={markerCoordinates} />
        </Content>
        <BackButton onPress={() => navigate("nearest_parks")} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
