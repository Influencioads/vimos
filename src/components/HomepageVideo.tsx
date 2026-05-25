import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
    { id: "aMzts1yVpcs", title: "Project Showcase 1" },
    { id: "iQcChHELGkk", title: "Environmental Excellence" },
    { id: "Yqwzjm3_xPU", title: "Structural Engineering Insight" },
    { id: "QWxoZd3ejZA", title: "Mechanical Systems Overview" }
];

const HomepageVideo = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

            gsap.from(videoRef.current?.children || [], {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-10 md:py-20 bg-secondary/10 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-2">
                        Project Showcase
                    </p>
                    <h2 ref={headingRef} className="text-3xl md:text-5xl font-heading font-bold text-foreground">
                        Featured <span className="vimos-gradient-text-shine">Videos</span>
                    </h2>
                </div>

                <div ref={videoRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {videos.map((video, idx) => (
                        <div key={idx} className="flex flex-col gap-4 group">
                            <div className="relative overflow-hidden rounded-2xl aspect-video border border-border/50 bg-black shadow-xl hover:shadow-primary/20 transition-all duration-300">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="px-1">
                                <h3 className="text-foreground font-heading text-base font-bold tracking-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">{video.title}</h3>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full vimos-gradient flex flex-shrink-0 items-center justify-center text-[8px] text-white font-bold">VT</div>
                                    <p className="text-muted-foreground font-body text-xs line-clamp-1">Vimos Technocrats • Project Showcase</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomepageVideo;
