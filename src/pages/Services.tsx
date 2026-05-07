import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

import civilIcon from "@/assets/Icons Web From/civil-engineering icon.webp";
import environmentalIcon from "@/assets/Icons Web From/environmental-engineering icon.webp";
import electricalIcon from "@/assets/Icons Web From/electrical-engineering icon.webp";
import mechanicalIcon from "@/assets/Icons Web From/mechanical-engineering icon.webp";
import surveyIcon from "@/assets/Icons Web From/experts-in-survey icon.webp";


gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Environmental Engineering",
        subtitle: "Sustainable Solutions",
        image: environmentalIcon,
        desc: "Sustainable engineering solutions ensuring environmental compliance and eco-friendly infrastructure. We balance urban development with ecological preservation."
    },
    {
        title: "Civil Engineering",
        subtitle: "Architectural and Structural",
        image: civilIcon,
        desc: "Comprehensive architectural and structural engineering solutions with cutting-edge design methodology. We ensure every structure is built with precision, safety, and longevity in mind."
    },
    {
        title: "Electrical Engineering",
        subtitle: "Power & Systems",
        image: electricalIcon,
        desc: "Complete electrical systems engineering from conceptual design to installation and commissioning. We design intelligent, energy-efficient power distribution systems."
    },
    {
        title: "Mechanical Engineering",
        subtitle: "HVAC & Machinery",
        image: mechanicalIcon,
        desc: "Advanced mechanical systems design, HVAC solutions, and industrial machinery planning designed for optimal operational efficiency."
    },
    {
        title: "Expertise in Survey",
        subtitle: "Topographic & Boundary",
        image: surveyIcon,
        desc: "Precision surveying techniques including topographic, boundary, and complex construction surveys using total stations and advanced GPS equipment."
    },

    {
        title: "NABL Material Testing",
        subtitle: "Laboratory (TC-9120)",
        image: surveyIcon, // Using survey icon temporarily as fallback
        desc: "NABL accredited material testing laboratory providing rigorous quality assurance for concrete, steel, soil, and all essential construction materials."
    },
];

const labImages = [
    "2000kN CAPACITY COMPRESSION TESTING MACHINE.webp", "ANVIL.webp", "BITUMEN EXTRACTOR.webp", "COMPACTION TEST APPARATUS.webp", "CONCRETE CUBE MOULDS.webp", "DE HUMIDIFIER.webp", "HOT AIR OVEN.webp", "HUMIDITY CHAMBER.webp", "IMPACT TEST APPARATUS.webp", "LOS ANGELES ABRASION TEST APPARATUS.webp", "REBOUND HAMMER.webp", "SAND REPLACEMENT TEST APPARATUS.webp", "SIEVE SHAKER.webp", "SLUMP CONE TEST APPARATUS.webp", "TEST SIEVES.webp", "TEST SIEVES-1.webp", "ULTRASONIC PULSE VELOCITY TEST APPARATUS.webp", "VIBRATING MACHINE.webp", "VICAT APPARATUS- CEMENT TEST.webp"
];

