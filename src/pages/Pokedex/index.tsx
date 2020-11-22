import React, {useEffect, useState} from 'react';
import {
  Container,
  PokeContainer,
  PokeTitle,
  Header,
  HeaderTitle,
  PokeImage,
  ScrollContainer,
  PokeInfo,
  PokeNumber,
} from './styles';

import api from '../../services/api';
import colors from '../../services/colors';

import Icon from 'react-native-vector-icons/Feather';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  weaknesses: string[];
  category: string;
  abilities: string;
  height: number;
  weight: number;
  image: string;
  description: string;
  evolutions: string[];
}

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    api.get('pokemons').then(({data}) => setPokemons(data));
  }, []);

  return (
    <>
      <Header>
        <HeaderTitle>Pokedex</HeaderTitle>
      </Header>
      <Container>
        <Icon name="search" size={30} color="#fff" />
        <ScrollContainer>
          {pokemons.map(({id, name, image, types}) => {
            // const type = ty[0];

            return (
              <PokeContainer
                key={id}
                style={{backgroundColor: colors[types[0]]}}>
                <PokeImage
                  source={{
                    uri: image,
                  }}
                />
                <PokeInfo>
                  <PokeNumber>#{id}</PokeNumber>
                  <PokeTitle>{name}</PokeTitle>
                </PokeInfo>
              </PokeContainer>
            );
          })}
        </ScrollContainer>
      </Container>
    </>
  );
};

export default Pokedex;
