import styled from "styled-components/native";

import CaretLeft from "phosphor-react-native/src/icons/CaretLeft";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: row;
  justify-content: center;

  margin-top: 30px;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;