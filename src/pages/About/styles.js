import styled, { css } from 'styled-components/native';

import * as Progress from 'react-native-progress';

export const LoadingScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    min-height: 250px;
    padding: 20px;

    flex-direction: row;
    align-items: center;
    border-radius: 20px;

    position: relative;
  `}
`;

export const GridInformationContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const GridInformationItem = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const GridInformationItemTag = styled.Text`
  ${({ theme, type }) => css`
    align-items: center;
    padding: 6px 8px;
    background: ${theme.colors.boxType[type]};
    border-radius: 20px;
    color: #fff;
    font-weight: 600
    margin-top: 5px;
  `}
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const PokemonImageBackCircle = styled.View`
  ${({ theme, type }) => css`
    background: ${theme.colors.boxType[type]};
    width: 130px;
    height: 130px;
    border-radius: 115px;
    margin-bottom: -130px;
  `}
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const Content = styled.View`
  margin-left: 30px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 19px;
    font-style: normal;
    font-weight: bold;
    color: ${theme.colors.light_text};
    background-color: ${theme.colors.cardTag};
    width: 50px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 10px;
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 38px;

    color: ${theme.colors.background};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PokemonType = styled.View`
  ${({ theme, type }) => css`
    width: 61px;
    height: 25px;
    background: ${theme.colors.boxType[type]};
    border-radius: 20px;

    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-right: 10px;
  `}
`;

export const PokemonTypeText = styled.Text`
  color: #ffffff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export const ContainerCard = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 20px;
    background: ${theme.colors.default_white};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 20px;
    background: ${theme.colors.background_about};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: -45px;
  `}
`;

export const NormalText = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 0 20px;
  `}
`;

export const StatusBar = styled.View`
  width: 100%;
  padding: 10px 20px;

  flex-direction: row;
  align-items: center;
`;

export const Attributes = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    width: 110px;
    text-transform: capitalize;

    color: ${theme.colors.text};
  `}
`;
export const AttributesNumber = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${theme.colors.detail};
    margin-left: 20px;
    min-width: 50px;
  `}
`;

export const ContentBar = styled.View`
  margin-left: 20px;
`;

export const Ability = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 10px 20px;
    text-transform: capitalize;

    color: ${theme.colors.detail};
  `}
`;

export const ProgressBar = styled(Progress.Bar).attrs({})``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 40px;
`;
