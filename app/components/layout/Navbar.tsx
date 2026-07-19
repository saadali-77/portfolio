import Logo from "./Logo";
import NavLinks from "./Navlinks";
import Container from "../UI/container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur">
      <Container>
        <div className="navbar px-0">

          <div className="navbar-start">
            <Logo />
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
              <NavLinks />
            </ul>
          </div>

          <div className="navbar-end">

            <button className="btn btn-primary">
              Resume
            </button>

          </div>

        </div>
      </Container>
    </header>
  );
}