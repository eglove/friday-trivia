import { useRouter } from 'next/router';
import RequestPasswordReset from '../components/Auth/RequestPasswordReset';
import ResetPassword from '../components/Auth/ResetPassword';

export default function resetPassword(): JSX.Element {
  const { query } = useRouter();

  if (!query?.token) {
    return <RequestPasswordReset />;
  }

  if (typeof query.token === 'string') {
    return <ResetPassword token={query.token} />;
  }

  return <p>Nothing here.</p>;
}
