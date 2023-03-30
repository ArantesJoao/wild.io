import { Platform, LogBox } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";

import add_photo from "../../../assets/add_photo.png";
import { AddImageText, Container, Icon, SelectedImage } from "./style";
import { ImagePickerResult } from "expo-image-picker";

LogBox.ignoreAllLogs(); // I was receiving a warning that is considered a bug. See https://github.com/expo/expo/issues/20977

interface ImagePickerProps {
  pickImage: (result: ImagePickerResult) => void;
}

export default function SightingImagePicker({ pickImage }: ImagePickerProps) {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
          // TODO: camera access permissions required warning
        }
      }
    })();
  }, []);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    pickImage(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container onPress={handlePickImage} activeOpacity={0.9}>
      {!image ? (
        <>
          <Icon source={add_photo} />
          <AddImageText>Adicionar foto</AddImageText>
        </>
      ) : (
        <SelectedImage source={{ uri: image }} />
      )}
    </Container>
  );
}
