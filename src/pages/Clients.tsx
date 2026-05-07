import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import bannerImg from "@/assets/3.jpg";

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

const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-x-hidden bg-background min-h-screen">
            <Navbar />

            <section className="bg-vimos-dark text-white relative overflow-hidden" style={{ minHeight: '75vh' }}>
                <div className="absolute inset-0">
                    <img src={bannerImg} alt="Clients Banner" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '75vh' }}>
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 drop-shadow-md">Our Network</p>
                    <h2 className="section-heading text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-xl font-bold">
                        Trusted to Deliver <br className="hidden md:block" /> Engineering Excellence
                    </h2>
                </div>
            </section>

            <div className="container mx-auto px-4 lg:px-8 mb-20 animate-fade-in -mt-10 relative z-10">
                {/* A bordered CSS grid on white background */}
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 border-t border-l border-border/30 max-w-[1400px] mx-auto bg-white shadow-sm">

                    {/* Map remaining clients into the grid */}
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="client-grid-item aspect-square flex items-center justify-center border-b border-r border-border/30 p-4 md:p-6 bg-white group hover:bg-secondary/5 transition-all duration-300"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain group-hover:scale-125 transition-all duration-500 ease-out"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterSection />
        </div>
    );
};

export default Clients;
