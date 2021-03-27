import { MainPageStyles } from '../styles/MainStyles';
import CountdownToTrivia from '../components/CountdownToTrivia';
import QuizContainer from '../components/Quiz/QuizContainer';

export default function Index(): JSX.Element {
  return (
    <MainPageStyles>
      <h1>Friday Trivia</h1>
      <CountdownToTrivia />
      <QuizContainer />
    </MainPageStyles>
  );
}
