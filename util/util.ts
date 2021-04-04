import { Option, Quiz } from '../graphql/objectInterfaces';

export const randomizeOptionOrder = function (
  incorrectOptions: Array<Option>
): Array<number> {
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

// TODO does not validate 10 questions are available, due to Trivia only
// TODO adding one at a time by limit on query
export const validated = (trivia: Quiz): boolean => {
  for (let i = 0; i < trivia.question.length; i += 1) {
    if (
      trivia.question[i].incorrect.length < 3 ||
      trivia.question[i].correct.length < 1
    ) {
      return false;
    }
  }

  return true;
};
