export interface Quiz {
  id: string;
  subject: string;
  votes: number;
  question: {
    content: string;
    votes: number;
    option: {
      content: string;
      votes: number;
    };
  };
}
