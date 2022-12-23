import { DocumentNode, gql } from "@apollo/client";

const getShips = (shipsFilter: string): DocumentNode => gql`
    query ($limit: Int, $offset: Int){
      ships(limit: $limit, offset: $offset ${shipsFilter}) {
        id
        active
        home_port
        name
        type
        image
        url
        year_built
      }
    }
  `;

export { getShips };
