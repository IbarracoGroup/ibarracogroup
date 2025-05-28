// app/page.tsx
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <ContactForm />
      <Testimonials />
      <Footer />
    </>
  )
}
