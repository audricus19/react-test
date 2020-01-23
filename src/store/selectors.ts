import { StoreState, UserType } from '../types';

export const profileSelector = (state: StoreState): UserType => state.me;
