import images from "../../assets/images/assets"

import Container from "../shared/Container"

function Navbar() {
  return (
    <header className="bg-primary-neutral-100 pt-6">
      <Container>
        <img src={images.logo} alt="" />
      </Container>
    </header>
  )
}
export default Navbar