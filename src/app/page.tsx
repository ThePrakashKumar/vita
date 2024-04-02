import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signOut}>
        <Button type="submit"> {session?.user ? "Sing Out" : "Sign In"}</Button>
      </form>
      {!session?.user ? (
        <div>User</div>
      ) : (
        <div>{JSON.stringify(session?.user)}</div>
      )}
      <Profile />
    </div>
  );
}
