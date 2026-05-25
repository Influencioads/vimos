import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/VIMOS_LOGO.png";

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-col", {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: footerRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" ref={footerRef} className="bg-primary pt-20 pb-8 text-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="footer-col">
            <div className="flex items-center mb-6">
              <img src={logo} alt="VIMOS" className="h-[72px] w-auto object-contain" />
            </div>
            <p className="font-body text-sm leading-relaxed text-white/90">
              An integrated complete solution provider for the civil engineering industry.
            </p>
          </div>

          <div className="footer-col">
            <h3 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/90 mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Projects", path: "/projects" },
                { name: "Gallery", path: "/photos" },
                { name: "Clients", path: "/clients" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-body text-sm text-white/80 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/90 mb-6 border-b border-white/20 pb-2 inline-block">Services</h3>
            <ul className="space-y-3">
              {["Civil Engineering", "Environmental", "Electrical", "Mechanical", "Survey & Drone"].map((s) => (
                <li key={s}>
                  <span className="font-body text-sm text-white/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/90 mb-6 border-b border-white/20 pb-2 inline-block">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/90 mt-1 flex-shrink-0" />
                <span className="font-body text-sm leading-relaxed text-white/80">
                  Vimos House, No 43, 2nd Cross Rd, behind Udupi Utsav hotel, Kaveri Layout, Hennur Bagalur Main Road, Bengaluru, 560043
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/90 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">+91-9686691113</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/90 flex-shrink-0" />
                <span className="font-body text-sm text-white/80">info@vimos.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/70">
            © 2026 VIMOS TECHNOCRATS PVT LTD. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/70">
            Designed and Developed By <a href="https://influencio.in" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">Influencio ads</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
