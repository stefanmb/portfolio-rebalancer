import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from '../reducers/user';
import topic from '../reducers/topic';
import message from '../reducers/message';
import investmentAmount from '../reducers/investmentAmount';
import investmentSteps from '../reducers/investmentSteps';
import view from '../reducers/view';
import * as types from '../types';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  isFetching,
  topic,
  user,
    message,
    investmentAmount,
    investmentSteps,
    view,
  routing,
});

export default rootReducer;