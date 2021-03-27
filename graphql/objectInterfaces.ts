export interface Quiz {
  id: string;
  subject: string;
  votes: number;
  question: Array<Question>;
}

export interface Question {
  id: number;
  content: string;
  votes: number;
  option: Array<Option>;
}

export interface Option {
  id: number;
  content: string;
  votes: number;
}
