import { Props } from 'next/dist/client/experimental-script';
import Header from './Header';
import { GlobalStyles } from '../styles/GlobalStyles.css';

interface PageProps {
  children: Props;
}

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  );
}
