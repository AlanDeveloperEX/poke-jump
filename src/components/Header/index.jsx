import React from 'react';
import * as S from './styles';
import Logo from './imgs/logo.png';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header({ backAvaiable }) {
  const { goBack } = useNavigation();

  function navigateBack() {
    goBack();
  }

  return (
    <>
      <S.Container>
        {backAvaiable && (
          <AntDesign
            style={{ position: 'absolute', left: 25 }}
            name="arrowleft"
            size={25}
            color="#fff"
            onPress={navigateBack}
          />
        )}
        <S.PokemonImage source={Logo} />
      </S.Container>
    </>
  );
}
