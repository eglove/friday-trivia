import { useMutation } from '@apollo/client';
import { FormEvent } from 'react';
import { Quiz } from '../../../graphql/objectInterfaces';
import {
  SuggestionButtonGrid,
  SuggestionForm,
} from '../../../styles/QuizStyles';
import useForm from '../../../lib/useForm';
import { SUGGEST_QUESTION_MUTATION } from '../../../graphql/mutations';
import { SINGLE_QUIZ_QUERY } from '../../../graphql/queries';
import QuestionContainer from '../QuestionContainer';

interface ISuggestQuestion {
  quiz: Quiz;
}

export default function SuggestQuestion({
  quiz,
}: ISuggestQuestion): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [createQuestion, { loading, error }] = useMutation(
    SUGGEST_QUESTION_MUTATION,
    {
      variables: {
        content: inputs.content,
        quizId: quiz.id,
      },
      refetchQueries: [
        { query: SINGLE_QUIZ_QUERY, variables: { id: quiz.id } },
      ],
    }
  );

  return (
    <>
      <h2>Suggest Questions for {quiz.subject}</h2>
      <SuggestionForm
        onSubmit={async (event: FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          clearForm();
          await createQuestion();
        }}
      >
        {error && <p>Error! {error.message}</p>}
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="content">
            Question:
            <br />
            <textarea
              required
              id="content"
              name="content"
              rows={5}
              cols={50}
              placeholder="What is the airspeed velocity of an unladen swallow?"
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
      <QuestionContainer quizId={quiz.id} questions={quiz.question} />
    </>
  );
}
