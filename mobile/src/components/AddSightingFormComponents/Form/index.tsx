import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AddSightingLocationButton } from "../AddSightingLocationButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Submit } from "../Submit";
import { InputControl } from "../InputControl";
import SightingImagePicker from "../SightingPhoto";
import { DescriptionInputControl } from "../DescriptionInputControl";
import InformLocationModal from "../../InformLocationModal";
import { RegisterSightingRouteParams } from "../../../pages/RegisterSighting";

import { Container } from "./style";
import { LatLng } from "react-native-maps";
import { ImagePickerResult } from "expo-image-picker";
import { InformLocationContent } from "../../InformLocationContent";

type FormData = {
  species: string;
  description: string;
  location: LatLng;
};

export interface RegisterData {
  species: string;
  description: string;
  location: LatLng;
  image: string;
}

const schema = yup.object({
  species: yup.string().required("A espécie é obrigatória"),
  description: yup.string().required("A descrição é obrigatória"),
});

export function Form({ coordinates }: RegisterSightingRouteParams) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [image, setImage] = useState<string | null>(null);

  const [informLocationModalVisible, setInformLocationModalVisible] =
    useState(false);

  function handleSubmitSighting(data: FormData) {
    console.log(coordinates);
    if (coordinates == undefined) {
      setInformLocationModalVisible(true);
      return;
    }

    let sighting = {} as RegisterData;
    sighting.species = data.species;
    sighting.description = data.description;
    sighting.location = {
      latitude: coordinates.latitude,
      longitude: coordinates.longitude,
    };
    sighting.image = image as string;

    console.log(sighting);
    navigate("sightings");
  }

  const handleImagePicker = (result: ImagePickerResult) => {
    if (!result.canceled) {
      const { uri, width, height } = result.assets[0];
      setImage(uri);
    }
  };

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
        <InformLocationContent />
      </InformLocationModal>
      <SightingImagePicker pickImage={handleImagePicker} />
      <InputControl
        control={control}
        name="species"
        placeholder="Qual é a espécie?"
        error={errors.species}
      />
      <DescriptionInputControl
        control={control}
        name="description"
        placeholder={
          "Como é o animal que foi avistado? Busque descrever dados relevantes para identificar o animal, como tamanho, tipo de pele, coloração, presença de cauda ou asas etc."
        }
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
