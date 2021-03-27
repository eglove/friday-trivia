import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    users: [User]
    quizzes: [Quiz]
    questions: [Question]
    options: [Option]
    leaderboard: [Leaderboard]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    name: String!
    currentWeekScore: Int
    totalScore: Int
  }

  type Quiz {
    id: ID!
    week: String!
    votes: Int
    questions: [Question]
  }

  type Question {
    id: ID!
    content: String!
    votes: Int
    options: [Option]
  }

  type Option {
    id: ID!
    content: String!
    vote: Int
  }

  type Leaderboard {
    users: [User]
  }
`;
