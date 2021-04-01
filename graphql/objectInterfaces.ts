export interface Quiz {
  id: string;
  subject: string;
  votes: number;
  question: Array<Question>;
  usersVoted: Array<User>;
}

export interface Question {
  id: string;
  content: string;
  votes: number;
  option: Array<Option>;
}

export interface User {
  email: string;
  id: string;
  name: string;
  votedOnOptions: Array<Option>;
  votedOnQuestions: Array<Question>;
  votedOnQuizzes: Array<Quiz>;
}

export interface Option {
  id: string;
  content: string;
  votes: number;
}

export interface Vote {
  voteId: string;
  votes: number;
  usersVoted: Array<User>;
}

export interface IId {
  questionId: string;
}
