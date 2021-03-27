import { FormEvent } from 'react';
import useForm from '../../lib/useForm';
import {
  SuggestQuizForm,
  SuggestQuizButtonGrid,
} from '../../styles/QuizStyles';

export default function SuggestQuiz(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();

  return (
    <>
      <SuggestQuizForm
        onSubmit={(event: FormEvent<HTMLFormElement>): void => {
          event.preventDefault();
          console.log(inputs);
        }}
      >
        <fieldset>
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
          <SuggestQuizButtonGrid>
            <button type="submit">Submit</button>
            <button type="button" onClick={clearForm}>
              Clear
            </button>
          </SuggestQuizButtonGrid>
        </fieldset>
      </SuggestQuizForm>
    </>
  );
}
