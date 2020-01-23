import * as constants from '../constants';
import { UserType } from '../types';

export interface UpdateProfile {
  type: constants.UPDATE_PROFILE;
  payload: { user: UserType }
}

export type UserAction = 
  | UpdateProfile;

export function updateProfile(user: UserType): UpdateProfile {
  return {
    type: constants.UPDATE_PROFILE,
    payload: { user },
  };
}
