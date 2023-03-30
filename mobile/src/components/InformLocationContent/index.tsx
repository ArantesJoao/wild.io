import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../theme";

import { Content, WarningText } from "./style";

export function InformLocationContent() {
  return (
    <Content>
      <Feather
        name="alert-triangle"
        size={56}
        color={theme.colors.warning_text}
      />
      <WarningText>Por favor informe o local do avistamento</WarningText>
    </Content>
  );
}
