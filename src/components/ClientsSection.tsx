import { useEffect, useRef } from "react";
import gsap from "gsap";
import tumkur from "@/assets/tumkur-urban-development-authority.webp";
const clients = [
  { name: "Bangalore Development Authority", logo: "/Client-logos/Bangalore-Development-Authority.webp" },
  { name: "GHMC", logo: "/Client-logos/GHMC.webp" },
  { name: "Jal Jeevan Mission", logo: "/Client-logos/Jal-Jeevan-Mission.webp" },
  { name: "Kodiyal Corporation", logo: "/Client-logos/Kodiyal-Corporation-logo.webp" },
  { name: "Logo Bhoomi", logo: "/Client-logos/Logo-Bhoomi.webp" },
  { name: "Telangana Govt", logo: "/Client-logos/Telangana-govt.webp" },
  { name: "Aarvee Associates", logo: "/Client-logos/aarvee-associates.webp" },
  { name: "BBMP", logo: "/Client-logos/bruhat-bengaluru-mahanagara-palike.webp" },
  { name: "City Corporation Mysuru", logo: "/Client-logos/city-corporation-mysuru.webp" },
  { name: "CMR", logo: "/Client-logos/cmr.webp" },
  { name: "EIH Ltd", logo: "/Client-logos/eih-ltd.webp" },
  { name: "EMPRI", logo: "/Client-logos/environmental-management-and-policy-research-institute.webp" },
  { name: "Government of Karnataka", logo: "/Client-logos/government-of-karnataka.webp" },
  { name: "Govt Andhra Pradesh", logo: "/Client-logos/govt-andra-pradesh.webp" },
  { name: "KIADB", logo: "/Client-logos/karnataka-industrial-areas-development-board.webp" },
  { name: "Karnataka State Police", logo: "/Client-logos/karnataka-state-police.webp" },
  { name: "Krishna Bhagya Jala Nigam Ltd", logo: "/Client-logos/krishna-bhagya-jala-nigam-ltd.webp" },
  { name: "Mahanagara Palike Belagavi", logo: "/Client-logos/mahanagara-palike-belagavi.webp" },
  { name: "Municipal Corporation", logo: "/Client-logos/muncipal-corporation.webp" },
  { name: "NEERI", logo: "/Client-logos/national-environmental-engineering.webp" },
  { name: "Sagar Smart City", logo: "/Client-logos/sagar-smart-city.webp" },
  { name: "SayTrees", logo: "/Client-logos/say-trees.webp" },
  { name: "Smart City", logo: "/Client-logos/smart-city.webp" },
  { name: "Sonarome", logo: "/Client-logos/sonarome.webp" },
  { name: "United Way Hyderabad", logo: "/Client-logos/united-way-hyderbad.webp" },
  { name: "Tumkur Urban", logo: "/Client-logos/tumkur-urban.webp" },
];

const ClientsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".client-title-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#clients",
          start: "top 80%",
        }
      });

      // Carousel Animation
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        const scrollWidth = scrollContainer.scrollWidth / 2;

        gsap.to(scrollContainer, {
          x: -scrollWidth,
          duration: 60,
          ease: "none",
          repeat: -1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="clients" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center client-title-reveal">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Trusted By</p>
          <h2 className="section-heading text-3xl md:text-5xl text-foreground">
            Our <span className="vimos-gradient-text">Clients</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap" ref={scrollRef}>
          {/* Double the list for a seamless loop */}
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="inline-flex items-center justify-center px-6 md:px-8 py-1 group transition-all duration-300">
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center transition-all duration-500 hover:scale-110">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter drop-shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
