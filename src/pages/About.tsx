import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import aboutImg from "@/assets/3.jpg";
import teamImg from "@/assets/team.jpg";
import { CheckCircle, Shield, Award, Users, Target, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const aboutImages = [
    "/about_images/BUM-RUKN-UD-DOWLA LAKE.png",
    "/about_images/Bathukamma kunta lake.png",
    "/about_images/Nalla Cheruvu Kukatpally.png",
    "/about_images/Nalla Cheruvu Uppal lake.png",
    "/about_images/Sunnam Cheruvu.png",
    "/about_images/Thimmidikunta lake.png",
];



const teamDepartments = [
    {
        title: "Directors",
        accent: "from-amber-500 to-amber-600",
        members: [
            { name: "P YOUNUS PERVEZ", role: "B.E Mechanical", photo: "/employees/P YOUNUS PERVEZ.png" },
            { name: "IMAMMOHIUDDIN", role: "B.Sc, M.Com, LLB, D.E.M, Retd Manager, Bank of India", photo: null },
        ]
    },
    {
        title: "Advisors",
        accent: "from-slate-600 to-slate-700",
        members: [
            { name: "P.R. BABU", role: "B.E, Retd. Deputy Executive Engineer, R&B Water Supply Board", photo: null },
            { name: "T JAGANNATH RAO", role: "B.Sc, Retd. Deputy Conservator of Forest, BBMP Lakes Division", photo: null },
            { name: "Dr. M INAYATHULLA", role: "Professor in Civil Engineering Dept., UVCE, Bangalore University", photo: null },
        ]
    },
    {
        title: "Project Managers",
        accent: "from-[#0a92d1] to-[#0878ab]",
        members: [
            { name: "BHEEMANNA GOUDA", role: "B.E. Civil", photo: "/employees/BHEEMANNA GOUDA.png" },
            { name: "S. MD. SAJID ALI", role: "M.Tech Structures, MBA Finance Management", photo: "/employees/S. MD. SAJID ALI.png" },
            { name: "SRI RANGA K R", role: "M.Tech Structures", photo: "/employees/4. SRI RANGA K R.jpeg" },
            { name: "SURESH KUMAR REDDY", role: "M.Tech Structures", photo: "/employees/SURESH KUMAR REDDY.png" },
            { name: "AJAY B M", role: "B.E. Civil", photo: "/employees/AJAY B M.png" },
        ]
    },
    {
        title: "NABL Lab Incharge",
        accent: "from-emerald-500 to-emerald-600",
        members: [
            { name: "VIDYARANYA V", role: "M.Tech Construction Technology", photo: "/employees/9. VIDYARANYA V.jpeg" },
        ]
    },
    {
        title: "Team Leaders",
        accent: "from-violet-500 to-violet-600",
        members: [
            { name: "G B SREENATH", role: "B.E. Civil", photo: "/employees/G B SREENATH.png" },
            { name: "NAYAN D", role: "B.E. Civil", photo: "/employees/NAYAN D.png" },
            { name: "KHALID PASHA R", role: "B.E. Civil", photo: "/employees/KHALID PASHA R.png" },
            { name: "ABHAY A", role: "B.E. Civil", photo: "/employees/ABHAY A.png" },
            { name: "RAKESH", role: "B.E. Civil", photo: "/employees/RAKESH.png" },
        ]
    },
    {
        title: "Civil Engineers",
        accent: "from-[#0a92d1] to-[#0878ab]",
        members: [
            { name: "RAKESH M", role: "B.E. Civil", photo: "/employees/RAKESH M.png" },
            { name: "KIRAN M S", role: "B.E. Civil", photo: "/employees/KIRAN M S.png" },
            { name: "SRI KANTH M K", role: "B.E. Civil", photo: "/employees/SRI KANTH M K.png" },
            { name: "HASEEB BAIG", role: "B.E. Civil", photo: "/employees/HASEEB BAIG.png" },
            { name: "Y MANOJ KUMAR", role: "B.E. Civil", photo: "/employees/23. Y MANOJ KUMAR.jpeg" },
            { name: "VENNAPUSA GIREESHWAR REDDY", role: "B.E. Civil", photo: "/employees/VENNAPUSA GIREESHWAR REDDY.png" },
            { name: "DILIP KUMAR", role: "B.E. Civil", photo: "/employees/DILIP KUMAR.png" },
            { name: "BALA KRISHNA JOSHI", role: "B.E. Civil", photo: "/employees/BALA KRISHNA JOSHI.png" },
            { name: "GAGAN KUMAR R", role: "B.E. Civil", photo: "/employees/GAGAN KUMAR R.png" },
            { name: "PRADYUTH SURESH", role: "B.E. Civil", photo: "/employees/PRADYUTH SURESH.png" },
            { name: "VENKATESH REDDY", role: "B.E. Civil", photo: null },
            { name: "MOHAMMAD SWAD EXAMBE", role: "B.E. Civil", photo: "/employees/MOHAMMAD SWAD EXAMBE.png" },
            { name: "KUSHAL M", role: "M.Tech Structures", photo: null },
            { name: "RAJA SHEKAR", role: "B.E. Civil", photo: "/employees/RAJA SHEKAR.png" },
        ]
    },
    {
        title: "Surveyors",
        accent: "from-orange-500 to-orange-600",
        members: [
            { name: "RAVICHANDRA K T", role: "", photo: "/employees/RAVICHANDRA K T.png" },
            { name: "RAVINDRA REDDY", role: "", photo: "/employees/RAVINDRA REDDY.png" },
            { name: "MOHAMMAD ILIYAS", role: "", photo: "/employees/MOHAMMAD ILIYAS.png" },
            { name: "PAWAN", role: "", photo: null },
            { name: "PARASHU RAM", role: "", photo: null },
        ]
    },
    {
        title: "Mechanical Engineers",
        accent: "from-rose-500 to-rose-600",
        members: [
            { name: "SHANKAR K", role: "B.E. Mechanical", photo: null },
            { name: "N SHIVARAM", role: "B.Tech Mechanical", photo: "/employees/N SHIVARAM.png" },
        ]
    },
    {
        title: "Electrical Engineers",
        accent: "from-yellow-500 to-yellow-600",
        members: [
            { name: "P VASIM KIRAN", role: "B.E. Electrical", photo: null },
            { name: "VIPIN KUMAR", role: "B.E. Electrical", photo: null },
            { name: "HINDU SHREE", role: "B.E. Electrical", photo: null },
        ]
    },
    {
        title: "Water Resource Engineers",
        accent: "from-cyan-500 to-cyan-600",
        members: [
            { name: "SANDESHA K M", role: "M.Tech Water Resource Engineering", photo: null },
        ]
    },
    {
        title: "Structural Engineers",
        accent: "from-indigo-500 to-indigo-600",
        members: [
            { name: "SAJEETH S B", role: "M.Tech Structures", photo: null },
            { name: "BHYRESH", role: "M.Tech Structures", photo: null },
        ]
    },
    {
        title: "Administration",
        accent: "from-teal-500 to-teal-600",
        members: [
            { name: "MAHADEVA C", role: "B.Com, Accounts Manager", photo: "/employees/13.MAHADEVA C.jpeg" },
        ]
    },
];

const reasons = [
    { icon: <Shield className="w-8 h-8 text-primary" />, title: "Quality Assurance", desc: "Stringent quality policies and international standard infrastructure practices." },
    { icon: <Target className="w-8 h-8 text-primary" />, title: "Project Management", desc: "Integrated development, construction and project management disciplines under one roof." },
    { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Commitment", desc: "Our strength lies in our unparalleled commitment to deliver the best to the client." },
    { icon: <Users className="w-8 h-8 text-primary" />, title: "Expert Team", desc: "Best of the breed architects, civil, environmental, structural, mechanical & electrical engineers." },
    { icon: <Award className="w-8 h-8 text-primary" />, title: "Wide Experience", desc: "From pre-investment techno-feasibility studies and design to construction supervision." },
    { icon: <Zap className="w-8 h-8 text-primary" />, title: "Strategic Advice", desc: "In-depth research on trends & market analysis, feasibility studies & appraisals." }
];

const TeamMemberAvatar = ({ name, accent, initials }: { name: string; accent: string; initials: string }) => {
    return (
        <div className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${accent} overflow-hidden`}>
            {/* Subtle ambient light pulses */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/15 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-black/15 blur-2xl pointer-events-none" />
            
            {/* Glowing Monogram Circle */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center border-2 border-white/25 bg-white/10 backdrop-blur-md shadow-xl group-hover:scale-110 group-hover:border-white/40 transition-all duration-500">
                <span className="text-white font-heading font-black text-2xl tracking-wider select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    {initials}
                </span>
                
                {/* Subtle visual dot anchor */}
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>
        </div>
    );
};

const categories = [
    { id: "all", name: "All Members" },
    { id: "leadership", name: "Leadership" },
    { id: "management", name: "Management" },
    { id: "engineering", name: "Engineering" },
    { id: "operations", name: "Operations & Support" }
];

const corporateDivisions = [
    {
        id: "leadership",
        title: "Leadership & Board",
        desc: "Founders, executive directors, and strategic advisors guiding VIMOS's long-term vision.",
        accent: "from-amber-500 to-amber-600",
        departments: ["Directors", "Advisors"]
    },
    {
        id: "management",
        title: "Project Management",
        desc: "Certified project leaders and laboratory managers directing critical operations, QA/QC, and execution.",
        accent: "from-cyan-500 to-[#0878ab]",
        departments: ["Project Managers", "NABL Lab Incharge"]
    },
    {
        id: "engineering",
        title: "Engineering Division",
        desc: "Multi-disciplinary engineering experts specializing in structural integrity, civil works, water resource modeling, and mechanical-electrical integrations.",
        accent: "from-[#0a92d1] to-indigo-600",
        departments: ["Team Leaders", "Civil Engineers", "Mechanical Engineers", "Electrical Engineers", "Water Resource Engineers", "Structural Engineers"]
    },
    {
        id: "operations",
        title: "Operations & Administration",
        desc: "The backbone of field surveying, data modeling, financial integrity, and office coordination.",
        accent: "from-teal-500 to-emerald-600",
        departments: ["Surveyors", "Administration"]
    }
];


const getCategoryForDept = (title: string) => {
    switch (title) {
        case "Directors":
        case "Advisors":
            return "leadership";
        case "Project Managers":
        case "NABL Lab Incharge":
            return "management";
        case "Team Leaders":
        case "Civil Engineers":
        case "Mechanical Engineers":
        case "Electrical Engineers":
        case "Water Resource Engineers":
        case "Structural Engineers":
            return "engineering";
        case "Surveyors":
        case "Administration":
            return "operations";
        default:
            return "engineering";
    }
};

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentImg, setCurrentImg] = useState(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Scroll to top when page loads
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.from(".about-hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Content Animations
            gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
                gsap.from(el, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                });
            });

            // Cards Animations
            gsap.from(".reason-card", {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".reasons-grid",
                    start: "top 80%",
                },
            });




        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Image slider effect (mirrors HomepageAbout)
    useEffect(() => {
        aboutImages.forEach((_, i) => {
            if (i !== currentImg) {
                gsap.set(imgRefs.current[i], { xPercent: 100, opacity: 0, zIndex: 0 });
            } else {
                gsap.set(imgRefs.current[i], { xPercent: 0, opacity: 1, zIndex: 10 });
            }
        });

        const interval = setInterval(() => {
            const next = (currentImg + 1) % aboutImages.length;
            const currentEl = imgRefs.current[currentImg];
            const nextEl = imgRefs.current[next];

            if (currentEl && nextEl) {
                const tl = gsap.timeline({ onComplete: () => setCurrentImg(next) });
                gsap.set(nextEl, { zIndex: 20 });
                gsap.set(currentEl, { zIndex: 10 });
                tl.to(currentEl, { xPercent: -50, opacity: 0, duration: 1.2, ease: "power2.inOut" });
                tl.fromTo(nextEl,
                    { xPercent: 100, opacity: 0 },
                    { xPercent: 0, opacity: 1, duration: 1.2, ease: "power2.inOut" },
                    "<"
                );
            }
        }, 4500);

        return () => clearInterval(interval);
    }, [currentImg]);

    useEffect(() => {
        // Entrance animation on activeCategory change
        gsap.fromTo(".team-member-card",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: "power2.out", overwrite: "auto" }
        );
    }, [activeCategory]);

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-vimos-dark" style={{ minHeight: '75vh' }}>
                <div className="absolute inset-0 z-0">
                    <img src={aboutImg} alt="VIMOS TECHNOCRATS" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '75vh' }}>
                    <h1 className="about-hero-title text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        About <span className="vimos-gradient-text-shine">VIMOS TECHNOCRATS</span>
                    </h1>
                    <p className="about-hero-title text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-body">
                        An integrated complete solution provider for the civil engineering industry.
                    </p>
                </div>
            </section>

            {/* Who We Are - Two Column Layout (matches Homepage About section) */}
            <section className="py-12 md:py-24 bg-white overflow-hidden">
                <div className="w-full max-w-[95%] 2xl:max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="about-content space-y-8 fade-up lg:col-span-5">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-heading font-bold text-vimos-dark leading-tight">
                                    About VIMOS TECHNOCRATS
                                </h2>
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

                        {/* Right Image Slider */}
                        <div ref={sliderRef} className="relative h-[280px] sm:h-[400px] md:h-[480px] lg:h-[550px] w-full group fade-up lg:col-span-7">
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

                            {/* Slide indicators */}
                            <div className="absolute bottom-10 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                                {aboutImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-[#0a92d1]' : 'w-4 bg-white/50 blur-[1px]'}`}
                                    />
                                ))}
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute top-0 right-0 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-32 sm:h-32 border-t-2 border-r-2 border-[#0a92d1]/30 rounded-tr-xl sm:rounded-tr-3xl -z-10 group-hover:translate-x-1 group-hover:-translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:-translate-y-2 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 border-b-2 border-l-2 border-[#0a92d1]/30 rounded-bl-xl sm:rounded-bl-3xl -z-10 group-hover:-translate-x-1 group-hover:translate-y-1 sm:group-hover:-translate-x-2 sm:group-hover:translate-y-2 transition-transform duration-500" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Specialized Expertise - Horizontal Scroll/Cards */}
            <section className="py-10 md:py-20 bg-secondary/10 border-y border-border/50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="fade-up bg-background p-10 rounded-3xl border border-border shadow-sm">
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Expertise & Consultancy</h3>
                            <div className="space-y-6 text-muted-foreground font-body">
                                <p>
                                    VIMOS TECHNOCRATS offers wide ranging consultancy services which cover every specialisation of civil, environmental, structural engineering and architecture. This includes pre-investment techno-feasibility studies and design, construction supervision, project monitoring and project management.
                                </p>
                                <p>
                                    Our research and analytics professionals act as the backbone to all our service lines by proving them with vital detailed market intelligence, investment trends, and custom-tailored reports.
                                </p>
                            </div>
                        </div>
                        <div className="fade-up space-y-4">
                            <div className="flex gap-5 p-5 bg-background rounded-2xl border border-border hover:shadow-md transition-shadow">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-vimos-blue/10 flex items-center justify-center text-vimos-blue">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-foreground text-lg mb-1">Strategic Advice</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Backed by in-depth research on trends & market analysis, feasibility studies and valuations.</p>
                                </div>
                            </div>
                            <div className="flex gap-5 p-5 bg-background rounded-2xl border border-border hover:shadow-md transition-shadow">
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-foreground text-lg mb-1">Market Insight</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">Vital market intelligence, investment trends, and real estate forecasts for our clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* History & Core Objectives */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16 fade-up">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Core <span className="vimos-gradient-text">Objectives</span></h2>
                        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                            Established in 1997, our associates were founded with a clear vision to excel in environmental and civil engineering.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col items-center text-center hover:bg-secondary/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Award size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Project Preparation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">Detailed Project Reports (DPRs), Plans, Drawings, Designs, and Estimates.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col items-center text-center hover:bg-secondary/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Zap size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Implementation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">End-to-end Project Implementation and Turnkey Solution delivery.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col items-center text-center hover:bg-secondary/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Shield size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Quality Assurance</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">Construction supervision for quality assurance and qualification across all phases.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col items-center text-center hover:bg-secondary/50 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Target size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Environmental Protection</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">Awareness of cost-effectiveness, Protection activities, Assessment, and Auditing.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-secondary/30 border border-border flex flex-col items-center text-center hover:bg-secondary/50 lg:col-span-1 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <Users size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Cohesive Environment</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">Coordinated environment bridging engineering disciplines under one corporate roof.</p>
                        </div>
                        <div className="p-8 rounded-2xl vimos-gradient border border-primary/20 flex flex-col items-center text-center text-white shadow-xl shadow-primary/20">
                            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-6">
                                <Award size={28} />
                            </div>
                            <h4 className="font-heading font-bold text-lg mb-3">Established 1997</h4>
                            <p className="text-sm text-white/80 leading-relaxed uppercase tracking-tighter">Nearly 3 Decades of Excellence in Technical Consultancy</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            {/* <section className="py-20 bg-secondary/30 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 fade-up">
                        <h2 className="section-heading mb-4 text-foreground">Why Choose <span className="vimos-gradient-text">Us</span></h2>
                        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                            We stand apart through our commitment, expertise, and integrated approach to engineering and infrastructure solutions.
                        </p>
                    </div>

                    <div className="reasons-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="reason-card bg-background p-10 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group relative overflow-hidden">
                                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                                <div className="mb-8 inline-flex p-5 rounded-2xl bg-secondary group-hover:vimos-gradient group-hover:text-white transition-all duration-500 shadow-inner">
                                 
                                    <div className="group-hover:scale-110 transition-transform duration-500">
                                        {reason.icon}
                                    </div>
                                </div>
                                <h3 className="font-heading text-xl font-bold mb-4 text-foreground">{reason.title}</h3>
                                <div className="w-12 h-0.5 bg-primary/30 mb-6 group-hover:w-20 transition-all duration-500" />
                                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Team Section */}
            <section className="py-32 bg-secondary/5 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0a92d1]/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-48 -left-24 w-72 h-72 bg-blue-400/5 rounded-full blur-[80px]" />
                </div>
 
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    {/* Visual Section Header */}
                    <div className="mb-20 fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a92d1]/10 border border-[#0a92d1]/20 text-[#0a92d1] text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                            Expertise & Leadership
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-none">
                            The <span className="vimos-gradient-text-shine">VIMOS Team</span>
                        </h2>
                        <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed max-w-2xl">
                            A powerhouse of multi-disciplinary experts bringing decades of experience in structural, environmental, and mechanical engineering.
                        </p>
                    </div>

                    {/* Interactive Glassmorphic Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-3.5 mb-20 fade-up p-2 bg-slate-50/80 backdrop-blur-lg rounded-3xl border border-slate-200/40 max-w-fit mx-auto lg:mx-0 shadow-inner shadow-slate-100">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-6 py-3 rounded-2xl text-[11px] font-heading font-extrabold uppercase tracking-wider transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? "bg-gradient-to-r from-[#0a92d1] to-sky-600 text-white shadow-[0_8px_20px_rgba(10,146,209,0.25)] border border-[#0a92d1]/20 scale-[1.02]"
                                        : "bg-transparent text-muted-foreground hover:text-[#0a92d1] hover:bg-white hover:shadow-sm"
                                }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
 
                    {/* Team Members Grid - Categorized Layout */}
                    <div className="team-members-container flex flex-col gap-24">
                        {corporateDivisions
                            .filter(div => activeCategory === "all" || div.id === activeCategory)
                            .map((division) => {
                                const divisionMembers: Array<{ name: string; role: string; photo: string | null; deptTitle: string; deptAccent: string }> = [];
                                teamDepartments.forEach(dept => {
                                    if (division.departments.includes(dept.title)) {
                                        dept.members.forEach(member => {
                                            divisionMembers.push({
                                                ...member,
                                                deptTitle: dept.title,
                                                deptAccent: dept.accent
                                            });
                                        });
                                    }
                                });

                                if (divisionMembers.length === 0) return null;

                                return (
                                    <div key={division.id} className="space-y-10 fade-up">
                                        {/* Division Header */}
                                        <div className="space-y-3 border-b border-slate-100 pb-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                                                <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-800 tracking-wider uppercase">
                                                    {division.title}
                                                </h3>
                                                <div className={`hidden sm:block h-1.5 w-16 rounded-full bg-gradient-to-r ${division.accent}`} />
                                                <span className="text-[10px] font-heading font-extrabold text-[#0a92d1] bg-[#0a92d1]/10 px-3 py-1 rounded-full w-max tracking-widest uppercase">
                                                    {divisionMembers.length} {divisionMembers.length === 1 ? 'Expert' : 'Experts'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground font-body max-w-4xl leading-relaxed">
                                                {division.desc}
                                            </p>
                                        </div>
                                        
                                        {/* Members Grid inside Division */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                                            {divisionMembers.map((member) => {
                                                const initials = member.name.split(' ').slice(0, 2).map((w: string) => w[0]).join('').toUpperCase();
                                                
                                                return (
                                                    <div
                                                        key={member.name}
                                                        className="team-member-card group bg-white rounded-3xl overflow-hidden border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_24px_50px_rgba(10,146,209,0.09)] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full relative"
                                                    >
                                                        {/* Card hover outline glow */}
                                                        <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-[#0a92d1]/15 transition-colors duration-500 pointer-events-none z-20" />

                                                        {/* Profile Photo Area */}
                                                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-slate-50 border-b border-slate-50">
                                                            {member.photo ? (
                                                                <img
                                                                    src={member.photo}
                                                                    alt={member.name}
                                                                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 filter saturate-[0.92] contrast-[1.04] brightness-[0.98] group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100"
                                                                    onError={(e) => {
                                                                        e.currentTarget.style.display = 'none';
                                                                        const parent = e.currentTarget.parentElement;
                                                                        if (parent) {
                                                                            const fallback = parent.querySelector('.photo-fallback');
                                                                            if (fallback) fallback.classList.remove('hidden');
                                                                        }
                                                                    }}
                                                                />
                                                            ) : null}
                                                            
                                                            {/* Fallback for no photo */}
                                                            <div className={`photo-fallback absolute inset-0 ${member.photo ? 'hidden' : 'block'}`}>
                                                                <TeamMemberAvatar name={member.name} accent={member.deptAccent} initials={initials} />
                                                            </div>
     
                                                            {/* Cohesive image bottom shadows */}
                                                            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                                                        </div>
     
                                                        {/* Name & Designation */}
                                                        <div className="p-6 md:p-7 flex flex-col flex-grow bg-white relative">
                                                            {/* Hover animated top bar */}
                                                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.deptAccent} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                                            
                                                            <h4 className="font-heading text-base md:text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0a92d1] transition-colors duration-300 line-clamp-2">
                                                                {member.name}
                                                            </h4>
                                                            
                                                            <span className="h-px bg-slate-100 w-full block my-3" />
                                                            
                                                            <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest font-extrabold leading-relaxed mt-auto">
                                                                {member.role || member.deptTitle}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default About;
