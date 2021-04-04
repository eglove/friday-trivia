import { Option } from '../../graphql/objectInterfaces';
import { randomizeOptionOrder } from '../../util/util';

interface ITriviaOptions {
  questionId: string;
  correctOption: Option;
  incorrectOptions: Array<Option>;
}

export default function TriviaOptions({
  questionId,
  correctOption,
  incorrectOptions,
}: ITriviaOptions): JSX.Element {
  const randOrder = randomizeOptionOrder(incorrectOptions);

  return (
    <>
      {randOrder.map(optionIndex => (
        <div key={incorrectOptions[optionIndex]?.id ?? correctOption.id}>
          <input
            type="radio"
            id={incorrectOptions[optionIndex]?.id ?? correctOption.id}
            name={questionId}
            value={
              incorrectOptions[optionIndex]?.content ?? correctOption.content
            }
          />
          <label
            htmlFor={incorrectOptions[optionIndex]?.id ?? correctOption.id}
          >
            {incorrectOptions[optionIndex]?.content ?? correctOption.content}
          </label>
        </div>
      ))}
      <button type="submit">Save Answer</button>
    </>
  );
}
