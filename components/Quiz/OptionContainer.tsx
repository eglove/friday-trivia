import { Option } from '../../graphql/objectInterfaces';
import { TwoColumnGrid } from '../../styles/MainStyles';

interface IOptionContainer {
  options: Array<Option>;
}

export default function OptionContainer({
  options,
}: IOptionContainer): JSX.Element {
  console.log(options);
  return (
    <>
      {options.map((option: Option) => (
        <TwoColumnGrid>
          <div>{option.content}</div>
          <div>{option.votes}</div>
        </TwoColumnGrid>
      ))}
    </>
  );
}
