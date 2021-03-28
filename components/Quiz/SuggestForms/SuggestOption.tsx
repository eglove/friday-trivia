import { useMutation } from '@apollo/client';
import { FormEvent } from 'react';
import { Question } from '../../../graphql/objectInterfaces';
import {
  SuggestionForm,
  SuggestionButtonGrid,
} from '../../../styles/QuizStyles';
import OptionContainer from '../OptionContainer';
import useForm from '../../../lib/useForm';
import { SUGGEST_OPTION_MUTATION } from '../../../graphql/mutations';
import { SINGLE_QUESTION_QUERY } from '../../../graphql/queries';

interface ISuggestOption {
  question: Question;
}

export default function SuggestOption({
  question,
}: ISuggestOption): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [createOption, { loading, error }] = useMutation(
    SUGGEST_OPTION_MUTATION,
    {
      variables: {
        content: inputs.content,
        questionId: question.id,
      },
      refetchQueries: [
        { query: SINGLE_QUESTION_QUERY, variables: { id: question.id } },
      ],
    }
  );

  return (
    <>
      <h2>Suggest answers for:</h2>
      <h3>{question.content}</h3>
      <SuggestionForm
        onSubmit={async (event: FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          clearForm();
          await createOption();
        }}
      >
        {error && <p>Error! {error.message}</p>}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="content">
            Answer:
            <br />
            <textarea
              required
              id="content"
              name="content"
              rows={1}
              cols={50}
              placeholder="24 miles per hour"
              value={inputs.content}
              onChange={handleChange}
            />
          </label>
          <SuggestionButtonGrid>
            <button type="submit">Submit</button>
            <button type="button" onClick={clearForm}>
              Clear
            </button>
          </SuggestionButtonGrid>
        </fieldset>
      </SuggestionForm>
      <OptionContainer options={question.option} questionId={question.id} />
    </>
  );
}
