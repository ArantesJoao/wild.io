import React from "react";

import settingsIconPath from "../../assets/settings_ios.png";
import expoGoIconPath from "../../assets/expo_go_icon.png";
import locationServicePath from "../../assets/location_service.png";

import { Content, Title, ModalScroll } from "./styles";
import { InstructionStep } from "../InstructionStep";

export function NoAccessIOSTemplate() {
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
          instruction='3. Na opção "Localização", favor altere a permissão de acesso.'
          iconUrl={locationServicePath}
        />
      </ModalScroll>
    </Content>
  );
}
