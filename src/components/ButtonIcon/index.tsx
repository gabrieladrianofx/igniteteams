import { TouchableOpacityProps } from "react-native";

import { Container, Icon } from "./style";

type ButtonIconProps = TouchableOpacityProps & {};

export function ButtonIcon({}: ButtonIconProps) {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
