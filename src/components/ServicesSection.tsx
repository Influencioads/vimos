import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import civilIcon from "@/assets/Icons Web From/civil-engineering icon.webp";
import environmentalIcon from "@/assets/Icons Web From/environmental-engineering icon.webp";
import electricalIcon from "@/assets/Icons Web From/electrical-engineering icon.webp";
import mechanicalIcon from "@/assets/Icons Web From/mechanical-engineering icon.webp";
import surveyIcon from "@/assets/Icons Web From/experts-in-survey icon.webp";
import droneIcon from "@/assets/Icons Web From/drone-service Icon.webp";

const services = [
  {
    title: "Civil Engineering",
    subtitle: "Architectural and Structural Engineering",
    image: civilIcon,
    desc: "Comprehensive architectural and structural engineering solutions with cutting-edge design methodology."
  },
  {
    title: "Environmental Engineering",
    image: environmentalIcon,
    desc: "Sustainable engineering solutions ensuring environmental compliance and eco-friendly infrastructure."
  },
  {
    title: "Electrical Engineering",
    image: electricalIcon,
    desc: "Complete electrical systems engineering from conceptual design to installation and commissioning."
  },
  {
    title: "Mechanical Engineering",
    image: mechanicalIcon,
    desc: "Advanced mechanical systems design, HVAC solutions, and industrial machinery planning."
  },
  {
    title: "Expertise in Survey",
    image: surveyIcon,
    desc: "Precision surveying techniques including topographic, boundary, and complex construction surveys."
  },
  {
    title: "Drone Service",
    image: droneIcon,
    desc: "Aerial site surveys, mapping, and project documentation using modern drone technology."
  },
  {
    title: "NABL Material Testing",
    subtitle: "Laboratory (TC-9120)",
    image: surveyIcon, // Fallback to survey icon intentionally as none was provided
    desc: "NABL accredited material testing laboratory providing rigorous quality assurance for all materials."
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-title-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 dark-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20 service-title-reveal">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">What We Do</p>
          <h2 className="section-heading text-3xl md:text-5xl mb-6">
            Our <span className="vimos-gradient-text">Services</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-lg" style={{ color: "hsl(0 0% 65%)" }}>
            VIMOS offers wide ranging consultancy services which cover every specialization of engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col text-center p-0 bg-zinc-900 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors duration-500 shadow-lg hover:shadow-primary/10 overflow-hidden"
            >
              {/* Top Image Container */}
              <div className="w-full h-56 sm:h-64 bg-white flex items-center justify-center p-4 md:p-6 overflow-hidden relative border-b border-white/5">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-primary/5 transition-colors duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative z-20 w-52 h-52 md:w-64 md:h-64 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm"
                />
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 relative">
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-primary text-[10px] sm:text-xs font-bold mb-4 tracking-widest uppercase opacity-90">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
