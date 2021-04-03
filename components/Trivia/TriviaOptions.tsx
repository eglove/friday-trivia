import { Option } from '../../graphql/objectInterfaces';

interface ITriviaOptions {
  questionId: string;
  options: Array<Option>;
}

export default function TriviaOptions({
  questionId,
  options,
}: ITriviaOptions): JSX.Element {
  return (
    <>
      {options.map(option => (
        <div key={option.id}>
          <input
            type="radio"
            id={option.id}
            name={questionId}
            value={option.content}
          />
          <label htmlFor={questionId}>{option.content}</label>
        </div>
      ))}
      <button type="submit">Save Answer</button>
    </>
  );
}
