import {
  type LucideIcon,
  MoveVertical,
  Orbit,
  Heart,
  Utensils,
  Brain,
  BrainCircuit,
  LineChart,
  ScanEye,
  Network,
  CircuitBoard,
  FlaskConical,
  BarChart3,
  Cpu,
  Wrench,
  Microscope,
  Workflow,
  Dna,
} from "lucide-react";

export type KeyFeature = { title: string; body: string };

export type Offering = {
  id: string;
  name: string;
  /** Short label shown above the name (e.g. the assay family / product code). */
  kicker?: string;
  /** Longer descriptive subtitle shown in the detail view. */
  subtitle: string;
  tagline: string;
  /** One-line summary used on cards. */
  description: string;
  /** Full intro paragraph shown in the detail view. */
  overview: string;
  icon: LucideIcon;
  /** Detailed, titled features shown in the detail view. */
  keyFeatures: KeyFeature[];
  /** Tailwind gradient stops for the accent. */
  accent: string;
  /** Representative figure shown on the card and in the detail banner. */
  image: string;
  /**
   * How the figure should be framed (see MediaFrame):
   * - "figure" — white-background scientific diagram (sits on a white mat)
   * - "photo"  — carries its own (dark) background (rendered edge-to-edge)
   */
  imageTone: "figure" | "photo";
  includeKeyFeatures?: boolean;
  includeDescription?: boolean;
};

export type ProductCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  items: Offering[];
};

