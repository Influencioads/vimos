import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.webp";

const navItems = ["Home", "About", "Services", "Projects", "Clients", "Gallery", "Contact"];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -100, opacity: 0, duration: 1, ease: "power3.out" });
    });

    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll(); // Check initial scroll state immediately

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert(); // Crucial for React 18 Strict Mode
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    if (id === "about") {
      if (location.pathname !== "/about") {
        navigate("/about");
      }
      return;
    }

    if (id === "contact") {
      if (location.pathname !== "/contact") {
        navigate("/contact");
      }
      return;
    }

    if (id === "gallery") {
      if (location.pathname !== "/gallery") {
        navigate("/gallery");
      }
      return;
    }

    if (id === "services") {
      if (location.pathname !== "/services") {
        navigate("/services");
      }
      return;
    }

    if (id === "projects") {
      if (location.pathname !== "/projects") {
        navigate("/projects");
      }
      return;
    }

    if (id === "clients") {
      if (location.pathname !== "/clients") {
        navigate("/clients");
      }
      return;
    }

    if (id === "home") {
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // For other sections, if not on home page, navigate to home first (simplified approach)
    if (location.pathname !== "/") {
      navigate("/");
      // Note: A more robust approach would wait for render then scroll, 
      // but users typically expect these to scroll on the main page.
      setTimeout(() => {
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
            <img src={logo} alt="VIMOS" className="h-10 w-10 object-contain relative z-50" />
            <div className="relative z-50">
              <span className="font-heading text-lg font-bold tracking-wider text-primary">VIMOS</span>
              <span className={`block text-[10px] font-body tracking-widest uppercase transition-colors duration-300 ${scrolled || menuOpen ? 'text-muted-foreground' : 'text-white/70'}`}>
                Technocrafts
              </span>
            </div>
          </div>

          {/* Desktop */}
          <ul className="hidden lg:flex items-center gap-8 relative z-50">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`nav-link font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-primary ${scrolled ? 'text-foreground' : 'text-white/90'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button className="lg:hidden flex flex-col gap-1.5 z-50 p-2 relative" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-foreground" : scrolled ? "bg-foreground" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0 bg-foreground" : scrolled ? "bg-foreground" : "bg-white"}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-foreground" : scrolled ? "bg-foreground" : "bg-white"}`} /> 
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          <div 
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-30" 
            onClick={() => setMenuOpen(false)}
            style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
          ></div>
          <div 
            className="lg:hidden fixed top-0 right-0 h-full w-[60vw] sm:w-[50vw] min-w-[240px] bg-white z-40 flex flex-col items-start justify-start pt-[85px] overflow-y-auto shadow-2xl"
            style={{ animation: 'slideInRight 0.3s ease-out forwards' }}
          >
            {/* Header separator line */}
            <div className="w-full h-[1px] bg-gray-100 absolute top-[76px] left-0"></div>
            
            <ul className="flex flex-col items-start gap-6 w-full px-8 mt-8 pb-10">
              {navItems.map((item, index) => (
                <li key={item} className="w-full" style={{ animation: `fadeInRight 0.3s ease forwards ${index * 0.05 + 0.1}s`, opacity: 0, transform: 'translateX(20px)' }}>
                  <button 
                    onClick={() => scrollTo(item.toLowerCase())} 
                    className="font-body text-lg font-medium text-foreground hover:text-primary transition-colors text-left w-full py-2"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      
      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
