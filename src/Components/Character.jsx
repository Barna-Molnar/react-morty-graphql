import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import useCharacter from '../Hooks/useCharacter';

const DivStylies = styled.div`
  display: flex;

  .Character-content {
    margin-left: 2rem;
  }
  .Character-episode {
    text-align: left;
    margin-top: 2rem;
  }
`;

function Character() {
  let { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  console.log(data, loading, error);

  if (loading) return <h1>Fetsching the data </h1>;
  if (error) return <h1>Something went wrong </h1>;
  return (
    <DivStylies>
      <img src={data.character.image} alt="Avatar" width="750 " height="750" />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode, idx) => {
            return (
              <div key={idx}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </DivStylies>
  );
}

export default Character;
