import { RECEIVE_USERS } from "../actions/users";
import { ADD_QUESTION, ANSWER_QUESTION } from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.quest.author]: {
          ...state[action.quest.author],
          questions: state[action.quest.author].questions.concat([
            action.quest.id,
          ]),
        },
      };
    case ANSWER_QUESTION:
      const { qid, answer, authedUser } = action.answerInfo;

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
