export const SET_AUTHED = "SET_AUTHED";
export const LOGOUT = "LOGOUT";

export function setAuthed(id) {
  return {
    type: SET_AUTHED,
    id,
  };
}

export function logOut(id) {
  return {
    type: LOGOUT,
  };
}
