import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// import img1 from "@/assets/gallery/2D section OF SHOPS.webp";
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
   img2,  img4, img6,  img9, img10,
   img12, img13,    img19, img20,
  img21,   img28, img29,  img33, 
];

// Show all images in the home page gallery section
const showcaseImages = galleryImages;



const GallerySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // If no images exist yet or very few, don't run the complex animation
    if (showcaseImages.length < 3) return;

    const ctx = gsap.context(() => {
      const strip = stripRef.current;
      if (!strip) return;

      // Calculate total horizontal scroll needed
      const totalScroll = strip.scrollWidth - window.innerWidth;

      gsap.to(strip, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Reveal animation for text
      gsap.from(".gallery-title-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="bg-background">
      <div ref={wrapperRef} className="horizontal-section relative overflow-hidden h-screen bg-vimos-dark text-white">

        {/* Background gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-vimos-dark via-vimos-dark to-vimos-blue/20 opacity-80 z-0 pointer-events-none" />

        <div className="absolute top-12 left-8 md:left-16 z-20 pointer-events-none">
          <p className="gallery-title-reveal font-body text-sm tracking-[0.3em] uppercase text-primary mb-3">
            Our Work
          </p>
          <h2 className="gallery-title-reveal font-heading text-4xl md:text-4xl lg:text-5xl font-bold md:mb-6">
            Project <span className="vimos-gradient-text-shine">Gallery</span>
          </h2>
        </div>

        {/* View All Button positioned relative to the screen, but z-index above scroll */}
        <div className="absolute bottom-12 right-8 md:right-16 z-30 gallery-title-reveal">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/gallery');
            }}
            className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full transition-all duration-300"
          >
            <span className="font-heading text-sm font-semibold tracking-wider uppercase text-white">
              View All Projects
            </span>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        {showcaseImages.length > 0 ? (
          <div
            ref={stripRef}
            className="flex h-full items-start md:items-center gap-8 px-8 md:px-16 pt-40 md:pt-0"
            style={{ width: `${Math.max(100, showcaseImages.length * 45)}vw` }}
          >
            {showcaseImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 relative group cursor-pointer w-[80vw] md:w-[35vw] h-[55vh] md:h-[60vh]"
              >
                <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/10 relative">
                  <div className="absolute inset-0 bg-vimos-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={img}
                    alt={`Featured Project ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

            {/* End card prompting to view all */}
            {/* <div className="flex-shrink-0 w-[80vw] md:w-[30vw] h-[55vh] md:h-[60vh] flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 cursor-pointer" onClick={() => { window.scrollTo(0, 0); navigate('/gallery'); }}>
                <ArrowRight className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Explore More</h3>
              <p className="font-body text-white/60">View our complete portfolio of successful projects and structural designs.</p>
            </div> */}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-white/50 font-body">Adding images to the gallery...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
