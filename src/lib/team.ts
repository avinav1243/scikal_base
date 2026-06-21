export type TeamMember = {
  name: string;
  role: string;
  /** Optional initials override; defaults to derived initials. */
  initials?: string;
  /** Optional headshot path in /public (falls back to initials when absent). */
  photo?: string;
  bio: string;
  /** Optional longer description retained separately from `bio`. */
  description?: string;
  highlights?: string[];
};

export const team: TeamMember[] = [
  {
    name: "Aman Aggarwal, PhD",
    role: "CEO & Founder",
    initials: "AA",
    photo: "/teams/Aman.jpg",
    bio: "Aman Aggarwal, PhD builds advanced behavioral-neuroscience platforms that combine engineering and data science to accelerate reproducible research.",
    description:
      "Aman Aggarwal, PhD is the driving force behind SciKal Research. Holding a PhD in behavioral neuroscience and technology innovation, his expertise lies in developing advanced platforms for complex behavioral analysis — including custom equipment design, fabrication, and sophisticated data/image analysis. His work is published in PNAS and the Journal of Neuroscience. Trained by Prof. K. VijayRaghavan (NCBS, India) and Prof. Vivek Jayaraman (Janelia Research Campus, USA), his vision for SciKal is to merge neuroscience, engineering, and data science — empowering global research labs to achieve unprecedented precision, innovation, and scalability.",
    highlights: [
      "Ph.D., behavioral neuroscience",
      "Published in PNAS & J. Neuroscience",
      "Trained at NCBS & Janelia",
    ],
  },
  {
    name: "Lokesh Baweja, PhD",
    role: "Computational Scientist",
    initials: "LB",
    photo: "/teams/Lokesh.png",
    bio: `Lokesh Baweja, PhD is a computational scientist specializing in bioinformatics, multi-omics analysis, and AI-driven research. With over a decade of experience, he helps academic and biopharma teams transform complex biological data into actionable insights.`,
    description:
      "Education:\nPh.D. in Computational Biology, Example University\n\nExperience:\n- 10+ years in bioinformatics and multi-omics pipelines\n- Built scalable analysis platforms for academic labs and startups\n\nSelected Projects:\n- Single-cell integration and trajectory analysis\n- Machine-learning models for phenotype prediction",
    highlights: ["Bioinformatics", "Genomics", "AI"],
  },
  {
    name: "Shashwat Sharad, PhD",
    role: "Research Scientist",
    initials: "SS",
    bio: "Shashwat Sharad, PhD is a research scientist focused on advancing neuroscience through experimental design, data analysis, and translational research.",
    description:
      "Profile:\nResearch scientist with expertise in behavioral assays and quantitative data analysis.\n\nExperience:\n- Designed and ran high-throughput behavioral experiments\n- Led data-analysis efforts for cross-lab reproducibility studies\n\nSkills:\nBehavioral assays, MATLAB/Python, statistical modeling",
    highlights: ["Neuroscience", "Research", "Analytics"],
  },
  {
    name: "Shishu Pal Singh, PhD",
    role: "Research Scientist",
    bio: "Shishu Pal Singh, PhD specializes in biological research and data-driven approaches that support innovative discoveries in life sciences.",
    initials: "SP",
    description:
      "Background:\nMolecular biologist with experience in assay development and experimental troubleshooting.\n\nContributions:\n- Developed protocols for sample prep and imaging\n- Supported cross-disciplinary projects bridging biology and engineering\n\nInterests:\nAssay development, imaging, translational research",
    highlights: ["Biology", "Discovery", "Innovation"],
  },
  {
    name: "Akshay Bansal",
    role: "Head Engineer",
    initials: "AB",
    bio: "Akshay Bansal leads engineering initiatives, building scalable platforms and technical solutions that power advanced scientific research.",
    description:
      "Summary:\nFull-stack engineer and systems designer with a focus on hardware-software integration for research instruments.\n\nExperience:\n- Designed embedded systems and control firmware\n- Built cloud-enabled data pipelines for experiment telemetry\n\nTech:\nReact, Node.js, embedded C, PCB design",
    highlights: ["Engineering", "Scalability", "Leadership"],
  },
  {
    name: "Basavaraj HM",
    role: "Drosophila Specialist",
    initials: "BH",
    bio: "Basavaraj HM is a Drosophila specialist with expertise in model organism research and experimental studies supporting neuroscience programs.",
    description:
      "Expertise:\nDrosophila genetics, husbandry, and experimental execution.\n\nContributions:\n- Maintained and expanded fly stocks for behavioral projects\n- Assisted in assay optimization and sample collection\n\nTechniques:\nGenetics, crosses, vivarium management",
    highlights: ["Drosophila", "Genetics", "Research"],
  },
  {
    name: "Prahallad Khatana",
    role: "Drosophila Specialist",
    initials: "PK",
    bio: "Prahallad Khatana specializes in Drosophila-based research, contributing to experimental design and biological investigations.",
    description:
      "Role:\nSupport scientist focused on experimental workflows and sample processing.\n\nWork:\n- Executed behavioral assays and imaging pipelines\n- Managed sample logistics and data annotation\n\nStrengths:\nAttention to detail, reproducible protocols",
    highlights: ["Drosophila", "Biology", "Experiments"],
  },
];

export function initialsOf(member: TeamMember) {
  if (member.initials) return member.initials;
  const parts = member.name.replace(/,.*$/, "").split(/\s+/).filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}
