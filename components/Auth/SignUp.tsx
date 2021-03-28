import { useMutation } from '@apollo/client';
import useForm from '../../lib/useForm';
import { AuthFormStyles } from '../../styles/AuthFormStyles';
import { ColumnGrid } from '../../styles/MainStyles';
import { SIGN_UP_MUTATION } from '../../graphql/mutations';

export default function SignUp(): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP_MUTATION, {
    variables: inputs,
  });

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    clearForm();
    await signUp();
  };

  return (
    <AuthFormStyles method="POST" onSubmit={handleSubmit}>
      <p>Sign Up</p>
      <fieldset>
        <label htmlFor="name">
          Display Name:&emsp;
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="J. Doe"
            autoComplete="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:&emsp;
          <input
            required
            type="email"
            id="signUpEmail"
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
            id="signUpPassword"
            name="password"
            autoComplete="password"
            minLength={8}
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <ColumnGrid columns={2}>
          <button type="submit">Sign Up</button>
          <button type="button" onClick={clearForm}>
            Clear
          </button>
        </ColumnGrid>
      </fieldset>
      <br />
      {loading && <p>Loading...</p>}
      {data?.createUser && (
        <p>
          Signed up with {data.createUser.email}
          <br />
          Please sign in.
        </p>
      )}
      {error && <p>Error!</p>}
    </AuthFormStyles>
  );
}
