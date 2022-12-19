import styled, { css } from 'styled-components/native';

export const PokemonCard = styled.TouchableOpacity`
  ${({ theme, type }) => css`
    background: ${theme.colors.backgroundCard[type]};
    border-radius: 15px;
    margin-top: 30px;
    flex-direction: column;
    padding: 20px;
  `}
`;

export const PokemonContentType = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const PokemonType = styled.View`
  ${({ theme, type }) => css`
    padding: 5px;
    width: 65px;
    height: 25px;
    background: ${theme.colors.boxType[type]};
    border-radius: 20px;
    margin-left: 5px;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.background};
    text-transform: capitalize;
  `}
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    width: 50px;
    color: ${theme.colors.light_text};
    background-color: ${theme.colors.cardTag};
    margin: 0 auto;
    margin-top: -30px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 2px;
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    text-align: center;
    color: ${theme.colors.background};
  `}
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
`;
