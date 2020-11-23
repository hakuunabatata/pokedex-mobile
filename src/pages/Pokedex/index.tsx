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
  ButtonContainer,
  PageButton,
  PageButtonText,
  DisabledButton,
} from './styles';

import api from '../../services/api';
import colors from '../../services/colors';

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`pokemons?_page=${page}&_limit=5`)
      .then(({data}) => setPokemons(data));
  }, [page]);

  return (
    <>
      <Header>
        <HeaderTitle>Pokedex</HeaderTitle>
      </Header>
      <Container>
        <ScrollContainer>
          {pokemons.map(({id, name, image, types}) => {
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
        <ButtonContainer>
          {page !== 1 && (
            <PageButton onPress={() => setPage(page - 1)}>
              <PageButtonText>Previous page</PageButtonText>
            </PageButton>
          )}

          {pokemons.length === 5 && (
            <PageButton onPress={() => setPage(page + 1)}>
              <PageButtonText>Next page</PageButtonText>
            </PageButton>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Pokedex;
