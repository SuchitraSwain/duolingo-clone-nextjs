import { auth } from "@clerk/nextjs";

const adminIds = ["user_2nbx3v1n15gpaTXS544vZdW910y"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
