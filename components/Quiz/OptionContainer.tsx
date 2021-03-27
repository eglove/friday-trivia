import { useState } from 'react';
import { Option } from '../../graphql/objectInterfaces';
import { ColumnGrid, Display } from '../../styles/MainStyles';
import UpdateOption from './VoteButtons/UpdateOption';
import { ShowHideButton } from '../../styles/QuizStyles';

interface IOptionContainer {
  options: Array<Option>;
}

export default function OptionContainer({
  options,
}: IOptionContainer): JSX.Element {
  const [displayOption, setDisplayOption] = useState('none');

  return (
    <>
      <ShowHideButton
        onClick={(): void =>
          setDisplayOption(displayOption === 'none' ? '' : 'none')
        }
      >
        {displayOption === 'none' ? 'Show' : 'Hide'} Options
      </ShowHideButton>
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
