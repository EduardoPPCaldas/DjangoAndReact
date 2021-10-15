import { CREATE_MESSAGE } from "./types";

// CREATE MESSAGE
export const createMEssage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  }
}