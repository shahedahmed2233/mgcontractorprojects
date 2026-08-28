import heroRoofing from "@/assets/hero-roofing.jpg";
import whyCraftsmanship from "@/assets/why-craftsmanship.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import baRoofBefore from "@/assets/ba-roof-before.jpg";
import baRoofAfter from "@/assets/ba-roof-after.jpg";
import baExteriorBefore from "@/assets/ba-exterior-before.jpg";
import baExteriorAfter from "@/assets/ba-exterior-after.jpg";
import baRenoBefore from "@/assets/ba-reno-before.jpg";
import baRenoAfter from "@/assets/ba-reno-after.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

export const business = {
  name: "MG Contractor Projects",
  tagline: "From small fixes to full renovations — we've got you covered!",
  phoneDisplay: "+1 210-838-1594",
  phoneHref: "tel:+12108381594",
  email: "menojgarcia32@gmail.com",
  emailHref: "mailto:menojgarcia32@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export const images = {
  hero: heroRoofing,
  why: whyCraftsmanship,
  about: aboutTeam,
};

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "roofing",
    title: "Roofing",
    description:
      "New roof installations and full replacements built with careful preparation, correct materials and clean, weather-tight detailing.",
    points: ["Full replacements", "New installations", "Proper underlayment & flashing"],
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs",
    description:
      "Leak tracing, storm damage repair and shingle replacement handled promptly so a small problem stays a small problem.",
    points: ["Leak repair", "Shingle replacement", "Flashing & vent work"],
  },
  {
    id: "exterior",
    title: "Exterior Improvements",
    description:
      "Siding, trim, fascia, gutters, decks and porches — exterior work that improves how a home performs and how it looks from the street.",
    points: ["Siding & trim", "Gutters & fascia", "Decks & porches"],
  },
  {
    id: "renovations",
    title: "Renovations",
    description:
      "Interior and exterior remodels planned and sequenced properly, from single rooms to whole-home updates.",
    points: ["Kitchens & baths", "Room remodels", "Whole-home updates"],
  },
  {
    id: "maintenance",
    title: "Repairs & Maintenance",
    description:
      "The punch-list work most crews won't schedule: drywall, carpentry, doors, sealing and seasonal upkeep done right the first time.",
    points: ["Drywall & carpentry", "Doors & windows", "Seasonal upkeep"],
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    description:
      "One point of contact for the whole project — scope, scheduling, trades and site cleanliness coordinated from start to walkthrough.",
    points: ["Project coordination", "Trade scheduling", "Final walkthrough"],
  },
];

export type BeforeAfterProject = {
  id: string;
  title: string;
  summary: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: "roof-transformation",
    title: "Roof Transformation",
    summary:
      "A worn shingle roof stripped back and rebuilt with new underlayment, clean ridge lines and correct flashing.",
    beforeImage: baRoofBefore,
    afterImage: baRoofAfter,
    beforeAlt: "Worn asphalt shingle roof with curling and missing shingles before replacement",
    afterAlt: "Newly installed dark architectural shingle roof after replacement",
  },
  {
    id: "exterior-improvement",
    title: "Exterior Improvement",
    summary:
      "Failing siding and tired trim replaced, porch repaired and the whole facade brought back to a crisp finish.",
    beforeImage: baExteriorBefore,
    afterImage: baExteriorAfter,
    beforeAlt: "House exterior with peeling siding and worn porch before improvement",
    afterAlt: "Refreshed house exterior with new siding, white trim and repaired porch",
  },
  {
    id: "renovation",
    title: "Renovation",
    summary:
      "A stripped, dated interior reframed, finished and detailed into a bright, usable living space.",
    beforeImage: baRenoBefore,
    afterImage: baRenoAfter,
    beforeAlt: "Interior room stripped to studs during demolition before renovation",
    afterAlt: "Completed renovated interior with wood floors and clean white walls",
  },
];

export const videos = [
  {
    id: "reel-1",
    title: "Roofing work in progress",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2458309981316568%2F&show_text=false&width=267&t=0",
  },
  {
    id: "reel-2",
    title: "On-site project walkthrough",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2106488743279582%2F&show_text=false&width=267&t=0",
  },
  {
    id: "reel-3",
    title: "Finished project detail",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4673332912952829%2F&show_text=false&width=267&t=0",
  },
];

export const galleryCategories = [
  "All",
  "Roofing",
  "Repairs",
  "Exterior",
  "Renovations",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<GalleryCategory, "All">;
  width: number;
  height: number;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: gallery1,
    alt: "Newly installed standing seam metal roof against a blue sky",
    caption: "Metal roof installation",
    category: "Roofing",
    width: 1200,
    height: 1500,
  },
  {
    id: "g2",
    src: gallery2,
    alt: "Contractor sealing roof flashing around a brick chimney",
    caption: "Chimney flashing repair",
    category: "Repairs",
    width: 1200,
    height: 900,
  },
  {
    id: "g3",
    src: gallery3,
    alt: "New cedar deck and repainted exterior trim at the back of a home",
    caption: "Deck build & trim refresh",
    category: "Exterior",
    width: 1200,
    height: 1500,
  },
  {
    id: "g4",
    src: gallery4,
    alt: "Renovated kitchen with white cabinets and wood flooring",
    caption: "Kitchen renovation",
    category: "Renovations",
    width: 1200,
    height: 900,
  },
  {
    id: "g5",
    src: gallery5,
    alt: "New seamless gutter and downspout installed along a roof eave",
    caption: "Gutter & fascia work",
    category: "Exterior",
    width: 1200,
    height: 1500,
  },
  {
    id: "g6",
    src: gallery6,
    alt: "Framing and drywall work in progress during an interior remodel",
    caption: "Framing & drywall",
    category: "Renovations",
    width: 1200,
    height: 900,
  },
  {
    id: "g7",
    src: baRoofAfter,
    alt: "Completed architectural shingle roof on a suburban home",
    caption: "Shingle roof replacement",
    category: "Roofing",
    width: 1440,
    height: 1080,
  },
  {
    id: "g8",
    src: baExteriorAfter,
    alt: "Home exterior after new siding, trim and porch repairs",
    caption: "Full exterior update",
    category: "Exterior",
    width: 1440,
    height: 1080,
  },
  {
    id: "g9",
    src: baRoofBefore,
    alt: "Damaged shingles documented before repair work",
    caption: "Storm damage assessment",
    category: "Repairs",
    width: 1440,
    height: 1080,
  },
  {
    id: "g10",
    src: baRenoAfter,
    alt: "Finished open living space after a full interior renovation",
    caption: "Living space renovation",
    category: "Renovations",
    width: 1440,
    height: 1080,
  },
];

export const projectTypes = [
  "Roofing",
  "Roof Repairs",
  "Exterior Improvements",
  "Renovations",
  "Repairs & Maintenance",
  "General Contracting",
  "Not sure yet",
];
