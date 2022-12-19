import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView, Alert, Text } from 'react-native';
import { Load } from '../../components/Load';
import api from '../../services/api';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { Header } from '../../components/Header';

export function About() {
  const route = useRoute();
  const { colors } = useTheme();

  const { pokemonId } = route.params;

  const [pokemon, setPokemon] = useState({});
  // const [pokemonInformation, setPokemonInformation] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function getPokemonDetail() {
      try {
        const response = await api.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
        );

        const { stats, abilities, id, name, types, weight, height, moves } =
          response.data;

        const currentType = types[0].type.name;

        const color = colors.backgroundCard[currentType];

        setPokemon({
          stats,
          abilities,
          id,
          name,
          types,
          color,
          weight,
          height,
          moves,
        });

        setLoad(false);
      } catch (err) {
        Alert.alert('Ops, ocorreu um erro, tente mais tarde');
      } finally {
        setLoad(false);
      }
    }

    getPokemonDetail();
  }, [pokemonId]);

  return load ? (
    <S.LoadingScreen>
      <Load />
    </S.LoadingScreen>
  ) : (
    <>
      <Header backAvaiable={true} />
      <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
        <S.ContainerCard>
          <S.Header
            style={{ paddingHorizontal: 20 }}
            type={pokemon.types[0].type.name}
          >
            <S.ContentImage>
              <S.PokemonImageBackCircle type={pokemon.types[0].type.name} />

              <S.PokemonImage
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
                }}
              />
            </S.ContentImage>

            <S.Content>
              <S.PokemonId>
                #{pokemon.id.toString().padStart(3, '0')}
              </S.PokemonId>
              <S.PokemonName>{pokemon.name}</S.PokemonName>
              <S.PokemonTypeContainer>
                {pokemon.types.map(({ type }) => (
                  <S.PokemonType type={type.name} key={type.name}>
                    <S.PokemonTypeText>{type.name}</S.PokemonTypeText>
                  </S.PokemonType>
                ))}
              </S.PokemonTypeContainer>
            </S.Content>
          </S.Header>
          <S.Container>
            <S.NormalText style={{ textAlign: 'center' }}>
              A strange seed was planted on its back at birth. The plant sprouts
              and grows with this Pokémon.
            </S.NormalText>

            <S.GridInformationContainer>
              <S.GridInformationItem>
                <Text>Weight:</Text>
                <S.GridInformationItemTag type={pokemon.types[0].type.name}>
                  {pokemon.weight}kg
                </S.GridInformationItemTag>
              </S.GridInformationItem>

              <S.GridInformationItem>
                <Text>Height:</Text>
                <S.GridInformationItemTag type={pokemon.types[0].type.name}>
                  {pokemon.height}m
                </S.GridInformationItemTag>
              </S.GridInformationItem>

              <S.GridInformationItem>
                <Text>Major Movie</Text>
                <S.GridInformationItemTag type={pokemon.types[0].type.name}>
                  {pokemon.moves[0].move.name.replace('-', ' ')}
                </S.GridInformationItemTag>
              </S.GridInformationItem>
            </S.GridInformationContainer>

            {pokemon.stats.map(attribute => (
              <S.StatusBar key={attribute.stat.name}>
                <S.Attributes>{attribute.stat.name}</S.Attributes>
                <S.AttributesNumber>{attribute.base_stat}</S.AttributesNumber>
                <S.ContentBar>
                  <S.ProgressBar
                    type={pokemon.types[0].type.name}
                    borderWidth={0}
                    width={100}
                    progress={
                      attribute.base_stat >= 100
                        ? attribute.base_stat
                        : `.${attribute.base_stat}`
                    }
                    unfilledColor="#B7B7B8"
                    color={
                      attribute.base_stat <= 50
                        ? '#E63950'
                        : attribute.base_stat > 100
                        ? '#53E37E'
                        : '#45C0A3'
                    }
                  />
                </S.ContentBar>
              </S.StatusBar>
            ))}
          </S.Container>
        </S.ContainerCard>
      </ScrollView>
    </>
  );
}
