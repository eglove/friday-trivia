export interface Quiz {
  id: string;
  subject: string;
  votes: number;
  question: Array<Question>;
}

export interface Question {
  id: string;
  content: string;
  votes: number;
  option: Array<Option>;
}

export interface Option {
  id: string;
  content: string;
  votes: number;
}

export interface Vote {
  voteId: string;
  votes: number;
}
