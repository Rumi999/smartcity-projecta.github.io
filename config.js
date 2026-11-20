// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "SUMO Traffic Simulation Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Rumi Alkhani",
    program: "Automation Engineering / Engineering",
    university: "McMaster University, Canada",
    email: "alkhanir@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Evaluating AV Integration and Intersection Efficiency at Sheppard Ave W & Yonge St: A SUMO-Based Traffic Simulation and Demand Analysis",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): GIS Network → SUMO Simulation → Scenario Comparison → Speed-Density Results"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			 "Urban congestion in Toronto has reached severe levels, with drivers losing an average of 100 hours during rush hour.",

"Microscopic traffic simulation platforms like SUMO.",

"Connected Autonomous Vehicles (CAVs) have the potential to reduce human driving variability.",

"Traffic signal timing adjustments offer a cost-effective operational lever to reduce queueing." 
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			 "Human-driven traffic (HDV) exhibits variance in perception, braking, and gaps that leads to congestion and stop-and-go instability.",

"Municipalities cannot infer 100% CAV fleet speed-density performance solely from human-driven baselines.",

"Signal re-timing requires quantitative before-and-after evidence, alongside assessment of potential side-street delay trade-offs.",

"Committing municipal capital investments without empirical field calibration, network-wide routing, and mixed-traffic sensitivity." 
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			 "Build a digitized SUMO road network for Sheppard Ave W & Yonge St (Stage A1) and establish a 100% HDV baseline.",

"Evaluate and compare speed-density performance between a 100% HDV baseline and a 100% CAV.",

"Design, implement, and assess Intervention X (adding an 8-second left-turn advanced green within a 60-second cycle).",

"Identify modeling limitations and outline empirical data collection and network-wide evaluation." 
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Stage A1 & A2: Network & HDV Baseline (SUMO)",
				text: "Digitize the Sheppard Ave W & Yonge St network in netedit and simulate the 100% HDV baseline on Edge E145.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Scenario B: Controlled 100% CAV Fleet",
				text: "Configure automated car-following parameters (τ = 0.5s, σ = 0.0, s0 = 1.0m) under identical demand and signal timing.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Scenario C: Signal Intervention X",
				text: "Add an 8-second left-turn advanced green within a 60-second cycle on a 100% HDV fleet and evaluate Edge E145.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Speed-Density Analysis & Recommendations",
				text: "Compare fitted vf and kj values, assess limitations, and outline empirical next steps for Toronto.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Roadway Network & HDV Baseline (SUMO)",
        bullets: [
				  { text: "Digitize Sheppard Ave W & Yonge St geometry, lanes, turning bays, and junctions in netedit using aerial and GIS layers." },
          { text: "Resolve TLS phase alignment with custom geometry and refine vehicle departure foresight to prevent artificial upstream bottlenecks." },
          { text: "Run 3,600-second simulations (300s warmup) with 300 veh/h through and 150 veh/h turning demand, collecting 60s loop data on Edge E145." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Controlled 100% CAV Simulation (Scenario B)",
        bullets: [
          { text: "Retain identical network geometry, traffic demand, routing, turning ratios, and Lab 2 signal timing from the baseline." },
          { text: "Update vehicle-following attributes to reaction time τ = 0.5s, imperfection σ = 0.0, and minimum gap s0 = 1.0m." },
          { text: "Extract speed-density observations on Edge E145 to evaluate flow efficiency against the HDV baseline." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Operational Signal Modification (Intervention X)",
        bullets: [
				  { text: "Diagnose heavy queueing and densities over 200 veh/km on Edge E145 in the 100% HDV baseline." },
          { text: "Add an 8-second left-turn advanced green while keeping a 60-second cycle by reducing through green to 19s with yellow transitions." },
          { text: "Execute Scenario C with a 100% HDV fleet under identical demand and geometry for before-and-after comparison." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Speed-Density Evaluation & Next Steps",
        bullets: [
          { text: "Fit linear speed-density curves to evaluate free-flow speed (vf), jam density (kj), and correlation (R²) across scenarios." },
          { text: "Examine congestion reduction benefits alongside potential cross-street delay transfers and re-timing costs." },
          { text: "Highlight needs for empirical video/radar counts, network-wide modeling, and mixed HDV/CAV transition analysis." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"SUMO speed-density simulation results on approach Edge E145 across 100% HDV baseline, 100% CAV, and signal Intervention X scenarios. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Base Scenario: 100% HDV",
					src: "assets/img/image6.jpg",
					alt: "Base Scenario: 100% HDV"
				},
				right: {
					title: "Scenario 1 — 100% CAV",
					src: "assets/img/image7.jpg",
					alt: "Scenario 1 100% CAV"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"The 100% HDV baseline on Edge E145 exhibits two-regime clustering with severe congestion near jam density (fitted vf = 14.14 m/s, kj = 259.2 veh/km, R² = 0.963).",
				"The 100% CAV scenario shifts points into low-density free-flow operation under 25 veh/km (fitted vf = 15.71 m/s, kj = 118.7 veh/km, R² = 0.882) due to shorter reaction times, smaller gaps, and zero driver imperfection.",
				"Because CAV points lack high-density observations above 50 veh/km, the extrapolated kj value is unverified and represents an idealized 100% CAV best case rather than mixed traffic.",
				"Intervention X (8s left-turn advanced green) eliminates 200+ veh/km queue clusters on Edge E145, clustering data around 10–20 veh/km with vf = 16.84 m/s and kj = 79.4 veh/km.",
				"Reducing cross-street green time by 15s may shift delays to intersecting approaches, so empirical demand calibration, network-wide modeling, and corridor cost analysis are needed before municipal investment."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Rumi Alkhani", role: "NexGen Transit Solutions — SUMO Network Modeling, CAV & Signal Intervention Simulation, Speed-Density Analysis" }
    ],

    acknowledgments: [
      "Course: Smart Cities and Communities (SMRTTECH 4SC3)",
      "Institution: McMaster University, Hamilton, Ontario, Canada",
      "Team: Rumi Alkhani, Samuel Rosales, Oliver Naruse, Viroz D’Souza",
      "Tools: SUMO (netedit), GIS / Aerial Imagery, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
