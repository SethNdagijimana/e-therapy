import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/Home";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
  <>
  <Navbar />
    <div>
      <HomeSection />
    </div>

    <div className="mt-4 p-8">
      <h1 className="text-center font-bold">About Us</h1>
      <p className="mt-4 font-bricolage text-center">BAHO provides a wide range of psychological care and therapy services, focusing on individual needs and fostering emotional, cognitive, and behavioral change. Located in Kigali, their team of compassionate psychologists and psychotherapists specialize in treating various psychological conditions. The practice values diversity and justice, aiming to improve mental health and overall well-being through evidence-based treatments. People seeking support for challenges like anxiety, depression, trauma, and relationship issues can find professional and empathetic assistance here, aiding them in navigating life’s transitions and stressors</p>
    </div>

    <Footer />
  </>
  );
}
