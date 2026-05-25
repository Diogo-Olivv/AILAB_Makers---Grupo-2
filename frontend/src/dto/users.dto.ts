export type RegisterDto = {
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  id: string;
  email: string;
  name: string;
};
