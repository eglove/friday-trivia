import { useMutation } from '@apollo/client';
import useForm from '../../lib/useForm';
import { AuthFormStyles } from '../../styles/AuthFormStyles';
import { ColumnGrid } from '../../styles/MainStyles';
import { REQUEST_PASSWORD_RESET_MUTATION } from '../../graphql/mutations';

export default function RequestPasswordReset(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [requestReset, { data, loading, error }] = useMutation(
    REQUEST_PASSWORD_RESET_MUTATION,
    {
      variables: inputs,
    }
  );

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    clearForm();
    await requestReset();
  };

  return (
    <AuthFormStyles method="POST" onSubmit={handleSubmit}>
      <p>Reset Password</p>
      <fieldset>
        <label htmlFor="email">
          Email:&emsp;
          <input
            required
            type="email"
            id="requestResetEmail"
            name="email"
            placeholder="example@example.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <ColumnGrid columns={2}>
          <button type="submit">Reset</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </ColumnGrid>
      </fieldset>
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data?.sendUserPasswordResetLink === null && (
        <p>Success! Check your email for a link.</p>
      )}
    </AuthFormStyles>
  );
}
