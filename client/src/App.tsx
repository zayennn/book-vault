import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Features from './components/feaures/features'
import Testimonial from './components/testimonials/testimonial'
import Pricing from './components/pricing/pricing'
import Cta from './components/cta/cta'
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <Cta />
      <Footer />
    </>
  )
}

export default App
