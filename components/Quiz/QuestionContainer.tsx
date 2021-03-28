import { useState } from 'react';
import Link from 'next/link';
import { Question } from '../../graphql/objectInterfaces';
import { ColumnGrid, Display, FlexStyles } from '../../styles/MainStyles';
import OptionContainer from './OptionContainer';
import UpdateQuestion from './VoteButtons/UpdateQuestion';
import { ShowHideButton, SuggestButton } from '../../styles/QuizStyles';

interface IQuestionContainer {
  questions: Array<Question>;
  quizId: string;
}

export default function QuestionContainer({
  questions,
  quizId,
}: IQuestionContainer): JSX.Element {
  const [displayQuestion, setDisplayQuestion] = useState('none');

  return (
    <>
      <FlexStyles>
        <ShowHideButton
          onClick={(): void =>
            setDisplayQuestion(displayQuestion === 'none' ? '' : 'none')
          }
        >
          {displayQuestion === 'none' ? 'Show' : 'Hide'} {questions.length}{' '}
          Questions
        </ShowHideButton>
        <SuggestButton>
          <Link href={`/suggest-question/${quizId}`}>Suggest Questions</Link>
        </SuggestButton>
      </FlexStyles>
      <Display display={displayQuestion}>
        {questions.map((question: Question) => (
          <div key={question.id}>
            <ColumnGrid columns={2} className="question">
              <div>{question.content}</div>
              <UpdateQuestion voteId={question.id} votes={question.votes} />
            </ColumnGrid>
            <OptionContainer
              questionId={question.id}
              options={question.option}
            />
          </div>
        ))}
      </Display>
    </>
  );
}
