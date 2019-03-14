export const RECEIVE_USERS = 'RECEIVE_USERS' 
export const ADD_QUESTION_USER ='ADD_QUESTION_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 

export function addQuestionUser (question) {
  return {
    type: ADD_QUESTION_USER,
    question,
  }
}