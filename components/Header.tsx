import Link from 'next/link';
import { NavStyles } from '../styles/NavStyles';
import { getCurrentUser } from './User';
import SignOut from './Auth/SignOut';

export default function Header(): JSX.Element {
  const user = getCurrentUser();
  return (
    <header>
      <NavStyles>
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        {user ? (
          <div>
            <Link href="/account">Account</Link>
            <SignOut />
          </div>
        ) : (
          <a href="/login">Login</a>
        )}
      </NavStyles>
    </header>
  );
}
