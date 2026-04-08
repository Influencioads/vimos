import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "bathukammakunta-lake",
    title: "BATHUKAMMAKUNTA LAKE",
    category: "Lake Restoration",
    img: "/Projects/BATHUKAMMAKUNTA LAKE-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "bum-rukn-ud-dowla-lake",
    title: "BUM-RUKN-UD-DOWLA LAKE",
    category: "Heritage & Ecological",
    img: "/Projects/BUM-RUKN-UD-DOWLA LAKE-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "nalla-cheruvu-kukatpally",
    title: "NALLA CHERUVU, KUKATPALLY",
    category: "Flood Mitigation",
    img: "/Projects/NALLA CHERUVU, KUKATPALLY-after.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "nalla-cheruvu-uppal",
    title: "NALLA CHERUVU UPPAL",
    category: "Ecological Recovery",
    img: "/Projects/NALLA CHERUVU UPPAL-present.webp",
    location: "Hyderabad, Telangana"
  },
  {
    id: "sunnam-cheruvu",
    title: "SUNNAM CHERUVU",
    category: "Sediment Removal",
    img: "/Projects/SUNNAM CHERUVU-present.webp",
    location: "Hyderabad, Telangana"
  }
];


const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current;
      if (!panels) return;

      gsap.from(".project-title-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      const totalScroll = panels.scrollWidth - window.innerWidth;

      gsap.to(panels, {
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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <div ref={wrapperRef} className="horizontal-section relative overflow-hidden h-screen">
        <div className="absolute top-8 left-8 z-10 project-title-reveal flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-2">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Our Projects</h2>
          </div>
          <button
            onClick={() => navigate('/projects')}
            className="group flex items-center gap-2 font-body text-sm font-semibold tracking-widest uppercase py-2 border-b border-primary/20 hover:border-primary transition-all duration-300"
          >
            Explore All Projects
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>

        <div ref={panelsRef} className="flex h-full items-center gap-8 px-8 pt-20 w-max">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[85vw] md:w-[35vw] h-[55vh] md:h-[70vh] rounded-sm overflow-hidden group cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-vimos-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2 block">{project.category}</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-1">{project.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70">{project.location}</p>
              </div>
              <div className="absolute top-6 right-6 font-heading text-6xl font-bold text-primary-foreground/10">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
