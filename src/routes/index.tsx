import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { Videos } from "@/components/site/Videos";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

const title = "MG Contractor Projects | Roofing & General Contracting";
const description =
  "MG Contractor Projects delivers dependable roofing, repairs, exterior improvements and renovations. From small fixes to full renovations — call +1 210-838-1594 for a free estimate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "MG Contractor Projects",
          description,
          telephone: "+1-210-838-1594",
          email: "menojgarcia32@gmail.com",
          areaServed: "United States",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BeforeAfter />
        <About />
        <Videos />
        <Gallery />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
