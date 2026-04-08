import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import aboutImg from "@/assets/about.webp";
import { CheckCircle, Shield, Award, Users, Target, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);



const team = [
    { name: "BHEEMANNA GOUDA", role: "TEAM LEADER - B.E. (CIVIL) B.Sc." },
    { name: "SRIRANGA KR", role: "SENIOR ENGINEER - B.E (CIVIL), M.E (STRUCTURES)" },
    { name: "S. MD. SAJID ALI", role: "SENIOR QUALITY SUPERVISION ENGINEER - B.TECH. (CIVIL)" },
    { name: "MOHAMMED RAFI", role: "WATER RESOURCE ENGINEER - M.E (WRE)" },
    { name: "SURESH KUMAR REDDY", role: "HIGHWAY ENGINEER - B.TECH(CIVIL)" },
    { name: "P. WASIM KIRAN", role: "SENIOR ELECTRICAL ENGINEER - B.E (ELECTRICAL)" },
    { name: "AFROZE SHAIK", role: "SENIOR DESIGN ENGINEER - B.E, M.TECH (DESIGN)" },
    { name: "SAJEET SB", role: "SENIOR STRUCTURAL ENGINEER - M.TECH (STRUCTURES)" },
    { name: "RAHUL", role: "SENIOR DESIGN ENGINEER - M TECH (CONSTRUCTION TECHNOLOGY)" },
    { name: "EERESH", role: "SENIOR STRUCTURAL ENGINEER - M.E (PRE STRESSED CONCRETE ENGG.)" },
    { name: "SYED MATEEN", role: "PROJECT ENGINEER - B.E (CIVIL)" },
    { name: "RAVICHANDRA K.T.", role: "HEAD SURVEYOR" },
    { name: "GANESH T", role: "SENIOR ACCOUNTANT" },
    { name: "VIDYARANYA", role: "GEOTECHNICAL ENGINEER - M.E." },
    { name: "RAVINDRA REDDY", role: "SURVEYOR" }
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



            gsap.from(".team-card", {
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.05,
                scrollTrigger: {
                    trigger: ".team-grid",
                    start: "top 80%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-vimos-dark">
                <div className="absolute inset-0 z-0">
                    <img src={aboutImg} alt="Vimos Architecture" className="w-full h-full object-cover opacity-30" />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" /> */}
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="about-hero-title text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        About <span className="vimos-gradient-text-shine">VIMOS</span>
                    </h1>
                    <p className="about-hero-title text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-body">
                        An integrated complete solution provider for the civil engineering industry.
                    </p>
                </div>
            </section>

            {/* Who We Are - Two Column Layout */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div className="fade-up relative">
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                            <div className="relative z-10 space-y-8">
                                <div>
                                    <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-4">Innovation in Engineering</span>
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
                                        An Integrated <span className="vimos-gradient-text">Complete Solution</span> Provider
                                    </h2>
                                </div>
                                <div className="space-y-6 font-body text-base text-muted-foreground leading-relaxed">
                                    <p>
                                        <strong className="text-foreground font-semibold">VIMOS Technocrats Pvt. Ltd</strong> is a young and dynamic company aiming at people living on the fast track. We understand the needs of the changing world and develop customized solutions keeping in mind stringent quality policies and international standard infrastructure practices.
                                    </p>
                                    <p>
                                        VIMOS combines development, construction and Project management disciplines all under one roof, creating the cohesive and coordinated environment needed to provide quality services. Our strength lies in our unparalleled commitment to deliver the best to the client. Honest approach and prompt response are the hallmarks of VIMOS.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-xl border border-border">
                                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                            <Award size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Experience</span>
                                            <span className="text-sm font-bold text-foreground">Since 1997</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-secondary/50 px-5 py-3 rounded-xl border border-border">
                                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                                            <Shield size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Certified</span>
                                            <span className="text-sm font-bold text-foreground">Registered Pvt. Ltd.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fade-up relative lg:ml-auto">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-white/10">
                                <img
                                    src={aboutImg}
                                    alt="Technical Expertise"
                                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="text-white/90 text-sm font-medium italic">
                                        "True to our innovative spirit, we offer an unprecedented bouquet of services and top-of-the-line amenities."
                                    </p>
                                </div>
                            </div>
                            {/* Accent elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary transform -rotate-12 rounded-3xl -z-10 opacity-20" />
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
                                    VIMOS offers wide ranging consultancy services which cover every specialisation of civil, environmental, structural engineering and architecture. This includes pre-investment techno-feasibility studies and design, construction supervision, project monitoring and project management.
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
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6 max-w-6xl">

                    <div className="text-center mb-16 fade-up">
                        <h2 className="section-heading mb-4 text-foreground">The <span className="vimos-gradient-text">Core Team</span></h2>
                        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                            Our diverse team of experts brings decades of combined experience across all structural, environmental, and mechanical disciplines.
                        </p>
                    </div>


                    <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {team.map((member, idx) => (
                            <div key={idx} className="team-card bg-card hover:bg-secondary/50 p-6 rounded-xl border border-border transition-colors group">
                                <h3 className="font-heading text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="font-body text-xs text-muted-foreground leading-relaxed uppercase tracking-wider font-semibold">
                                    {member.role}
                                </p>
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
