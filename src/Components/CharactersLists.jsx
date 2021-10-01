import React from 'react';

import styled from 'styled-components';
import useCharacters from '../Hooks/useCharactersQuery';

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

function CharactersLists() {
  const { loading, error, results } = useCharacters();

  if (loading) return <h1>Fetsching the data </h1>;
  if (error) return <h1>Something went wrong </h1>;

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
