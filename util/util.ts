import { Option, Quiz } from '../graphql/objectInterfaces';
import { questionsPerQuiz } from '../config';

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

export const validated = (trivia: Quiz): boolean => {
  if (trivia.numberOfQuestions < questionsPerQuiz) {
    return false;
  }

  for (let i = 0; i < trivia.question.length; i += 1) {
    if (
      // @ts-ignore
      trivia.question[i].incorrect.length < 3 ||
      // @ts-ignore
      trivia.question[i].correct.length < 1
    ) {
      return false;
    }
  }

  return true;
};
