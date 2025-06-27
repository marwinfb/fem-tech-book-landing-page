import Logo from "../../assets/images/logo.svg"

import Container from "../shared/Container"

function Navbar() {
  return (
    <header className="bg-primary-neutral-100 pt-6">
      <Container>
        <img src={Logo} alt="" />
      </Container>
    </header>
  )
}
export default Navbar