import { gql } from '@apollo/client';

export const SUGGEST_SUBJECT_MUTATION = gql`
  mutation SUGGEST_SUBJECT_MUTATION($subject: String!) {
    createQuiz(data: { subject: $subject }) {
      id
    }
  }
`;

export const VOTE_ON_QUIZ = gql`
  mutation VOTE_ON_QUIZ($id: ID!, $votes: Int) {
    updateQuiz(id: $id, data: { votes: $votes }) {
      id
    }
  }
`;

export const VOTE_ON_QUESTION = gql`
  mutation VOTE_ON_QUESTION($id: ID!, $votes: Int) {
    updateQuestion(id: $id, data: { votes: $votes }) {
      id
    }
  }
`;

export const VOTE_ON_OPTION = gql`
  mutation VOTE_ON_OPTION($id: ID!, $votes: Int) {
    updateOption(id: $id, data: { votes: $votes }) {
      id
    }
  }
`;
