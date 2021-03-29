import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { PaginationStyles } from '../../styles/NavStyles';
import { TOTAL_QUIZZES_QUERY } from '../../graphql/queries';
import { quizPerPage } from '../../config';

interface IQuizPagination {
  currentPage: number;
}

export default function QuizPagination({
  currentPage,
}: IQuizPagination): JSX.Element | null {
  const { error, loading, data } = useQuery(TOTAL_QUIZZES_QUERY);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error! {error.message}</p>;

  // eslint-disable-next-line no-underscore-dangle
  const { count } = data._allQuizzesMeta;
  const pageCount = Math.ceil(count / quizPerPage);

  return (
    <PaginationStyles>
      <Head>
        <title>
          Friday Trivia | Voting Page {currentPage} of {pageCount}
        </title>
      </Head>
      <Link href={`/voting/${currentPage - 1}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a aria-disabled={currentPage <= 1}>⬅ Prev</a>
      </Link>
      <div className="paginationSection">
        Page {currentPage} of {pageCount}
      </div>
      <div className="paginationSection">{count} Quizzes Total</div>
      <Link href={`/voting/${currentPage + 1}`}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a aria-disabled={currentPage >= pageCount}>Next ➡</a>
      </Link>
    </PaginationStyles>
  );
}
