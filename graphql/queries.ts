import { gql } from '@apollo/client';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
        votedOnQuizzes {
          id
        }
        votedOnQuestions {
          id
        }
        votedOnOptions {
          id
        }
      }
    }
  }
`;

export const USER_SCORES_QUERY = gql`
  query USER_SCORES_QUERY {
    allUsers(sortBy: [totalScore_DESC]) {
      id
      name
      totalScore
      currentWeekScore
    }
  }
`;

export const ALL_QUIZZES_QUERY = gql`
  query ALL_QUIZZES_QUERY($skip: Int = 0, $first: Int) {
    allQuizzes(first: $first, skip: $skip, sortBy: [votes_DESC]) {
      id
      subject
      votes
      question(sortBy: [votes_DESC]) {
        id
        content
        votes
        usersVoted {
          id
        }
        option(sortBy: [votes_DESC]) {
          id
          content
          votes
          usersVoted {
            id
          }
        }
      }
      usersVoted {
        id
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
        usersVoted {
          id
        }
        option(sortBy: [votes_DESC]) {
          id
          content
          votes
          usersVoted {
            id
          }
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

export const TOTAL_QUIZZES_QUERY = gql`
  query TOTAL_QUIZZES_QUERY {
    _allQuizzesMeta {
      count
    }
  }
`;
