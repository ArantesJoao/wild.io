import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AddSightingLocationButton } from "../AddSightingLocationButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Submit } from "../Submit";
import { InputControl } from "../InputControl";
import { DescriptionInputControl } from "../DescriptionInputControl";

import { Container } from "./style";

type FormData = {
  species: string;
  description: string;
};

const schema = yup.object({
  species: yup.string().required("A espécie é obrigatória"),
  description: yup.string().required("A descrição é obrigatória"),
});

export function Form() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleSubmitSighting(data: FormData) {
    console.log(data);
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <InputControl
        control={control}
        name="species"
        placeholder="Espécie"
        error={errors.species}
      />
      <DescriptionInputControl
        control={control}
        name="description"
        placeholder="Descrição"
        error={errors.description}
        multiline
      />
      <AddSightingLocationButton
        title="SELECIONAR LOCALIZAÇÃO DO AVISTAMENTO"
        onPress={() => navigate("select_sighting_spot")}
        activeOpacity={0.7}
      />

      <Submit
        title="REGISTRAR AVISTAMENTO"
        onPress={handleSubmit(handleSubmitSighting)}
        activeOpacity={0.7}
      />
    </Container>
  );
}
