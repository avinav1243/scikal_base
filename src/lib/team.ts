export type TeamMember = {
  name: string;
  role: string;
  /** Optional initials override; defaults to derived initials. */
  initials?: string;
  /** Optional headshot path in /public (falls back to initials when absent). */
  photo?: string;
  bio?: string;
  highlights?: string[];
};

/** The SciKal team (from the live site). */
export const founder: TeamMember = {
  name: "Dr. Aman Aggarwal",
  role: "CEO & Founder",
  initials: "AA",
  photo: "/teams/Aman.jpg",
  bio: "Dr. Aman Aggarwal is the driving force behind SciKal Research. Holding a Ph.D. in behavioral neuroscience and technology innovation, his expertise lies in developing advanced platforms for complex behavioral analysis — including custom equipment design, fabrication, and sophisticated data/image analysis. His work is published in PNAS and the Journal of Neuroscience. Trained by Prof. K. VijayRaghavan (NCBS, India) and Prof. Vivek Jayaraman (Janelia Research Campus, USA), his vision for SciKal is to merge neuroscience, engineering, and data science — empowering global research labs to achieve unprecedented precision, innovation, and scalability.",
  highlights: [
    "Ph.D., behavioral neuroscience",
    "Published in PNAS & J. Neuroscience",
    "Trained at NCBS & Janelia",
  ],
};

export const team: TeamMember[] = [
  founder,
  {
    name: "Dr. Lokesh Baweja, Phd",
    role: "Computational Scientist",
    initials: "LB",
    photo: "/teams/Lokesh.png",
    bio: `Dr. Lokesh Baweja is a computational scientist specializing in bioinformatics, multi-omics analysis, and AI-driven research. With over a decade of experience, he helps academic and biopharma teams transform complex biological data into actionable insights.`,
    highlights: ["Bioinformatics", "Genomics", "AI"],
  },
  {
    name: "Shashwat Sharad, PhD",
    role: "Research Scientist",
    bio: "Dr. Shashwat Sharad is a research scientist focused on advancing neuroscience through experimental design, data analysis, and translational research.",
    highlights: ["Neuroscience", "Research", "Analytics"],
  },
  {
    name: "Shishu Pal Singh, PhD",
    role: "Research Scientist",
    bio: "Dr. Shishu Pal Singh specializes in biological research and data-driven approaches that support innovative discoveries in life sciences.",
    highlights: ["Biology", "Discovery", "Innovation"],
  },
  {
    name: "Akshay Bansal",
    role: "Head Engineer",
    bio: "Akshay Bansal leads engineering initiatives, building scalable platforms and technical solutions that power advanced scientific research.",
    highlights: ["Engineering", "Scalability", "Leadership"],
  },
  {
    name: "Basavaraj HM",
    role: "Drosophila Specialist",
    bio: "Basavaraj HM is a Drosophila specialist with expertise in model organism research and experimental studies supporting neuroscience programs.",
    highlights: ["Drosophila", "Genetics", "Research"],
  },
  {
    name: "Prahallad Khatana",
    role: "Drosophila Specialist",
    bio: "Prahallad Khatana specializes in Drosophila-based research, contributing to experimental design and biological investigations.",
    highlights: ["Drosophila", "Biology", "Experiments"],
  },
];

export function initialsOf(member: TeamMember) {
  if (member.initials) return member.initials;
  const parts = member.name.replace(/,.*$/, "").split(/\s+/).filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}
