import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';

const windowWidth = Dimensions.get('window').width;

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    flex: 1;

    position: relative;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text_secondary};
    font-size: 30px;
    line-height: 38px;
    font-weight: bold;
    padding-top: 20px;
    padding-right: 12px;
    padding-left: 12px;
  `}
`;
