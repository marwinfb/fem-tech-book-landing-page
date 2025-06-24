import Logo from "../../assets/images/logo.svg"

import Container from "../shared/Container"

function Navbar() {
  return (
    <header>
      <Container>
        <nav className="w-full bg-amber-100">
            <a href="#">
              <img src={Logo} alt="Tech Book Club" />
            </a>
        </nav>
      </Container>
    </header>
  )
}
export default Navbar