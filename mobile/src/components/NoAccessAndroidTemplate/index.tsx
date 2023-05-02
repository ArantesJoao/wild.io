import React from "react";

import settingsIconPath from "../../assets/settings_android.png";
import expoGoIconPath from "../../assets/expo_go_icon.png";
import locationServicePath from "../../assets/location_service.png";
import permissionsPath from "../../assets/permissions_icon.png";

import { InstructionStep } from "../InstructionStep";
import { Content, Title, ModalScroll } from "./styles";

export function NoAccessAndroidTemplate() {
  return (
    <Content>
      <Title>Sem acesso à localização</Title>
      <ModalScroll vertical>
        <InstructionStep
          instruction='1. Vá até os "Ajustes" no seu dispositivo.'
          iconUrl={settingsIconPath}
        />
        <InstructionStep
          instruction='2. Pesquise pelo aplicativo "Expo Go".'
          iconUrl={expoGoIconPath}
        />
        <InstructionStep
          instruction='3. Vá até a área de "Permissões".'
          iconUrl={permissionsPath}
        />
        <InstructionStep
          instruction='4. Selecione "Localização" e altere para que o aplicativo tenha acessor.'
          iconUrl={locationServicePath}
        />
      </ModalScroll>
    </Content>
  );
}
