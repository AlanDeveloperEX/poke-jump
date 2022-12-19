import React from 'react';
import { TextInput } from 'react-native';
import * as S from './styles';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

export function Search() {
  return (
    <S.Container>
      <EvilIcons name="search" size={30} color="#395BA7" />
      <TextInput
        style={{ width: '80%', fontSize: 20 }}
        autoCorrect={false}
        placeholder="Search Pokemon"
      />
      <Ionicons name="arrow-forward-circle" size={30} color="#395BA7" />
    </S.Container>
  );
}
