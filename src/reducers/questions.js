import { 
  RECEIVE_QUESTIONS, 
  ADD_QUESTION, 
  ADD_QUESTION_VOTE }
from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ADD_QUESTION_VOTE :
      const votes = state[action.qid][action.answer].votes
      return {
        ...state,
        [action.qid] : {
          ...state[action.qid],
          [action.answer] : {
            ...state[action.qid][action.answer],
            votes : votes.concat([action.authedUser])
          }
        }
      }
    default :
      return state
  }
} 