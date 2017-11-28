/*
 * import contants
 */

import { fromJS } from 'immutable';

import {
  UPDATE_SINGLE_FIELD,
} from './Constants';

/*
 * initial state of reducers
 */
const initialState = fromJS({
  fields: {
    username: '',
    password: '',
    email: ''
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SINGLE_FIELD:
      return state.setIn([ 'fields', action.field ], action.value);
    default:
      return state;
  }
}

/*
 * export the reducer
 */

export default loginReducer;
