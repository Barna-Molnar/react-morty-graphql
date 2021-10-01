import { gql, useQuery } from '@apollo/client';

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

const useCharacters = () => {
    const { loading, error, data } = useQuery(FIRST_QUERY);
    const { results } = data.characters;

    return { loading, error, results }
}

export default useCharacters