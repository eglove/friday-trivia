import { gql } from '@apollo/client';

export const ALL_QUIZZES_QUERY = gql`
  query {
    allQuizzes {
      id
      subject
      votes
      question {
        id
        content
        votes
        option {
          id
          content
          votes
        }
      }
    }
  }
`;
