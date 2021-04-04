import { useQuery } from '@apollo/client';
import { Option, Quiz } from '../graphql/objectInterfaces';
import { questionsPerQuiz } from '../config';
import { TOP_VOTED_VALID_QUIZ_QUERY } from '../graphql/queries';

export const randomizeOptionOrder = (
  incorrectOptions: Array<Option>
): Array<number> => {
  const indexes = Array.from({ length: incorrectOptions.length + 1 });
  for (let i = 0; i < indexes.length; i += 1) {
    indexes[i] = i;
  }

  // Shuffle
  for (let i = indexes.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * i);
    const temp = indexes[i];
    indexes[i] = indexes[j];
    indexes[j] = temp;
  }

  // @ts-ignore
  return indexes;
};

export const thisWeeksQuiz = (numOfQuestions: number): boolean | Quiz => {
  const { data } = useQuery(TOP_VOTED_VALID_QUIZ_QUERY, {
    variables: {
      numOfQuestions,
    },
  });

  if (typeof data === 'undefined') {
    return false;
  }

  const quiz = data.allQuizzes[0];

  if (quiz.numberOfQuestions < questionsPerQuiz) {
    return false;
  }

  for (let i = 0; i < quiz.question.length; i += 1) {
    if (
      // @ts-ignore
      quiz.question[i]?.incorrect?.length < 3 ||
      // @ts-ignore
      quiz.question[i]?.correct?.length < 1
    ) {
      return false;
    }
  }

  return quiz;
};
