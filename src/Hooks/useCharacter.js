import { useQuery } from "@apollo/client";
import gql from "graphql-tag";


const QUERY_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      gender
      image
      episode {
        name
        air_date
        episode
      } 
    }
  }
`;

function useCharacter(id) {
    const { loading, error, data } = useQuery(QUERY_CHARACTER, {
        variables: {
            id
        }
    });

    return {
        loading, error, data
    }

}

export default useCharacter
