import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
        }
      }

      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      id
      email
    }
  }
`;

export const REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation REQUEST_PASSWORD_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export const PASSWORD_RESET_MUTATION = gql`
  mutation PASSWORD_RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      message
    }
  }
`;

export const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    endSession
  }
`;

export const SUGGEST_SUBJECT_MUTATION = gql`
  mutation SUGGEST_SUBJECT_MUTATION($subject: String!) {
    createQuiz(data: { subject: $subject }) {
      id
    }
  }
`;

export const SUGGEST_QUESTION_MUTATION = gql`
  mutation SUGGEST_QUESTION_MUTATION(
    $quizId: ID!
    $content: String!
    $numberOfQuestions: Int!
  ) {
    createQuestion(
      data: { content: $content, quiz: { connect: { id: $quizId } } }
    ) {
      id
    }

    updateQuiz(id: $quizId, data: { numberOfQuestions: $numberOfQuestions }) {
      id
    }
  }
`;

export const SUGGEST_OPTION_MUTATION = gql`
  mutation SUGGEST_OPTION_MUTATION(
    $questionId: ID!
    $content: String!
    $isCorrect: Boolean!
  ) {
    createOption(
      data: {
        content: $content
        isCorrect: $isCorrect
        question: { connect: { id: $questionId } }
      }
    ) {
      id
    }
  }
`;

export const ANSWER_QUESTION_MUTATION = gql`
  mutation ANSWER_QUESTION_MUTATION(
    $questionId: ID!
    $userId: ID!
    $currentWeekScore: Int
    $totalScore: Int
  ) {
    updateQuestion(
      id: $questionId
      data: { usersAnswered: { connect: { id: $userId } } }
    ) {
      id
    }

    updateUser(
      id: $userId
      data: { currentWeekScore: $currentWeekScore, totalScore: $totalScore }
    ) {
      id
      currentWeekScore
      totalScore
    }
  }
`;

export const VOTE_ON_QUIZ = gql`
  mutation VOTE_ON_QUIZ(
    $quizId: ID!
    $userId: ID!
    $votes: Int
    $week: String
  ) {
    updateQuiz(
      id: $quizId
      data: {
        votes: $votes
        week: $week
        usersVoted: { connect: { id: $userId } }
      }
    ) {
      id
    }
  }
`;

export const VOTE_ON_QUESTION = gql`
  mutation VOTE_ON_QUESTION($questionId: ID!, $userId: ID!, $votes: Int) {
    updateQuestion(
      id: $questionId
      data: { votes: $votes, usersVoted: { connect: { id: $userId } } }
    ) {
      id
    }
  }
`;

export const VOTE_ON_OPTION = gql`
  mutation VOTE_ON_OPTION($optionId: ID!, $userId: ID!, $votes: Int) {
    updateOption(
      id: $optionId
      data: { votes: $votes, usersVoted: { connect: { id: $userId } } }
    ) {
      id
    }
  }
`;

export const SET_CURRENT_WEEK_QUIZ_MUTATION = gql`
  mutation SET_CURRENT_WEEK_QUIZ_MUTATION($quizId: ID!, $date: String) {
    updateQuiz(id: $quizId, data: { week: $date }) {
      id
    }
  }
`;
