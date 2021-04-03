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
      numberOfQuestions
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
          isCorrect
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
      numberOfQuestions
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
          isCorrect
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
        isCorrect
        usersVoted {
          id
        }
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

export const TOP_VOTED_VALID_QUIZ_QUERY = gql`
  query TOP_VOTED_VALID_QUIZ_QUERY {
    allQuizzes(
      first: 1
      skip: 0
      sortBy: [votes_DESC]
      where: { numberOfQuestions_gte: 10 }
    ) {
      id
      subject
      numberOfQuestions
      question(
        first: 10
        sortBy: [votes_DESC]
        where: { numberOfOptions_gte: 4 }
      ) {
        id
        content
        correct: option(
          first: 1
          sortBy: [votes_DESC]
          where: { isCorrect: true }
        ) {
          id
          content
          isCorrect
        }
        incorrect: option(
          first: 3
          sortBy: [votes_DESC]
          where: { isCorrect: false }
        ) {
          id
          content
          isCorrect
        }
      }
    }
  }
`;
