import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import RequestPasswordReset from '../components/Auth/RequestPasswordReset';

export default function Login(): JSX.Element {
  return (
    <>
      <SignIn />
      <SignUp />
      <RequestPasswordReset />
    </>
  );
}
