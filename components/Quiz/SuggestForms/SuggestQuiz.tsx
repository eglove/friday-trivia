import { FormEvent } from 'react';
import { useMutation } from '@apollo/client';
import useForm from '../../../lib/useForm';
import {
  SuggestionForm,
  SuggestionButtonGrid,
} from '../../../styles/QuizStyles';
import { SUGGEST_SUBJECT_MUTATION } from '../../../graphql/mutations';
import { ALL_QUIZZES_QUERY } from '../../../graphql/queries';

export default function SuggestQuiz(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [createQuiz, { loading, error }] = useMutation(
    SUGGEST_SUBJECT_MUTATION,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_QUIZZES_QUERY }],
    }
  );

  return (
    <>
      <SuggestionForm
        onSubmit={async (event: FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          inputs.subject = inputs.subject.toLowerCase();
          clearForm();
          await createQuiz();
        }}
      >
        {error && <p>Error! {error.message}</p>}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="subject">
            💡 Suggest Subject:&emsp;
            <input
              required
              type="text"
              id="subject"
              name="subject"
              placeholder="90's Movies"
              value={inputs.subject}
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
    </>
  );
}
