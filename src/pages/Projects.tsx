import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { lakesData } from "@/data/lakesData";
import bannerImg from "@/assets/3.jpg";


gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const folderPath = "BANGLORE SOUTH LAKES DEVELOPED BY VIMOS TECHNOCRATS (BEFORE AFTER PHOTOS)";

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.from(".hero-reveal", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power4.out",
                delay: 0.2
            });

            gsap.fromTo(".project-main-card",
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".project-main-card",
                        start: "top 90%",
                    }
                }
            );
        }, containerRef);

        return () => {
            ctx.revert();
        };
    }, []);

    const coverImage = "/banglore-lake.webp";

    const featuredItems = [
        ...Object.values(lakesData).map((zone) => ({
            id: zone.id,
            title: zone.title,
            desc: `Exploring the comprehensive ecological rejuvenation and sustainable urban engineering efforts across ${zone.lakes.length} distinct project sites in this zone.`,
            image: `/${zone.lakes[0]?.path || ''}`,
            bannerImage: zone.bannerImage,
            navigatePath: `/projects/zone/${zone.id}`,
            tag: "Regional Cluster",
            ctaText: "Explore Zone"
        })),
        {
            id: "doddanekundi-lake",
            title: "DODDANEKUNDI LAKE",
            desc: "Comprehensive ecological development and shoreline rejuvenation of Doddanekundi Lake to restore biodiversity and improve water quality.",
            image: "/Projects/DODDANEKUNDI LAKE/1.webp",
            bannerImage: "/Projects/DODDANEKUNDI LAKE/1.webp",
            navigatePath: "/projects/doddanekundi-lake",
            tag: "Featured Lake Project",
            ctaText: "Explore Gallery"
        },
        {
            id: "kalena-agrahara-lake",
            title: "KALENA AGRAHARA LAKE",
            desc: "Restoration and sustainable wetland development at Kalena Agrahara Lake, enhancing groundwater recharge and native flora habitats.",
            image: "/Projects/Kalena Agrahara/1.webp",
            bannerImage: "/Projects/Kalena Agrahara/1.webp",
            navigatePath: "/projects/kalena-agrahara-lake",
            tag: "Featured Lake Project",
            ctaText: "Explore Gallery"
        },
        {
            id: "yarappanahalli-lake",
            title: "YARAPPANAHALLI LAKE",
            desc: "Holistic restoration and bund stabilization of Yarappanahalli Lake to establish a self-sustaining aquatic ecosystem.",
            image: "/Projects/YARAPPANAHALLI LAKE/1.webp",
            bannerImage: "/Projects/YARAPPANAHALLI LAKE/1.webp",
            navigatePath: "/projects/yarappanahalli-lake",
            tag: "Featured Lake Project",
            ctaText: "Explore Gallery"
        },
        {
            id: "kadasonnappanahalli-lake",
            title: "KADASONNAPPANAHALLI LAKE",
            desc: "Desilting, inlet purification, and community walkway landscaping at Kadasonnappanahalli Lake for long-term ecological balance.",
            image: "/Projects/kadasonnappanahalli lake/1.webp",
            bannerImage: "/Projects/kadasonnappanahalli lake/1.webp",
            navigatePath: "/projects/kadasonnappanahalli-lake",
            tag: "Featured Lake Project",
            ctaText: "Explore Gallery"
        }
    ];

    const otherProjects = [
        {
            id: "bathukammakunta-lake",
            title: "BATHUKAMMAKUNTA LAKE",
            desc: "Restoration of Bathukammakunta Lake by HYDRAA to mitigate encroachment, remove toxic debris, and restore ecological functionality.",
            image: "/Projects/BATHUKAMMAKUNTA LAKE-after.webp",
            tag: "Lake Restoration"
        },
        {
            id: "bum-rukn-ud-dowla-lake",
            title: "BUM-RUKN-UD-DOWLA LAKE",
            desc: "Restoration and comprehensive development of Bum-Rukn-ud-Dowla Lake by HYDRAA, focusing on hydraulic capacity and ecological functionality.",
            image: "/Projects/BUM-RUKN-UD-DOWLA LAKE-after.webp",
            tag: "Heritage & Ecological"
        },
        {
            id: "nalla-cheruvu-kukatpally",
            title: "NALLA CHERUVU, KUKATPALLY",
            desc: "Restoration and comprehensive development of Nalla Cheruvu, Kukatpally by HYDRAA to mitigate urban flooding and improve ecological balance.",
            image: "/Projects/NALLA CHERUVU, KUKATPALLY-after.webp",
            tag: "Flood Mitigation"
        },
        {
            id: "nalla-cheruvu-uppal",
            title: "NALLA CHERUVU UPPAL",
            desc: "Restoration of Nalla Cheruvu Uppal by HYDRAA, focusing on hydraulic capacity and long-term ecological balance.",
            image: "/Projects/NALLA CHERUVU UPPAL-present.webp",
            tag: "Ecological Recovery"
        },
        {
            id: "sunnam-cheruvu",
            title: "SUNNAM CHERUVU",
            desc: "Restoration of Sunnam Cheruvu by HYDRAA, addressing severe encroachment and heavy metal contamination to restore ecological balance.",
            image: "/Projects/SUNNAM CHERUVU-present.webp",
            tag: "Sediment Removal"
        },
        {
            id: "thimmidikunta-lake",
            title: "THIMMIDIKUNTA LAKE",
            desc: "Restoration of Thimmidikunta Lake by HYDRAA to mitigate encroachment, halt sewage discharge, and restore ecological health.",
            image: "/Projects/THIMMIDIKUNTA LAKE-present.webp",
            tag: "Wetland Recovery"
        }
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="projects-hero relative overflow-hidden bg-vimos-dark" style={{ minHeight: '75vh' }}>
                <div className="absolute inset-0 z-0">
                    <img src={bannerImg} alt="Projects Banner" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '75vh' }}>
                    <h1 className="hero-reveal text-5xl md:text-6xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.1]">
                        Innovative <br />
                        <span className="vimos-gradient-text-shine">Infrastructure</span>
                    </h1>
                    <p className="hero-reveal max-w-2xl mx-auto text-base md:text-lg text-white/90 leading-relaxed font-body">
                        Explore our comprehensive portfolio of sustainable engineering and environmental rejuvenation projects across the region.
                    </p>
                </div>
            </section>

            {/* Main Projects Display */}
            <section id="featured-project" className="py-24 bg-background relative">

                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        {/* <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                            Premium Portfolio
                        </div> */}
                        <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">Featured Project Gallery</h3>
                        <div className="w-24 h-[2px] bg-primary mx-auto mt-6" />
                    </div>
                    <div className="flex flex-col gap-20 max-w-[1400px] mx-auto">
                        {featuredItems.map((item, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={item.id}
                                    className={`project-main-card group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border border-border/30 hover:shadow-2xl transition-all duration-700 min-h-[450px]`}
                                    onClick={() => navigate(item.navigatePath)}
                                >
                                    {/* Image Section */}
                                    <div className="lg:w-1/2 relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = item.bannerImage;
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-secondary/5 relative overflow-hidden">
                                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />
                                        
                                        <div className="relative z-10">
                                            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4">{item.tag}</span>
                                            <h4 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-8 leading-tight group-hover:text-primary transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            
                                            <div className="mb-10 text-foreground/60 leading-relaxed max-w-lg">
                                                {item.desc}
                                            </div>

                                            <div className="flex items-center justify-end pt-8 border-t border-border/20">
                                                <div className="vimos-gradient px-10 py-4 rounded-full flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20 group-hover:scale-105 transition-transform duration-500">
                                                    {item.ctaText} <ArrowRight size={18} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-10 bg-secondary/5 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                    {/* <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4">ENVIRONMENTAL REJUVENATION</span> */}
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">HYDRAA RESTORATION PROJECTS</h3>
                    <div className="w-24 h-[2px] bg-primary mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-0">
                    {otherProjects.map((project, idx) => (
                        <div
                            key={idx}
                            onClick={() => navigate(`/projects/${project.id}`)}
                            className="project-sub-card group relative bg-card rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 flex flex-col h-auto"
                        >
                            <div className="relative w-full h-[300px] overflow-hidden shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="p-7 md:p-8 flex flex-col flex-1 relative bg-gradient-to-t from-background via-background/95 to-transparent">
                                <h4 className="text-lg md:text-lg font-heading font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                                    {project.title}
                                </h4>
                                <div className="mt-auto">
                                    <button className="w-full flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                        <span className="text-xs font-bold uppercase tracking-widest">Project Details</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* </div> */}
            </section>

            {/* Gallery overlay has been moved to /projects/bangalore-south-lakes */}

            <FooterSection />
        </div>
    );
};

export default Projects;
