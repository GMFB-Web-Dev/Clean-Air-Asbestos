export type Service = {
  slug: string;
  navTitle: string;
  title: string;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  introEyebrow: string;
  introTitle: string;
  intro: string[];
  detailEyebrow: string;
  detailTitle: string;
  detail: string[];
  coversTitle: string;
  covers: string[];
};

export const serviceCards = [
  ["class-a-b-removal", "CLASS A & B ASBESTOS REMOVAL", "Licensed asbestos removal for both friable and non-friable materials, carried out with careful planning, strict safety controls, and WorkSafe notification where required."],
  ["contaminated-soil", "CONTAMINATED SOIL", "Management and removal support for asbestos-contaminated soil, helping keep sites safe, compliant, and ready for the next stage of work."],
  ["mould-remediation", "MOULD REMEDIATION", "Practical mould remediation for affected homes, buildings, and project sites, with clear guidance on what needs to happen and how the process works."],
  ["methamphetamine-decontamination", "METHAMPHETAMINE DECONTAMINATION", "Property decontamination support for clients dealing with methamphetamine contamination."],
  ["light-demolition", "LIGHT DEMOLITION", "Light demolition support connected to asbestos, hazardous material, or site preparation works."],
  ["oversight-management", "OVERSIGHT MANAGEMENT", "Project support from asbestos removal through to demolition, scaffolding, builders, roofers, and completion."],
] as const;

