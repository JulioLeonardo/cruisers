import { gql } from "@apollo/client";

const getShips = gql`
  query ($limit: Int, $offset: Int, $type: String) {
    ships(limit: $limit, offset: $offset, find: { type: $type }) {
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
