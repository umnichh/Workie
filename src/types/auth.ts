export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  identifier: string;
  // добавьте другие необходимые поля
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}