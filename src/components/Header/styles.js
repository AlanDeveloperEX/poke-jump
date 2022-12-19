import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('screen').width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.background_header};
    flex: 1;
    justify-content: center;
    align-items: center;
    max-height: 95px;
    min-height: 95px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    position: relative;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: 32px;
    font-weight: bold;
  `}
`;

export const PokemonImage = styled.Image`
  width: 144px;
  height: 50px;
`;
