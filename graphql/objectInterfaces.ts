export interface Quiz {
  id: string;
  subject: string;
  votes: number;
  numberOfQuestions: number;
  question: Array<Question>;
  usersVoted: Array<User>;
}

export interface Question {
  id: string;
  content: string;
  votes: number;
  option: Array<Option>;
  usersVoted: Array<User>;
}

export interface User {
  email: string;
  id: string;
  name: string;
  totalScore: number;
  currentWeekScore: number;
  votedOnOptions: Array<Option>;
  votedOnQuestions: Array<Question>;
  votedOnQuizzes: Array<Quiz>;
}

export interface Option {
  id: string;
  content: string;
  votes: number;
  usersVoted: Array<User>;
}

export interface Vote {
  voteId: string;
  votes: number;
  usersVoted: Array<User>;
}

export interface IId {
  questionId: string;
}
