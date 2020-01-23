export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
}

export interface StoreState {
  me: UserType,
}
