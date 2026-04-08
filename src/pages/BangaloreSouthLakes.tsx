import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { X } from "lucide-react";

const bangaloreSouthLakes = [
    "AGARA LAKE", "AKSHAYANAGARA LAKE", "ANJANAPURA LAKE", "AREKERE LAKE", "BASAPURA -1 LAKE",
    "BASAPURA-2 LAKE", "BASAVANAPURA LAKE", "BEGUR LAKE", "BERETENA AGRAHARA LAKE", "CHUNCHGHATTA LAKE",
    "DEVARAKERE LAKE", "DODDAKALLASANDRA LAKE", "DOREKERE LAKE", "GOTTIGERE LAKE", "GUBBLALA LAKE",
    "HULIMAVU LAKE", "IBBLUR LAKE", "KALENA AGRAHARA LAKE", "KAMMANAHALLI MEENAKSHI LAKE", "KEMBATHALLI LAKE",
    "KODIGE SINGASANDRA LAKE", "KONANKUNTE LAKE", "KONAPPANA AGRAHARA LAKE", "KOTHNUR LAKE", "KUDLU CHIKKAKERE LAKE",
    "KUDLU DODDAKERE LAKE", "MADIWALA LAKE", "MANGAMMANAPALYA LAKE", "PARAPPANA AGRAHARA LAKE", "PUTTENAHALI LAKE",
    "SARAKKI LAKE", "SINGASANDRA LAKE", "SOMASUNDARPALYA LAKE", "SUBBRAYANAKERE LAKE", "SUBRAMANYAPURA LAKE",
    "SWARNAKUNTE GUDDE LAKE", "UTTARAHALLI LAKE", "YELCHENAHALLI LAKE", "YELENAHALLI LAKE"
];

const BangaloreSouthLakes = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string, title: string } | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    const folderPath = "BANGLORE SOUTH LAKES DEVELOPED BY VIMOS (BEFORE AFTER PHOTOS)";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredLakes = bangaloreSouthLakes.filter(lake =>
        lake.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
            <Navbar />

            {/* Dynamic Gallery Header (Now part of the scroll flow) */}
            <div className="w-full relative h-[45vh] md:h-[55vh] flex items-center overflow-hidden mb-12">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-vimos-dark via-vimos-dark/95 to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?q=80&w=2070&auto=format&fit=crop"
                            alt="Bangalore South Lakes Banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div className="container mx-auto px-6 md:px-12 relative z-10">
                        <div className="max-w-5xl flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <div className="animate-in fade-in slide-in-from-left duration-1000">
                                <p className="text-primary text-sm font-heading font-bold tracking-[0.4em] uppercase mb-4">Site Restoration</p>
                                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-none">
                                    BANGLORE <br />
                                    <span className="vimos-gradient-text-shine">SOUTH LAKES</span>
                                </h2>
                                <p className="text-white/70 max-w-2xl text-base md:text-lg font-body leading-relaxed uppercase tracking-widest font-bold">
                                    DEVELOPED BY VIMOS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 md:px-12 pb-32">
                    <div className="container mx-auto">
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                            {filteredLakes.map((lake, index) => {
                                const imgSrc = `/${encodeURIComponent(folderPath)}/${encodeURIComponent(lake)}.webp`;
                                return (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-3xl break-inside-avoid group cursor-pointer border border-border/50 bg-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                        style={{ animationDelay: `${(index % 10) * 100}ms` }}
                                        onClick={() => setSelectedImage({ src: imgSrc, title: lake })}
                                    >
                                        <div className="overflow-hidden">
                                            <img
                                                src={imgSrc}
                                                alt={lake}
                                                loading="lazy"
                                                className="w-full transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                            <span className="text-primary text-[10px] uppercase font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Site Restoration</span>
                                            <h3 className="text-white font-heading font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{lake}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            {/* Final Detail View Modal (LightBox) */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-6xl w-full">
                        <button
                            className="fixed top-6 right-6 md:top-10 md:right-10 z-[250] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow-2xl border border-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[85vh] mx-auto object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-6 text-center">
                            <h2 className="text-white text-3xl font-heading font-bold mb-2">{selectedImage.title}</h2>
                            <p className="text-white/50 font-body text-sm">Environmental Restoration Program</p>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default BangaloreSouthLakes;
