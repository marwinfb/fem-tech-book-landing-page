import Layout from "./components/Layout"
import Feature from "./components/sections/Feature"
import Hero from "./components/sections/Hero"
import Journey from "./components/sections/Journey"

function App() {
  return (
    <Layout title="Tech Book Club">
      <Hero />
      <Feature />
      <Journey />
    </Layout>
  )
}

export default App
