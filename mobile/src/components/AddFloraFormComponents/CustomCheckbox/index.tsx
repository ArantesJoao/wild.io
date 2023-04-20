import { Container, Icon } from "./style";

export const CustomCheckBox = (props: any) => (
  <Container>
    <Icon
      source={
        props.checked
          ? require("../../../assets/checked.png")
          : require("../../../assets/unchecked.png")
      }
    />
  </Container>
);
