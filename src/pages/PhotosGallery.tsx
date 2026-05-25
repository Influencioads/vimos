import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroBg from "@/assets/3.jpg";
import { Image as ImageIcon, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import img2 from "@/assets/gallery/gallery-2.jpeg";
import img3 from "@/assets/gallery/gallery-3.jpeg";
import img5 from "@/assets/gallery/gallery-5.jpeg";
import img6 from "@/assets/gallery/gallery-6.jpeg";
import img7 from "@/assets/gallery/gallery-7.jpeg";
import img8 from "@/assets/gallery/gallery-8.jpeg";
import img9 from "@/assets/gallery/gallery-9.jpeg";
import whatsappImg1 from "@/assets/gallery/whatsapp-image-may-14.jpeg";

const additionalImages = import.meta.glob("@/assets/vimos_images/*.webp", { eager: true, import: "default" });
const additionalImagesArray = Object.entries(additionalImages)
  .filter(([path]) => !path.includes("79.webp") && !path.includes("96.webp") && !path.includes("97.webp"))
  .map(([_, src]) => src) as string[];

const galleryImages = [
  whatsappImg1, img2, img3, img5, img6, img7, img8, img9,
  ...additionalImagesArray
];

const PhotosGallery = () => {
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
                    <img src={heroBg} alt="Photos Gallery Banner" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '60vh' }}>
                    <p className="gallery-hero-title font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 drop-shadow-md">
                        Visual Portfolio
                    </p>
                    <h1 className="gallery-hero-title text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 drop-shadow-xl">
                        Photo <span className="vimos-gradient-text-shine">Gallery</span>
                    </h1>
                    <p className="gallery-hero-title font-body text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        Explore our engineering excellence through detailed project photography.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-background min-h-[60vh]">
                <div className="container mx-auto px-4 md:px-6">
                    {galleryImages.length > 0 ? (
                        <div className="gallery-grid columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                            {galleryImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="gallery-item relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer border border-border/50 bg-secondary/20 shadow-sm hover:shadow-2xl transition-all duration-500"
                                    onClick={() => setSelectedMedia({ type: 'image', src })}
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        loading="lazy"
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <div className="vimos-gradient p-3 rounded-full text-white shadow-lg border border-white/20">
                                                <ImageIcon className="w-6 h-6" />
                                            </div>
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

export default PhotosGallery;
