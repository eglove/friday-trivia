import { useRouter } from 'next/router';
import CountdownToTrivia from '../CountdownToTrivia';
import QuizContainer from './QuizContainer';
import { MainPageStyles } from '../../styles/MainStyles';
import QuizPagination from './QuizPagination';
import SuggestQuiz from './SuggestForms/SuggestQuiz';

export default function Voting(): JSX.Element {
  const { query } = useRouter();

  let currentPage = 1;
  if (typeof query.page === 'string') {
    currentPage = parseInt(query.page, 10);
  }

  return (
    <MainPageStyles>
      <h1>Friday Trivia Voting</h1>
      <CountdownToTrivia />
      <SuggestQuiz />
      <QuizPagination currentPage={currentPage} />
      <QuizContainer currentPage={currentPage} />
      <QuizPagination currentPage={currentPage} />
    </MainPageStyles>
  );
}
