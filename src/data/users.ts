enum Users {
  ADMIN = "admin",
  USER1 = "dipesh",
  USER2 = "mukesh",
}

const userCredentials: Record<Users, { userName: Users; password: string }> = {
  [Users.ADMIN]: { userName: Users.ADMIN, password: "admin" },
  [Users.USER1]: { userName: Users.USER1, password: "dipesh" },
  [Users.USER2]: { userName: Users.USER2, password: "mukesh" },
};

export const getUserByUserName = (
  userName: string
): { userName: Users; password: string } | undefined => {
  return userCredentials[userName as Users];
};
