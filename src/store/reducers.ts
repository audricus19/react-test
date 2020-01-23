import { StoreState } from '../types';
import { UPDATE_PROFILE } from '../constants';
import { UserAction } from './actions';

const initialState = {
  me: {
    firstName: 'Audricus',
    lastName: 'Phagnasay',
    email: 'audricus2019@gmail.com',
  },
};

export function userReducer(state: StoreState = initialState, action: UserAction): StoreState {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        me: action.payload.user,
      };
    default:
      return state;
  }
}
