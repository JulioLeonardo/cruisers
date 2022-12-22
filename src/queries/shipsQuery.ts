import { gql } from "@apollo/client";

const findFilterStub = "Cargo";

const GET_SHIPS = gql`
	query {
	    ships(limit: 10 ${
        Boolean(findFilterStub) && `, find: {type: "${findFilterStub}"}`
      } ) {
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

export { GET_SHIPS };
