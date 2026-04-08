import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImg1 from "@/assets/banner_image1.webp";
import heroImg2 from "@/assets/banner2.webp";
import heroImg3 from "@/assets/Environmental_Engineering.webp";

const images = [heroImg1, heroImg2, heroImg3];

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(overlayRef.current, { scaleX: 0, duration: 1.2, transformOrigin: "left" })
      .from(titleRef.current, { y: 100, opacity: 0, duration: 1 }, "-=0.5")
      .from(subRef.current, { y: 60, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(btnRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-=0.3");
  }, []);

  // Background image slider animation
  useEffect(() => {
    // Initial setup: first image is centered, others are hidden and off-screen right
    images.forEach((_, i) => {
      gsap.set(imageWrapperRefs.current[i], {
        zIndex: i === 0 ? 1 : 0,
        xPercent: i === 0 ? 0 : 100 // push everyone else 100% to the right initially
      });
      gsap.set(imageRefs.current[i], {
        scale: 1 // reset scaling for simpler slide
      });
    });

    let currentIndex = 0;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      const currentWrapper = imageWrapperRefs.current[currentIndex];
      const nextWrapper = imageWrapperRefs.current[nextIndex];

      // Prepare next image wrapper by setting it off-screen right
      gsap.set(nextWrapper, {
        zIndex: 2,
        xPercent: 100
      });

      // Slide current image left
      gsap.to(currentWrapper, {
        xPercent: -100,
        duration: 1.8,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(currentWrapper, { zIndex: 0 }); // push back
        }
      });

      // Slide next image in from the right
      gsap.to(nextWrapper, {
        xPercent: 0,
        duration: 1.8,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(nextWrapper, { zIndex: 1 }); // bring to front
        }
      });

      currentIndex = nextIndex;
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-vimos-dark">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (imageWrapperRefs.current[index] = el)}
            className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
            style={{ zIndex: index === 0 ? 1 : 0 }}
          >
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={img}
              alt={`Hero Background ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover will-change-transform pointer-events-none"
            />
          </div>
        ))}
        <div ref={overlayRef} className="absolute inset-0 z-10 bg-gradient-to-r from-vimos-dark/90 via-vimos-dark/60 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mt-24 md:mt-32 lg:mt-40">
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-4 text-primary">
            Architectural & Structural Excellence
          </p>
          <h1 ref={titleRef} className="section-heading text-4xl md:text-4xl lg:text-8xl leading-[0.95] mb-6">
            <span className="text-shine">VIMOS</span><br />
            <span className="vimos-gradient-text-shine">TECHNOCRAFTS</span>
          </h1>
          <p ref={subRef} className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed">
            We are structural engineering and project management consultants for environmental projects, offering detailed project report preparation for parks and playgrounds, as well as architectural and structural designs for commercial and residential buildings.
          </p>
          <button
            ref={btnRef}
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="vimos-gradient px-8 py-4 font-heading text-sm tracking-widest uppercase text-primary-foreground rounded-sm hover:opacity-90 transition-opacity"
          >
            Explore Our Work
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-xs tracking-widest uppercase text-primary-foreground/60">Scroll</span>
        <div className="w-px h-12 bg-primary-foreground/30 relative overflow-hidden">
          <div className="w-full h-4 bg-primary absolute animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
