import { SET_AUTHED, LOGOUT } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED:
      return action.id;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
