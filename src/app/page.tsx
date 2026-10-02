import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro/>
      <Menu/>
      <Experience/>
      <Reservation/>
      <Footer/>
    </main>
  );
}
