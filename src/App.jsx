import Layout from "./components/Layout"
import Feature from "./components/sections/Feature"
import Hero from "./components/sections/Hero"
import Journey from "./components/sections/Journey"
import Membership from "./components/sections/Membership"
import Review from "./components/sections/Review"

function App() {
  return (
    <Layout title="Tech Book Club">
      <Hero />
      <Feature />
      <Journey />
      <Membership />
      <Review />
    </Layout>
  )
}

export default App
