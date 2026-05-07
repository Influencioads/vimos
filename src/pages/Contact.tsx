import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MapPin, Phone, Globe, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import heroImg from "@/assets/3.jpg";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Hero Animations
            gsap.from(".contact-hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            });

            // Content Animations
            gsap.from(".contact-info-card", {
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.4
            });

            gsap.from(".contact-form-container", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.6
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            toast({
                title: "Message Sent!",
                description: "Thank you for reaching out. We will get back to you soon.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                interest: "",
                message: ""
            });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div ref={containerRef} className="overflow-x-hidden bg-background">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-vimos-dark" style={{ minHeight: '75vh' }}>
                <div className="absolute inset-0 z-0">
                    <img src={heroImg} alt="Contact Us" className="w-full h-full object-cover" />
                </div>

                <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }} />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '75vh' }}>
                    <h1 className="contact-hero-title text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Get in <span className="vimos-gradient-text-shine">Touch</span>
                    </h1>
                    <p className="contact-hero-title text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-body">
                        We'd love to hear from you. Drop us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-background relative z-10 -mt-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-12">

                        {/* Contact Information */}
                        <div className="lg:col-span-2 space-y-8 contact-info-card">
                            <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-6 inline-block border-b-2 border-primary pb-2">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-foreground mb-1">Address</h4>
                                            <p className="font-body text-muted-foreground leading-relaxed text-sm">
                                                Vimos House, No 43, 2nd Cross Rd, behind Udupi Utsav hotel, Kaveri Layout, Hennur Bagalur Main Road, Bengaluru, 560043
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-foreground mb-1">Telephone</h4>
                                            <p className="font-body text-muted-foreground leading-relaxed text-sm">
                                                +91-8025437770
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 group">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Globe className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-semibold text-foreground mb-1">Web</h4>
                                            <a href="https://www.vimostec.in" target="_blank" rel="noreferrer" className="font-body text-primary hover:underline leading-relaxed text-sm">
                                                www.vimostec.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 bg-vimos-dark rounded-xl text-white">
                                    <h4 className="font-heading font-semibold mb-2">Office Hours</h4>
                                    <p className="font-body text-sm text-white/70">Monday - Saturday</p>
                                    <p className="font-body text-sm text-white/70">9:30 AM - 6:30 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 contact-form-container">
                            <div className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-border">
                                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">Drop us a message</h3>
                                <p className="text-muted-foreground font-body mb-8">Fields marked with an asterisk (*) are required.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="font-body text-sm font-medium text-foreground">Name <span className="text-destructive">*</span></label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="font-body text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="font-body text-sm font-medium text-foreground">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="interest" className="font-body text-sm font-medium text-foreground">Interest of Service</label>
                                            <select
                                                id="interest"
                                                name="interest"
                                                value={formData.interest}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow appearance-none"
                                            >
                                                <option value="" disabled>Select a service...</option>
                                                <option value="Civil Engineering">Civil Engineering</option>
                                                <option value="Environmental">Environmental Engineering</option>
                                                <option value="Electrical">Electrical and Automation</option>
                                                <option value="Mechanical">Mechanical Engineering</option>
                                                <option value="Survey">Survey & Drone Tech</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="font-body text-sm font-medium text-foreground">Messages <span className="text-destructive">*</span></label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="vimos-gradient w-full md:w-auto px-8 py-4 font-heading text-sm tracking-widest uppercase text-white rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Sending..." : (
                                            <>
                                                Send Message
                                                <Send className="w-4 h-4" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] md:h-[500px]">
                <iframe
                    title="Vimos Technocrats Location Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?q=Vimos+House,+No+43,+2nd+Cross+Rd,+behind+Udupi+Utsav+hotel,+Kaveri+Layout,+Hennur+Bagalur+Main+Road,+Bengaluru,+560043&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="border-0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                />
            </section>

            <FooterSection />
        </div>
    );
};

export default Contact;