export const services: Record<string, Service> = {
  "class-a-b-removal": {
    slug: "class-a-b-removal", navTitle: "Class A & B Asbestos Removal", title: "Class A & B Asbestos Removal",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "LICENSED CLASS A & B ASBESTOS REMOVAL",
    heroText: "Clear Air provides licensed asbestos removal for both friable and non-friable materials, helping clients manage regulated site work safely, clearly, and with the right controls in place.",
    heroImage: "/assets/live/d4ee61d9023242a4980669ce804cb7d9b82a583c.png",
    introEyebrow: "LICENSED FRIABLE & NON-FRIABLE ASBESTOS REMOVAL", introTitle: "CLASS A & B ASBESTOS REMOVAL",
    intro: [
      "Clear Air provides Class A and Class B asbestos removal for residential, commercial, and regulated sites across Wellington and the wider region. With over 25 years of experience, the team helps clients manage asbestos safely, clearly, and in line with the required process.",
      "Whether the job involves friable asbestos, non-friable asbestos, or asbestos found during wider site works, Clear Air takes a careful and practical approach from the first enquiry through to completion. The team can review the site, gather the right information, confirm whether a site visit is needed, and provide a clear fixed price quote before work begins.",
    ],
    detailEyebrow: "LICENSED FRIABLE & NON-FRIABLE ASBESTOS REMOVAL", detailTitle: "SAFE, PLANNED & COMPLIANT ASBESTOS REMOVAL",
    detail: [
      "Asbestos removal is a heavily regulated process, so the right planning matters. For certain asbestos removal works, including Class B work over 10 square metres or friable material removal, WorkSafe requires a mandatory five day notification period before work can begin. Clear Air helps guide clients through these requirements so they understand what needs to happen and when.",
      "The team also helps clients understand when an independent assessor may be required. For domestic work, Clear Air can help facilitate this process, while commercial projects may require the PCBU to manage assessor responsibilities directly. Either way, Clear Air provides clear guidance so the project can move forward properly.",
    ],
    coversTitle: "CLASS A & CLASS B SUPPORT", covers: [],
  },
  "contaminated-soil": {
    slug: "contaminated-soil", navTitle: "Contaminated Soil", title: "Contaminated Soil",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "ASBESTOS CONTAMINATED SOIL SUPPORT SERVICES",
    heroText: "Management and removal support for asbestos-contaminated soil across Wellington and the wider region. Clear Air helps keep sites safe, controlled, and ready for the next stage of work with clear guidance from review through to completion.",
    heroImage: "/assets/live/attachment-9.png",
    introEyebrow: "CONTAMINATED SOIL", introTitle: "ASBESTOS-CONTAMINATED SOIL SUPPORT",
    intro: ["Clear Air provides management and removal support for asbestos-contaminated soil across Wellington and the wider region. The team helps clients understand what needs to happen, how the site should be managed, and what steps are required to move the project forward safely.", "Contaminated soil work can be part of residential, commercial, demolition, or wider site preparation projects. Clear Air takes a practical and careful approach, helping keep sites controlled, compliant, and ready for the next stage of work."],
    detailEyebrow: "MANAGING CONTAMINATED SOIL WITH CARE", detailTitle: "SAFE SUPPORT FOR AFFECTED SITES",
    detail: ["Asbestos-contaminated soil needs to be handled with care. Clear Air can review the site, gather the right information, and help guide the process from initial enquiry through to planning, quoting, and completion. The goal is to make the process clear for clients while ensuring the work is managed safely and responsibly."],
    coversTitle: "FROM SITE REVIEW TO SAFE REMOVAL",
    covers: ["Asbestos-contaminated soil support", "Site review and project guidance", "Residential and commercial site work", "Soil removal and management support", "Demolition and site preparation support", "Clear planning before work begins", "Safe handling and controlled site processes", "Guidance through compliance requirements"],
  },
  "mould-remediation": {
    slug: "mould-remediation", navTitle: "Mould Remediation", title: "Mould Remediation",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "PRACTICAL MOULD REMEDIATION SITE SUPPORT",
    heroText: "For properties affected by mould, Clear Air provides practical support to help identify the work required and plan the right way forward. The team works across homes, buildings, and project sites, offering clear advice and careful remediation support across Wellington and the wider region.",
    heroImage: "/assets/live/bfd4fed6bca1a12b4c401c135af4c9161d31dd09.png",
    introEyebrow: "CLEAR GUIDANCE FOR AFFECTED SPACES", introTitle: "MOULD REMEDIATION SUPPORT",
    intro: ["Practical mould remediation support for affected homes, buildings, and project sites across Wellington and the wider region. Clear Air helps clients understand what needs to happen, how the issue should be approached, and what steps are required to manage the work safely and responsibly."],
    detailEyebrow: "CLEAR GUIDANCE FOR AFFECTED SPACES", detailTitle: "PRACTICAL SUPPORT FOR MOULD ISSUES",
    detail: ["Mould can affect homes, commercial buildings, and wider project sites, especially where moisture, damage, or building works are involved. Clear Air provides clear guidance from the first enquiry, helping clients understand whether a review, site visit, or further information is needed before the work is planned.", "The team takes a practical approach, making the process easier to understand and helping clients move forward with the right support."],
    coversTitle: "FROM SITE REVIEW TO SAFE REMOVAL",
    covers: ["Mould remediation support", "Homes, buildings, and project sites", "Site review and practical guidance", "Support for moisture affected areas", "Clear advice on next steps", "Planning around site conditions", "Safe and responsible work processes", "Guidance from enquiry through to completion"],
  },
  "methamphetamine-decontamination": {
    slug: "methamphetamine-decontamination", navTitle: "Methamphetamine Decontamination", title: "Methamphetamine Decontamination",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "METHAMPHETAMINE DECONTAMINATION SERVICES",
    heroText: "Clear Air provides practical support for properties affected by methamphetamine contamination, helping clients understand the next steps and manage decontamination work safely.", heroImage: "/assets/live/attachment.png",
    introEyebrow: "PROPERTY SUPPORT FOR CONTAMINATED SPACES", introTitle: "METHAMPHETAMINE DECONTAMINATION",
    intro: ["Clear Air provides methamphetamine decontamination support for clients dealing with affected properties across Wellington and the wider region. The team helps property owners, landlords, property managers, and project teams understand what may be required and how to move forward safely."],
    detailEyebrow: "METH DECONTAMINATION SUPPORT", detailTitle: "SUPPORT FOR AFFECTED PROPERTIES",
    detail: [
      "Methamphetamine contamination can create stress and uncertainty for anyone responsible for a property. Clear Air provides practical support to help manage the issue, plan the work required, and guide clients through the next steps clearly.",
      "Whether the property is residential, rental, commercial, or part of a wider site project, the team can help review the situation and provide decontamination support based on what is required.",
    ],
    coversTitle: "CLEAR GUIDANCE FOR DECONTAMINATION WORK",
    covers: ["Methamphetamine decontamination support", "Residential and rental properties", "Commercial and managed properties", "Property owner and landlord support", "Site review and practical guidance", "Clear advice on the next steps", "Planning around affected areas", "Decontamination work where required"],
  },
  "light-demolition": {
    slug: "light-demolition", navTitle: "Light Demolition", title: "Light Demolition",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "LIGHT DEMOLITION SITE SUPPORT SERVICES",
    heroText: "Reliable support services for light demolition projects, helping maintain safe, efficient, and well-organized worksites throughout every stage of the job.", heroImage: "/assets/live/attachment-1.png",
    introEyebrow: "PRACTICAL HELP FOR SITE WORKS", introTitle: "LIGHT DEMOLITION SUPPORT",
    intro: ["Clear Air supports light demolition work where it connects to asbestos, hazardous materials, contaminated areas, or site preparation, providing practical guidance from planning to completion."],
    detailEyebrow: "SUPPORT FOR SITE WORKS", detailTitle: "PRACTICAL DEMOLITION SUPPORT FOR SITE WORKS",
    detail: ["Some projects need more than asbestos removal alone. Clear Air can support light demolition work where it connects to asbestos, hazardous materials, contaminated areas, or site preparation. For larger demolition work, Clear Air can help manage the process by coordinating with trusted demolition contractors, giving clients one clear point of support from the early planning stage through to completion."],
    coversTitle: "CLEAR GUIDANCE FOR LIGHT DEMOLITION WORK",
    covers: ["Light demolition support", "Site preparation works", "Demolition connected to asbestos removal", "Hazardous material related demolition", "Removal and cleanup support", "Coordination with demolition contractors", "Support for residential and commercial projects", "Guidance from planning through to completion"],
  },
  "oversight-management": {
    slug: "oversight-management", navTitle: "Oversight Management", title: "Oversight Management",
    heroEyebrow: "Start With Clear Guidance", heroTitle: "OVERSIGHT MANAGEMENT SERVICES",
    heroText: "Reliable project support for works involving asbestos removal, demolition, scaffolding, builders, roofers, and wider site coordination.", heroImage: "/assets/live/attachment-2.png",
    introEyebrow: "CLEAR COORDINATION FOR SITE WORKS", introTitle: "OVERSIGHT MANAGEMENT SERVICES",
    intro: ["Clear Air provides oversight management for clients who need support coordinating multiple parts of a project. From asbestos removal through to demolition, scaffolding, building work, roofing, and completion, the team helps guide the process and keep the work moving in the right order."],
    detailEyebrow: "ONE POINT OF CONTACT FROM START TO FINISH", detailTitle: "PROJECT SUPPORT FOR COMPLEX SITE WORKS",
    detail: ["Some projects involve more than one service, contractor, or stage of work. Clear Air can support clients by helping manage the wider process, especially when asbestos removal, hazardous materials, demolition, or site preparation are involved. This gives clients a clear point of contact and practical guidance across the different steps required to complete the job safely and responsibly."],
    coversTitle: "MANAGED SUPPORT ACROSS EVERY STAGE",
    covers: ["Oversight management support", "Asbestos removal coordination", "Demolition support", "Scaffolding coordination", "Builder and roofer coordination", "Hazardous material related project support", "Site preparation guidance", "Support from planning through to completion"],
  },
};

