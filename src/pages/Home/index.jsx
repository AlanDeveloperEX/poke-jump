import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Text } from 'react-native';

import { Load } from '../../components/Load';

import api from '../../services/api';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

export function Home() {
  const { navigate } = useNavigation();

  const [load, setLoad] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await api.get('/pokemon');
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
          results.map(async pokemon => {
            const { id, types } = await getMoreInfoAboutPokemonsByUrl(
              pokemon.url,
            );

            return {
              name: pokemon.name,
              id,
              types,
            };
          }),
        );

        setPokemons(payloadPokemons);
      } catch (err) {
        Alert.alert('ops, algo de errado aconteceu, tente mais tarde');
      } finally {
        setLoad(false);
      }
    }

    getPokemons();
  }, []);

  async function getMoreInfoAboutPokemonsByUrl(url) {
    const response = await api.get(url);

    const { id, types } = response.data;

    return { id, types };
  }

  function handleNavigationPokemonDetail(pokemonId) {
    navigate('About', {
      pokemonId,
    });
  }
  return load ? (
    <S.LoadingScreen>
      <Load />
    </S.LoadingScreen>
  ) : (
    <>
      <S.Container>
        <Header />
        <FlatList
          ListHeaderComponent={
            <>
              <S.Title>
                More than 250 Pokemons for you to choose your favorite
              </S.Title>
            </>
          }
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          data={pokemons}
          keyExtractor={pokemon => pokemon.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: pokemon }) => <Text>{pokemon.name}</Text>}
        />
      </S.Container>
    </>
  );
}
