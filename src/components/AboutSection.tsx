import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about.webp";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
      gsap.from(textRef.current, {
        x: -100, opacity: 0, duration: 1, delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      });
      gsap.from(imgRef.current, {
        x: 100, opacity: 0, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none reverse" },
      });
      gsap.from(statsRef.current?.children || [], {
        y: 50, opacity: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: statsRef.current, start: "top 80%", toggleActions: "play none none reverse" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Team Members" },
    { number: "50+", label: "Happy Clients" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={textRef}>
            <div className="about-title-reveal">
              <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">About Us</p>
              <h2 className="section-heading text-3xl md:text-5xl text-foreground mb-8">
                Building The <span className="vimos-gradient-text">Future</span>
              </h2>
            </div>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                VIMOS TECHNOCRATS is a young and dynamic company aiming at people living on the fast track. We understand the needs of the changing world and develop customized solutions keeping in mind stringent quality policies and international standard infrastructure practices.
              </p>
              <p>
                True to our innovative spirit, we offer an unprecedented bouquet of services and top-of-the-line amenities to our customers. An integrated complete solution provider for the civil engineering industry, VIMOS TECHNOCRATS combines development, construction and Project management disciplines all under one roof.
              </p>
              <p>
                The management team at VIMOS TECHNOCRATS consists of best of the breed architects, civil engineers, environmental engineers, structural engineers, mechanical engineers, electrical engineers, quality control engineers, and more.
              </p>
            </div>
          </div>
          <div ref={imgRef} className="relative">
            <div className="overflow-hidden rounded-sm">
              <img src={aboutImg} alt="Blueprint" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary rounded-sm" />
            <div className="absolute -top-6 -right-6 w-32 h-32 vimos-gradient rounded-sm opacity-20" />
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 border border-border rounded-sm hover:border-primary transition-colors">
              <span className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.number}</span>
              <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
