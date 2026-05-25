import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: "bathukammakunta-lake",
    title: "BATHUKAMMAKUNTA LAKE",
    category: "LAKE RESTORATION",
    img: "/Projects/BATHUKAMMAKUNTA%20LAKE-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "bum-rukn-ud-dowla-lake",
    title: "BUM-RUKN-UD-DOWLA LAKE",
    category: "HERITAGE & ECOLOGICAL",
    img: "/Projects/BUM-RUKN-UD-DOWLA%20LAKE-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "nalla-cheruvu-kukatpally",
    title: "NALLA CHERUVU, KUKATPALLY",
    category: "FLOOD MITIGATION",
    img: "/Projects/NALLA%20CHERUVU%2C%20KUKATPALLY-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "nalla-cheruvu-uppal",
    title: "NALLA CHERUVU UPPAL",
    category: "ECOLOGICAL RECOVERY",
    img: "/Projects/NALLA%20CHERUVU%20UPPAL-present.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "sunnam-cheruvu",
    title: "SUNNAM CHERUVU",
    category: "SEDIMENT REMOVAL",
    img: "/Projects/SUNNAM%20CHERUVU-present.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "thimmidikunta-lake",
    title: "THIMMIDIKUNTA LAKE",
    category: "WETLAND RECOVERY",
    img: "/Projects/THIMMIDIKUNTA%20LAKE-present.webp",
    location: "Hyderabad, Telangana"
  }
];

const HomepageProjectGrid = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-header-reveal", {
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

            const cards = gsap.utils.toArray(".project-card-reveal") as HTMLElement[];
            cards.forEach((card) => {
                gsap.from(card, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-12 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <h2 className="project-header-reveal text-[#0a92d1] font-heading font-black text-sm tracking-[0.4em] uppercase">
                            Portfolio
                        </h2>
                        <h3 className="project-header-reveal text-4xl md:text-5xl lg:text-5xl font-heading font-bold text-vimos-dark leading-tight uppercase">
                            Completed Projects
                        </h3>
                        <div className="project-header-reveal w-20 h-1 bg-[#0a92d1]" />
                    </div>
                    
                    <button 
                        onClick={() => navigate('/projects')}
                        className="project-header-reveal group flex items-center gap-4 font-heading text-xs font-bold tracking-[0.2em] uppercase text-vimos-dark hover:text-[#0a92d1] transition-colors duration-300"
                    >
                        <span>Explore All Projects</span>
                        <div className="w-10 h-[1px] bg-vimos-dark/30 group-hover:w-16 group-hover:bg-[#0a92d1] transition-all duration-500" />
                    </button>
                </div>

                {/* Projects Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectData.map((project, index) => (
                        <div 
                            key={index}
                            onClick={() => navigate(`/projects/${project.id}`)}
                            className="project-card-reveal group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl bg-vimos-dark"
                        >
                            {/* Background Image */}
                            <img 
                                src={project.img} 
                                alt={project.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-60" 
                                loading="eager"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "https://images.unsplash.com/photo-1543877087-ebf71fde2be1?q=80&w=2070&auto=format&fit=crop";
                                }}
                            />
                            
                            {/* Master Gradient Overlay - Heavy Bottom for Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500" />
                            
                            {/* Content Layer */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <span className="text-[#0a92d1] text-xs font-heading font-bold tracking-[0.3em] uppercase mb-3 block">
                                    {project.category}
                                </span>
                                <h4 className="text-white text-2xl md:text-3xl font-heading font-bold leading-[1.1] mb-4 uppercase tracking-tighter">
                                    {project.title}
                                </h4>
                                <div className="flex items-center gap-3 text-white/50 text-[10px] font-body uppercase tracking-[0.2em]">
                                    <span className="w-5 h-[1px] bg-white/30" />
                                    <span>{project.location}</span>
                                </div>
                            </div>

                            {/* Floating Index Number */}
                            <div className="absolute top-10 right-10 text-white/5 text-7xl font-heading font-bold leading-none pointer-events-none">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            {/* Hover Border Accent */}
                            <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 rounded-[1.5rem] transition-all duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomepageProjectGrid;
