import React from 'react';
import * as S from './styles';
import Logo from './imgs/logo.png';
import { AntDesign } from '@expo/vector-icons';

export function Header() {
  return (
    <>
      <S.Container>
        <AntDesign
          style={{ position: 'absolute', left: 25 }}
          name="arrowleft"
          size={25}
          color="#fff"
        />
        <S.PokemonImage source={Logo} />
      </S.Container>
    </>
  );
}