const testPhotographs = [
    "BITUMEN EXTRACTION TEST-1.webp", "BITUMEN EXTRACTION TEST-2.webp", "BITUMEN EXTRACTION TEST-3.webp", "BITUMEN EXTRACTION TEST.webp", 
    "BITUMINOUS CONCRETE CORE EXTRACTION-2.webp", "BITUMINOUS CONCRETE CORE EXTRACTION-3.webp", "BITUMINOUS CONCRETE CORE EXTRACTION-4.webp", "BITUMINOUS CONCRETE CORE EXTRACTION-6.webp", "BITUMINOUS CONCRETE CORE EXTRACTION.webp", 
    "CALIFORNIA BEARING RATIO TEST.webp", 
    "CHAIN LINK FENCING MATERIAL TEST-1.webp", "CHAIN LINK FENCING MATERIAL TEST-2.webp", "CHAIN LINK FENCING MATERIAL TEST-3.webp", "CHAIN LINK FENCING MATERIAL TEST-4.webp", "CHAIN LINK FENCING MATERIAL TEST-5.webp", "CHAIN LINK FENCING MATERIAL TEST-6.webp", "CHAIN LINK FENCING MATERIAL TEST.webp", 
    "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE-1.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE-3.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE-4.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE-5.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE-6.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CORE.webp", 
    "COMPRESSIVE STRENGTH TEST OF CONCRETE CUBE-1.webp", "COMPRESSIVE STRENGTH TEST OF CONCRETE CUBE.webp", 
    "COMPRESSIVE STRENGTH TEST OF PAVER BLOCKS (2).webp", "COMPRESSIVE STRENGTH TEST OF PAVER BLOCKS-1.webp", "COMPRESSIVE STRENGTH TEST OF PAVER BLOCKS-2.webp", "COMPRESSIVE STRENGTH TEST OF PAVER BLOCKS-3.webp", "COMPRESSIVE STRENGTH TEST OF PAVER BLOCKS-4.webp", 
    "COMPRESSIVE STRENGTH TEST OF SOLID BLOCK-1.webp", "COMPRESSIVE STRENGTH TEST OF SOLID BLOCK-4.webp", "COMPRESSIVE STRENGTH TEST OF SOLID BLOCK.webp", 
    "FIELD DRY DENSITY TEST BY CORE CUTTER METHOD-1.webp", "FIELD DRY DENSITY TEST BY CORE CUTTER METHOD-2.webp", "FIELD DRY DENSITY TEST BY CORE CUTTER METHOD-3.webp", "FIELD DRY DENSITY TEST BY CORE CUTTER METHOD.webp", 
    "LIQUID LIMIT TEST.webp", 
    "MICRO SURFACING WORK-1.webp", "MICRO SURFACING WORK-3.webp", "MICRO SURFACING WORK-4.webp", "MICRO SURFACING WORK.webp", 
    "NDT- ULTRASONIC PULSE VELOCITY TEST-1.webp", "NDT- ULTRASONIC PULSE VELOCITY TEST-2.webp", "NDT- ULTRASONIC PULSE VELOCITY TEST-3.webp", "NDT- ULTRASONIC PULSE VELOCITY TEST.webp", 
    "NDT-REBOUND HAMMER TEST-1.webp", "NDT-REBOUND HAMMER TEST-2.webp", "NDT-REBOUND HAMMER TEST-3.webp", "NDT-REBOUND HAMMER TEST-4.webp", "NDT-REBOUND HAMMER TEST.webp", 
    "SLUMP TEST AND CUBES CASTING AT SITE-1.webp", "SLUMP TEST AND CUBES CASTING AT SITE-2.webp", "SLUMP TEST AND CUBES CASTING AT SITE-3.webp", "SLUMP TEST AND CUBES CASTING AT SITE.webp", 
    "SOIL COMPACTION TEST-1.webp", "SOIL COMPACTION TEST.webp"
];

// Helper to group images by base name
const groupImages = (images: string[], path: string) => {
    const groups: { [key: string]: { name: string, urls: string[] } } = {};
    
    images.forEach(img => {
        // Remove extension and suffix like -1, -2, (2)
        let baseName = img.replace(/\.[^/.]+$/, "")
                          .replace(/-[0-9]+$/, "")
                          .replace(/\([0-9]+\)$/, "")
                          .trim();
        
        if (!groups[baseName]) {
            groups[baseName] = { name: baseName, urls: [] };
        }
        groups[baseName].urls.push(`${path}/${img}`);
    });
    
    return Object.values(groups);
};

