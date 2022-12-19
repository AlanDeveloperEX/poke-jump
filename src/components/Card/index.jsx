import React from 'react';
import * as S from './styles';

export function Card({ data, ...rest }) {
  return (
    <S.PokemonCard type={data.types[0].type.name} {...rest}>
      <S.PokemonId>#{data.id.toString().padStart(3, '0')}</S.PokemonId>
      <S.PokemonImageBackCircle type={data.types[0].type.name} />
      <S.PokemonImage
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        }}
      />
      <S.PokemonName>{data.name}</S.PokemonName>
      <S.PokemonContentType>
        {data.types.map(pokemonType => (
          <S.PokemonType
            key={pokemonType.type.name}
            type={pokemonType.type.name}
          >
            <S.PokemonTypeText>{pokemonType.type.name}</S.PokemonTypeText>
          </S.PokemonType>
        ))}
      </S.PokemonContentType>
    </S.PokemonCard>
  );
}
