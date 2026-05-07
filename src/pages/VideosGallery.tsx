import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/3.jpg";

gsap.registerPlugin(ScrollTrigger);

const galleryVideos = [
    { id: "aMzts1yVpcs", title: "Project Showcase 1" },
    { id: "iQcChHELGkk", title: "Environmental Excellence" },
    { id: "Yqwzjm3_xPU", title: "Structural Engineering Insight" },
    { id: "QWxoZd3ejZA", title: "Mechanical Systems Overview" },
    { id: "4YnTqLFY5Hc", title: "Project Showcase 5" },
    { id: "J-grMCL5rVc", title: "Project Showcase 6" },
    { id: "kbJxbBliKrw", title: "Project Showcase 7" },
    { id: "4-F_lfRKVL8", title: "Project Showcase 8" },
    { id: "oqApAp2Fq3I", title: "Project Showcase 9" },
    { id: "g9yTQHjtpp0", title: "Project Showcase 10" },
    { id: "VcrxW78k-Qo", title: "Project Showcase 11" },
    { id: "s59mCa1U3iw", title: "Project Showcase 12" },
    { id: "K1MhjyMocPU", title: "Project Showcase 13" },
    { id: "RGnZmhYrGMU", title: "Project Showcase 14" },
    { id: "xHaNeawC-Vg", title: "Project Showcase 15" },
    { id: "R9LzRIAuBFw", title: "Project Showcase 16" },
    { id: "O1xoO33b_W0", title: "Project Showcase 17" },
    { id: "mewiLoTbovg", title: "Project Showcase 18" },
    { id: "2tRxZ1oAQHM", title: "Project Showcase 19" },
    { id: "mTPukbdJyWw", title: "Project Showcase 20" },
    { id: "s3ZbOvPDYtU", title: "Project Showcase 21" },
    { id: "RcvP4oA9T-c", title: "Project Showcase 22" },
    { id: "QD76SB-ePHk", title: "Project Showcase 23" },
    { id: "ajtHqqfn400", title: "Project Showcase 24" },
    { id: "DYDluRWHm8I", title: "Project Showcase 25" },
    { id: "IIYKTqGpIW8", title: "Project Showcase 26" },
    { id: "Kj0JEAFZHgE", title: "Project Showcase 27" },
    { id: "hKzWdTifoRs", title: "Project Showcase 28" },
    { id: "Bqc3MLL1OkU", title: "Project Showcase 29" }
];

const VideosGallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
        gsap.from(".gallery-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all"
        });
    };

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Header */}
            <section className="bg-vimos-dark text-white relative overflow-hidden" style={{ minHeight: '60vh' }}>
                <div className="absolute inset-0">
                    <img src={heroBg} alt="Videos Gallery Banner" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '60vh' }}>
                    <p className="gallery-hero-title font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 drop-shadow-md">
                        Video Showcase
                    </p>
                    <h1 className="gallery-hero-title text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 drop-shadow-xl">
                        YouTube <span className="vimos-gradient-text-shine">Videos</span>
                    </h1>
                    <p className="gallery-hero-title font-body text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        Watch our projects in action and gain insights into our environmental engineering solutions.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-background min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {galleryVideos.map((video, idx) => (
                            <div
                                key={`${video.id}-${idx}`}
                                className="gallery-item w-full"
                            >
                                <div className="rounded-2xl overflow-hidden aspect-video border border-border/50 bg-black shadow-xl relative" style={{ minHeight: '200px' }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default VideosGallery;
