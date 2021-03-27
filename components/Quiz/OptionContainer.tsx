import { Option } from '../../graphql/objectInterfaces';
import { ColumnGrid } from '../../styles/MainStyles';
import UpdateOption from './VoteButtons/UpdateOption';

interface IOptionContainer {
  options: Array<Option>;
}

export default function OptionContainer({
  options,
}: IOptionContainer): JSX.Element {
  return (
    <>
      {options.map((option: Option) => (
        <ColumnGrid columns={2} key={option.id}>
          <li>{option.content}</li>
          <UpdateOption voteId={option.id} votes={option.votes} />
        </ColumnGrid>
      ))}
    </>
  );
}
