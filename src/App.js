import './App.css';
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

function App() {
  const { loading, error, data } = useQuery(FIRST_QUERY);

  if (loading) return <h1>Loading the data... </h1>;
  if (error) return <h1>{error.message} </h1>;

  if (data) {
    // const { characters } = data;
    const { results } = data.characters;
    // console.log(data);
    console.log(results);
  }
  return (
    <div className="App">
      <h1>Should not be empty the site :D </h1>
    </div>
  );
}

export default App;
