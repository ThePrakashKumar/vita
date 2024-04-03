import { Button } from "@nextui-org/react";
import { signIn } from "@/actions/signIn";
import { auth } from "@/auth";
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={signIn}>
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
