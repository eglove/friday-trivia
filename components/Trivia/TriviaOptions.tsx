import { useMutation } from '@apollo/client';
import { FormEvent } from 'react';
import { Option } from '../../graphql/objectInterfaces';
import { randomizeOptionOrder } from '../../util/util';
import useForm from '../../lib/useForm';
import { ANSWER_QUESTION_MUTATION } from '../../graphql/mutations';
import { TriviaStatusConsumer } from '../../lib/triviaStatus';
import { CURRENT_USER_QUERY } from '../../graphql/queries';

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
  const { currentUser } = TriviaStatusConsumer();
  const { handleChange } = useForm();
  const [updateOption, { loading, error }] = useMutation(
    ANSWER_QUESTION_MUTATION,
    {
      variables: {
        questionId,
        userId: currentUser.id,
      },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await updateOption();
  };

  const setDisabled = (): boolean => {
    if (loading) {
      return true;
    }

    for (let i = 0; i < currentUser.answeredQuestions.length; i += 1) {
      if (currentUser.answeredQuestions[i].id === questionId) {
        return true;
      }
    }

    return false;
  };

  console.log(currentUser);

  return (
    <>
      <form onSubmit={handleSubmit}>
        {error && <p>Error! {error.message}</p>}
        {randOrder.map(optionIndex => {
          const answerId =
            incorrectOptions[optionIndex]?.id ?? correctOption.id;
          const answerContent =
            incorrectOptions[optionIndex]?.content ?? correctOption.content;
          return (
            <fieldset
              key={answerId}
              disabled={setDisabled()}
              aria-busy={setDisabled()}
            >
              <input
                type="radio"
                id={answerId}
                name="answerId"
                value={answerId}
                onChange={handleChange}
              />
              <label htmlFor={answerId}>{answerContent}</label>
            </fieldset>
          );
        })}
        <button
          disabled={setDisabled()}
          aria-disabled={setDisabled()}
          type="submit"
        >
          Save Answer
        </button>
      </form>
    </>
  );
}
