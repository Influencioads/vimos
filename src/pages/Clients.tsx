import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import bannerImg from "@/assets/3.jpg";

const clients = [
    { name: "BBMP", logo: "/Client-logos/top-1-bbmp.jpg" },
    { name: "WhatsApp", logo: "/Client-logos/top-2-whatsapp.jpeg" },
    { name: "EMPRI", logo: "/Client-logos/top-3-empri.jpg" },
    { name: "United Way Bengaluru", logo: "/Client-logos/top-4-uw-blr.jpg" },
    { name: "United Way Hyderabad", logo: "/Client-logos/top-5-uw-hyd.jpg" },
    { name: "Bangalore Development Authority", logo: "/Client-logos/Bangalore-Development-Authority.webp" },
    { name: "GHMC", logo: "/Client-logos/GHMC.webp" },
    { name: "Jal Jeevan Mission", logo: "/Client-logos/Jal-Jeevan-Mission.webp" },
    { name: "Kodiyal Corporation", logo: "/Client-logos/Kodiyal-Corporation-logo.webp" },
    { name: "Logo Bhoomi", logo: "/Client-logos/Logo-Bhoomi.webp" },
    { name: "Telangana Govt", logo: "/Client-logos/Telangana-govt.webp" },
    { name: "Aarvee Associates", logo: "/Client-logos/aarvee-associates.webp" },
    { name: "City Corporation Mysuru", logo: "/Client-logos/city-corporation-mysuru.webp" },
    { name: "CMR", logo: "/Client-logos/cmr.webp" },
    { name: "EIH Ltd", logo: "/Client-logos/eih-ltd.webp" },
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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/20 border border-border/20 rounded-3xl overflow-hidden shadow-2xl max-w-[1400px] mx-auto">
                    {clients.map((client, i) => (
                        <div 
                            key={i}
                            className="client-grid-item aspect-square bg-white flex items-center justify-center p-0 group hover:bg-secondary/5 transition-colors duration-300"
                        >
                            <img 
                                src={client.logo} 
                                alt={client.name} 
                                title={client.name}
                                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-all duration-500 ease-out" 
                            />
                        </div>
                    ))}
                </div>
            </div>

            <FooterSection />
        </div>
    );
};

export default Clients;
