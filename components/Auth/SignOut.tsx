import { useMutation } from '@apollo/client';
import { SIGN_OUT_MUTATION } from '../../graphql/mutations';
import { CURRENT_USER_QUERY } from '../../graphql/queries';

export default function SignOut(): JSX.Element {
  const [signOut] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button type="button" onClick={(): any => signOut}>
      Sign Out
    </button>
  );
}
