import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/gallery/PMC1.webp";

gsap.registerPlugin(ScrollTrigger);

import img1 from "@/assets/gallery/2D section OF SHOPS.webp";
import img2 from "@/assets/gallery/3D ELEVATION OF SHOPS.webp";
import img3 from "@/assets/gallery/3D ELEVATION OF SHOPS2.webp";
import img4 from "@/assets/gallery/3d Elevation of Swimming Fool Indoor Stadium.webp";
import img5 from "@/assets/gallery/AUDITORIUM RANGAMANDIRA.webp";
import img6 from "@/assets/gallery/AUDITORIUM RANGAMANDIRA2.webp";
import img7 from "@/assets/gallery/DRP PREPARATION (BUILDING DIVISION).webp";
import img8 from "@/assets/gallery/DRP.webp";
import img9 from "@/assets/gallery/PMC1.webp";
import img10 from "@/assets/gallery/PMC10.webp";
import img11 from "@/assets/gallery/PMC11.webp";
import img12 from "@/assets/gallery/PMC12.webp";
import img13 from "@/assets/gallery/PMC13.webp";
import img14 from "@/assets/gallery/PMC14.webp";
import img15 from "@/assets/gallery/PMC15.webp";
import img16 from "@/assets/gallery/PMC16.webp";
import img17 from "@/assets/gallery/PMC17.webp";
import img18 from "@/assets/gallery/PMC18.webp";
import img19 from "@/assets/gallery/PMC19.webp";
import img20 from "@/assets/gallery/PMC2.webp";
import img21 from "@/assets/gallery/PMC3.webp";
import img22 from "@/assets/gallery/PMC4.webp";
import img23 from "@/assets/gallery/PMC5.webp";
import img24 from "@/assets/gallery/PMC6.webp";
import img25 from "@/assets/gallery/PMC7.webp";
import img26 from "@/assets/gallery/PMC8.webp";
import img27 from "@/assets/gallery/PMC9.webp";
import img28 from "@/assets/gallery/POLICE BHAVANA IN RAMNAGARA.webp";
import img29 from "@/assets/gallery/POLICE BHAVANA IN RAMNAGARA2.webp";
import img30 from "@/assets/gallery/QUALITY CONTROL1.webp";
import img31 from "@/assets/gallery/QUALITY CONTROL2.webp";
import img32 from "@/assets/gallery/QUALITY CONTROL3.webp";
import img33 from "@/assets/gallery/about.webp";
import img34 from "@/assets/gallery/autoleveling1.webp";
import img35 from "@/assets/gallery/autoleveling2.webp";
import img36 from "@/assets/gallery/autoleveling3.webp";
import img37 from "@/assets/gallery/survey1.webp";
import img38 from "@/assets/gallery/survey2.webp";
import img39 from "@/assets/gallery/survey3.webp";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39
];


const Gallery = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

            // Gallery Items Stagger Animation on Scroll
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
                        amount: 1,
                        grid: "auto",
                        from: "start"
                    },
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".gallery-grid",
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Header */}
            <section
                className="pt-40 pb-16 bg-vimos-dark text-white relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                {/* <div className="absolute inset-0 bg-gradient-to-b from-vimos-dark/80 via-vimos-dark/60 to-background" /> */}
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="gallery-hero-title font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
                        Showcase of Excellence
                    </p>
                    <h1 className="gallery-hero-title text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                        Our <span className="vimos-gradient-text-shine">Project Gallery</span>
                    </h1>
                    <p className="gallery-hero-title font-body text-lg text-white/70 max-w-2xl mx-auto">
                        Explore our diverse portfolio of structural, environmental, and mechanical engineering excellence.
                    </p>
                </div>
            </section>

            {/* Masonry Gallery Grid */}
            <section className="py-20 bg-background min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    {galleryImages.length > 0 ? (
                        <div className="gallery-grid columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {galleryImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item relative overflow-hidden rounded-xl break-inside-avoid group cursor-pointer border border-border/50 bg-secondary/20 shadow-sm hover:shadow-xl transition-all duration-500"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <span className="vimos-gradient px-4 py-2 rounded-full text-xs font-heading tracking-widest text-white uppercase shadow-lg border border-white/20">
                                                View Image
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 text-muted-foreground font-body">
                            <p>No gallery images found.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out backdrop-blur-sm transition-all duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-white/10 p-2 rounded-full cursor-pointer hover:bg-white/20 border border-white/10"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                    <img
                        src={selectedImage}
                        alt="Expanded view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default Gallery;
