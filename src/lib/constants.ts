export const COMPANY = {
  name: "Power Lead Technical Services",
  shortName: "PLTS",
  fullName: "Power Lead Technical Services Co. WLL",
  tagline: "Providing Engineering Services and Solutions for Power Sector in Qatar",
  established: 2013,
  description:
    "Power Lead Technical Services Co. WLL (PLTS) was established in 2013 and has been providing Engineering services and solutions for power sector in Qatar. Over the years, PLTS has achieved consistent growth in business due to our proven strength in providing specialised services and quality assurance with our highly dedicated manpower.",
  address: "Post Box No. 63086, Doha, Qatar",
  phone: "+974 44715785",
  mobile: "+974 55493012",
  email: "info@pltsqatar.com",
  email2: "p.mayakannan@pltsqatar.com",
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
    title: "Energy",
    icon: "⚡",
    description:
      "Installation, testing and commissioning of electrical systems up to 400kV for substations and power plants.",
    features: [
      "Installation of HV, MV & LVAC Equipments",
      "Testing and Commissioning of Electrical Equipments",
      "Refurbishment of Switchgears and Protection Panels",
      "Control Cable Laying and Termination",
      "Engineering Support for Electrical Projects",
      "Rental of Advanced Testing Equipments",
      "Supply of Qualified Resources for Site Services",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "🏗️",
    description:
      "Comprehensive infrastructure solutions for power transmission and distribution networks across Qatar.",
    features: [
      "Route Design for EHV Cable Circuits",
      "Substation Internal EHV Cable Laying",
      "Piping and Structural Fabrication",
      "EHV Cable Support Erection",
      "Panel Base Frame Installation",
      "Underground Cable Network Design",
      "Transmission Line Support Services",
    ],
  },
  {
    id: "industries",
    title: "Industries",
    icon: "🏭",
    description:
      "Tailored electrical engineering solutions for industrial facilities, factories, and manufacturing plants.",
    features: [
      "Industrial Electrical System Design",
      "Power Distribution Solutions",
      "Motor Control Center Installation",
      "Industrial Automation Support",
      "Electrical Safety Audits",
      "Energy Efficiency Consulting",
      "Preventive Maintenance Programs",
    ],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: "🛢️",
    description:
      "Specialized electrical services for oil and gas facilities including refineries, pipelines, and processing plants.",
    features: [
      "Hazardous Area Electrical Installations",
      "Explosion-Proof Equipment Installation",
      "Process Control System Support",
      "Emergency Power Systems",
      "Cathodic Protection Systems",
      "Offshore Electrical Support",
      "Safety Instrumented Systems",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance & Testing",
    icon: "🔧",
    description:
      "Ongoing maintenance, testing, and commissioning services to ensure optimal performance of electrical systems.",
    features: [
      "Preventive Maintenance Programs",
      "High Voltage Testing (up to 220kV)",
      "Protection Relay Testing & Calibration",
      "Power Transformer Testing",
      "Circuit Breaker Maintenance",
      "Insulation Resistance Testing",
      "Thermal Imaging Surveys",
    ],
  },
] as const;

export const PRODUCTS = [
  {
    title: "Gas Insulated Switchgears",
    description:
      "High-performance GIS up to 220kV for compact and reliable power distribution in substations.",
    category: "Switchgears",
  },
  {
    title: "Air Insulated Switchgears",
    description:
      "Robust AIS solutions for outdoor substations with proven reliability and easy maintenance.",
    category: "Switchgears",
  },
  {
    title: "Power Transformers",
    description:
      "Power transformers and station transformers up to 315MVA for efficient energy transformation.",
    category: "Transformers",
  },
  {
    title: "Relay & Control Panels",
    description:
      "Advanced protection relay and control panels including LCC panels for substation automation.",
    category: "Control Systems",
  },
  {
    title: "Battery & UPS Systems",
    description:
      "Battery banks, battery chargers, and UPS systems ensuring uninterrupted power supply.",
    category: "Power Supply",
  },
  {
    title: "LVAC & LVDC Boards",
    description:
      "Low voltage AC and DC distribution boards engineered for reliable power distribution.",
    category: "Distribution",
  },
  {
    title: "Control & Power Cabling",
    description:
      "Complete control and LV power cabling solutions including cable coating and fire sealant.",
    category: "Cabling",
  },
  {
    title: "Testing Equipment",
    description:
      "Supply and rental of advanced testing equipment from Omicron, Megger, Fluke, and more.",
    category: "Testing",
  },
] as const;

export const TEAM = [
  {
    name: "P. Mayakannan",
    role: "Founder & Managing Director",
    bio: "A Graduate in Electrical Engineering, with over 15 years of experience in India and the Middle East in the field of construction of Electrical High/Low Voltage Systems.",
  },
  {
    name: "N. Yuvanesan",
    role: "HR Manager",
    bio: "Experienced HR professional managing human resources operations and talent acquisition for the company.",
  },
  {
    name: "Amit Sharma",
    role: "Accounts Manager",
    bio: "Over 20+ years of experience in India and the Middle East, managing financial operations and accounts.",
  },
  {
    name: "P. Jayakanthan",
    role: "Planning Engineer & Electrical Design Engineer",
    bio: "A graduate in Electrical and Electronics Engineering, with over 10+ years of experience in India and the Middle East.",
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
