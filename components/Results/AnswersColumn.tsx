import { thisWeeksQuiz } from '../../util/util';
import { questionsPerQuiz } from '../../config';
import { Question } from '../../graphql/objectInterfaces';
import { TriviaQAResultsColumnStyles } from '../../styles/ResultsStyles';

export default function AnswersColumn(): JSX.Element {
  const currentQuiz = thisWeeksQuiz(questionsPerQuiz);

  return (
    <div>
      {typeof currentQuiz !== 'boolean' &&
        currentQuiz.question.map((q: Question) => (
          <TriviaQAResultsColumnStyles>
            <div className="question">Q: {q.content}</div>
            {/* @ts-ignore*/}
            <div className="answer">A: {q.correct[0].content}</div>
          </TriviaQAResultsColumnStyles>
        ))}
    </div>
  );
}
