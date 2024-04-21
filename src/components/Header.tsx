import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./HeaderAuth";

const Header = async () => {
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
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
