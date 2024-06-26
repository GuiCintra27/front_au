import Link from "next/link";
import Image from "next/image";

import { Container } from "./styles";
import { NavBar } from "./navBar/navBar";

export function Header() {
  return (
    <Container>
      <Link href="/">
        <div>
          <Image
            priority
            id="logo"
            src="/logo.svg"
            width={74}
            height={74}
            alt="Logo"
          />

          <h3>University Of Snacks</h3>
        </div>
      </Link>
      <NavBar />
    </Container>
  );
}
