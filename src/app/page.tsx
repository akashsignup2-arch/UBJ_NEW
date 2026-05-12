import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Houseboats from "@/components/Houseboats";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <ExperienceTimeline />
      <Houseboats />
      <Gallery />
      <WhyChooseUs />
      <TrustSignals />
      <FAQ />
      <Contact />

      {/* Schema Markup for Local Business / LodgingBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            "name": "UBJ Houseboats",
            "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
            "description": "A premium family-run houseboat experience in Alappuzha, Kerala. Slow living on the backwaters.",
            "url": "https://ubjhouseboats.com",
            "telephone": "+919876543210",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Punnamada Finishing Point",
              "addressLocality": "Alappuzha",
              "addressRegion": "Kerala",
              "postalCode": "688006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 9.5007,
              "longitude": 76.3421
            },
            "priceRange": "$$$",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "5"
            }
          })
        }}
      />
    </>
  );
}
