import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const HomeProjects = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projectDetails = [
        { label: "Area of the Lake", value: "149 Acre 15 Gunta." },
        { label: "Status of the Lake", value: "Developed Lake." },
        { 
            label: "Developed Components", 
            value: "Lakebed improvements, Bund formation and improvements, Wetland improvements, Sewage diversion pipeline, Inlet and outlet improvements, Construction of silt raps, Security room, Walkway improvements, Children and gym area development, Yoga platform, Security room, Sand path, Amphitheater." 
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-background overflow-hidden px-6">
            <div className="container mx-auto">
                <div 
                    ref={cardRef}
                    className="flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] border border-border/50"
                >
                    {/* Left Side - Project Specifics */}
                    <div className="w-full lg:w-3/5 bg-[#dce6ee] p-8 md:p-12">
                        <div className="flex flex-col h-full">
                            <h3 className="text-2xl md:text-3xl font-heading font-black text-center mb-10 tracking-widest uppercase text-slate-800">
                                AGARA LAKE
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {/* Before Card */}
                                <div className="bg-white p-4 rounded-3xl shadow-sm border border-white">
                                    <h4 className="text-[10px] font-heading font-black text-center mb-3 tracking-widest uppercase text-slate-400">AGARA LAKE</h4>
                                    <div className="rounded-xl overflow-hidden mb-4">
                                        <img 
                                            src={`/${encodeURIComponent("BANGLORE SOUTH LAKES DEVELOPED BY VIMOS (BEFORE AFTER PHOTOS)")}/${encodeURIComponent("AGARA LAKE")}.webp`} 
                                            alt="Agara Lake Before"
                                            className="w-full aspect-[4/3] object-cover scale-150 -translate-x-4"
                                        />
                                    </div>
                                    <p className="text-center font-heading font-bold text-[10px] tracking-widest text-slate-500 uppercase">Before Development</p>
                                </div>

                                {/* After Card */}
                                <div className="bg-white p-4 rounded-3xl shadow-sm border border-white">
                                    <h4 className="text-[10px] font-heading font-black text-center mb-3 tracking-widest uppercase text-slate-400">AGARA LAKE</h4>
                                    <div className="rounded-xl overflow-hidden mb-4">
                                        <img 
                                            src={`/${encodeURIComponent("BANGLORE SOUTH LAKES DEVELOPED BY VIMOS (BEFORE AFTER PHOTOS)")}/${encodeURIComponent("AGARA LAKE")}.webp`} 
                                            alt="Agara Lake After"
                                            className="w-full aspect-[4/3] object-cover"
                                        />
                                    </div>
                                    <p className="text-center font-heading font-bold text-[10px] tracking-widest text-slate-500 uppercase">After Development</p>
                                </div>
                            </div>

                            <div className="space-y-6 text-slate-700">
                                {projectDetails.map((detail, idx) => (
                                    <div key={idx} className="flex gap-4 items-start group">
                                        <div className="w-2 h-2 rounded-full bg-[#0a92d1] mt-2 flex-shrink-0" />
                                        <p className="font-body text-sm md:text-base leading-relaxed">
                                            <span className="font-bold text-slate-800">{detail.label}</span> : {detail.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Cluster Info */}
                    <div className="w-full lg:w-2/5 bg-white p-8 md:p-16 relative flex flex-col justify-center">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                        
                        <div className="relative z-10 space-y-10">
                            <div>
                                <h4 className="text-[#0a92d1] font-heading font-bold text-sm tracking-[0.4em] uppercase mb-6">
                                    Regional Cluster
                                </h4>
                                <h2 className="text-5xl md:text-7xl font-heading font-black text-vimos-dark mb-4 leading-[0.9] tracking-tighter uppercase italic">
                                    Banglore <br />
                                    <span className="text-[#0a92d1]">South</span> <br />
                                    <span className="text-[#0a92d1]">Lakes</span>
                                </h2>
                                <div className="w-16 h-1.5 bg-[#0a92d1] mb-12" />
                                <p className="text-vimos-dark/70 font-body text-lg leading-relaxed max-w-sm">
                                    Exploring the comprehensive ecological rejuvenation and sustainable urban engineering efforts across 39 distinct project sites in this zone.
                                </p>
                            </div>

                            <button 
                                onClick={() => navigate('/projects/bangalore-south-lakes')}
                                className="group relative flex items-center justify-between w-full md:w-auto md:min-w-[260px] px-10 py-5 bg-[#0a92d1] text-white rounded-2xl font-heading font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-[#0a92d1]/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    Explore Zone
                                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                                </span>
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;
