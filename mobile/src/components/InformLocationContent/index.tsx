import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../theme";

import { Content, WarningText } from "./style";

interface InformLocationContentProps {
  info: string;
}

export function InformLocationContent({ info }: InformLocationContentProps) {
  return (
    <Content>
      <Feather
        name="alert-triangle"
        size={56}
        color={theme.colors.warning_text}
      />
      <WarningText>{info}</WarningText>
    </Content>
  );
}
