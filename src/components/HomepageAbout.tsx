import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutImages = [
  "/about_images/BUM-RUKN-UD-DOWLA LAKE.png",
  "/about_images/Bathukamma kunta lake.png",
  "/about_images/Nalla Cheruvu Kukatpally.png",
  "/about_images/Nalla Cheruvu Uppal lake.png",
  "/about_images/Sunnam Cheruvu.png",
  "/about_images/Thimmidikunta lake.png",
];

const HomepageAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. One-time Reveal Animation
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(sliderRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // 2. Setup/Reset Image Positions
    aboutImages.forEach((_, i) => {
      if (i !== currentImg) {
        gsap.set(imgRefs.current[i], { xPercent: 100, opacity: 0, zIndex: 0 });
      } else {
        gsap.set(imgRefs.current[i], { xPercent: 0, opacity: 1, zIndex: 10 });
      }
    });

    // 3. Auto-sliding logic
    const interval = setInterval(() => {
      const next = (currentImg + 1) % aboutImages.length;
      
      const currentEl = imgRefs.current[currentImg];
      const nextEl = imgRefs.current[next];

      if (currentEl && nextEl) {
        const tl = gsap.timeline({
          onComplete: () => {
            setCurrentImg(next);
          }
        });

        gsap.set(nextEl, { zIndex: 20 });
        gsap.set(currentEl, { zIndex: 10 });

        tl.to(currentEl, { 
          xPercent: -50, 
          opacity: 0, 
          duration: 1.2, 
          ease: "power2.inOut" 
        });

        tl.fromTo(nextEl, 
          { xPercent: 100, opacity: 0 }, 
          { xPercent: 0, opacity: 1, duration: 1.2, ease: "power2.inOut" },
          "<"
        );
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [currentImg]);

  return (
    <section ref={sectionRef} className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="about-content space-y-8 lg:col-span-5 fade-up">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-vimos-dark leading-tight">
                About VIMOS TECHNOCRATS
              </h3>
            </div>

            <div className="space-y-6 text-lg text-vimos-dark/80 font-body leading-relaxed">
              <p>
                VIMOS TECHNOCRATS is a forward-thinking engineering and environmental solutions company dedicated to restoring natural ecosystems and supporting sustainable infrastructure development. With a strong focus on lake restoration and environmental landscaping, we aim to revive water bodies, improve ecological balance, and enhance urban environments.
              </p>
              <p>
                Our expertise lies in transforming polluted and degraded lakes into healthy, self-sustaining ecosystems through scientific restoration techniques, water management systems, and biodiversity enhancement practices. We work closely with government bodies, institutions, and organizations to deliver projects that create long-term environmental impact.
              </p>
              <p>
                In addition to our core environmental services, we also undertake road contracts and government office building projects, ensuring quality, reliability, and adherence to modern engineering standards.
              </p>
              <p className="font-semibold text-vimos-dark">
                At VIMOS TECHNOCRATS, we are committed to building a greener, cleaner, and more sustainable future through innovation, expertise, and responsible execution.
              </p>
            </div>
            
            <div className="pt-4 px-8 py-6 bg-[#0a92d1]/5 border-l-4 border-[#0a92d1] italic text-vimos-dark/70">
              "Restoring natural ecosystems for a sustainable future through smart engineering."
            </div>
          </div>

          {/* Right Slider */}
          <div ref={sliderRef} className="relative h-[280px] sm:h-[400px] md:h-[480px] lg:h-[550px] w-full group lg:col-span-7">
            <div className="absolute inset-6 sm:inset-0 bg-vimos-dark/5 rounded-2xl overflow-hidden shadow-2xl">
              {aboutImages.map((img, index) => (
                <div
                  key={img}
                  ref={(el) => (imgRefs.current[index] = el)}
                  className="absolute inset-0 w-full h-full will-change-transform"
                >
                  <img
                    src={img}
                    alt={`Project ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
              ))}
            </div>
            
            {/* Simple indicators */}
            <div className="absolute bottom-10 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
              {aboutImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-[#0a92d1]' : 'w-4 bg-white/50 blur-[1px]'}`} 
                />
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute top-0 right-0 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-32 sm:h-32 border-t-2 border-r-2 border-[#0a92d1]/30 rounded-tr-xl sm:rounded-tr-3xl -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:-translate-y-2 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 border-b-2 border-l-2 border-[#0a92d1]/30 rounded-bl-xl sm:rounded-bl-3xl -z-10 group-hover:-translate-x-1 group-hover:translate-y-1 sm:group-hover:-translate-x-2 sm:group-hover:translate-y-2 transition-transform duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomepageAbout;
