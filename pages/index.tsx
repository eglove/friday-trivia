import { MainPageStyles } from '../styles/MainStyles';
import CountdownToTrivia from '../components/CountdownToTrivia';

export default function Index(): JSX.Element {
  return (
    <MainPageStyles>
      <h1>Friday Trivia</h1>
      <CountdownToTrivia />
    </MainPageStyles>
  );
}
