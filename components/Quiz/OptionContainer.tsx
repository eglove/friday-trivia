import { Option } from '../../graphql/objectInterfaces';
import { ColumnGrid } from '../../styles/MainStyles';
import { VoteButton } from '../../styles/QuizStyles';

interface IOptionContainer {
  options: Array<Option>;
}

export default function OptionContainer({
  options,
}: IOptionContainer): JSX.Element {
  return (
    <>
      {options.map((option: Option) => (
        <ColumnGrid columns={2}>
          <li>{option.content}</li>
          <VoteButton>{option.votes} Votes</VoteButton>
        </ColumnGrid>
      ))}
    </>
  );
}
