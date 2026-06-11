import { 
  Database, 
  FlaskConical, 
  Server, 
  GitBranch, 
  BarChart3, 
  Dna,
  BrainCircuit,
  Cloud,
  CheckCircle2
} from "lucide-react";

export function ComputationalBiology() {
  const pillars = [
    {
      id: "data-transformation",
      label: "Data Transformation",
      icon: Database,
      color: "from-sky-500/10 to-blue-500/10",
      borderColor: "border-sky-200",
      iconBg: "bg-sky-500/10 text-sky-600",
      subsections: [
        {
          title: "Extraction & Curation",
          tags: ["Metadata curation", "Gold standard datasets", "Custom databases"],
          content: "Structural organization of data from varied sources including public and proprietary databases, publications, patents, regulatory documents, conference proceedings, and health records. Data sharing and delivery in multiple formats (.tsv, API, etc.) to simplify ingestion into internal repositories. Implementation of standard ontologies in structured data.",
        },
        {
          title: "Annotation & Normalization",
          tags: ["Pan-TA gene expression", "Normalization", "Metadata management"],
          content: "Cleansing and normalization of datasets, batch correction, de-duplication, missingness analysis, outlier strategies, and QC. Ontology mapping across domain vocabularies for interoperability. Text mining and string-based matching for enrichment from literature.",
        },
        {
          title: "Integration",
          tags: ["Ontology mapping", "Semantic solutions", "Data FAIRification"],
          content: "Source data analysis, variable mapping, and clustering. Data model development, database architecture, ETL development, and testing. Warehousing, maintenance, gap analysis, and redundancy checks.",
        },
      ],
    },
    {
      id: "data-analysis",
      label: "Data Analysis & Biological Interpretation",
      icon: Dna,
      color: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-500/10 text-indigo-600",
      subsections: [
        {
          title: "Core Capabilities",
          tags: ["Multiomics", "Real-world evidence", "Systems biology", "Machine learning"],
          content: "Multiomics data analysis and interpretation. Real-world evidence through the analysis of clinical patient data. Customized pipelines for data analysis. Systems biology simulations. Predictive machine learning, modeling, and simulations.",
        },
        {
          title: "Application Domains",
          tags: ["Target ID & development", "Biomarker discovery", "Agrigenomics", "Immunomics"],
          content: "Comprehensive coverage across target identification and development, biomarker ID and development, agrigenomics, and immunomics — spanning the full drug discovery and development pipeline.",
        },
        {
          title: "Platforms",
          tags: ["Online Pipeline Platform (OP2)", "ImmunoRaptor"],
          content: "Online Pipeline Platform (OP2) to access and run data analysis pipelines. ImmunoRaptor platform to easily manage and analyze immune repertoire sequencing data.",
        },
      ],
    },
    {
      id: "rd-it",
      label: "R&D IT for Bioinformatics",
      icon: Server,
      color: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-500/10 text-teal-600",
      subsections: [
        {
          title: "Application Development",
          tags: ["SOA", "Microservices", "Cloud-native", "Agile"],
          content: "Service-oriented architecture, microservices, and cloud-based custom application development. Frameworks: R Shiny, HTML, JS, NextFlow. Visualization: Spotfire, Tableau, R Shiny. Automated, functional, and performance testing. Cloud deployment on AWS, Azure, GCP as well as on-premises.",
        },
        {
          title: "Custom Pipeline Development",
          tags: ["Genomics", "Single-cell", "Proteomics", "CryoEM"],
          content: "Building pipelines for primary, secondary, and tertiary analysis across genomics, single-cell, proteomics, immunology, microbiome, and vaccinology. CryoEM, DEL library hit identification, and complex downstream analysis including cell deconvolution and off-target analysis. Containerized pipelines deployed on DNANexus, SevenBridges, AWS.",
        },
        {
          title: "Infrastructure & Visualization",
          tags: ["Cloud systems", "Docker", "NextFlow", "AirFlow"],
          content: "Configurable dockerized omics analysis pipelines. Cloud systems for data storage and analysis. SME consulting for infrastructure development. Job scheduling with NextFlow, AirFlow, SnakeMake. Intuitive visualization dashboards tailored to your research needs.",
        },
      ],
    },
  ];

  const whyUs = [
    {
      stat: "1000+",
      label: "Expert employees in science, statistics, and data engineering",
    },
    {
      stat: "9/10",
      label: "Customers return to us for new projects — long-term relationships",
    },
    {
      stat: "16/20",
      label: "Top 20 pharma companies trust us with their data",
    },
    {
      stat: "100%",
      label: "Customer-first culture — your objectives are our priority",
    },
  ];

  const engagementModes = [
    {
      title: "Fixed-Term Engagement (FTE)",
      description: "FTE agreement based on estimated headcount and timeframe. Ideal for sustained, long-term collaborations.",
      icon: GitBranch,
    },
    {
      title: "Fee for Service (FFS)",
      description: "Project-based engagement with defined goals and milestone-based delivery. Perfect for targeted, outcome-driven work.",
      icon: BarChart3,
    },
  ];

  return (
    <section id="computational-biology" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">
            Bioinformatics Division
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
            Computational Biology
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We turn biological data into actionable value. Through expert data science, cutting-edge bioinformatics pipelines, and AI-driven interpretation, we support every stage of drug discovery and development.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="space-y-8 mb-20">
          {pillars.map((pillar) => {
            const PillarIcon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl border ${pillar.borderColor} bg-gradient-to-br ${pillar.color} backdrop-blur-sm overflow-hidden`}
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${pillar.iconBg}`}>
                      <PillarIcon size={24} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-secondary">
                      {pillar.label}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillar.subsections.map((sub, idx) => (
                      <div
                        key={idx}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/80 hover:shadow-md transition-shadow duration-300"
                      >
                        <h5 className="font-semibold text-secondary mb-3 text-lg">{sub.title}</h5>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {sub.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{sub.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modes of Engagement */}
        <div className="mb-20">
          <h4 className="text-2xl font-bold text-secondary mb-8 text-center">Modes of Engagement</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {engagementModes.map((mode, idx) => {
              const ModeIcon = mode.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <ModeIcon size={24} strokeWidth={1.5} />
                  </div>
                  <h5 className="text-lg font-semibold text-secondary mb-3">{mode.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{mode.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-secondary rounded-3xl p-10 md:p-14">
          <div className="text-center mb-12">
            <h4 className="text-sm font-bold text-primary/80 tracking-wider uppercase mb-3">Why Partner With Us</h4>
            <h5 className="text-2xl md:text-3xl font-bold text-white">Trusted by World-Leading Pharma</h5>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {whyUs.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3">{item.stat}</div>
                <p className="text-white/70 text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Dedicated cloud space for data sharing, compliant with all relevant regulations",
              "Access to tools, technologies, and knowledge bases",
              "Quick turnaround time with open, timely, and clearly defined communication",
              "Regular project updates throughout engagement",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
