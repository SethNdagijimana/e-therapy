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
    <Footer />
  </>
  );
}
