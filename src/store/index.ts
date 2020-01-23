import { createStore } from 'redux';

import { userReducer } from './reducers';

export default () => {
  const initialState = {
    me: {
      firstName: 'Audricus',
      lastName: 'Phagnasay',
      email: 'audricus2019@gmail.com',
    },
  };
  const store = createStore(
    userReducer,
    initialState,
  );

  return store;
}