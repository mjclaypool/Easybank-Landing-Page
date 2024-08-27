import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Articles from "./components/Articles.tsx";
import Footer from "./components/Footer.tsx";
import './index.css'

function App() {

  return (
    <main className="overflow-clip">
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </main>
  )
}

export default App
