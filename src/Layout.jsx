
import './App.css'
import About from './Pages/Home/About/About'
import Cards from './Pages/Home/Cards/Cards'
import ContactUs from './Pages/Home/ContactUs/ContactUs'
import Cta from './Pages/Home/Cta/Cta'
import Faq from './Pages/Home/Faq/Faq'
import Featured from './Pages/Home/Featured/Featured'
import Hero from './Pages/Home/Hero/Hero'
import Team from './Pages/Home/Team/Team'
import Footer from './Pages/Shared/Footer'
import Navbar from './Pages/Shared/Navbar'

function App() {


  return (
    <>
    
          <Navbar></Navbar>
          <Hero></Hero>
          <Featured></Featured>
          <Cards></Cards>
          <About></About>
          <Cta></Cta>
          <Faq></Faq>
          <Team></Team>
           <ContactUs></ContactUs>
          <Footer></Footer>
    
    </>
  )
}

export default App
