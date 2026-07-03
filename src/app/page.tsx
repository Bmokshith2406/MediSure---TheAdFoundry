import { AppointmentProvider } from "@/components/medisure/AppointmentContext";
import Header from "@/components/medisure/Header";
import Hero from "@/components/medisure/Hero";
import DoctorSpotlight from "@/components/medisure/DoctorSpotlight";
import CarePaths from "@/components/medisure/CarePaths";
import Specialties from "@/components/medisure/Specialties";
import Journey from "@/components/medisure/Journey";
import About from "@/components/medisure/About";
import FinalCta from "@/components/medisure/FinalCta";
import Footer from "@/components/medisure/Footer";

export default function Home() {
  return (
    <AppointmentProvider>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-garnet focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <DoctorSpotlight />
        <CarePaths />
        <Specialties />
        <Journey />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </AppointmentProvider>
  );
}
