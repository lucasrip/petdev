import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}
