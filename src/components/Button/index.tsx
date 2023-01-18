import { ButtonTypeStyleProps, Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
