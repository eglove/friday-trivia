import { useState } from 'react';
import { Question } from '../../graphql/objectInterfaces';
import { ColumnGrid, Display } from '../../styles/MainStyles';
import OptionContainer from './OptionContainer';
import UpdateQuestion from './VoteButtons/UpdateQuestion';
import { ShowHideButton } from '../../styles/QuizStyles';

interface IQuestionContainer {
  questions: Array<Question>;
}

export default function QuestionContainer({
  questions,
}: IQuestionContainer): JSX.Element {
  const [displayQuestion, setDisplayQuestion] = useState('none');

  return (
    <>
      <ShowHideButton
        onClick={(): void =>
          setDisplayQuestion(displayQuestion === 'none' ? '' : 'none')
        }
      >
        {displayQuestion === 'none' ? 'Show' : 'Hide'} Questions
      </ShowHideButton>
      <Display display={displayQuestion}>
        {questions.map((question: Question) => (
          <div key={question.id}>
            <ColumnGrid columns={2} className="question">
              <div>{question.content}</div>
              <UpdateQuestion voteId={question.id} votes={question.votes} />
            </ColumnGrid>
            <OptionContainer options={question.option} />
          </div>
        ))}
      </Display>
    </>
  );
}