export const processSteps = [
  ["ENQUIRY & INFORMATION", "The team gathers the key details about the site, material, photos if available, and what work may be required."],
  ["SITE VISIT OR PHOTO REVIEW", "Some jobs can be reviewed from photos, while larger or more complex work may require a site visit before pricing."],
  ["CLEAR QUOTE & PLANNING", "Clear Air provides a clear quote, then helps plan the work around safety requirements, timeframes, and any required notifications."],
  ["SAFE COMPLETION", "The work is completed safely, carefully, and in line with the required process, with guidance provided through to completion."],
] as const;

export const values = [
  ["TRUSTWORTHY", "Clear, honest communication and work carried out properly from the first enquiry through to completion.", "/assets/live/Rectangle-2.svg"],
  ["FAMILY COMPANY CULTURE", "A supportive, people-first team culture built on respect, care, and looking after each other.", "/assets/live/Rectangle-3.svg"],
  ["INTEGRITY", "Following the right process, taking responsibility, and standing by the work.", "/assets/live/Rectangle-4.svg"],
  ["ADAPTABILITY", "Working around different site conditions, project needs, timelines, and safety requirements.", "/assets/live/Rectangle-5.svg"],
] as const;

export const team = [
  ["JASON NICOL", "Director"], ["IAN CASSIDY", "Health & Safety and Operations Manager"], ["CATHERINE NICOL", "Office Manager"], ["MICHAEL NICOL", "Project Manager"], ["LENE OGO", "A-Class Supervisor"], ["MASON PA'UU", "A-Class Supervisor"], ["ANDREW MCGRATH", "A-Class Supervisor"], ["BRIAN WAGNER", "A-Class Supervisor"], ["ERUERA MOHI", "A-Class Supervisor"], ["KRYTON WALLIS", "B-Class Supervisor"],
] as const;

export const areas = ["Porirua", "Hutt Valley", "Kāpiti", "Horowhenua", "Masterton", "Wairarapa Region", "Wellington Region"];
