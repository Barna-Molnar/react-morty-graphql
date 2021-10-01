import React from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';

const DivStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 2rem;
  .container {
    display: flex;
    flex-direction: column;
    width: 12rem;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

const FIRST_QUERY = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        gender
        created
        image
      }
    }
  }
`;

function CharactersLists() {
  const { loading, error, data } = useQuery(FIRST_QUERY);

  if (loading) return <h1>Loading the data... </h1>;
  if (error) return <h1>{error.message} </h1>;

  const { results } = data.characters;
  if (data) {
    console.log(results);
  }
  return (
    <DivStyles>
      {results.map((char, idx) => {
        return (
          <div className="container" key={idx}>
            <img src={char.image} alt="AVATAR" />
            {/* <h1>{char.name}</h1> */}
          </div>
        );
      })}
    </DivStyles>
  );
}

export default CharactersLists;
