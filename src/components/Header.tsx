import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
} from "@nextui-org/react";

const Header = async () => {
  const session = await auth();
  const image = session?.user?.image as string | undefined;
  return (
    <Navbar>
      <NavbarBrand>
        {" "}
        <Link color="foreground" href="/">
          Vite
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Input type="input" label="" />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {session ? (
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
            <>
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
            </>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
