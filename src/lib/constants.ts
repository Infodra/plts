export const COMPANY = {
  name: "Power Lead Technical Services",
  shortName: "PLTS",
  fullName: "Power Lead Technical Services Co. WLL",
  tagline: "Providing Engineering Services and Solutions for Power Sector in Qatar",
  established: 2013,
  description:
    "Power Lead Technical Services Co. WLL (PLTS) was established in 2013 with a clear vision to deliver reliable, high-quality engineering services and innovative solutions to the power sector in Qatar. Since its inception, the company has steadily grown into a trusted service provider, recognized for its technical expertise, strong work ethics, and commitment to excellence.",
  address: "Post Box No. 63086, Doha, Qatar",
  mobile: "+974 55493012",
  mobile2: "+974 55817024",
  email: "info@pltsqatar.com",
  email2: "Sales@pltsqatar.com",
  workingHours: "Sat–Thu: 8 AM to 6 PM",
  closedDay: "Friday: Closed",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230867.22842752427!2d51.35265684682498!3d25.28554685498498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf6817e1a3!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1710000000000",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const SERVICES = [
  {
    id: "energy",
    title: "Energy Services",
    icon: "⚡",
    image: "/images/services-energy.png",
    description:
      "At Power Lead Technical Services Co. WLL (PLTS), we offer specialized Energy Services designed to improve efficiency, reduce operational costs, and support sustainable energy practices across various facilities and industries.",
    description2:
      "Our solutions focus on optimizing energy consumption, enhancing system performance, and helping clients achieve long-term energy savings while maintaining reliability and compliance with industry standards.",
    categories: [
      {
        name: "Energy Audits & Assessment",
        items: [
          "Detailed analysis of energy consumption patterns",
          "Identification of energy losses and inefficiencies",
          "Recommendations for cost-saving improvements",
        ],
      },
      {
        name: "Energy Efficiency Solutions",
        items: [
          "Implementation of energy-saving technologies",
          "Lighting upgrades (LED retrofits)",
          "Optimization of HVAC and electrical systems",
          "Power factor correction and load balancing",
        ],
      },
      {
        name: "Electrical Condition Monitoring",
        items: [
          "Transformer oil analysis and dissolved gas analysis (DGA)",
          "Partial discharge monitoring and testing",
          "Thermal imaging and infrared inspection of electrical assets",
          "HV and MV panel and transformer PD test assessment",
          "Motor current signature analysis (MCSA)",
          "Motor vibration and analysis",
        ],
      },
      {
        name: "Renewable Energy Solutions",
        items: [
          "Solar power system consultation and integration",
          "Feasibility studies for renewable energy projects",
          "Support for sustainable energy initiatives",
        ],
      },
      {
        name: "Operation & Maintenance Optimization",
        items: [
          "Energy-focused maintenance strategies",
          "Performance monitoring and reporting",
          "Continuous improvement plans for energy efficiency",
        ],
      },
    ],
    keyBenefits: [
      "Reduced energy consumption and operational costs",
      "Improved system performance and reliability",
      "Enhanced sustainability and environmental compliance",
      "Data-driven decision making",
      "Increased asset lifespan",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Services",
    icon: "🏗️",
    image: "/images/services-infrastructure.png",
    description:
      "At Power Lead Technical Services Co. WLL (PLTS), we provide comprehensive Infrastructure Services to support the development, installation, and maintenance of critical power and utility systems. Our expertise ensures reliable, efficient, and scalable infrastructure solutions tailored to meet the growing demands of modern industries and urban development in Qatar.",
    description2:
      "With a strong background in the power sector, PLTS delivers high-quality infrastructure services that comply with international standards while maintaining safety, performance, and long-term reliability.",
    categories: [
      {
        name: "Power Infrastructure Development",
        items: [
          "Installation of EHV & HV substations",
          "Cable laying (underground & overhead)",
          "Transformer installation and commissioning",
          "Switchgear installation and testing",
        ],
      },
      {
        name: "Electrical Network Solutions",
        items: [
          "LV, MV, and HV network installation",
          "Feeder pillar and distribution panel installation",
          "Street lighting systems and infrastructure",
          "Earthing and lightning protection systems",
        ],
      },
      {
        name: "Civil & Utility Support Works",
        items: [
          "Equipment foundation and structural works",
          "Trenching and ducting for cable routes",
          "Utility coordination and support services",
          "Infrastructure upgrade and rehabilitation",
        ],
      },
      {
        name: "Testing & Commissioning",
        items: [
          "Pre-commissioning and commissioning of electrical systems",
          "Protection relay testing and calibration",
          "System integration and performance verification",
        ],
      },
      {
        name: "Operation & Maintenance",
        items: [
          "Routine inspection and preventive maintenance",
          "Fault detection and corrective actions",
          "Asset management and lifecycle support",
        ],
      },
    ],
    keyBenefits: [
      "End-to-end infrastructure solutions",
      "Experienced engineering and technical team",
      "Compliance with local and international standards",
      "Use of advanced tools and technologies",
    ],
  },
  {
    id: "industries",
    title: "Industries Served",
    icon: "🏭",
    image: "/images/services-industries.png",
    description:
      "Power Lead Technical Services Co. WLL (PLTS) provides specialized engineering and technical services across a wide range of industries. With strong expertise in power systems, MEP, and infrastructure, we deliver reliable and efficient solutions tailored to the unique requirements of each sector.",
    description2:
      "Our experience enables us to understand industry-specific challenges and provide customized services that ensure operational efficiency, safety, and long-term performance.",
    categories: [
      {
        name: "Power & Energy",
        items: [
          "Power generation plants",
          "Transmission and distribution networks",
          "Substations (EHV, HV, MV, LV)",
          "Renewable energy projects",
        ],
      },
      {
        name: "Oil & Gas",
        items: [
          "Onshore and offshore facilities",
          "Refineries and petrochemical plants",
          "Electrical and instrumentation support services",
          "Maintenance and shutdown support",
        ],
      },
      {
        name: "Infrastructure & Utilities",
        items: [
          "Public infrastructure projects",
          "Water and utility networks",
          "District cooling and energy systems",
          "Urban development projects",
        ],
      },
      {
        name: "Commercial & Residential",
        items: [
          "High-rise buildings and complexes",
          "Shopping malls and retail spaces",
          "Hotels and hospitality facilities",
          "Residential compounds and communities",
        ],
      },
      {
        name: "Industrial & Manufacturing",
        items: [
          "Factories and production plants",
          "Warehouses and logistics facilities",
          "Process industries",
          "Heavy and light manufacturing units",
        ],
      },
    ],
    keyBenefits: [],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: "🛢️",
    image: "/images/services-oil-gas.png",
    description:
      "At Power Lead Technical Services Co. WLL (PLTS), we provide specialized Oil & Gas Services to support the complex and demanding requirements of the energy sector. Our expertise covers electrical, mechanical, and infrastructure services for both onshore and offshore facilities, ensuring safe, reliable, and efficient operations.",
    description2:
      "With a strong focus on quality, safety, and compliance, PLTS delivers solutions that meet international standards and industry best practices, supporting clients across all phases of their projects\u2014from installation to maintenance and shutdown support.",
    categories: [
      {
        name: "Electrical & Power Systems",
        items: [
          "Installation and maintenance of HV, MV, and LV systems",
          "Substation installation, testing, and commissioning",
          "Cable laying, termination, and fault troubleshooting",
          "Transformer and switchgear maintenance",
        ],
      },
      {
        name: "Instrumentation & Control",
        items: [
          "Installation and calibration of field instruments",
          "Control panel and system integration",
          "Loop checking and functional testing",
          "SCADA and automation support",
        ],
      },
      {
        name: "Mechanical & MEP Services",
        items: [
          "HVAC systems for industrial facilities",
          "Pumps, motors, and rotating equipment maintenance",
          "Piping support and utility systems",
          "Preventive and corrective maintenance",
        ],
      },
      {
        name: "Shutdown & Turnaround Services",
        items: [
          "Planned shutdown maintenance support",
          "Inspection, testing, and repairs",
          "Resource mobilization and project execution within tight timelines",
        ],
      },
      {
        name: "Testing & Commissioning",
        items: [
          "Pre-commissioning and commissioning of systems",
          "Protection relay testing",
          "Performance testing and system validation",
        ],
      },
    ],
    keyBenefits: [
      "Experienced workforce with oil & gas sector knowledge",
      "Strict adherence to HSE and international standards",
      "Capability to handle high-risk and complex environments",
      "Timely project execution with minimal downtime",
      "Advanced tools and testing equipment",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Testing",
    icon: "🔧",
    image: "/images/services-maintenance.png",
    description:
      "At Power Lead Technical Services Co. WLL (PLTS), we provide comprehensive Maintenance & Testing Services to ensure the reliability, safety, and optimal performance of electrical and power systems. Our services are designed to minimize downtime, extend equipment life, and ensure compliance with industry standards.",
    description2:
      "With a team of experienced engineers and technicians, PLTS delivers both preventive and corrective maintenance, along with advanced testing solutions for EHV, HV, and LV systems.",
    categories: [
      {
        name: "Preventive Maintenance",
        items: [
          "Scheduled inspection and servicing of electrical systems",
          "Substation equipment maintenance (transformers, switchgear, breakers)",
          "Cleaning, tightening, and calibration of components",
          "Condition monitoring and performance checks",
        ],
      },
      {
        name: "Corrective Maintenance",
        items: [
          "Fault detection and troubleshooting",
          "Emergency repair services",
          "Replacement of defective components",
          "System restoration with minimal downtime",
        ],
      },
      {
        name: "Electrical Testing Services",
        items: [
          "Transformer testing (IR, winding resistance, ratio tests)",
          "Circuit breaker testing and timing analysis",
          "Cable testing (HV withstand, insulation testing)",
          "Protection relay testing and calibration",
        ],
      },
      {
        name: "Commissioning & Diagnostics",
        items: [
          "Pre-commissioning and commissioning tests",
          "Functional and performance testing",
          "Thermal imaging and fault diagnostics",
          "Root cause analysis and reporting",
        ],
      },
      {
        name: "Specialized Testing Equipment",
        items: [
          "Use of advanced testing instruments and calibrated tools",
          "Accurate data recording and analysis",
          "Compliance with international testing standards",
        ],
      },
    ],
    keyBenefits: [
      "Highly skilled and certified technical team",
      "Advanced diagnostic and testing tools",
      "Compliance with international safety and quality standards",
      "Quick response and reliable service delivery",
      "Focus on minimizing downtime and operational risks",
    ],
  },
  {
    id: "facility-management",
    title: "Facility Management Services (MEP)",
    icon: "🏢",
    image: "/images/services-facility.png",
    description:
      "At Power Lead Technical Services Co. WLL (PLTS), we provide comprehensive Facility Management Services for MEP (Mechanical, Electrical, and Plumbing systems), ensuring the efficient operation, maintenance, and longevity of building infrastructure.",
    description2:
      "Our MEP facility management solutions are designed to enhance system performance, reduce downtime, and ensure safety and compliance with industry standards. With a team of skilled technicians and engineers, we deliver both preventive and corrective maintenance services tailored to client requirements.",
    categories: [
      {
        name: "Electrical Systems",
        items: [
          "Operation and maintenance of LV & HV electrical systems",
          "Transformer and switchgear maintenance",
          "Lighting systems (indoor & outdoor) maintenance",
          "Emergency power systems (UPS & generators)",
          "Cable management and fault troubleshooting",
        ],
      },
      {
        name: "Mechanical Systems",
        items: [
          "HVAC (Heating, Ventilation & Air Conditioning) maintenance",
          "Chillers, AHUs, FCUs inspection and servicing",
          "Ventilation and exhaust systems",
          "Pumps and motor maintenance",
        ],
      },
      {
        name: "Plumbing Systems",
        items: [
          "Water supply and distribution systems",
          "Drainage and sewage systems maintenance",
          "Pump stations and water tanks",
          "Leak detection and repair",
        ],
      },
    ],
    keyBenefits: [
      "Preventive Maintenance Programs to reduce unexpected breakdowns",
      "24/7 Support & Emergency Response",
      "Energy Efficiency Optimization to reduce operational costs",
      "Compliance with Safety & Regulatory Standards",
      "Skilled Workforce with Industry Experience",
      "Use of Advanced Tools & Technology",
    ],
  },
  {
    id: "kahramaa",
    title: "Kahramaa Services",
    icon: "🏛️",
    image: "/images/services-kahramaa.png",
    description:
      "PLTS provides comprehensive Kahramaa-related services, including substation access coordination, emergency shutdowns, meter installations, and load upgradation for commercial buildings — ensuring seamless compliance and coordination with Kahramaa authorities.",
    description2:
      "Our experienced team handles all aspects of Kahramaa coordination, from initial approvals to final commissioning, ensuring smooth and timely execution of all utility-related projects.",
    categories: [
      {
        name: "Kahramaa Coordination & Access",
        items: [
          "Kahramaa substation LOA access",
          "Emergency shutdown coordination",
        ],
      },
      {
        name: "Metering & Installation",
        items: [
          "Water shifting and new meter installation & coordination",
          "Electrical meter installation and coordination",
        ],
      },
      {
        name: "Load Upgradation & Testing",
        items: [
          "Commercial building electrical load upgradation",
          "REF relay testing and complete coordination",
        ],
      },
    ],
    keyBenefits: [
      "End-to-end Kahramaa coordination and approvals",
      "Experienced team familiar with Kahramaa procedures",
      "Timely execution of meter installations and load changes",
      "Full compliance with Kahramaa standards and regulations",
      "Seamless emergency shutdown coordination",
    ],
  },
] as const;

export const PRODUCTS = [
  {
    title: "Transformer and Accessories",
    description:
      "Power transformers, distribution transformers, and associated accessories including bushings, tap changers, cooling systems, and transformer oil management solutions for reliable energy transformation.",
    icon: "⚡",
  },
  {
    title: "HV Switchgears & RMU",
    description:
      "High Voltage switchgears and Ring Main Units (RMU) for safe and efficient power distribution in substations and industrial networks, designed for reliable switching and protection.",
    icon: "🔌",
  },
  {
    title: "MV/LV Switchgears",
    description:
      "Medium Voltage and Low Voltage switchgear panels for power distribution, motor control, and protection applications across commercial and industrial facilities.",
    icon: "🔧",
  },
  {
    title: "Distribution MDB / SMDB / DB / ATS / Capacitors",
    description:
      "Main Distribution Boards (MDB), Sub-Main Distribution Boards (SMDB), Distribution Boards (DB), Automatic Transfer Switches (ATS), and power factor correction capacitor banks.",
    icon: "📊",
  },
  {
    title: "UPS & Batteries",
    description:
      "Uninterruptible Power Supply systems, battery banks, and battery chargers ensuring continuous and reliable backup power for critical infrastructure and operations.",
    icon: "🔋",
  },
  {
    title: "Oil Type and Dry Type",
    description:
      "Oil-filled and dry-type transformers suited for indoor and outdoor installations, offering efficient voltage regulation with options for various environmental and space requirements.",
    icon: "🏭",
  },
] as const;

export const TEAM = [
  {
    name: "Mr. Hamad Mohammed",
    role: "Managing Director",
    qualifications: "T B Al - Raseei",
  },
  {
    name: "Mr. S K Sakthivel",
    role: "CEO",
    qualifications: "KAHRAMAA, QATAR ENERGY & UPDA Approved Engineer",
  },
  {
    name: "Mr. Antony Samy",
    role: "Vice CEO",
    qualifications: "KAHRAMAA, QATAR ENERGY & UPDA Approved Engineer",
  },
  {
    name: "Mr. Venish",
    role: "General Manager",
    qualifications: "KAHRAMAA, QATAR ENERGY & UPDA Approved Engineer",
  },
] as const;

export const CLIENTS = [
  { name: "Larsen & Toubro (L&T)", logo: "/images/logos/lt.png" },
  { name: "Isolux Corsán", logo: "/images/logos/isolux.png" },
  { name: "Hyosung", logo: "/images/logos/hyosung.png" },
  { name: "Siemens", logo: "/images/logos/siemens.png" },
  { name: "ABB", logo: "/images/logos/abb.png" },
  { name: "LS Cable & System", logo: "/images/logos/ls-cable.png" },
  { name: "Končar", logo: "/images/logos/koncar.jpg" },
  { name: "Bin Omran Trading", logo: "/images/logos/bin-omran.png" },
  { name: "Mak Bava", logo: "/images/logos/mak-bava.png" },
  { name: "NCC", logo: "/images/logos/ncc.png" },
  { name: "Končar D&ST", logo: "/images/logos/koncar-dst.jpg" },
  { name: "KM" },
  { name: "QE" },
  { name: "QF" },
  { name: "SNC" },
  { name: "Waseef" },
  { name: "Elegencia" },
  { name: "Raffels" },
  { name: "EMCO" },
  { name: "Gulf Air" },
  { name: "Influx Services & Trading" },
] as const;

export const STATS = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Expert Engineers", value: 100, suffix: "+" },
] as const;

export const PROJECT_AREAS = [
  "Property Developers",
  "Petrochemicals",
  "Transmission & Distribution Substations",
  "Captive Power Plants",
  "Electrification in Transportation Network",
] as const;

export const PROJECT_CAPABILITIES = [
  "Supply, Installation of Electrical High/Low Voltage Systems (Indoor/Outdoor)",
  "Gas Insulated Switchgears",
  "Air Insulated Switchgears",
  "Power Transformers and Station Transformers",
  "Relay & Control, LCC Panels",
  "Battery & Battery Chargers, UPS",
  "LVAC Boards & LVDC Boards",
  "Control & LV Power Cabling",
  "Earthing & Lightning Protections",
  "Retrofit, Replacement, Repairs for Existing Live Substations",
  "Supply, Installation of HV/MV/LV Cables",
  "Testing and Commissioning up to 220kV Substations",
  "Operation and Maintenance of Substation Equipments",
  "Specialized Manpower Secondment",
  "Supply of Electrical Testing Equipment",
  "Cable Coating and Fire Sealant",
  "Engraving Tags & Marking for Stainless Steel and Trifoliate",
] as const;
