import { gql } from "@apollo/client";

export const TOTAL_COUNTS = gql`
  query TotalCounts {
    allPeople {
      totalCount
    }
    allStarships {
      totalCount
    }
  }
`;

export const PERSON = gql`
  query Person($personID: ID) {
    person(personID: $personID) {
      name
      height
    }
  }
`;

export const STARSHIP = gql`
  query Starship($starshipID: ID) {
    starship(starshipID: $starshipID) {
      name
      hyperdriveRating
    }
  }
`;
