import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./HeaderAuth";
import SearchBar from "./SearchBar";
import { Suspense } from "react";

const Header = () => {
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
          <Suspense>
            <SearchBar />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
