import { useState } from 'react';
import useForm from '../../lib/useForm';
import {
  SuggestQuizForm,
  SuggestQuizButtonGrid,
} from '../../styles/QuizStyles';

export default function SuggestQuiz(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [showQuizSuggestForm, setShowQuizSuggestForm] = useState(false);

  return (
    <>
      {showQuizSuggestForm ? (
        <SuggestQuizForm>
          <label htmlFor="subject">
            Subject:&emsp;
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={inputs.subject}
              onChange={handleChange}
            />
          </label>
          <SuggestQuizButtonGrid>
            <button type="button" onClick={clearForm}>
              Submit
            </button>
            <button
              type="button"
              onClick={(): void => {
                setShowQuizSuggestForm(false);
                clearForm();
              }}
            >
              Cancel
            </button>
          </SuggestQuizButtonGrid>
        </SuggestQuizForm>
      ) : (
        <SuggestQuizForm>
          <button
            type="button"
            onClick={(): void => setShowQuizSuggestForm(true)}
          >
            Suggest Quiz Subject 💡
          </button>
        </SuggestQuizForm>
      )}
    </>
  );
}
