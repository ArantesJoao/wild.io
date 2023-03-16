import React from "react";
import { TouchableOpacityProps } from "react-native";
import { InstructionText, StepContainer, StepsIcon } from "./style";

export interface InstructionProps {
  instruction: string;
  iconUrl: string;
}

export function InstructionStep({ instruction, iconUrl }: InstructionProps) {
  return (
    <StepContainer>
      <StepsIcon source={iconUrl} />
      <InstructionText>{instruction}</InstructionText>
    </StepContainer>
  );
}
