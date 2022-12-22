import {DocumentNode, gql} from "@apollo/client";

const getShips = (shipsFilter: string): DocumentNode => gql`
    query {
      ships(limit: 10 ${shipsFilter}) {
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