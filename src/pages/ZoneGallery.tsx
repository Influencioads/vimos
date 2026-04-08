import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { X } from "lucide-react";
import { lakesData } from "@/data/lakesData";

const ZoneGallery = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const zone = id ? lakesData[id] : null;

    const [selectedImage, setSelectedImage] = useState<{ src: string, title: string } | null>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!zone) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Zone Not Found</h1>
                    <button onClick={() => navigate('/projects')} className="text-primary hover:underline">
                        Return to Projects
                    </button>
                </div>
            </div>
        );
    }

    const filteredLakes = zone.lakes.filter(lake =>
        lake.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
            <Navbar />

            {/* Dynamic Gallery Header */}
            <div className="w-full relative h-[45vh] md:h-[55vh] flex items-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-vimos-dark via-vimos-dark/95 to-transparent z-10" />
                    <img
                        src={zone.bannerImage}
                        alt={`${zone.title} Banner`}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <p className="text-primary text-sm font-heading font-bold tracking-[0.4em] uppercase mb-4">Site Restoration</p>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight whitespace-nowrap">
                                {zone.title.split(' ').slice(0, -2).join(' ')} <span className="vimos-gradient-text-shine">{zone.title.split(' ').slice(-2).join(' ')}</span>
                            </h2>
                            <p className="text-white/70 max-w-4xl mx-auto text-sm md:text-base font-body leading-relaxed tracking-[0.5em] font-bold">
                                DEVELOPED BY VIMOS
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-6 md:px-12 pb-32">
                <div className="container mx-auto">
                    {/* Search Bar (Optional, added for better UX with many lakes) */}
                    {zone.lakes.length > 10 && (
                        <div className="mb-12 max-w-md">
                            <input
                                type="text"
                                placeholder="Search lakes..."
                                className="w-full bg-secondary/20 border border-border px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredLakes.map((lake, index) => {
                            // Use the direct relative path from lakesData
                            const imgSrc = `/${lake.path}`;

                            return (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-3xl group cursor-pointer border border-border/50 bg-secondary/10 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-700"
                                    style={{ animationDelay: `${(index % 10) * 100}ms` }}
                                    onClick={() => setSelectedImage({ src: imgSrc, title: lake.name })}
                                >
                                    <div className="overflow-hidden aspect-[4/3]">
                                        <img
                                            src={imgSrc}
                                            alt={lake.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => {
                                                console.error(`Failed to load image: ${imgSrc}`);
                                                (e.target as HTMLImageElement).src = "/placeholder.svg";
                                            }}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                        <span className="text-primary text-[10px] uppercase font-bold tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Site Restoration</span>
                                        <h3 className="text-white font-heading font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{lake.name}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {filteredLakes.length === 0 && (
                        <div className="text-center py-20 bg-secondary/5 rounded-3xl border border-dashed border-border">
                            <p className="text-muted-foreground">No lakes found matching "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </div>

            {/* LightBox Modal */}
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

export default ZoneGallery;
