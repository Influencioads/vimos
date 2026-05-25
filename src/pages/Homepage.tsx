import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "@/components/Navbar";
import HomepageAbout from "@/components/HomepageAbout";
import HomepageProjectGrid from "@/components/HomepageProjectGrid";
import HomepageVideo from "@/components/HomepageVideo";
import HomepageClients from "@/components/HomepageClients";
import HomepageCTA from "@/components/HomepageCTA";
import FooterSection from "@/components/FooterSection";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/dji-0003.webp",
    heading: "Expert Lake Restoration & Environmental Engineering Solutions",
    description: "Partnering with government and institutional projects, VIMOS TECHNOCRATS delivers high-quality lake rejuvenation and landscape development with advanced engineering practices.",
    button: "Explore Projects"
  },
  {
    image: "/dji-0021.webp",
    heading: "Bringing Lakes Back to Life with Smart Environmental Solutions",
    description: "We deliver expert lake restoration and eco-landscape services that enhance biodiversity, improve water quality, and create greener surroundings for future generations.",
    button: "View Our Projects"
  },
  {
    image: "/kalena-agrahara-lake.webp",
    heading: "Restoring Lakes. Reviving Nature. Building a Sustainable Future.",
    description: "VIMOS TECHNOCRATS specializes in lake restoration and environmental landscaping, transforming degraded water bodies into thriving ecosystems while supporting sustainable urban development.",
    button: "View Projects"
  }
];

const Homepage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const imageWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Initial content animation - only on mount
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, descRef.current, btnRef.current], {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Auto-slide interval
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      goToSlide(nextSlide);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;

    const currentWrapper = imageWrapperRefs.current[currentSlide];
    const nextWrapper = imageWrapperRefs.current[index];

    const tl = gsap.timeline({
        onStart: () => {
            // Setup next wrapper
            gsap.set(nextWrapper, { zIndex: 10, xPercent: 100 });
        }
    });

    // Content fade out
    tl.to([titleRef.current, descRef.current, btnRef.current], {
      y: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.in"
    });

    // Background slide
    tl.to(currentWrapper, {
        xPercent: -100,
        duration: 1.8,
        ease: "power4.inOut"
    }, "-=0.3");

    tl.to(nextWrapper, {
        xPercent: 0,
        duration: 1.8,
        ease: "power4.inOut",
        onComplete: () => {
            setCurrentSlide(index);
            // Reset wrappers for next time
            slides.forEach((_, i) => {
                gsap.set(imageWrapperRefs.current[i], {
                    zIndex: i === index ? 5 : 0,
                    xPercent: i === index ? 0 : 100
                });
            });
            // Content fade in
            gsap.fromTo([titleRef.current, descRef.current, btnRef.current], 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
            );
        }
    }, "<");
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      <section className="relative h-[100dvh] flex items-center overflow-hidden bg-vimos-dark">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (imageWrapperRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full will-change-transform"
              style={{ zIndex: index === currentSlide ? 5 : 0 }}
            >
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 z-10" />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="container relative z-20 mx-auto px-6 pt-20">
          <div className="max-w-4xl space-y-6 md:space-y-8 relative z-30 text-center md:text-left">
            <h1 
                ref={titleRef} 
                className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white leading-[1.1] block drop-shadow-2xl"
            >
                {slides[currentSlide].heading}
            </h1>
            
            <p 
                ref={descRef} 
                className="text-base md:text-xl text-white font-body max-w-2xl leading-relaxed md:border-l-2 md:border-primary/30 md:pl-8 mx-auto md:mx-0"
            >
              {slides[currentSlide].description}
            </p>

            <div ref={btnRef} className="pt-4 md:pt-6">
                <button 
                    onClick={() => navigate('/projects')}
                    className="group relative w-full md:w-auto px-10 py-4 md:py-5 bg-primary text-white font-heading text-xs md:text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--vimos-blue),0.4)]"
                >
                    <span className="relative z-10">{slides[currentSlide].button}</span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-12 md:right-12 z-30 flex gap-4 items-center">
            {slides.map((_, i) => (
                <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="group relative w-8 md:w-12 h-1 bg-white/20 transition-all duration-500 overflow-hidden"
                >
                    <div 
                        className={`absolute top-0 left-0 h-full bg-primary transition-all duration-500 ${i === currentSlide ? 'w-full' : 'w-0 group-hover:w-1/2'}`} 
                    />
                </button>
            ))}
            <div className="ml-2 md:ml-4 font-heading text-[10px] md:text-xs text-white/50 tracking-widest">
                0{currentSlide + 1} / 0{slides.length}
            </div>
        </div>

        {/* Social Icons/Links side sidebar removed */}
      </section>

      <HomepageAbout />

      <HomepageProjectGrid />

      <HomepageVideo />

      <HomepageClients />

      <HomepageCTA />

      <FooterSection />
    </div>
  );
};

export default Homepage;
