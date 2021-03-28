import { gql } from '@apollo/client';

export const UPDATE_TRIVIA_STATUS_MUTATION = gql`
  mutation UPDATE_TRIVIA_STATUS_MUTATION($id: ID!, $status: String!) {
    updateTriviaState(id: $id, data: { status: $status }) {
      id
    }
  }
`;

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
  mutation SUGGEST_QUESTION_MUTATION($quizId: ID!, $content: String!) {
    createQuestion(
      data: { content: $content, quiz: { connect: { id: $quizId } } }
    ) {
      id
    }
  }
`;

export const SUGGEST_OPTION_MUTATION = gql`
  mutation SUGGEST_OPTION_MUTATION($questionId: ID!, $content: String!) {
    createOption(
      data: { content: $content, question: { connect: { id: $questionId } } }
    ) {
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
