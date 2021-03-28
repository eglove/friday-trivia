import { useMutation } from '@apollo/client';
import useForm from '../../lib/useForm';
import { AuthFormStyles } from '../../styles/AuthFormStyles';
import { ColumnGrid } from '../../styles/MainStyles';
import { PASSWORD_RESET_MUTATION } from '../../graphql/mutations';

export default function ResetPassword({
  token,
}: {
  token: string;
}): JSX.Element {
  const { inputs, handleChange, clearForm } = useForm();
  const [reset, { data, loading, error }] = useMutation(
    PASSWORD_RESET_MUTATION,
    {
      variables: {
        email: inputs.email,
        password: inputs.password,
        token,
      },
    }
  );

  const handleSubmit = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    clearForm();
    await reset();
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
            id="resetEmail"
            name="email"
            placeholder="example@example.com"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          New Password:&emsp;
          <input
            required
            type="password"
            id="resetPassword"
            name="password"
            autoComplete="password"
            minLength={8}
            value={inputs.password}
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
      {error && <p>Error! {error.message}</p>}
      {data?.redeemUserPasswordResetToken && (
        <p>{data.redeemUserPasswordResetToken.message}</p>
      )}
    </AuthFormStyles>
  );
}
