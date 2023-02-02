
export const apiEndpoint = "https://rickandmortyapi.com/graphql";
export const graphQlQuery = `
   query($apiPage: Int) {
      characters(page: $apiPage) {
      info {
         count
      }
      results {
         id
         name
         species
         status
         image
         episode {
            id
            name
            episode
            air_date
         }  
      }   
      }
   }
`;