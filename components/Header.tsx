import Link from 'next/link';
import { NavStyles } from '../styles/NavStyles';
import { getCurrentUser } from './User';

export default function Header(): JSX.Element {
  const user = getCurrentUser();
  return (
    <header>
      <NavStyles>
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        {user ? (
          <Link href="/account">Account</Link>
        ) : (
          <a href="/login">Login</a>
        )}
      </NavStyles>
    </header>
  );
}
