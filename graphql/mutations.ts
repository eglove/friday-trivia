import { gql } from '@apollo/client';

export const SUGGEST_SUBJECT_MUTATION = gql`
  mutation SUGGEST_SUBJECT_MUTATION($subject: String!) {
    createQuiz(data: { subject: $subject }) {
      id
    }
  }
`;
