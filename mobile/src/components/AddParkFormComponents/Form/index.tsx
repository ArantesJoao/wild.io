import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AddEntityLocationButton } from "../../AddSightingFormComponents/AddEntityLocationButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Submit } from "../Submit";
import { InputControl } from "../InputControl";
import InformLocationModal from "../../InformLocationModal";
import { DescriptionInputControl } from "../DescriptionInputControl";
import { RegisterEntityRouteParams } from "../../../pages/RegisterSighting";

import { Container } from "./style";
import { LatLng } from "react-native-maps";
import { InformLocationContent } from "../../InformLocationContent";
import useParks, { Park } from "../../../hooks/useParks";
import { LoadingBar } from "../../AddSightingFormComponents/Form/style";
import { useGlobalContext } from "../../../../globalContext";
import { User } from "../../../hooks/useSightings";

type FormData = {
  name: string;
  description: string;
  location: LatLng;
};

const schema = yup.object({
  name: yup.string().required("O nome do parque é obrigatório"),
  description: yup
    .string()
    .required("Informe pelo menos o bairro onde fica o parque!"),
});

export function Form({ coordinates }: RegisterEntityRouteParams) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { savePark, loading, error } = useParks();
  const { name, email, id } = useGlobalContext();

  const [informLocationModalVisible, setInformLocationModalVisible] =
    useState(false);

  async function handleSubmitPark(data: FormData) {
    if (!coordinates) {
      setInformLocationModalVisible(true);
      return;
    }

    const currentLoggedUser: User = { name, email, google_id: id };

    const park: Park = {
      name: data.name,
      description: data.description,
      location: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
      user: currentLoggedUser,
    };

    await savePark(park);
    navigate("nearest_parks");
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
      <InformLocationModal
        visible={informLocationModalVisible}
        onClose={() => {
          setInformLocationModalVisible(false);
        }}
      >
        <InformLocationContent info="Por favor informe a localização do parque" />
      </InformLocationModal>
      <InputControl
        control={control}
        name="name"
        placeholder="Qual o nome oficial do parque?"
        error={errors.name}
      />
      <DescriptionInputControl
        control={control}
        name="description"
        placeholder={
          "Informe aqui o bairro onde fica o parque e quaisquer detalhes relevantes que você gostaria de incluir, como a vegetação, tamanho, ano de fundação, atividades etc."
        }
        error={errors.description}
        multiline
      />
      <AddEntityLocationButton
        title="SELECIONAR LOCALIZAÇÃO DO PARQUE"
        onPress={() => navigate("select_park_spot")}
        activeOpacity={0.7}
      />

      <Submit
        title="REGISTRAR PARQUE"
        onPress={handleSubmit(handleSubmitPark)}
        activeOpacity={0.7}
      />

      {loading && <LoadingBar color="#216C2E" />}
    </Container>
  );
}
