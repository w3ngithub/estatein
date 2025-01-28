interface User {
  userName: string;
  password: string;
}

const users: User[] = [
  {
    userName: "admin",
    password: "admin",
  },
  {
    userName: "dipesh",
    password: "dipesh",
  },
  {
    userName: "mukesh",
    password: "mukesh",
  },
];

export const getUserByUserName = (userName: string) => {
  const found = users.find((user) => user.userName === userName);
  return found;
};
