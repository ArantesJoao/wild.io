import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Form } from "../../components/AddSightingFormComponents/Form";
import { BackButton } from "../../components/BackButton";
import { Container } from "./style";

export function RegisterSighting() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>
          <>
            <Form />
          </>
        </KeyboardAvoidingView>
        <BackButton onPress={() => navigate("sightings")} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
