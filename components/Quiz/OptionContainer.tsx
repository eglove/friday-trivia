import { useState } from 'react';
import Link from 'next/link';
import { Option } from '../../graphql/objectInterfaces';
import { ColumnGrid, Display, FlexStyles } from '../../styles/MainStyles';
import UpdateOption from './VoteButtons/UpdateOption';
import {
  ShowHideButton,
  SuggestButton,
  LiCapitalize,
} from '../../styles/QuizStyles';

interface IOptionContainer {
  options: Array<Option>;
  questionId: string;
}

export default function OptionContainer({
  options,
  questionId,
}: IOptionContainer): JSX.Element {
  const [displayOption, setDisplayOption] = useState('none');

  return (
    <>
      <FlexStyles>
        <ShowHideButton
          onClick={(): void =>
            setDisplayOption(displayOption === 'none' ? '' : 'none')
          }
        >
          {displayOption === 'none' ? 'Show' : 'Hide'} {options.length} Options
        </ShowHideButton>
        <SuggestButton>
          <Link href={`/suggest-answer/${questionId}`}>Suggest Answers</Link>
        </SuggestButton>
      </FlexStyles>
      <Display display={displayOption}>
        {options.map((option: Option) => (
          <ColumnGrid columns={2} key={option.id}>
            <LiCapitalize>{option.content}</LiCapitalize>
            <UpdateOption
              voteId={option.id}
              votes={option.votes}
              usersVoted={option.usersVoted}
            />
          </ColumnGrid>
        ))}
      </Display>
    </>
  );
}
