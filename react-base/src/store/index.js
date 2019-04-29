import { createStore } from 'redux'
const reducer = (state = {}, action = {}) => {
  return {
    ...state,
    ...action
  }
}
const store = createStore(reducer);

export default store;