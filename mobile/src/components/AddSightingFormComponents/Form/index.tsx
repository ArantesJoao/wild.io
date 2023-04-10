import * as yup from "yup";
import React, { useEffect, useState } from "react";
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

import {
  CheckboxContainer,
  CheckboxText,
  Container,
  FirstRowContainer,
  InputAndInputError,
  SpeciesError,
} from "./style";
import { LatLng } from "react-native-maps";
import { ImagePickerResult } from "expo-image-picker";
import { InformLocationContent } from "../../InformLocationContent";
import { CheckBox } from "react-native-elements";
import { CustomCheckBox } from "../CustomCheckbox";

type FormData = {
  species: string;
  description: string;
  location: LatLng;
  identifiedSpecies: boolean;
};

interface FormStates {
  identifiedSpecies: boolean;
}

export interface RegisterData {
  species: string;
  description: string;
  location: LatLng;
  image: string;
  identifiedSpecies: boolean;
}

const getSchema = (identifiedSpecies: boolean) =>
  yup.object({
    species: yup
      .string()
      .test(
        "identifiedSpecies",
        "A espécie é obrigatória",
        (value) => !identifiedSpecies || Boolean(value && value.length > 0)
      ),
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
    if (coordinates == undefined) {
      setInformLocationModalVisible(true);
      return;
    }

    if (data.identifiedSpecies && data.species == "") {
      return;
    }

    let sighting = {} as RegisterData;

    sighting.identifiedSpecies = identifiedSpecies;

    if (identifiedSpecies) {
      sighting.species = data.species;
    } else {
      sighting.species = "";
    }

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
    setError,
    clearErrors,
    watch,
  } = useForm<FormData>({
    resolver: yupResolver(getSchema(identifiedSpecies)),
    defaultValues: {
      species: "",
      description: "",
    },
  });

  const speciesValue = watch("species");

  useEffect(() => {
    if (identifiedSpecies && (!speciesValue || speciesValue.length === 0)) {
      setError("species", { message: "A espécie é obrigatória" });
    } else {
      clearErrors("species");
    }
  }, [identifiedSpecies, setError, clearErrors, speciesValue]);

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
      <FirstRowContainer>
        <CheckboxContainer>
          <CheckBox
            checked={identifiedSpecies}
            onPress={() => {
              setIdentifiedSpecies(!identifiedSpecies);
              setValue("species", "");
            }}
            checkedIcon={<CustomCheckBox checked />}
            uncheckedIcon={<CustomCheckBox checked={false} />}
          />
          <CheckboxText>Espécie identificada</CheckboxText>
        </CheckboxContainer>
        <InputAndInputError>
          <InputControl
            control={control}
            name="species"
            placeholder="Qual é a espécie?"
            error={errors.species}
            editable={identifiedSpecies}
            isActive={identifiedSpecies}
          />
        </InputAndInputError>
      </FirstRowContainer>
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
