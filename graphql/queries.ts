import { gql } from '@apollo/client';

export const ALL_QUIZZES_QUERY = gql`
  query {
    allQuizzes(sortBy: [votes_DESC]) {
      id
      subject
      votes
      question(sortBy: [votes_DESC]) {
        id
        content
        votes
        option(sortBy: [votes_DESC]) {
          id
          content
          votes
        }
      }
    }
  }
`;
