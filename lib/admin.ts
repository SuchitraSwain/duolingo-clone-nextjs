import { auth } from "@clerk/nextjs";

const adminIds = ["user_2nnS51BL3bMHkhAPp5ycHgNZjO2"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
