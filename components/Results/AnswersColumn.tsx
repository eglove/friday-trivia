import { thisWeeksQuiz } from '../../util/util';
import { questionsPerQuiz } from '../../config';
import { Question } from '../../graphql/objectInterfaces';
import {
  TriviaQAStyles,
  TriviaQAColumnStyles,
} from '../../styles/ResultsStyles';

export default function AnswersColumn(): JSX.Element {
  const currentQuiz = thisWeeksQuiz(questionsPerQuiz);

  return (
    <TriviaQAColumnStyles>
      {typeof currentQuiz !== 'boolean' &&
        currentQuiz.question.map((q: Question) => (
          <TriviaQAStyles>
            <div className="question">Q: {q.content}</div>
            {/* @ts-ignore*/}
            <div className="answer">A: {q.correct[0].content}</div>
          </TriviaQAStyles>
        ))}
    </TriviaQAColumnStyles>
  );
}
