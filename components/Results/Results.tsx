import { ResultsStyles } from '../../styles/ResultsStyles';
import ResultsColumn from './ResultsColumn';
import AnswersColumn from './AnswersColumn';
import { MainPageStyles } from '../../styles/MainStyles';
import ResultsCountdown from './ResultsCountdown';

export default function Results(): JSX.Element {
  return (
    <MainPageStyles>
      <h1>Friday Trivia Results</h1>
      <ResultsCountdown />
      <ResultsStyles>
        <ResultsColumn />
        <AnswersColumn />
      </ResultsStyles>
    </MainPageStyles>
  );
}