import bannerImg from "@/assets/3.jpg";

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const servicesListRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Grouping the images for the galleries
    const labGroups = groupImages(labImages, "/Laboratory");
    const testGroups = groupImages(testPhotographs, "/Test-Photographs");

    // Modal state
    const [selectedGroup, setSelectedGroup] = useState<{ name: string, urls: string[] } | null>(null);
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".service-hero-elem", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.1
            });

            // Service Cards Stagger Animation
            const cards = gsap.utils.toArray<HTMLElement>(".service-card");

            cards.forEach((card, i) => {
                gsap.fromTo(card,
                    {
                        y: 100,
                        opacity: 0,
                        scale: 0.95
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Header */}
            <section className="bg-vimos-dark text-white relative overflow-hidden" style={{ minHeight: '75vh' }}>
                <div className="absolute inset-0">
                    <img src={bannerImg} alt="Services Banner" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '75vh' }}>
                    <p className="service-hero-elem font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 drop-shadow-md">
                        What We Do
                    </p>
                    <h1 className="service-hero-elem text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 drop-shadow-xl">
                        Engineering <span className="vimos-gradient-text-shine">Excellence</span>
                    </h1>
                    <p className="service-hero-elem font-body text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                        VIMOS TECHNOCRATS offers wide-ranging consultancy services covering every specialization of engineering. From structural design to environmental compliance and advanced drone surveying, we deliver unparalleled expertise.
                    </p>
                </div>
            </section>

            {/* Services Detailed List */}
            <section className="py-20 bg-background min-h-screen relative z-10 -mt-10" ref={servicesListRef}>
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="service-card group relative bg-secondary/30 rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-primary/5"
                            >
                                {/* Top Image Section */}
                                <div className="h-56 sm:h-64 w-full flex items-center justify-center p-4 md:p-6 bg-white overflow-hidden relative border-b border-border/30">
                                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-primary/5 transition-colors duration-500 z-10" />

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="relative z-20 w-52 h-52 md:w-64 md:h-64 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm"
                                    />
                                </div>

                                {/* Bottom Content Section */}
                                <div className="p-6 md:p-8 bg-card relative">
                                    {/* Decorative subtle line */}
                                    <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                                    <h3 className="font-heading text-2xl font-bold text-vimos-dark mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="font-body text-xs tracking-widest uppercase text-primary font-bold mb-4">
                                        {service.subtitle}
                                    </p>

                                    <p className="font-body text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                                        {service.desc}
                                    </p>

                                    <div
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                            navigate('/contact');
                                        }}
                                        className="mt-8 flex items-center gap-2 text-primary font-heading font-semibold text-sm cursor-pointer group/btn"
                                    >
                                        <span className="group-hover/btn:underline underline-offset-4">Enquire now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Laboratory Gallery Section */}
            <section className="py-24 bg-card border-y border-border/50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center text-center w-full mb-20">
                        <div className="max-w-none w-full flex flex-col items-center">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-black text-foreground mb-8 whitespace-nowrap text-center">
                                State-of-the-Art <span className="vimos-gradient-text">Laboratory</span>
                            </h2>
                            {/* <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="h-[2px] w-12 bg-primary/30" />
                                <span className="font-body text-xs font-bold tracking-[0.4em] uppercase text-primary tabular-nums">TC-9120</span>
                                <div className="h-[2px] w-12 bg-primary/30" />
                            </div> */}
                            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl text-center">
                                Our NABL-accredited facility is equipped with advanced testing apparatus to ensure the highest standards of quality control and material integrity across all engineering disciplines.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6">
                        {labGroups.map((group, i) => (
                            <div 
                                key={i} 
                                className="group cursor-pointer"
                                onClick={() => { setSelectedGroup(group); setActiveImgIndex(0); }}
                            >
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white border border-border shadow-sm group-hover:shadow-xl transition-all duration-700">
                                    <img
                                        src={group.urls[0]}
                                        alt={group.name}
                                        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {group.urls.length > 1 && (
                                        <div className="absolute top-4 right-4 bg-vimos-dark/5 backdrop-blur-sm text-vimos-dark text-[9px] font-bold px-2.5 py-1 rounded-full border border-vimos-dark/10">
                                            {group.urls.length} ASSETS
                                        </div>
                                    )}
                                </div>
                                <div className="mt-5 px-1 text-center sm:text-left">
                                    <h4 className="text-vimos-dark font-heading font-bold text-sm leading-tight uppercase tracking-wider group-hover:text-primary transition-colors">
                                        {group.name.replace(/-/g, " ")}
                                    </h4>
                                    <div className="w-8 h-0.5 bg-primary/30 mt-2 transform origin-left group-hover:scale-x-150 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testing Operations Gallery Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            Field <span className="vimos-gradient-text">Testing Operations</span>
                        </h2>
                        {/* <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" /> */}
                        <p className="font-body text-muted-foreground leading-relaxed">
                            A comprehensive showcase of our on-site testing procedures and material analysis operations ensuring safety and compliance at every project site.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
                        {testGroups.map((group, i) => (
                            <div 
                                key={i} 
                                className="group cursor-pointer"
                                onClick={() => { setSelectedGroup(group); setActiveImgIndex(0); }}
                            >
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-border">
                                    <img
                                        src={group.urls[0]}
                                        alt={group.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-vimos-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                                    
                                    {group.urls.length > 1 && (
                                        <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md text-vimos-dark text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                                            {group.urls.length} PHOTOS
                                        </div>
                                    )}
                                </div>
                                <div className="mt-6 px-3 text-center sm:text-left">
                                    <h4 className="text-vimos-dark font-heading font-bold text-base tracking-wide group-hover:text-primary transition-colors uppercase">
                                        {group.name.replace(/-/g, " ")}
                                    </h4>
                                    <div className="w-12 h-1 bg-primary/30 mt-3 transform origin-left group-hover:scale-x-150 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button
                            onClick={() => {
                                window.scrollTo(0, 0);
                                navigate('/contact');
                            }}
                            className="vimos-gradient px-10 py-4 rounded-full text-white font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20"
                        >
                            Enquire About Testing Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedGroup && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 transition-all duration-500"
                    onClick={() => setSelectedGroup(null)}
                >
                    <div 
                        className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header info */}
                        <div className="absolute top-0 left-0 right-0 flex justify-between items-center bg-black/50 p-4 md:p-6 backdrop-blur-sm z-50">
                            <div>
                                <h3 className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-wider">{selectedGroup.name.replace(/-/g, " ")}</h3>
                                <p className="text-primary text-xs font-bold font-body">{activeImgIndex + 1} / {selectedGroup.urls.length} Images</p>
                            </div>
                            <button 
                                onClick={() => setSelectedGroup(null)}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>

                        {/* Main Image */}
                        <div className="relative w-full flex-grow flex items-center justify-center p-4">
                            <img 
                                src={selectedGroup.urls[activeImgIndex]} 
                                alt={selectedGroup.name}
                                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-all duration-500"
                            />
                            
                            {/* Navigation Arrows */}
                            {selectedGroup.urls.length > 1 && (
                                <>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImgIndex((prev) => (prev === 0 ? selectedGroup.urls.length - 1 : prev - 1));
                                        }}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-primary transition-all flex items-center justify-center text-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                    </button>
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveImgIndex((prev) => (prev === selectedGroup.urls.length - 1 ? 0 : prev + 1));
                                        }}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-primary transition-all flex items-center justify-center text-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {selectedGroup.urls.length > 1 && (
                             <div className="w-full overflow-x-auto flex gap-4 p-4 no-scrollbar justify-center">
                                {selectedGroup.urls.map((url, i) => (
                                    <div 
                                        key={i}
                                        onClick={() => setActiveImgIndex(i)}
                                        className={`shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${i === activeImgIndex ? 'border-primary scale-110' : 'border-white/10 opacity-50 hover:opacity-100'}`}
                                    >
                                        <img src={url} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default Services;
