import React from "react";
import { Button, ButtonIcon, ButtonTitle } from "./style";

export interface Props {
  name: string;
  icon: string;
}

export function MainMenuButton({ name, icon }: Props) {
  return (
    <Button>
      <ButtonIcon source={ icon } />
      <ButtonTitle>{name}</ButtonTitle>
    </Button>
  );
}
