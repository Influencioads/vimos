import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomepageCTA = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Parallax effect for background
            gsap.to(".cta-bg", {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-vimos-dark">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/Projects/BUM-RUKN-UD-DOWLA%20LAKE-after.webp" 
                    alt="BUM-RUKN-UD-DOWLA LAKE Restoration" 
                    className="cta-bg w-full h-[120%] object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-vimos-dark/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-vimos-dark via-transparent to-vimos-dark/30" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div ref={contentRef} className="max-w-5xl mx-auto">
                    <h2 className="text-[#0a92d1] font-heading font-black text-sm tracking-[0.4em] uppercase mb-8">
                        VIMOS TECHNOCRATS
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.2] mb-10 uppercase tracking-tighter">
                        Your Trusted Partner for <br className="hidden md:block" />
                        <span className="text-[#0a92d1]">Lake Restoration</span> & <br className="hidden md:block" />
                        Environmental Solutions
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            className="group relative px-12 py-6 bg-[#0a92d1] text-white font-heading font-bold text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(10,146,209,0.5)] active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Enquiry Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </span>
                            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
                        </button>

                        <button 
                            onClick={() => window.location.href = '/projects'}
                            className="px-12 py-6 border border-white/20 text-white font-heading font-bold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-all duration-300 active:scale-95"
                        >
                            View Our Portfolio
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#0a92d1]/50 to-transparent" />
            <div className="absolute top-1/2 -right-20 w-40 h-40 border border-[#0a92d1]/10 rounded-full" />
        </section>
    );
};

export default HomepageCTA;
