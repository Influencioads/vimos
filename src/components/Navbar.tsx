import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ChevronDown, Play, Image as ImageIcon, Paperclip } from "lucide-react";
import logo from "@/assets/VIMOS_LOGO.png";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Clients", id: "clients" },
  { 
    name: "Gallery", 
    id: "gallery",
    dropdown: [
      { 
        name: "Photos", 
        id: "gallery-photos", 
        path: "/photos"
      },
      { 
        name: "Paper Clips", 
        id: "gallery-paper-clips", 
        path: "/paper-clips"
      },
      { 
        name: "Videos", 
        id: "gallery-videos", 
        path: "/videos"
      }
    ]
  },
  { name: "Contact", id: "contact" }
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(id);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

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

  const scrollTo = (id: string, path?: string) => {
    setMenuOpen(false);
    setActiveDropdown(null);

    if (path) {
      navigate(path);
      return;
    }

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
      if (location.pathname !== "/photos") {
        navigate("/photos");
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
      <div ref={navRef as any} className="fixed top-0 left-0 w-full z-50">
        {/* Top Ticker Section */}
        <div className="ticker-container border-b border-white/10 uppercase tracking-widest">
          <div className="ticker-content flex items-center">
            <span className="inline-block px-12">Vimos Technocrats – Experts in Lake Restoration & Environmental Engineering Solutions</span>
            <span className="inline-block px-12">Vimos Technocrats – Experts in Lake Restoration & Environmental Engineering Solutions</span>
            <span className="inline-block px-12">Vimos Technocrats – Experts in Lake Restoration & Environmental Engineering Solutions</span>
            <span className="inline-block px-12">Vimos Technocrats – Experts in Lake Restoration & Environmental Engineering Solutions</span>
          </div>
        </div>

        <nav
          className={`w-full transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-white border-b border-border/10"
            }`}
        >
          <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50">
            <div className="flex items-center cursor-pointer" onClick={() => scrollTo("home")}>
              <img src={logo} alt="VIMOS" className="h-[72px] w-auto object-contain relative z-50" />
            </div>

            {/* Desktop */}
            <ul className="hidden lg:flex items-center gap-8 relative z-50">
              {navItems.map((item) => (
                <li 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`nav-link font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-primary flex items-center gap-1 py-2 ${scrolled ? 'text-foreground' : 'text-foreground/90'}`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180" : ""}`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.id && (
                    <div 
                      className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-4 mt-1 overflow-hidden"
                      style={{ animation: 'slideDownFade 0.3s ease-out forwards' }}
                    >
                      <div className="flex flex-col">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.id} className="relative group/sub">
                            <button
                              onClick={() => scrollTo(subItem.id, subItem.path)}
                              className="w-full text-left px-6 py-3 text-sm font-medium text-foreground hover:bg-gray-50 hover:text-primary transition-all flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3">
                                {subItem.name === "Photos" ? (
                                  <ImageIcon className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                ) : subItem.name === "Paper Clips" ? (
                                  <Paperclip className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                ) : (
                                  <Play className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                )}
                                {subItem.name}
                              </div>
                              {subItem.subItems && (
                                <ChevronDown className="w-4 h-4 -rotate-90 text-gray-300 group-hover:text-primary" />
                              )}
                            </button>
                            
                            {/* Nested subItems */}
                            {subItem.subItems && (
                              <div className="bg-gray-50/50 py-1">
                                {subItem.subItems.map((nested) => (
                                  <button
                                    key={nested.id}
                                    onClick={() => scrollTo(nested.id, nested.path)}
                                    className="w-full text-left pl-14 pr-6 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-all"
                                  >
                                    • {nested.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button className="lg:hidden flex flex-col gap-1.5 z-50 p-2 relative" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-foreground" : "bg-foreground"}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0 bg-foreground" : "bg-foreground"}`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2 bg-foreground" : "bg-foreground"}`} />
            </button>
          </div>
        </nav>
      </div>

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
            
            <ul className="flex flex-col items-start gap-2 w-full px-8 mt-8 pb-10">
              {navItems.map((item, index) => (
                <li key={item.id} className="w-full" style={{ animation: `fadeInRight 0.3s ease forwards ${index * 0.05 + 0.1}s`, opacity: 0, transform: 'translateX(20px)' }}>
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <button 
                        onClick={() => item.dropdown ? setMobileExpanded(mobileExpanded === item.id ? null : item.id) : scrollTo(item.id)} 
                        className="font-body text-lg font-semibold text-foreground hover:text-primary transition-colors text-left py-3 flex-grow"
                      >
                        {item.name}
                      </button>
                      {item.dropdown && (
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === item.id ? null : item.id)}
                          className="p-3 text-muted-foreground"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileExpanded === item.id ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && mobileExpanded === item.id && (
                      <div className="flex flex-col pl-4 border-l-2 border-primary/10 mb-2 bg-gray-50/50 rounded-r-lg py-2">
                        {item.dropdown.map((subItem) => (
                          <div key={subItem.id} className="flex flex-col w-full">
                            <button
                              onClick={() => scrollTo(subItem.id, subItem.path)}
                              className="font-body text-base font-medium text-foreground/80 hover:text-primary py-2 text-left px-2"
                            >
                              {subItem.name}
                            </button>
                            {subItem.subItems && (
                              <div className="flex flex-col pl-4">
                                {subItem.subItems.map((nested) => (
                                  <button
                                    key={nested.id}
                                    onClick={() => scrollTo(nested.id, nested.path)}
                                    className="font-body text-sm text-muted-foreground hover:text-primary py-1.5 text-left"
                                  >
                                    — {nested.name}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      
      <style>{`
        @keyframes slideDownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
