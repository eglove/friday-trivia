import { useState } from 'react';
import Link from 'next/link';
import { Option } from '../../graphql/objectInterfaces';
import { ColumnGrid, Display, FlexStyles } from '../../styles/MainStyles';
import UpdateOption from './VoteButtons/UpdateOption';
import { ShowHideButton, SuggestButton } from '../../styles/QuizStyles';

interface IOptionContainer {
  options: Array<Option>;
}

export default function OptionContainer({
  options,
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
          {displayOption === 'none' ? 'Show' : 'Hide'} Options
        </ShowHideButton>
        <SuggestButton>
          <Link href="/suggest-answer">Suggest Answers</Link>
        </SuggestButton>
      </FlexStyles>
      <Display display={displayOption}>
        {options.map((option: Option) => (
          <ColumnGrid columns={2} key={option.id}>
            <li>{option.content}</li>
            <UpdateOption voteId={option.id} votes={option.votes} />
          </ColumnGrid>
        ))}
      </Display>
    </>
  );
}
