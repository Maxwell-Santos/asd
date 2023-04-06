import { BackTop } from "./components/BackTop";
import { Budget } from "./components/Budget";
import { CreationProcess } from "./components/CreationProcess";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainServices } from "./components/MainServices";
import { Projects } from "./components/Projects";
import { Sections } from "./components/Sections";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sections />
        <CreationProcess />
        <MainServices />
        <Projects />
        <Budget />
      </main>
      <Footer />

      <BackTop />
    </>
  )
}