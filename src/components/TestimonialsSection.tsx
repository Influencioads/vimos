import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Project Director, Urban Infra",
    image: "/avatars/avatar1.webp",
    text: "VIMOS's Civil & Structural Engineering expertise was pivotal for our high-rise project. Their design precision and architectural integration are truly top-tier."
  },
  {
    name: "Priya Sharma",
    role: "Sustainability Officer, EcoCity",
    image: "/avatars/avatar2.webp",
    text: "Their Environmental Engineering solutions helped us navigate complex eco-compliance with ease. VIMOS is our go-to partner for sustainable infrastructure."
  },
  {
    name: "Amit Patel",
    role: "Operations Head, Industrial Hub",
    image: "/avatars/avatar3.webp",
    text: "The integration of Electrical and Mechanical systems in our new manufacturing plant was flawless. Their team handles technical complexity with professional ease."
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-title-reveal", {
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
    <section id="testimonials" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle light background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24 testimonial-title-reveal">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Reviews</p>
          <h2 className="section-heading text-3xl md:text-5xl mb-6 text-slate-900">
            Client <span className="vimos-gradient-text">Feedback</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto text-lg text-slate-600">
            Building excellence and trust across every engineering specialization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card relative p-8 md:p-10 rounded-2xl border border-slate-100 bg-slate-50 shadow-lg shadow-slate-200/50 hover:border-primary/20 hover:shadow-xl hover:bg-white group transition-all duration-300">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-200 group-hover:text-primary/10 transition-colors duration-500" />

              <p className="font-body text-slate-600 text-lg leading-relaxed mb-10 relative z-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-5 mt-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                    {t.name}
                  </h4>
                  <p className="font-body text-xs tracking-wider text-primary uppercase font-bold opacity-80 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

