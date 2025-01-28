const users = [
  {
    userName: "admin",
    password: "admin",
  },
  {
    userName: "alex@email.com",
    password: "password",
  },
  {
    userName: "bob@email.com",
    password: "password",
  },
];

export const getUserByUserName = (userName) => {
  const found = users.find((user) => user.userName === userName);
  return found;
};
