import { ResultsStyles } from '../../styles/ResultsStyles';
import ResultsColumn from './ResultsColumn';
import AnswersColumn from './AnswersColumn';
import { MainPageStyles } from '../../styles/MainStyles';

export default function Results(): JSX.Element {
  return (
    <MainPageStyles>
      <h1>Friday Trivia Results</h1>
      <ResultsStyles>
        <ResultsColumn />
        <AnswersColumn />
      </ResultsStyles>
    </MainPageStyles>
  );
}
