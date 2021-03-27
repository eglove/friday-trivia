import { gql } from '@apollo/client';

export const ALL_QUIZZES_QUERY = gql`
  query {
    allQuizzes {
      id
      subject
      votes
      question {
        content
        votes
        option {
          content
          votes
        }
      }
    }
  }
`;
