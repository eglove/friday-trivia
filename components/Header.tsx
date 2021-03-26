import Link from 'next/link';
import { NavStyles } from '../styles/NavStyles';

export default function Header(): JSX.Element {
  return (
    <header>
      <NavStyles>
        <Link href="/">Home</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="/account">Account</Link>
      </NavStyles>
    </header>
  );
}
