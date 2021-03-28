import { useMutation } from '@apollo/client';
import { AuthFormStyles } from '../../styles/AuthFormStyles';
import useForm from '../../lib/useForm';
import { ColumnGrid } from '../../styles/MainStyles';
import { LOGIN_MUTATION } from '../../graphql/mutations';
import { CURRENT_USER_QUERY } from '../../graphql/queries';

export default function SignIn(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    clearForm();
    await login();
  };

  return (
    <AuthFormStyles method="POST" onSubmit={handleSubmit}>
      <p>Sign In</p>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="email">
          Email:&emsp;
          <input
            required
            type="text"
            id="signInEmail"
            name="email"
            placeholder="example@example.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:&emsp;
          <input
            required
            type="password"
            id="singUpPassword"
            name="password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <ColumnGrid columns={2}>
          <button type="submit">Login</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </ColumnGrid>
      </fieldset>
      <br />
      {loading && <p>Loading...</p>}
      {error && <p>Error! {error.message}</p>}
      {data && <p>{data?.authenticateUserWithPassword?.message}</p>}
    </AuthFormStyles>
  );
}