/**
 * SciKal's offering is organised into three categories, each rendered as its
 * own section on /products (anchors: #instrumentation,
 * #design-computational-biology, #solutions). Clicking any item opens a
 * detail view in-place (no routing). Detail copy is illustrative dummy data
 * except for Locomotion, which mirrors the live product page.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "design-computational-biology",
    name: "Computational Biology",
    icon: BrainCircuit,
    tagline: "From raw frames to publishable insight",
    description:
      "The computation and engineering behind the instruments — machine-learning behavioural scoring, imaging analysis, and custom hardware/software designed around your assay.",
    items: [
      {
        id: "bulk-rnaseq",
        name: "Bulk mRNA-seq Analysis",
        subtitle: "End-to-End Transcriptomic Profiling",
        tagline: "From raw reads to transcriptional insight",
        includeKeyFeatures: false,
        includeDescription: false,
        description:
          "Full-pipeline bulk RNA-seq analysis — from FASTQ quality control through differential expression to pathway enrichment — delivering publication-ready figures and reproducible notebooks.",
        overview:
          "We analyze bulk RNA-seq datasets to identify differentially expressed genes, altered pathways, and biologically meaningful transcriptional signatures across conditions, tissues, treatments, genotypes, and time points. Every step, from raw FASTQ processing to final figures, is documented in reproducible R/Python notebooks so your results are fully auditable and re-runnable.",
        icon: Dna,
        keyFeatures: [
          {
            title: "FASTQ Processing & Quantification",
            body: "QC, adapter trimming, genome alignment, and count matrix generation form a robust, reproducible foundation for all downstream analyses.",
          },
          {
            title: "Differential Expression Analysis",
            body: "DESeq2, edgeR, and limma with careful experimental-design modelling to identify statistically robust changes across your contrasts of interest.",
          },
          {
            title: "Visualisation & Sample QC",
            body: "PCA, volcano plots, heatmaps, and clustering reveal structure in your data and flag outlier samples before they affect conclusions.",
          },
          {
            title: "Pathway & Gene-Set Enrichment",
            body: "GO, KEGG, Reactome, MSigDB, and GSEA analyses translate gene lists into biological mechanisms, with custom gene-set support.",
          },
        ],
        accent: "from-emerald-500 to-teal-600",
        image: "/products/computation/bulk_mrnaseq_bg_card.svg",
        imageTone: "photo",
      },
      {
        id: "scrna-seq",
        name: "Single-Cell RNA-seq Analysis",
        subtitle: "Cell Population & State Discovery",
        tagline: "Resolve every cell, reveal every state",
        includeKeyFeatures: false,
        includeDescription: false,
        description:
          "Complete single-cell workflows that reveal cell populations, disease-specific cell states, treatment response programs, and cell-type-specific gene expression changes at single-cell resolution.",
        overview:
          "We build complete single-cell workflows that reveal cell populations, disease-specific cell states, treatment response programs, and cell-type-specific gene expression changes. From raw count matrices to annotated atlases and trajectory models, every step is documented in reproducible notebooks and presented with publication-ready figures.",
        icon: Microscope,
        keyFeatures: [
          {
            title: "QC, Normalisation & Batch Correction",
            body: "Cell and gene filtering, doublet detection, normalisation, and batch correction ensure a clean, comparable foundation across samples and conditions.",
          },
          {
            title: "Dimensionality Reduction & Clustering",
            body: "UMAP/t-SNE embeddings, graph-based clustering, and marker discovery partition the transcriptional landscape into interpretable cell populations.",
          },
          {
            title: "Cell-Type Annotation & Reference Mapping",
            body: "Canonical marker panels and reference-atlas mapping assign confident identities to each cluster, cross-validated against published cell-type signatures.",
          },
          {
            title: "Trajectory, Ligand–Receptor & Pathway Activity",
            body: "Pseudotime and trajectory inference, differential abundance, cell-type-specific DE, ligand–receptor signalling, and pathway activity scoring connect cell states to biology.",
          },
        ],
        accent: "from-violet-500 to-purple-600",
        image: "/products/computation/scrna_seq_card_bg.svg",
        imageTone: "photo",
      },
      {
        id: "multiomics-integration",
        name: "Multiomics Integration",
        subtitle: "Cross-Platform Biological Discovery",
        tagline: "One coherent story across every data layer",
        includeKeyFeatures: false,
        includeDescription: false,
        description:
          "We integrate transcriptomics, proteomics, metabolomics, epigenomics, clinical metadata, and phenotypic measurements to discover coordinated disease mechanisms and actionable biomarkers.",
        overview:
          "We integrate transcriptomics, proteomics, metabolomics, epigenomics, clinical metadata, and phenotypic measurements to discover coordinated disease mechanisms and actionable biomarkers. Our workflows harmonise heterogeneous platforms into a unified analytical framework, then apply network, statistical, and machine-learning methods to surface the signals that matter.",
        icon: Network,
        keyFeatures: [
          {
            title: "Cross-Platform Harmonisation & Feature Engineering",
            body: "Data normalisation, batch alignment, and feature engineering reconcile heterogeneous platforms into a consistent, analysis-ready matrix.",
          },
          {
            title: "Integrated Clustering & Network Analysis",
            body: "Multi-omics factor analysis, correlation networks, and module detection reveal co-regulated biological programmes spanning data layers.",
          },
          {
            title: "Biomarker Discovery",
            body: "Statistical and ML-based feature selection identify robust multiomics biomarkers validated across cohorts and data types.",
          },
          {
            title: "Interpretable Models & Validation Strategy",
            body: "SHAP values, feature ranking, and pathway-level integration translate complex models into mechanistic hypotheses with clear validation roadmaps.",
          },
        ],
        accent: "from-orange-500 to-rose-600",
        image: "/products/computation/multiomics_card_bg.svg",
        imageTone: "photo",
      },
      {
        id: "pkpd-modeling",
        name: "PK/PD Modeling & Dose Simulation",
        subtitle: "Rational Dose Selection & Translational Modelling",
        tagline: "Connect dose, exposure, and effect",
        includeKeyFeatures: false,
        includeDescription: false,
        description:
          "We develop pharmacokinetic and pharmacodynamic models to connect dose, exposure, target engagement, efficacy, and safety — supporting rational dose selection and translational decision-making.",
        overview:
          "We develop pharmacokinetic and pharmacodynamic models to connect dose, exposure, target engagement, efficacy, and safety. From compartmental PK fitting to population variability modelling and Monte Carlo simulations, our analyses support rational dose selection, study design, and clear client-facing reports for regulatory and strategic decisions.",
        icon: FlaskConical,
        keyFeatures: [
          {
            title: "Compartmental PK Modelling",
            body: "One-, two-, and multi-compartment models fitted to oral, IV, and multi-route dosing data characterise absorption, distribution, and elimination.",
          },
          {
            title: "Population Variability & Mixed-Effects Concepts",
            body: "Nonlinear mixed-effects modelling principles capture between-subject variability and covariate relationships across patient populations.",
          },
          {
            title: "Exposure–Response & PD Modelling",
            body: "Emax, indirect response, and disease-progression models link drug exposure to pharmacodynamic endpoints and efficacy readouts.",
          },
          {
            title: "Monte Carlo Simulation & Uncertainty Analysis",
            body: "Dose simulations propagate parameter uncertainty to predict clinical outcomes and inform dose justification with quantified confidence.",
          },
        ],
        accent: "from-amber-500 to-yellow-600",
        image: "/products/computation/pkpd_card_bg.svg",
        imageTone: "photo",
      },
    ],
  },
  {
    id: "instrumentation",
    name: "Instrumentation, Design & Fabrication",
    icon: Microscope,
    tagline: "Precision-engineered behavioural assay platforms",
    description:
      "Purpose-built hardware for behavioural neuroscience — gravity-based, high-throughput, and stress-free by design. Each platform pairs precise mechanics with real-time, camera-based readouts.",
    items: [
      {
        id: "locomotion",
        name: "Locomotion",
        kicker: "fly-VRL",
        subtitle: "fly-VRL: Automated Vertical Locomotor Assay for Drosophila",
        tagline: "Automated vertical locomotor assay",
        includeKeyFeatures: true,
        includeDescription: true,
        description:
          "A gravity-based, stress-free climbing assay that captures vertical locomotion at 250 FPS for high-resolution geotaxis and motor-phenotyping studies.",
        overview:
          "The fly-VRL (fly vertically rotating arena for locomotion) is a high-resolution, automated system designed to capture the nuances of climbing behavior in fruit flies. By replacing traditional manual methods with a precision-engineered platform, the VRL provides researchers with a robust tool for identifying subtle motor defects and studying the genetic basis of locomotion.",
        icon: MoveVertical,
        keyFeatures: [
          {
            title: 'Automated "No-Stress" Assay',
            body: "The system eliminates the need for mechanical “tapping” or agitation, which can cause physical trauma and alter behavioral results; instead, it uses a gravity-based approach to trigger climbing in a stress-free environment.",
          },
          {
            title: "Precision-Machined Arena",
            body: "The apparatus features a custom-built, three-section acrylic cassette containing a 110 × 10 × 5 mm arena, providing sufficient space for flies to move freely while maintaining a consistent focal plane for high-resolution imaging.",
          },
          {
            title: "Programmable Rotation Mechanism",
            body: "Utilizing an Arduino-controlled servo motor, the VRL executes precise 180° vertical rotations at 15-second stationary intervals, automatically resetting flies to the bottom of the arena to initiate new tracks without human intervention.",
          },
          {
            title: "Advanced High-Speed Imaging",
            body: "Each setup includes a 250 FPS high-speed camera and an 8-LED infrared (IR) backlight system, enabling the capture of movement at a resolution of 55 µm per pixel for detailed spatiotemporal analysis.",
          },
          {
            title: "Comprehensive Data Analysis",
            body: "The integrated Python-based software provides automated motion detection and post-hoc tracking, calculating key metrics such as track straightness, average instantaneous speed, and total distance traveled.",
          },
          {
            title: "Detection of Subtle Motor Defects",
            body: "Specifically engineered for high sensitivity, the VRL can identify minor locomotor impairments in early-stage heterozygous Parkinson's disease models and proprioceptive mutants that often go undetected in standard manual assays.",
          },
          {
            title: "Quantitative Geotactic Index (GTI)",
            body: "The apparatus allows for the precise measurement of a fly's ability to sense and act against gravity, generating a quantitative Geotactic Index based on the direction and duration of individual climbing tracks.",
          },
          {
            title: "Versatile Research Utility",
            body: "A cost-effective and generalizable tool, the fly-VRL is suitable for diverse applications, including gait pattern analysis, studies of sexual dimorphism in movement, and investigating the genetic markers of aging and neurodegeneration.",
          },
        ],
        accent: "from-cyan-500 to-blue-600",
        image: "/products/locomotion.png",
        imageTone: "figure",
      },
      {
        id: "microgravity-simulator",
        name: "Microgravity Simulator",
        kicker: "Random Positioning Machine",
        subtitle: "Random Positioning Machine for Gravitational Biology",
        tagline: "Near-weightlessness on the bench",
        includeKeyFeatures: true,
        includeDescription: true,
        description:
          "A Random Positioning Machine that continuously randomises orientation across axes to simulate near-weightlessness for gravitational-biology research.",
        overview:
          "The Microgravity Simulator is a bench-top Random Positioning Machine (RPM) that continuously reorients samples across multiple axes, averaging the gravity vector toward zero to recreate near-weightlessness without spaceflight. It enables controlled gravitational-biology experiments on cells, organoids, and small model organisms.",
        icon: Orbit,
        keyFeatures: [
          {
            title: "2D & 3D Operation Modes",
            body: "Switch between single-frame (2D) clinostat rotation and full two-frame (3D) random positioning to match the gravitational regime your protocol requires.",
          },
          {
            title: "Continuous Multi-Axis Rotation",
            body: "Independently driven inner and outer frames randomise sample orientation so that, over time, the net gravity vector averages toward zero.",
          },
          {
            title: "Programmable Rotation Profiles",
            body: "Define angular velocity, randomisation seed, and run duration through software, with full logging for reproducible experiments.",
          },
          {
            title: "Stable Sample Environment",
            body: "A balanced, low-vibration mechanism keeps cultures, organoids, and live specimens secure and undisturbed throughout long runs.",
          },
          {
            title: "Live & Fixed Sample Support",
            body: "Compatible with sealed culture vessels and fixation workflows, supporting both real-time and end-point readouts.",
          },
        ],
        accent: "from-blue-500 to-indigo-500",
        image: "/products/microgravity.png",
        imageTone: "figure",
      },
      {
        id: "courtship",
        name: "Courtship",
        kicker: "Fly Bowl",
        subtitle: "Fly Bowl: High-Throughput Social Behaviour Assay",
        tagline: "High-throughput social-behaviour assay",
        includeKeyFeatures: true,
        includeDescription: true,
        description:
          "A Fly Bowl arena for high-throughput courtship and social-behaviour studies, with machine-learning annotation of interactions and social dynamics.",
        overview:
          "Courtship is a Fly Bowl–style arena built for high-throughput analysis of social and courtship behaviour in Drosophila. Multiple animals are recorded simultaneously while machine-learning models annotate interactions frame by frame, turning hours of video into structured, comparable social-dynamics data.",
        icon: Heart,
        keyFeatures: [
          {
            title: "Multi-Animal Social Arena",
            body: "A shallow, evenly lit bowl keeps several flies in a single field of view, ideal for capturing courtship sequences and group interactions.",
          },
          {
            title: "ML-Powered Annotation",
            body: "Trained classifiers automatically detect and label behaviours such as orientation, following, and wing extension, removing manual scoring.",
          },
          {
            title: "High-Throughput Imaging",
            body: "Parallel arenas and automated recording let you run large cohorts and genotypes in a single session.",
          },
          {
            title: "Social-Dynamics Metrics",
            body: "Quantify interaction frequency, latency, and trajectory-based proximity to characterise social phenotypes.",
          },
          {
            title: "Customisable Protocols",
            body: "Configure lighting, stimulus timing, and cohort composition to match your experimental design.",
          },
        ],
        accent: "from-sky-400 to-cyan-500",
        image: "/products/courtship-2.png",
        imageTone: "figure",
      },
      {
        id: "feeding",
        name: "Feeding",
        kicker: "FLIC-inspired",
        subtitle: "Capacitance-Based Real-Time Feeding Assay",
        tagline: "Real-time capacitance feeding assay",
        includeKeyFeatures: true,
        includeDescription: true,
        description:
          "A capacitance-based, FLIC-inspired assay that records individual feeding events in real time, with circadian-rhythm integration for chronobiology studies.",
        overview:
          "Feeding is a capacitance-based assay, inspired by the FLIC paradigm, that detects each contact between an animal and its food source in real time. By logging individual feeding events with millisecond precision, it resolves fine-grained feeding microstructure and integrates cleanly with circadian and metabolic studies.",
        icon: Utensils,
        keyFeatures: [
          {
            title: "Capacitance-Based Event Detection",
            body: "Every feeding contact closes a sensitive capacitive circuit, capturing the timing and duration of individual interactions.",
          },
          {
            title: "Single-Animal Resolution",
            body: "Per-chamber sensing isolates each animal, enabling individualised feeding profiles across a cohort.",
          },
          {
            title: "Circadian-Rhythm Integration",
            body: "Long-duration logging aligns feeding behaviour with light–dark cycles for chronobiology and metabolic research.",
          },
          {
            title: "Real-Time Data Streaming",
            body: "Events stream live to software for immediate visualisation, with full export for downstream analysis.",
          },
        ],
        accent: "from-teal-400 to-emerald-500",
        image: "/products/feeding.png",
        imageTone: "figure",
      },
      {
        id: "learning-memory",
        name: "Learning & Memory",
        kicker: "Passive Avoidance Assay",
        subtitle: "Passive Avoidance: Closed-Loop Associative Learning",
        tagline: "Closed-loop associative learning",
        includeKeyFeatures: true,
        includeDescription: true,
        description:
          "A closed-loop passive-avoidance platform for associative-memory studies — programmable aversive stimuli triggered in real time from tracked behaviour.",
        overview:
          "The Learning & Memory platform runs a passive-avoidance paradigm in a fully closed loop: behaviour is tracked live and used to trigger programmable aversive stimuli the moment an animal enters a designated zone. It delivers clean, reproducible learning curves for associative-memory and retention studies.",
        icon: Brain,
        keyFeatures: [
          {
            title: "Closed-Loop Stimulus Control",
            body: "Real-time tracking triggers stimuli based on the animal's position, enabling precise place- and event-contingent conditioning.",
          },
          {
            title: "Programmable Aversive Cues",
            body: "Configure shock, light, or other aversive stimuli with exact timing and intensity to suit your paradigm.",
          },
          {
            title: "Avoidance Index & Latency",
            body: "Automatically compute avoidance index, entry latency, and trial-by-trial learning curves.",
          },
          {
            title: "Event-Level Logging",
            body: "Every stimulus and zone entry is timestamped for transparent, publishable datasets.",
          },
        ],
        accent: "from-indigo-500 to-blue-500",
        image: "/products/learning-memory.png",
        imageTone: "figure",
      },
    ],
  },
  // {
  //   id: "services",
  //   name: "Services",
  //   icon: Workflow,
  //   tagline: "Comprehensive research solutions, tailored to your needs",
  //   description:
  //     "Engage SciKal end-to-end — from designing a custom behavioural assay to delivering a complete analysis pipeline. We meet your lab wherever the bottleneck is.",
  //   items: [
  //     {
  //       id: "behavioral-phenotyping",
  //       name: "Behavioral Phenotyping",
  //       subtitle: "Custom Assays & High-Throughput Platforms",
  //       tagline: "Custom assays, high throughput",
  //       description:
  //         "Tailored behavioural assays and high-throughput platforms, integrated with your imaging and neurophysiology workflows.",
  //       overview:
  //         "Our behavioural-phenotyping solutions cover the full arc of an experiment — designing custom assays, scaling them to high throughput, and integrating them with your imaging and neurophysiology workflows for a complete behavioural picture.",
  //       icon: FlaskConical,
  //       keyFeatures: [
  //         {
  //           title: "Custom Behavioral Assays",
  //           body: "Assays designed around your research question and model organism.",
  //         },
  //         {
  //           title: "High-Throughput Platforms",
  //           body: "Parallelised setups to run large cohorts and screens efficiently.",
  //         },
  //         {
  //           title: "Integrated with Imaging & Neurophysiology",
  //           body: "Behaviour combined with imaging and physiology for richer datasets.",
  //         },
  //       ],
  //       accent: "from-cyan-500 to-blue-600",
  //       image: "/dataAnalytics.jpg",
  //       imageTone: "figure",
  //     },
  //   ],
  // },
];

/** Flat list of every offering (used for JSON-LD / counts). */
export const allOfferings = productCategories.flatMap((c) => c.items);

/** Tags surfaced in the "Custom Services" callout (from the live site). */
export const customServiceTags = [
  "Engram analysis",
  "High-throughput screening",
  "Micro-CT",
  "Image analysis",
  "AI/ML data analytics",
  "Data automation",
  "Behavioral assay development",
  "Custom hardware development",
  "Hardware–software integration",
  "Microscopy",
  "Calcium image analysis",
  "Toxicity assay",
];

export function getCategory(id: string) {
  return productCategories.find((c) => c.id === id);
}

export function getOffering(id: string) {
  return allOfferings.find((offering) => offering.id === id);
}
