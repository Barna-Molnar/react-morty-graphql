import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const SEARCH_CHARACTER = gql`
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
  const [fetchCharcter, { data, loading, error }] =
    useLazyQuery(SEARCH_CHARACTER);

  if (data) {
    console.log(data);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          fetchCharcter({ variables: { name: name } });
          setName('');
        }}
      >
        Search Character
      </button>
    </div>
  );
}

export default Search;
