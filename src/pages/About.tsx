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
    "/Projects/NALLA CHERUVU UPPAL-before.webp",
    "/Projects/THIMMIDIKUNTA LAKE-before.webp",
    "/Projects/THIMMIDIKUNTA LAKE-present.webp",
];



const teamDepartments = [
    {
        title: "Directors",
        accent: "from-amber-500 to-amber-600",
        members: [
            { name: "P YOUNUS PERVEZ", role: "B.E Mechanical", photo: "/employees/1. YOUNUS PERVEZ P.jpeg" },
            { name: "IMAMMOHIUDDIN", role: "B.Sc, M.Com, LLB, D.E.M, Retd Manager, Bank of India", photo: null },
        ]
    },
    {
        title: "Advisors",
        accent: "from-slate-600 to-slate-700",
        members: [
            { name: "UMESH D.S", role: "Retd. AEE, B.E.M.E.Env., L.L.B., FIV", photo: null },
            { name: "P.R. BABU", role: "B.E, Retd. Deputy Executive Engineer, R&B Water Supply Board", photo: null },
            { name: "T JAGANNATH RAO", role: "B.Sc, Retd. Deputy Conservator of Forest, BBMP Lakes Division", photo: null },
            { name: "Dr. M INAYATHULLA", role: "Professor in Civil Engineering Dept., UVCE, Bangalore University", photo: null },
        ]
    },
    {
        title: "Project Managers",
        accent: "from-[#0a92d1] to-[#0878ab]",
        members: [
            { name: "BHEEMANNA GOUDA", role: "B.E. Civil", photo: "/employees/2. BHEEMANNA GOUDA.jpeg" },
            { name: "S. MD. SAJID ALI", role: "M.Tech Structures, MBA Finance Management", photo: "/employees/3. S MD SAJID ALI.jpeg" },
            { name: "SRI RANGA K R", role: "M.Tech Structures", photo: "/employees/4. SRI RANGA K R.jpeg" },
            { name: "SURESH KUMAR REDDY", role: "M.Tech Structures", photo: "/employees/5.  N Suresh Kumar Reddy.jpeg" },
            { name: "AJAY B M", role: "B.E. Civil", photo: "/employees/16. Ajay BM.jpeg" },
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
            { name: "G B SREENATH", role: "B.E. Civil", photo: "/employees/8.SREENATH G B.jpeg" },
            { name: "NAYAN D", role: "B.E. Civil", photo: "/employees/10. NAYAN D.png" },
            { name: "KHALID PASHA R", role: "B.E. Civil", photo: "/employees/11. Khalid Pasha.jpeg" },
            { name: "ABHAY A", role: "B.E. Civil", photo: "/employees/19. Abhay A.jpeg" },
            { name: "RAKESH", role: "B.E. Civil", photo: "/employees/12. RAKESH.jpeg" },
        ]
    },
    {
        title: "Civil Engineers",
        accent: "from-[#0a92d1] to-[#0878ab]",
        members: [
            { name: "RAKESH M", role: "B.E. Civil", photo: "/employees/14. RAKESH M.jpeg" },
            { name: "KIRAN M S", role: "B.E. Civil", photo: "/employees/15. Kiran M S.jpeg" },
            { name: "SRI KANTH M K", role: "B.E. Civil", photo: "/employees/17. Shrikanth M K.jpeg" },
            { name: "HASEEB BAIG", role: "B.E. Civil", photo: "/employees/21 Hasseb Baig.jpeg" },
            { name: "Y MANOJ KUMAR", role: "B.E. Civil", photo: "/employees/23. Y MANOJ KUMAR.jpeg" },
            { name: "VENNAPUSA GIREESHWAR REDDY", role: "B.E. Civil", photo: "/employees/22. VENNAPUSA GIREESHWAR REDDY.jpeg" },
            { name: "DILIP KUMAR", role: "B.E. Civil", photo: "/employees/24. Dilip Kumar.jpeg" },
            { name: "BALA KRISHNA JOSHI", role: "B.E. Civil", photo: "/employees/25. Balakrishna Joshi.jpeg" },
            { name: "GAGAN KUMAR R", role: "B.E. Civil", photo: "/employees/26. GAGAN KUMAR.jpeg" },
            { name: "PRADYUTH SURESH", role: "B.E. Civil", photo: "/employees/18. Pradyuth Suresh.jpeg" },
            { name: "VENKATESH REDDY", role: "B.E. Civil", photo: null },
            { name: "MOHAMMAD SWAD EXAMBE", role: "B.E. Civil", photo: "/employees/28. Mohammad Swad.jpeg" },
            { name: "KUSHAL M", role: "M.Tech Structures", photo: null },
            { name: "RAJA SHEKAR", role: "B.E. Civil", photo: "/employees/20. RAJ SHEKAR.jpeg" },
        ]
    },
    {
        title: "Surveyors",
        accent: "from-orange-500 to-orange-600",
        members: [
            { name: "RAVICHANDRA K T", role: "", photo: "/employees/7.RAVICHANDRA K T.jpeg" },
            { name: "RAVINDRA REDDY", role: "", photo: "/employees/6. Ravindra Reddy G.jpeg" },
            { name: "MOHAMMAD ILIYAS", role: "", photo: "/employees/28. Mohammad Iliyas.jpg" },
            { name: "PAWAN", role: "", photo: null },
            { name: "PARASHU RAM", role: "", photo: null },
        ]
    },
    {
        title: "Mechanical Engineers",
        accent: "from-rose-500 to-rose-600",
        members: [
            { name: "SHANKAR K", role: "B.E. Mechanical", photo: null },
            { name: "N SHIVARAM", role: "B.Tech Mechanical", photo: "/employees/27. N Shivaram.jpeg" },
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

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentImg, setCurrentImg] = useState(0);
    const [activeDept, setActiveDept] = useState('All');
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
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div className="about-content space-y-8 fade-up">
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
                        <div ref={sliderRef} className="relative h-[450px] lg:h-[700px] w-full group fade-up">
                            <div className="absolute inset-0 bg-vimos-dark/5 rounded-2xl overflow-hidden shadow-2xl">
                                {aboutImages.map((img, index) => (
                                    <div
                                        key={img}
                                        ref={(el) => (imgRefs.current[index] = el)}
                                        className="absolute inset-0 w-full h-full will-change-transform"
                                    >
                                        <img
                                            src={img}
                                            alt={`Project ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                                    </div>
                                ))}
                            </div>

                            {/* Slide indicators */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                                {aboutImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImg ? 'w-8 bg-[#0a92d1]' : 'w-4 bg-white/50 blur-[1px]'}`}
                                    />
                                ))}
                            </div>

                            {/* Decorative corners */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#0a92d1]/30 rounded-tr-3xl -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#0a92d1]/30 rounded-bl-3xl -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        </div>

                    </div>
                </div>
            </section>

            {/* Specialized Expertise - Horizontal Scroll/Cards */}
            <section className="py-20 bg-secondary/10 border-y border-border/50">
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
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-48 -left-24 w-72 h-72 bg-blue-400/5 rounded-full blur-[80px]" />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-20 fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                            Expertise & Leadership
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">The <span className="vimos-gradient-text-shine">VIMOS Team</span></h2>
                        <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            A powerhouse of multi-disciplinary experts bringing decades of experience in structural, environmental, and mechanical engineering.
                        </p>
                    </div>

                    {/* Team Stats Summary Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 fade-up">
                        {[
                            { label: "Total Experts", value: "50+", icon: <Users size={20} /> },
                            { label: "Departments", value: "12", icon: <Target size={20} /> },
                            { label: "Avg. Experience", value: "15+ Yrs", icon: <Award size={20} /> },
                            { label: "Successful Projects", value: "200+", icon: <CheckCircle size={20} /> }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/50 backdrop-blur-sm border border-white/20 p-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex justify-center text-primary mb-3">{stat.icon}</div>
                                <div className="text-2xl font-heading font-black text-foreground mb-1">{stat.value}</div>
                                <div className="text-[10px] font-body font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Department Filter Tabs */}
                    <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide fade-up">
                        <div className="flex justify-center min-w-max md:min-w-0">
                            <div className="flex gap-2 p-1.5 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm">
                                <button
                                    onClick={() => setActiveDept('All')}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-heading tracking-widest uppercase transition-all duration-300 ${activeDept === 'All' ? 'vimos-gradient text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    All Teams
                                </button>
                                {teamDepartments.map((dept) => (
                                    <button
                                        key={dept.title}
                                        onClick={() => setActiveDept(dept.title)}
                                        className={`px-6 py-2.5 rounded-xl text-xs font-heading tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${activeDept === dept.title ? 'vimos-gradient text-white shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {dept.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Team Members Grid */}
                    <div className="team-members-container min-h-[600px]">
                        {teamDepartments.filter(d => activeDept === 'All' || d.title === activeDept).map((dept, deptIdx) => (
                            <div key={dept.title} className="mb-16 last:mb-0">
                                {activeDept === 'All' && (
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`h-8 w-1.5 rounded-full bg-gradient-to-b ${dept.accent}`} />
                                        <h3 className="text-lg md:text-xl font-heading font-bold text-foreground uppercase tracking-wider">{dept.title}</h3>
                                        <div className="flex-1 h-px bg-border/40" />
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                    {dept.members.map((member, idx) => {
                                        const initials = member.name.split(' ').slice(0, 2).map((w: string) => w[0]).join('').toUpperCase();
                                        return (
                                            <div
                                                key={member.name}
                                                className="team-member-card group bg-white rounded-[2rem] overflow-hidden border border-border/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                            >
                                                {/* Profile Photo Area */}
                                                <div className="relative aspect-[4/5] overflow-hidden bg-secondary/20">
                                                    {member.photo ? (
                                                        <img
                                                            src={member.photo}
                                                            alt={member.name}
                                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
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
                                                    <div className={`photo-fallback absolute inset-0 flex items-center justify-center ${member.photo ? 'hidden' : 'flex'}`} style={{ background: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)` }}>
                                                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #0a92d1 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                                                        <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center text-4xl font-heading font-black text-primary shadow-inner border-4 border-primary/5 group-hover:scale-110 transition-transform duration-500">
                                                            {initials}
                                                        </div>
                                                        {/* Decorative Ring */}
                                                        <div className="absolute w-40 h-40 border-2 border-dashed border-primary/10 rounded-full animate-spin-slow" />
                                                    </div>

                                                    {/* Overlay info on hover */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                                        <div className="w-full h-1 bg-white/40 rounded-full overflow-hidden">
                                                            <div className="w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Name & Designation */}
                                                <div className="p-6 relative bg-white">
                                                    <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${dept.accent} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
                                                    <h4 className="font-heading text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                                                        {member.name}
                                                    </h4>
                                                    <p className="font-body text-xs text-muted-foreground uppercase tracking-widest font-semibold truncate">
                                                        {member.role || dept.title}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </div>
    );
};

export default About;
