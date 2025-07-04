import images from "../../assets/images/assets"

import Container from "../shared/Container"

function Navbar() {
  return (
    <header className="bg-primary-neutral-100 pt-6 bg-pattern-light">
      <Container>
        <a href="">
          <img src={images.logo} alt="Tech Book Club Logo" />
        </a>
      </Container>
    </header>
  )
}
export default Navbar