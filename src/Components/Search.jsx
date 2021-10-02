import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const SEARCH_CHARACTER_LOCATION = gql`
  query Characters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        name
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState('');
  const [fetchCharcter, { data, loading, error }] = useLazyQuery(
    SEARCH_CHARACTER_LOCATION
  );

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type a Character name..."
      />
      <button
        onClick={() => {
          fetchCharcter({ variables: { name: name } });
          setName('');
        }}
      >
        Search Character
      </button>

      {loading && <h1>Fetching data.....</h1>}
      {error && <h1>Something went wrong.....</h1>}
      {data && (
        <ul>
          {data.characters.results.map((char, index) => {
            return <li key={index}>{char.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
