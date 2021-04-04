import { ResultsStyles } from '../../styles/ResultsStyles';
import ResultsColumn from './ResultsColumn';
import AnswersColumn from './AnswersColumn';

export default function Results(): JSX.Element {
  return (
    <ResultsStyles>
      <ResultsColumn />
      <AnswersColumn />
    </ResultsStyles>
  );
}
