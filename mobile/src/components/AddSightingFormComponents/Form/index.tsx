import * as yup from "yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ParamListBase, useNavigation } from "@react-navigation/native";
import { AddEntityLocationButton } from "../AddEntityLocationButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Submit } from "../Submit";
import { InputControl } from "../InputControl";
import SightingImagePicker from "../SightingPhoto";
import { DescriptionInputControl } from "../DescriptionInputControl";
import InformLocationModal from "../../InformLocationModal";
import { RegisterEntityRouteParams } from "../../../pages/RegisterSighting";

import { CheckboxText, Container } from "./style";
import { LatLng } from "react-native-maps";
import { ImagePickerResult } from "expo-image-picker";
import { InformLocationContent } from "../../InformLocationContent";
import { CheckBox } from "react-native-elements";

type FormData = {
  species: string;
  description: string;
  location: LatLng;
  identifiedSpecies: boolean;
};

export interface RegisterData {
  species: string;
  description: string;
  location: LatLng;
  image: string;
  identifiedSpecies: boolean;
}

const schema = yup.object({
  species: yup.string().required("A espécie é obrigatória"),
  description: yup.string().required("A descrição é obrigatória"),
});

export function Form({ coordinates }: RegisterEntityRouteParams) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [image, setImage] = useState<string | null>(null);
  const [identifiedSpecies, setIdentifiedSpecies] = useState(false);

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
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      species: "",
      description: "",
    },
  });

  return (
    <Container>
      <InformLocationModal
        visible={informLocationModalVisible}
        onClose={() => {
          setInformLocationModalVisible(false);
        }}
      >
        <InformLocationContent info="Por favor informe o local do avistamento!" />
      </InformLocationModal>
      <SightingImagePicker pickImage={handleImagePicker} />
      <CheckBox
        title="Espécie Identificada"
        checked={identifiedSpecies}
        onPress={() => {
          setIdentifiedSpecies(!identifiedSpecies);
          setValue("species", "");
        }}
      />
      <InputControl
        control={control}
        name="species"
        placeholder="Qual é a espécie?"
        error={errors.species}
        editable={identifiedSpecies}
        isActive={identifiedSpecies}
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
      <AddEntityLocationButton
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
