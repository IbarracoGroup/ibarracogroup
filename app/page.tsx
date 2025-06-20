import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
// import PricingPlans from './components/PricingPlans' // 👈 Sección de precios
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Clients from './components/Clients'
import SuccessCases from './components/SuccessCases'
import CtaBanner from './components/CtaBanner'
import WhatsAppButton from './components/WhatsAppButton'
import ChatWidget from './components/ChatWidget'

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      {/*<PricingPlans/>*/} {/* 👈 Oculto para no mostrar en Home */}
      <Portfolio />
      <ContactForm />
      {/*<Testimonials />*/}
      {/*<Clients />*/}
      {/*<SuccessCases />*/}
      <CtaBanner />
      <Footer />
      <WhatsAppButton />
      <ChatWidget />
    </>
  )
}
