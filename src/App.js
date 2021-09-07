import './App.css';
import List from "./pages/PokeList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <main>
        <List />
        <button>Next Page</button>
      </main>
    </ApolloProvider>
  );
}

export default App;
