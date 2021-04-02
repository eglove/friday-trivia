import { useMutation } from '@apollo/client';
import { FormEvent } from 'react';
import Head from 'next/head';
import { Question } from '../../../graphql/objectInterfaces';
import {
  SuggestionFormStyles,
  SuggestionButtonGrid,
} from '../../../styles/QuizStyles';
import OptionContainer from '../OptionContainer';
import useForm from '../../../lib/useForm';
import { SUGGEST_OPTION_MUTATION } from '../../../graphql/mutations';
import { SINGLE_QUESTION_QUERY } from '../../../graphql/queries';
import { MainPageStyles } from '../../../styles/MainStyles';

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
    <MainPageStyles>
      <Head>
        <title>Friday Trivia | Answer Suggestions</title>
      </Head>
      <h2>Suggest answers for:</h2>
      <h3>{question.content}</h3>
      <SuggestionFormStyles
        onSubmit={async (event: FormEvent<HTMLFormElement>): Promise<void> => {
          event.preventDefault();
          inputs.content = inputs.content.toLowerCase();
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
      </SuggestionFormStyles>
      <OptionContainer options={question.option} questionId={question.id} />
    </MainPageStyles>
  );
}
