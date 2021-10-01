import React from 'react';
import { Link } from 'react-router-dom';
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
  const { loading, error, data } = useCharacters();

  if (loading) return <h1>Fetsching the data </h1>;
  if (error) return <h1>Something went wrong </h1>;

  return (
    <DivStyles>
      {data.characters.results.map((char, idx) => {
        return (
          <Link to={`/${char.id}`} className="container" key={idx}>
            <img
              id={char.id}
              src={char.image}
              alt="AVATAR"
              onClick={(e) => {}}
            />
            <h3>{char.name}</h3>
          </Link>
        );
      })}
    </DivStyles>
  );
}

export default CharactersLists;
