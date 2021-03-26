import { Props } from 'next/dist/client/experimental-script';
import Header from './Header';

interface PageProps {
  children: Props;
}

export default function Page({ children }: PageProps): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
