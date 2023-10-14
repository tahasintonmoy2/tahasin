import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import NavBar from '@/components/Navbar'
import NewsletterSection from '@/components/NewsletterSection'
import Projects from '@/components/Project'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <NewsletterSection/>
    </>
  )
}
