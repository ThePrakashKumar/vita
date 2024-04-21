"use client";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { signIn, signOut } from "@/actions";
import { useSession } from "next-auth/react";

const HeaderAuth = () => {
  const session = useSession();
  const image = session.data?.user?.image || "";
  if (session.status === "loading") return;
  return (
    <NavbarItem className="hidden lg:flex">
      {session.data?.user ? (
        <Popover key={"bottom-end"} placement={"bottom-end"}>
          <PopoverTrigger>
            <Avatar src={image} size="md" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={signOut}>
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <form action={signIn}>
          <Button color="primary" variant="bordered" type="submit">
            Sign Up
          </Button>
          <Button
            color="primary"
            variant="solid"
            type="submit"
            className="ml-2"
          >
            Login
          </Button>
        </form>
      )}
    </NavbarItem>
  );
};

export default HeaderAuth;
