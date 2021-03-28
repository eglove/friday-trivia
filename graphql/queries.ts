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

export const SINGLE_QUIZ_QUERY = gql`
  query SINGLE_QUIZ_QUERY($id: ID!) {
    Quiz(where: { id: $id }) {
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

export const SINGLE_QUESTION_QUERY = gql`
  query SINGLE_QUESTION_QUERY($id: ID!) {
    Question(where: { id: $id }) {
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
`;
