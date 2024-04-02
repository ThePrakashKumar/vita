"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  return session?.data?.user ? <div>Signed</div> : <div>Not Signed!</div>;
};

export default Profile;
