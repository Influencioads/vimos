import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const clients = [
    { name: "Smart City Bhopal", logo: "/client-logos-v2/1.jpg" },
    { name: "EMPRI", logo: "/client-logos-v2/2.jpg" },
    { name: "EIH Ltd", logo: "/client-logos-v2/3.jpg" },
    { name: "CMR", logo: "/client-logos-v2/4.jpg" },
    { name: "BBMP", logo: "/client-logos-v2/5.jpg" },
    { name: "City Corporation Mysuru", logo: "/client-logos-v2/6.jpg" },
    { name: "Bangalore Development Authority", logo: "/client-logos-v2/7.jpg" },
    { name: "Aarvee Associates", logo: "/client-logos-v2/8.jpg" },
    { name: "United Way Hyderabad", logo: "/client-logos-v2/9.jpg" },
    { name: "TUDA", logo: "/client-logos-v2/10.jpg" },
    { name: "Telangana Govt", logo: "/client-logos-v2/11.jpg" },
    { name: "Sonarome", logo: "/client-logos-v2/12.jpg" },
    { name: "GHMC", logo: "/client-logos-v2/13.jpg" },
    { name: "Jal Jeevan Mission", logo: "/client-logos-v2/14.jpg" },
    { name: "Govt Andhra Pradesh", logo: "/client-logos-v2/15.jpg" },
    { name: "Government of Karnataka", logo: "/client-logos-v2/16.jpg" },
    { name: "KIADB", logo: "/client-logos-v2/17.jpg" },
    { name: "Karnataka State Police", logo: "/client-logos-v2/18.jpg" },
    { name: "Mangalore City Corporation", logo: "/client-logos-v2/19.jpg" },
    { name: "Krishna Bhagya Jala Nigam Ltd", logo: "/client-logos-v2/20.jpg" },
    { name: "Logo Bhoomi", logo: "/client-logos-v2/21.jpg" },
    { name: "Mahanagara Palike Belagavi", logo: "/client-logos-v2/22.jpg" },
    { name: "Municipal Corporation", logo: "/client-logos-v2/23.jpg" },
    { name: "NEERI", logo: "/client-logos-v2/24.jpg" },
    { name: "Sagar Smart City", logo: "/client-logos-v2/25.jpg" },
    { name: "SayTrees", logo: "/client-logos-v2/26.jpg" },
];

const HomepageClients = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".client-header-reveal", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                }
            });

            gsap.from(".client-logo-item", {
                scale: 0.8,
                opacity: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-secondary/5 overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="client-header-reveal text-[#0a92d1] font-heading font-black text-sm tracking-[0.4em] uppercase">
                        Our Partners
                    </h2>
                    <h3 className="client-header-reveal text-4xl md:text-5xl font-heading font-bold text-vimos-dark leading-tight uppercase">
                        Trusted by the Best
                    </h3>
                    <div className="client-header-reveal w-20 h-1 bg-[#0a92d1] mx-auto" />
                </div>

                {/* Grid */}
                <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border/20 border border-border/20 rounded-3xl overflow-hidden shadow-2xl">
                    {clients.map((client, i) => (
                        <div 
                            key={i}
                            className="client-logo-item aspect-square bg-white flex items-center justify-center p-0 group hover:bg-secondary/5 transition-colors duration-300"
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
        </section>
    );
};

export default HomepageClients;
