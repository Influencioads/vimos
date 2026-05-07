import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, Sprout, Milestone, Building2, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Lake Restoration",
    desc: "Scientific rejuvenation of water bodies using advanced bio-remediation, water quality management, and biodiversity restoration techniques.",
    icon: <Droplets className="w-8 h-8 text-[#0a92d1]" />,
    color: "bg-blue-50"
  },
  {
    title: "Environmental Landscaping",
    desc: "Sustainable urban greening and eco-friendly landscape development designed to enhance ecological balance and urban beauty.",
    icon: <Sprout className="w-8 h-8 text-[#0a92d1]" />,
    color: "bg-green-50"
  },
  {
    title: "Road Contracts",
    desc: "Expert infrastructure development including highway construction and road maintenance with adherence to modern engineering standards.",
    icon: <Milestone className="w-8 h-8 text-[#0a92d1]" />,
    color: "bg-slate-50"
  },
  {
    title: "Civil Construction",
    desc: "General civil works and government office building projects ensuring quality, reliability, and modern architectural excellence.",
    icon: <Building2 className="w-8 h-8 text-[#0a92d1]" />,
    color: "bg-indigo-50"
  }
];

const HomepageServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.from(".services-header > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Cards Reveal
      gsap.from(".service-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="services-header text-center mb-16 space-y-4">
          <h2 className="text-[#0a92d1] font-heading font-black text-sm tracking-[0.3em] uppercase">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-vimos-dark leading-tight max-w-3xl mx-auto">
            Premium Engineering & Environmental Solutions
          </h3>
          <p className="text-vimos-dark/60 font-body text-lg max-w-2xl mx-auto">
            VIMOS TECHNOCRATS delivers integrated specialized services designed for long-term environmental impact and infrastructure excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group relative p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#0a92d1]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(10,146,209,0.1)] hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0a92d1]/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#0a92d1]/10 transition-colors duration-500" />
              
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>

              <h4 className="text-2xl font-heading font-bold text-vimos-dark mb-4 group-hover:text-[#0a92d1] transition-colors">
                {service.title}
              </h4>
              
              <p className="text-vimos-dark/70 font-body leading-relaxed mb-8">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-[#0a92d1] font-heading font-bold text-sm uppercase tracking-wider group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0a92d1] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageServices;
