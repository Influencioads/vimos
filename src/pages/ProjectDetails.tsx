import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { ArrowLeft, X } from "lucide-react";

const projectsData: Record<string, any> = {
    "bathukammakunta-lake": {
        title: "BATHUKAMMAKUNTA LAKE",
        description: "Restoration of Bathukammakunta Lake by HYDRAA to mitigate encroachment and restore ecological functionality.",
        beforeImage: "/Projects/BATHUKAMMAKUNTA LAKE-before.webp",
        afterImage: "/Projects/BATHUKAMMAKUNTA LAKE-after.webp",
        afterLabel: "After",
        stats: [
            { label: "Original Area", value: "14.02 Acres" },
            { label: "Silt Removed", value: "75,000 cu.m" },
            { label: "Walkway Built", value: "0.55 km" }
        ],
        details: "The Bathukamma kunta lake, originally encompassing 14.02 acres, has been reduced to 5.0 acres over the past decade due to large-scale encroachment and dumping of debris.",
        contentBlocks: [
            {
                heading: "Background & Encroachments",
                text: "The Bathukamma kunta lake, originally encompassing 14.02 acres, has been reduced to 5.0 acres over the past decade due to large-scale encroachment, dumping of debris, construction waste, and huge stone boulders within the lake boundaries."
            },
            {
                heading: "Environmental & Health Consequences",
                text: "Sewage and garbage contaminated with dangerous heavy metals are being dumped inside the lake area, and municipality garbage collection vehicles are also being parked there. The lake surroundings near the residences are causing serious problems with mosquito breeding and foul-smelling air. Furthermore, the natural catchment drains have been submerged, and the outlet nala connecting to the Musi Nala has been blocked."
            },
            {
                heading: "Restoration Action Plan",
                text: "HYDRAA started restoration work in April 2025 to restore the lake to its original hydraulic capacity and ecological functionality. The following restoration measures are being executed:",
                list: [
                    "Reconstruction of one (1) inlet and one (1) outlet.",
                    "Desilting and removal of accumulated debris and sludge over an extent of 12 acres.",
                    "Excavation of approximately 75,000 cubic meters of silt and construction waste."
                ]
            },
            {
                heading: "Public Utility Amenities",
                text: "As part of the lake development and public utility enhancement, the following amenities have been provided:",
                list: [
                    "Construction of a 0.55 km long peripheral walkway with landscaping on both sides.",
                    "Provision of seating benches and development of five gazebos for community interaction.",
                    "Construction of a Gopurum.",
                    "Fencing installed around the water body and the newly created walkway.",
                    "Erection of a permanent boundary wall along the Full Tank Level (FTL) boundary."
                ]
            }
        ]
    },
    "bum-rukn-ud-dowla-lake": {
        title: "BUM-RUKN-UD-DOWLA LAKE",
        description: "Restoration and comprehensive development of Bum-Rukn-ud-Dowla Lake by HYDRAA.",
        beforeImage: "/Projects/BUM-RUKN-UD-DOWLA LAKE-before.webp",
        afterImage: "/Projects/BUM-RUKN-UD-DOWLA LAKE-after.webp",
        afterLabel: "After",
        stats: [
            { label: "Silt Removed", value: "1,43,000 cu.m" },
            { label: "Cost Sanctioned", value: "₹20.00 Crore" },
            { label: "Walkway Built", value: "1.2 km" }
        ],
        details: "This Lake was originally spread over an extent of 17.5 acres. Over decade, spread area has reduced to about 4.5 acres due to large-scale encroachments, dumping of debris, and construction waste. Natural catchment drains feeding the lake have been submerged and outlet nala connecting the lake to Mirza Alam Tank encroached and narrowed. As a result causing frequent flooding in surrounding catchment areas during heavy rainfall and decline of groundwater levels in the surrounding areas. HYDRAA started restoration work in April 2025 by restoring original hydraulic capacity and ecological functionality.",
        contentBlocks: [
            {
                heading: "Historical Context & Challenges",
                text: "This Lake was originally spread over an extent of 17.5 acres. Over a decade, its spread area has reduced to about 4.5 acres due to large-scale encroachments, dumping of debris, and construction waste. Natural catchment drains feeding the lake have been submerged and the outlet nala connecting the lake to Mirza Alam Tank encroached and narrowed. This has caused frequent flooding in surrounding catchment areas during heavy rainfall and a decline of groundwater levels in the surrounding areas."
            },
            {
                heading: "Restoration Operations",
                text: "HYDRAA commenced restoration work in April 2025 to restore the original hydraulic capacity and ecological functionality. Key initiatives involved:",
                list: [
                    "Reconstruction of four (4) inlets, one (1) outlet, and a catchment drain with a 600 mm diameter diversion pipeline.",
                    "Desilting and removal of accumulated debris and sludge over an extent of 12 acres.",
                    "Excavation of approximately 1,43,000 cubic meters of silt and construction waste."
                ]
            },
            {
                heading: "Public Utility Amenities",
                text: "As part of the lake development and community welfare, the following public utility amenities are provided:",
                list: [
                    "1.2 km long peripheral walkway with landscaping on both sides.",
                    "Seating benches at regular intervals and five gazebos for community interaction.",
                    "A curated yoga platform and a rose garden with a seating plaza.",
                    "Water body fencing along the walkway and a permanent boundary wall along the Full Tank Level (FTL) boundary.",
                    "Four entrance gates for controlled access, children’s play equipment, and open gym facilities.",
                    "A fully constructed security room-cum-toilet block for lake management."
                ]
            },
            {
                heading: "Future Proposals & Milestones",
                text: "The total project cost sanctioned so far is ₹20.00 Crore. In addition, sports amenities, construction of a Sewage Treatment Plant (STP), and restoration of the downstream Bouli are also proposed as part of the integrated lake rejuvenation plan. The restoration of the lake will significantly increase storage capacity and mitigate flooding during monsoons, improve groundwater recharge, and restore the natural hydrological link with downstream water bodies. Additionally, the treatment of sewage through the proposed STP will reduce the pollution load entering the Musi River, contributing heavily to overall Musi River rejuvenation efforts."
            }
        ]
    },
    "nalla-cheruvu-kukatpally": {
        title: "NALLA CHERUVU, KUKATPALLY",
        description: "Restoration and comprehensive development of Nalla Cheruvu, Kukatpally by HYDRAA.",
        beforeImage: "/Projects/NALLA CHERUVU, KUKATPALLY-before.webp",
        afterImage: "/Projects/NALLA CHERUVU, KUKATPALLY-after.webp",
        afterLabel: "After",
        stats: [
            { label: "Silt Removed", value: "2,50,000 cu.m" },
            { label: "Cost Sanctioned", value: "₹20.00 Crore" },
            { label: "Restoration Area", value: "15 Acres" }
        ],
        details: "Nalla Cheruvu located at Kukatpally originally spread over an extent of 29.58 acres. Over the past decade, the lake area has drastically reduced to approximately 14.32 acres due to large-scale encroachments, dumping of construction debris, huge stone boulders.",
        contentBlocks: [
            {
                heading: "Background & Encroachments",
                text: "Nalla Cheruvu located at Kukatpally originally spread over an extent of 29.58 acres. Over the past decade, the lake area has drastically reduced to approximately 14.32 acres due to large-scale encroachments, dumping of construction debris, and huge stone boulders. Sewage diversion pipelines and chambers were constructed within the lake area, resulting in frequent overflows and seepage directly entering the waterbody. Untreated sewage has been flowing into the lake, while cattle sheds located on the eastern side are also discharging waste directly into the waterbody, leading to severe contamination of the lake."
            },
            {
                heading: "Environmental & Health Consequences",
                text: "These conditions have resulted in mosquito breeding, foul odour, and potential health hazards to nearby residential communities, while also disturbing the ecological balance and biodiversity of the lake ecosystem. Natural catchment drains feeding the lake have been submerged and rendered non-functional, and the outlet nala connecting the lake to the Musi Nala has been blocked. Consequently, the groundwater levels in the catchment area have declined significantly."
            },
            {
                heading: "Restoration Action Plan",
                text: "HYDRAA initiated restoration works in April 2025 to restore the lake to its original hydraulic capacity and ecological functionality. The works undertaken include:",
                list: [
                    "Removed encroachments in an extent of 15 acres, thereby restoring the water spread area.",
                    "Desilting approximately 2,50,000 cubic meters of debris and accumulated sludge from the lake bed.",
                    "Restoration and reconstruction of inlets, outlets, and catchment drain to improve storm water inflow and drainage.",
                    "Construction of eight (8) inlets around the catchment area to facilitate proper stormwater inflow during rainfall.",
                    "Restoration of the outlet connecting to Musi Nala to its original capacity.",
                    "Permanent fencing along the Full Tank Level (FTL) boundary to prevent further encroachments.",
                    "Formation of bunds using usable desilted soil along the periphery of the lake.",
                    "Development of an all-round walkway and water body fencing.",
                    "Development of a cycle track around the lake.",
                    "Landscaping and development of park areas in available pocket spaces around the lake."
                ]
            },
            {
                heading: "Project Impact & Future Enhancements",
                text: "The total project cost sanctioned so far is ₹20.00 Crore. Additional works such as sports amenities, gym and fitness equipment, and construction of a Sewage Treatment Plant (STP) are proposed to further improve public amenities and environmental sustainability. The restoration of Nalla Cheruvu will significantly increase the lake’s storage capacity, mitigate urban flooding during monsoon, and improve groundwater recharge through desilting. Further, the proposed STP will reduce untreated sewage discharge into the Musi river system, thereby contributing to the larger objective of Musi River rejuvenation."
            }
        ]
    },
    "nalla-cheruvu-uppal": {
        title: "NALLA CHERUVU UPPAL",
        description: "Restoration of Nalla Cheruvu Uppal by HYDRAA to mitigate encroachment and restore ecological functionality.",
        beforeImage: "/Projects/NALLA CHERUVU UPPAL-before.webp",
        afterImage: "/Projects/NALLA CHERUVU UPPAL-present.webp",
        afterLabel: "Present",
        stats: [
            { label: "Original Area", value: "67.31 Acres" },
            { label: "Cost Sanctioned", value: "₹20.00 Crore" },
            { label: "Walkway Built", value: "2.45 km" }
        ],
        details: "The Nalla Cheruvu Uppal lake, originally encompassing 67.31 acres, was reduced to 52.50 acres over a decade due to large-scale encroachment and dumping of debris.",
        contentBlocks: [
            {
                heading: "Background & Encroachments",
                text: "The Nalla Cheruvu Uppal lake, originally encompassing 67.31 acres, was reduced to 52.50 acres over a decade due to large-scale encroachment and the dumping of debris and construction waste."
            },
            {
                heading: "Restoration Action Plan",
                text: "HYDRAA started restoration work in April 2025 to restore the lake to its original hydraulic capacity and ecological functionality. The following restoration measures were undertaken:",
                list: [
                    "Reconstruction of two (2) inlets, one (1) outlet, and an RCC catchment drain.",
                    "Desilting and removal of accumulated debris and sludge over an extent of 56 acres."
                ]
            },
            {
                heading: "Public Utility Amenities",
                text: "As part of the lake development and public utility enhancement, the following amenities have been provided:",
                list: [
                    "2.45 km long peripheral walkway with landscaping on both sides.",
                    "Seating benches, two (2) gazebos for community interaction, a curated yoga platform, and a rose garden.",
                    "Fencing around the water body and the newly created walkway.",
                    "A permanent boundary wall along the Full Tank Level (FTL) boundary.",
                    "Two entrance gates with highly controlled access."
                ]
            },
            {
                heading: "Project Impact & Future Enhancements",
                text: "The total project cost is ₹20.00 Crore. In addition, sports amenities and the construction of a Sewage Treatment Plant (STP) have been proposed. The restoration of the lake will significantly increase storage capacity, mitigate monsoonal flooding, improve groundwater recharge through localized desilting, and restore the natural hydrological link with downstream water bodies. Furthermore, the treatment of sewage through the proposed STP will reduce the pollution load entering the Musi River, heavily contributing to the overall Musi River rejuvenation efforts."
            }
        ]
    },
  
    "sunnam-cheruvu": {
        title: "SUNNAM CHERUVU",
        description: "Restoration of Sunnam Cheruvu by HYDRAA to mitigate encroachment and restore ecological functionality.",
        beforeImage: "/Projects/SUNNAM CHERUVU-before.webp",
        afterImage: "/Projects/SUNNAM CHERUVU-present.webp",
        afterLabel: "Present",
        stats: [
            { label: "Original Area", value: "30.50 Acres" },
            { label: "Desilting Area", value: "22 Acres" },
            { label: "Walkway Built", value: "1.45 km" }
        ],
        details: "Sunnam Cheruvu, originally spanned over 30.50 Acres, was reduced to 16.41 Acres over the past decade due to large-scale encroachment and dumping of debris.",
        contentBlocks: [
            {
                heading: "Background & Encroachments",
                text: "Sunnam Cheruvu, which originally spanned over 30.50 acres, has been reduced to 16.41 acres over the past decade due to large-scale encroachment, dumping of debris, construction waste, and huge stone boulders within the lake boundaries."
            },
            {
                heading: "Environmental & Health Consequences",
                text: "Unauthorized borewells dug in Sunnam Cheruvu were used to supply water contaminated with dangerous heavy metals—such as Lead, Cadmium, and Nickel—posing severe health risks to hostels, PGs, educational institutions, eateries, and homes in Madhapur’s tech corridor."
            },
            {
                heading: "Restoration Action Plan",
                text: "HYDRAA started restoration work in April 2025 to restore the lake to its original hydraulic capacity and ecological functionality. The following restoration measures have been carried out:",
                list: [
                    "Reconstruction of three (3) inlets, one (1) outlet, and a catchment drain with a 1000 mm diameter diversion pipeline.",
                    "Desilting and removal of accumulated debris and sludge across an extent of 22 acres."
                ]
            },
            {
                heading: "Public Utility Amenities",
                text: "As part of the lake development and public utility enhancement, the following amenities have been provided:",
                list: [
                    "1.45 km long peripheral walkway with landscaping on both sides.",
                    "Seating benches, two (2) gazebos for community interaction, a yoga platform, and a rose garden.",
                    "Fencing around the water body and the newly created walkway.",
                    "A permanent boundary wall along the Full Tank Level (FTL) boundary.",
                    "Two entrance gates with controlled access."
                ]
            },
            {
                heading: "Project Impact & Future Enhancements",
                text: "The total project cost is ₹20.00 Crore. In addition, sports amenities and the construction of a Sewage Treatment Plant (STP) have been proposed. The restoration of the lake will significantly increase storage capacity, mitigate monsoonal flooding, improve groundwater recharge through desilting, and restore the natural hydrological link with downstream water bodies. Furthermore, the treatment of sewage through the proposed STP will reduce the pollution load entering the Musi River, contributing to the overall Musi River rejuvenation efforts."
            }
        ]
    },
    "thimmidikunta-lake": {
        title: "THIMMIDIKUNTA LAKE",
        description: "Restoration of Thimmidikunta Lake by HYDRAA, focusing on hydraulic capacity and long-term ecological balance.",
        beforeImage: "/Projects/THIMMIDIKUNTA LAKE-before.webp",
        afterImage: "/Projects/THIMMIDIKUNTA LAKE-present.webp",
        afterLabel: "Present",
        stats: [
            { label: "Original Area", value: "29.26 Acres" },
            { label: "Desilting Area", value: "26 Acres" },
            { label: "Cost Sanctioned", value: "₹20.00 Crore" }
        ],
        details: "Thimmidikunta lake, originally encompassing 29.26 acres, has reduced to 16.24 Acres over the decades due to large-scale encroachment and dumping.",
        contentBlocks: [
            {
                heading: "Background & Encroachments",
                text: "Thimmidikunta lake, originally encompassing 29.26 acres, has reduced to 16.24 acres over the decades due to large-scale encroachment, dumping of debris, construction waste, and huge stone boulders within the lake."
            },
            {
                heading: "Environmental & Health Consequences",
                text: "Sewage is being directly discharged by hostel owners into the lake, and illegal labour sheds have been constructed around its perimeter. The catchment drains have been submerged and are no longer functional. Regrettably, even the outlet nala, which connects to the Mundala Katwa lake, has been compromised."
            },
            {
                heading: "Restoration Action Plan",
                text: "HYDRAA started restoration work in April 2025 to restore the lake to its original hydraulic capacity and ecological functionality. The following restoration measures have been provided:",
                list: [
                    "Reconstruction of three (3) inlets, one (1) outlet, and a catchment drain with a 1200 mm diameter diversion pipeline.",
                    "Desilting and removal of accumulated debris and sludge across an extent of 26 acres."
                ]
            },
            {
                heading: "Public Utility Amenities",
                text: "As part of the lake development and public utility enhancement, the following amenities have been provided:",
                list: [
                    "1.25 km long peripheral walkway with landscaping on both sides.",
                    "Seating benches, two (2) gazebos for community interaction, a curated yoga platform, and a rose garden.",
                    "Fencing around the water body and the newly created walkway.",
                    "A permanent boundary wall along the Full Tank Level (FTL) boundary.",
                    "Two entrance gates with highly controlled access."
                ]
            },
            {
                heading: "Project Impact & Future Enhancements",
                text: "The total project cost is ₹20.00 Crore. In addition, sports amenities and the construction of a Sewage Treatment Plant (STP) have been proposed. The restoration of the lake will significantly increase storage capacity, mitigate monsoonal flooding, improve groundwater recharge through localized desilting, and restore the natural hydrological link with downstream water bodies. Furthermore, the treatment of sewage through the proposed STP will reduce the pollution load entering the Musi River, heavily contributing to the overall Musi River rejuvenation efforts."
            }
        ]
    },
    "doddanekundi-lake": {
        title: "DODDANEKUNDI LAKE",
        images: [
            "/Projects/DODDANEKUNDI LAKE/1.webp",
            "/Projects/DODDANEKUNDI LAKE/2.webp",
            "/Projects/DODDANEKUNDI LAKE/3.webp",
            "/Projects/DODDANEKUNDI LAKE/4.webp"
        ]
    },
    "kalena-agrahara-lake": {
        title: "KALENA AGRAHARA LAKE",
        images: [
            "/Projects/Kalena Agrahara/1.webp",
            "/Projects/Kalena Agrahara/2.webp",
            "/Projects/Kalena Agrahara/3.webp",
            "/Projects/Kalena Agrahara/4.webp",
            "/Projects/Kalena Agrahara/5.webp",
            "/Projects/Kalena Agrahara/6.webp",
            "/Projects/Kalena Agrahara/7.webp"
        ]
    },
    "yarappanahalli-lake": {
        title: "YARAPPANAHALLI LAKE",
        images: [
            "/Projects/YARAPPANAHALLI LAKE/1.webp",
            "/Projects/YARAPPANAHALLI LAKE/2.webp",
            "/Projects/YARAPPANAHALLI LAKE/3.webp",
            "/Projects/YARAPPANAHALLI LAKE/4.webp",
            "/Projects/YARAPPANAHALLI LAKE/5.webp"
        ]
    },
    "kalena-agrahara": {
        title: "KALENA AGRAHARA LAKE",
        images: [
            "/Projects/Kalena Agrahara/1.webp",
            "/Projects/Kalena Agrahara/2.webp",
            "/Projects/Kalena Agrahara/3.webp",
            "/Projects/Kalena Agrahara/4.webp",
            "/Projects/Kalena Agrahara/5.webp",
            "/Projects/Kalena Agrahara/6.webp",
            "/Projects/Kalena Agrahara/7.webp"
        ]
    },
    "kadasonnappanahalli-lake": {
        title: "KADASONNAPPANAHALLI LAKE",
        images: [
            "/Projects/kadasonnappanahalli lake/1.webp",
            "/Projects/kadasonnappanahalli lake/2.webp",
            "/Projects/kadasonnappanahalli lake/3.webp",
            "/Projects/kadasonnappanahalli lake/4.webp",
            "/Projects/kadasonnappanahalli lake/5.webp"
        ]
    }
};

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = id ? projectsData[id] : null;
    const [selectedGalleryImage, setSelectedGalleryImage] = useState<{ src: string, title: string } | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => navigate('/projects')} className="text-primary hover:underline">
                        Return to Projects
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-body overflow-visible">
            <Navbar />

            {/* Header Section */}
            <div className="w-full relative h-[45vh] md:h-[55vh] flex items-center overflow-hidden mb-12">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-vimos-dark via-vimos-dark/95 to-transparent z-10" />
                    <img
                        src={project.afterImage || project.images?.[0]}
                        alt={`${project.title} Banner`}
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <p className="text-primary text-sm font-heading font-bold tracking-[0.4em] uppercase mb-4">Site Restoration</p>
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight whitespace-nowrap">
                                <span className="vimos-gradient-text-shine">{project.title}</span>
                            </h2>
                            <p className="text-white/70 max-w-3xl mx-auto text-sm md:text-base font-body leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-6 md:px-12 py-16">
                {/* Full-Width Visual Transformation / Multi-Image Gallery */}
                {project.beforeImage && project.afterImage ? (
                    <div className="mb-20">
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">Visual Transformation</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="w-full">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border w-full h-[350px] lg:h-[450px]">
                                    <img src={project.beforeImage} alt="Before Restoration" className="w-full h-full object-cover" />
                                    <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold tracking-widest uppercase shadow-lg">
                                        Before
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border w-full h-[350px] lg:h-[450px]">
                                    <img src={project.afterImage} alt="After Restoration" className="w-full h-full object-cover" />
                                    <div className="absolute top-6 left-6 bg-primary/95 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold tracking-widest uppercase shadow-xl shadow-primary/30">
                                        {project.afterLabel || "After"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    project.images && (
                        <div className="mb-20">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">Project Gallery</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {project.images.map((img: string, idx: number) => (
                                    <div 
                                        key={idx}
                                        onClick={() => setSelectedGalleryImage({ src: img, title: `${project.title} - Image ${idx + 1}` })}
                                        className="relative rounded-3xl overflow-hidden shadow-xl border border-border/50 group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-[280px]"
                                    >
                                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="bg-primary/90 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-lg">View Image</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                )}

                {/* Dynamic Text and Stats Columns */}
                {(project.details || project.contentBlocks || (project.stats && project.stats.length > 0)) && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                        <div className="lg:col-span-2">
                            {/* Project Details */}
                            <div>
                                {project.contentBlocks ? (
                                    <div className="space-y-12">
                                        <h3 className="text-3xl font-heading font-bold text-foreground mb-8">Project Overview</h3>
                                        {project.contentBlocks.map((block: any, idx: number) => (
                                            <div key={idx} className="space-y-4">
                                                {block.heading && <h4 className="text-2xl font-heading font-bold text-primary">{block.heading}</h4>}
                                                {block.text && <p className="text-muted-foreground text-lg leading-relaxed font-body">{block.text}</p>}
                                                {block.list && (
                                                    <ul className="list-disc list-outside ml-6 space-y-3 text-muted-foreground text-lg font-body mt-4">
                                                        {block.list.map((item: string, i: number) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    project.details && (
                                        <>
                                            <h3 className="text-3xl font-heading font-bold text-foreground mb-6">Project Overview</h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed font-body">
                                                {project.details}
                                            </p>
                                        </>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Sidebar container with sticky positioning */}
                        <div className="space-y-8 lg:sticky lg:top-32 self-start z-10">
                            {project.stats && project.stats.length > 0 && (
                                <div className="bg-secondary/20 rounded-3xl p-8 border border-border/50">
                                    <h4 className="text-xl font-heading font-bold text-foreground mb-6">Key Statistics</h4>
                                    <div className="space-y-6">
                                        {project.stats.map((stat: any, idx: number) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <span className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">{stat.label}</span>
                                                <span className="text-foreground text-2xl font-bold">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-vimos-dark rounded-3xl p-8 text-center text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10" />
                                <div className="relative z-10">
                                    <h4 className="text-xl font-heading font-bold mb-4">Developed By</h4>
                                    <div className="text-sm tracking-widest uppercase font-bold text-primary mb-2">VIMOS TECHNOCRATS</div>
                                    <p className="text-white/60 text-sm">Committed to sustainable environmental engineering and ecosystem rejuvenation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Gallery Lightbox */}
            {selectedGalleryImage && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out backdrop-blur-md"
                    onClick={() => setSelectedGalleryImage(null)}
                >
                    <div className="relative max-w-6xl w-full">
                        <button
                            className="fixed top-6 right-6 md:top-10 md:right-10 z-[250] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all shadow-2xl border border-white/20"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedGalleryImage(null);
                            }}
                        >
                            <X size={24} />
                        </button>
                        <img
                            src={selectedGalleryImage.src}
                            alt={selectedGalleryImage.title}
                            className="max-w-full max-h-[85vh] mx-auto object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="mt-6 text-center">
                            <h2 className="text-white text-3xl font-heading font-bold mb-2">{selectedGalleryImage.title}</h2>
                            <p className="text-white/50 font-body text-sm">Environmental Restoration Program</p>
                        </div>
                    </div>
                </div>
            )}

            <FooterSection />
        </div>
    );
};

export default ProjectDetails;
