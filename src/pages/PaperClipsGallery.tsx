import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/3.jpg";
import { Paperclip, X, ExternalLink, Newspaper } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const paperClips = import.meta.glob("@/assets/paper_clips/*.{jpeg,jpg,webp}", { eager: true, import: "default" });
const paperClipsArray = Object.values(paperClips) as string[];

import newIndianExpressLogo from "@/assets/paper_clips/logos/new_indian_express.png";
import indianExpressLogo from "@/assets/paper_clips/logos/indian_express.svg";
import deccanChronicleLogo from "@/assets/paper_clips/logos/deccan_chronicle.svg";
import theHansIndiaLogo from "@/assets/paper_clips/logos/the_hans_india.jpg";

const articleLinks = [
    {
        title: "Ulsoor Lake revamp gets Rs 82 crore boost with Kalyani, walkways and water-cleaning upgrades",
        source: "The New Indian Express",
        logo: newIndianExpressLogo,
        url: "https://www.newindianexpress.com/cities/bengaluru/2025/Nov/22/ulsoor-lake-revamp-gets-rs-82-crore-boost-with-kalyani-walkways-and-water-cleaning-upgrades",
    },
    {
        title: "Detailed Project Report for restoring 150 Bengaluru lakes to be completed by November end",
        source: "The Indian Express",
        logo: indianExpressLogo,
        url: "https://indianexpress.com/article/cities/bangalore/bengaluru-lakes-restoration-8245738/",
    },
    {
        title: "HYDRAA team in Bengaluru for study on lakes",
        source: "Deccan Chronicle",
        logo: deccanChronicleLogo,
        url: "https://www.deccanchronicle.com/southern-states/telangana/hydraa-team-in-bengaluru-for-study-on-lakes-1836252",
    },
    {
        title: "Rejuvenated Doddagubbi Lake breathes life back to borewells",
        source: "The New Indian Express",
        logo: newIndianExpressLogo,
        url: "https://www.newindianexpress.com/states/karnataka/2024/Dec/30/rejuvenated-doddagubbi-lake-breathes-life-back-to-borewells",
    },
    {
        title: "HYDRAA Commissioner Inspects Restoration of Bengaluru Lake",
        source: "Deccan Chronicle",
        logo: deccanChronicleLogo,
        url: "https://www.deccanchronicle.com/southern-states/telangana/hydraa-commissioner-inspects-restoration-of-bengaluru-lake-1836623",
    },
    {
        title: "BBMP completes Yerappanahalli Lake rejuvenation to prevent upstream flooding",
        source: "The New Indian Express",
        logo: newIndianExpressLogo,
        url: "https://www.newindianexpress.com/cities/bengaluru/2024/Dec/28/bbmp-completes-yerappanahalli-lake-rejuvenation-to-prevent-upstream-flooding",
    },
    {
        title: "Kadusonnapanahalli lake gets facelift",
        source: "The New Indian Express",
        logo: newIndianExpressLogo,
        url: "https://www.newindianexpress.com/states/karnataka/2025/Jan/15/kadusonnapanahalli-lake-gets-facelift",
    },
    {
        title: "After overcoming hiccups, HYDRAA to breathe life into 5 city lakes soon",
        source: "The Hans India",
        logo: theHansIndiaLogo,
        url: "https://www.thehansindia.com/news/cities/hyderabad/after-overcoming-hiccups-hydraa-to-breathe-life-into-5-city-lakes-soon-1018224",
    }
];

const PaperClipsGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedMedia, setSelectedMedia] = useState<{ type: 'image', src: string } | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Title Animation
            gsap.from(".gallery-hero-title", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Initial Grid Animation
            animateGrid();
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const animateGrid = () => {
        gsap.fromTo(".gallery-item",
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: {
                    amount: 0.6,
                    grid: "auto",
                    from: "start"
                },
                ease: "power2.out",
                overwrite: true
            }
        );
    };

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Header */}
            <section className="bg-vimos-dark text-white relative overflow-hidden" style={{ minHeight: '60vh' }}>
                <div className="absolute inset-0">
                    <img src={heroBg} alt="Paper Clips Banner" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '60vh' }}>
                    <p className="gallery-hero-title font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 drop-shadow-md">
                        Media Presence
                    </p>
                    <h1 className="gallery-hero-title text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 drop-shadow-xl">
                        Paper <span className="vimos-gradient-text-shine">Clips</span>
                    </h1>
                    <p className="gallery-hero-title font-body text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        Discover our features and mentions in leading publications and news outlets.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-background min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Articles Section */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <Newspaper className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-heading font-bold">Featured Articles</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {articleLinks.map((article, idx) => (
                                <a 
                                    key={idx} 
                                    href={article.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="gallery-item group flex flex-col p-6 rounded-2xl border border-border/50 bg-secondary/10 hover:bg-secondary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                >
                                    <div className="flex justify-between items-start mb-4 h-10">
                                        {article.logo ? (
                                            <div className="bg-white/90 p-1.5 rounded flex items-center justify-center">
                                                <img src={article.logo} alt={article.source} className="max-h-6 max-w-[120px] object-contain" />
                                            </div>
                                        ) : (
                                            <span className="text-[10px] font-semibold tracking-wider text-primary uppercase bg-primary/10 px-2 py-1 rounded-full text-center">
                                                {article.source}
                                            </span>
                                        )}
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                                    </div>
                                    <h3 className="text-base font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                        {article.title}
                                    </h3>
                                    <p className="mt-auto text-xs text-muted-foreground font-body flex items-center gap-2">
                                        Read full article <ExternalLink className="w-3 h-3" />
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image Clips Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Paperclip className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-heading font-bold">Media Gallery</h2>
                        </div>
                    {paperClipsArray.length > 0 ? (
                        <div className="gallery-grid columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {paperClipsArray.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer border border-border/50 bg-secondary/20 shadow-sm hover:shadow-2xl transition-all duration-500"
                                    onClick={() => setSelectedMedia({ type: 'image', src })}
                                >
                                    <img
                                        src={src}
                                        alt={`Paper Clip ${idx + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="vimos-gradient p-3 rounded-full text-white shadow-lg border border-white/20">
                                                <Paperclip className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground font-body">
                            <p>No paper clips found.</p>
                        </div>
                    )}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedMedia && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out backdrop-blur-md transition-all duration-300"
                    onClick={() => setSelectedMedia(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 p-3 rounded-full cursor-pointer hover:bg-white/20 border border-white/10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedMedia(null);
                        }}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    
                    <div 
                        className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedMedia.src}
                            alt="Expanded view"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                        />
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default PaperClipsGallery;
