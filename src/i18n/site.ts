import type { Locale } from "./routing";

export const siteContent = {
  ro: {
    meta: {
      home: {
        title: "ISAF | Infrastructura feroviara",
        description:
          "Pagina ISAF pentru servicii de proiectare, productie, integrare si electrificare in infrastructura feroviara.",
      },
      certifications: {
        title: "ISAF | Certificări",
        description:
          "Certificările ISAF pentru sistemele de management al calității, mediului, sănătății și securității în muncă.",
      },
    },
    header: {
      homeLabel: "Pagina principala ISAF",
      navLabel: "Navigare principala",
      about: "Despre noi",
      solutions: "Soluții",
      production: "Producție",
      certifications: "Certificări",
      contact: "Contact",
      menuOpen: "Deschide meniul de navigare",
      menuClose: "Închide meniul de navigare",
      switchLanguage: "Schimbă limba în engleză",
      nextLanguage: "EN",
    },
    hero: {
      ariaLabel:
        "ISAF - semnalizare, linii de contact si electrificare feroviara",
      eyebrow: ["Sisteme de linii de contact,", "semnalizare și electrificare"],
      title: "Partener strategic în infrastructură",
      titleAccent: "feroviară",
      lead: "Construim și modernizăm infrastructura feroviară din România, prin soluții integrate, tehnologii avansate și parteneriate de durată.",
      cta: "Vezi soluțiile noastre",
      experienceValue: "75+",
      experienceCaption: "Ani de experiență",
      railValue: "9.500",
      railUnit: "km",
      railCaption: "Cale ferată electrificată",
      partnershipsValue: "Parteneriate",
      partnershipsCaption: "Durabile și performante",
    },
    about: {
      title: "Despre ISAF",
      description:
        "ISAF este un grup românesc cu experiență solidă în proiectarea, execuția și modernizarea infrastructurii feroviare. De peste șapte decenii, livrăm soluții fiabile și sustenabile, alături de parteneri de încredere, pentru un transport feroviar sigur și performant.",
      timelineLabel: "Repere din istoria ISAF",
      timeline: [
        {
          title: "1951",
          description:
            "Înființarea ISAF S.A. și primii pași în construirea infrastructurii feroviare",
        },
        {
          title: "Extindere",
          description:
            "Diversificarea capacităților de producție și consolidarea competențelor tehnice",
        },
        {
          title: "Modernizare",
          description:
            "Investiții în tehnologie, echipamente și procese pentru creșterea calității și eficienței.",
        },
        {
          title: "Proiecte",
          description:
            "Implicare și proiecte strategice de infrastructură feroviară în întreaga țară",
        },
        {
          title: "Astăzi",
          description:
            "Continuăm să construim viitorul mobilității feroviare cu soluții durabile și parteneriate solide.",
        },
      ],
    },
    solutions: {
      eyebrow: "Soluțiile noastre",
      title: "Proiectare, producție și integrare",
      intro:
        "Ne implicăm în fiecare etapă, de la proiectare la fabricație, ca fiecare produs să fie bine făcut și pregătit pentru utilizare reală.",
      productsLabel: "Produse ISAF",
      controlsLabel: "Navigare produse",
      previousProduct: "Produsul anterior",
      nextProduct: "Produsul următor",
      products: [
        {
          title: "Semnalizare",
          items: [
            "semnale cu bec și unități LED",
            "semnale manevră pitice",
            "dulapuri SCB",
          ],
        },
        {
          title: "Linii de contact",
          items: ["stâlpi", "console", "traverse"],
        },
        {
          title: "Circuite de cale",
          items: [
            "rame și dulapuri de JT",
            "panouri de comandă",
            "cutii de aparataj",
          ],
        },
        {
          title: "Relee",
          items: ["neutrale fișă", "combinate fișă", "de prag tip PIC-1"],
        },
      ],
    },
    production: {
      eyebrow: "Producție ISAF",
      title: "Proiectare, producție și integrare",
      intro:
        "Producem echipamente și componente electrice și electronice pentru aplicații feroviare, cu standarde ridicate de calitate și fiabilitate. De la proiectare la execuție și testare, asigurăm soluții integrate și performanță în exploatare.",
      navigationLabel: "Navigare galerie",
      counterSeparator: "din",
      previousImage: "Imaginea anterioară",
      nextImage: "Imaginea următoare",
      galleryAlts: [
        "Sudor lucrând la componente metalice în atelierul de producție ISAF",
        "Echipamente și componente electrice în procesul de producție ISAF",
        "Detaliu din atelierul de producție pentru infrastructură feroviară",
        "Lucrări tehnice desfășurate în fabrica ISAF",
        "Proces de fabricație și integrare pentru soluții feroviare ISAF",
      ],
      mobileKpis: [
        {
          value: "100%",
          label: "Producție proprie",
          description: "3 etape: proiectare, fabricație și testare",
        },
        {
          value: "150+",
          label: "Echipamente",
          description: "Soluții dedicate electrificării feroviare",
        },
        {
          value: "360°",
          label: "Execuție în teren",
          description: "Montaj, punere în funcțiune și mentenanță",
        },
      ],
      desktopKpis: [
        {
          value: "Proiectare",
          description:
            "Proiectare pentru soluții feroviare conforme cu cerințele tehnice",
        },
        {
          value: "Execuție",
          description:
            "Execuție integrată pentru infrastructură feroviară, linii de contact, semnalizare.",
        },
        {
          value: "Montaj",
          description:
            "Montaj, punere în funcțiune și mentenanță pentru echipamente și sisteme feroviare.",
        },
      ],
    },
    partners: {
      sectionLabel: "Parteneriate strategice",
      eyebrow: "Parteneriate strategice",
      logosLabel: "Parteneri strategici",
    },
    footer: {
      homeLabel: "Pagina principala ISAF",
      footerNavLabel: "Navigare subsol",
      socialLabel: "Social media",
      linkedInLabel: "ISAF pe LinkedIn",
      facebookLabel: "ISAF pe Facebook",
      copyright: "2026 ISAF. Toate drepturile rezervate.",
      contactCards: [
        {
          title: "Contact sediu",
          className: "footer-contact-card--office",
          details: [
            { label: "+40 21 220 80 75", href: "tel:+40212208075" },
            { label: "office@isaf.ro", href: "mailto:office@isaf.ro" },
          ],
        },
        {
          title: "Resurse umane",
          className: "footer-contact-card--hr",
          details: [
            { label: "+40 725 809 842", href: "tel:+40725809842" },
            { label: "+40 756 047 832", href: "tel:+40756047832" },
          ],
        },
        {
          title: "Adresă sediu",
          className: "footer-contact-card--address-office",
          details: [
            {
              label:
                "Str. Lugoj nr. 68, C.P. 012212, Sector 1, București, România",
              href: "",
            },
          ],
        },
        {
          title: "Adresă fabrică",
          className: "footer-contact-card--address-factory",
          details: [
            {
              label:
                "Str. Copșa Mică nr 25, C.P. 014619\nSector 1, București, România",
              href: "",
            },
          ],
        },
      ],
      links: {
        about: "Despre ISAF",
        solutions: "Soluții",
        production: "Producție",
        certifications: "Certificări",
      },
    },
    certifications: {
      eyebrow: "Certificări",
      heading:
        "Sisteme certificate pentru echipamente feroviare conforme și fiabile",
      lead: "Certificările de mai jos documentează sistemele de management ISAF, standardele auditate și perioadele de valabilitate. Fiecare document este disponibil pentru descărcare în format PDF.",
      listLabel: "Certificări ISAF",
      managementSubtitle: "Certificări management",
      productSubtitle: "Certificări echipamente",
      download: "Descarcă PDF",
      productFallback: "Certificare produs",
      productTypes: {
        type: "Certificare de tip",
        manufacturing: "Certificare fabricație",
        extension: "Prelungire",
        fallback: "Certificare produs",
      },
      management: [
        {
          standard: "SMC 027",
          issuer: "AFER",
          title: "Sistem de management al calității",
          validity: "Valabil până la 26.04.2028",
          fileName:
            "Certificat SMC 027 Sistem de management al calitatii (valabil 2028.04.26).pdf",
        },
        {
          standard: "SSM 050",
          issuer: "AFER",
          title: "Sistem de management al sănătății și securității în muncă",
          validity: "Valabil până la 19.06.2028",
          fileName:
            "Certificat SSM 050 Sistem de management al sanatatii si securitatii in munca (valabil 2028.06.19).pdf",
        },
        {
          standard: "SMM 074",
          issuer: "AFER",
          title: "Sistem de management de mediu",
          validity: "Valabil până la 26.04.2028",
          fileName:
            "Certificat SMM 074 Sistem de management de mediu (valabil 2028.04.26).pdf",
        },
        {
          standard: "ISO 9001",
          issuer: "IQNET",
          title: "Sistem de management al calității",
          validity: "Valabil până la 04.07.2027",
          fileName:
            "Certificat ISO 9001 IQNET 2015.67649.5 (valabil 04.07.2027).pdf",
        },
        {
          standard: "ISO 9001",
          issuer: "AFNOR",
          title: "Sistem de management al calității",
          validity: "Valabil până la 04.07.2027",
          fileName:
            "Certificat ISO 9001 AFNOR 2015.67649.5 (valabil 04.07.2027).pdf",
        },
      ],
    },
  },
  en: {
    meta: {
      home: {
        title: "ISAF | Railway infrastructure",
        description:
          "ISAF landing page for railway infrastructure design, production, integration and electrification services.",
      },
      certifications: {
        title: "ISAF | Certifications",
        description:
          "ISAF certifications for quality, environmental, occupational health and safety management systems.",
      },
    },
    header: {
      homeLabel: "ISAF home",
      navLabel: "Primary navigation",
      about: "About us",
      solutions: "Solutions",
      production: "Production",
      certifications: "Certifications",
      contact: "Contact",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      switchLanguage: "Switch to Romanian",
      nextLanguage: "RO",
    },
    hero: {
      ariaLabel:
        "ISAF - contact line, signalling and railway electrification systems",
      eyebrow: ["Contact line systems,", "signalling and electrification"],
      title: "Strategic partner in railway",
      titleAccent: "infrastructure",
      lead: "We build and modernize railway infrastructure in Romania through integrated solutions, advanced technologies and long-term partnerships.",
      cta: "View our solutions",
      experienceValue: "75+",
      experienceCaption: "Years of experience",
      railValue: "9,500",
      railUnit: "km",
      railCaption: "Electrified railway",
      partnershipsValue: "Partnerships",
      partnershipsCaption: "Durable and high-performing",
    },
    about: {
      title: "About ISAF",
      description:
        "ISAF is a Romanian group with solid experience in designing, delivering and modernizing railway infrastructure. For more than seven decades, we have delivered reliable, sustainable solutions with trusted partners for safe and high-performing rail transport.",
      timelineLabel: "Milestones in ISAF history",
      timeline: [
        {
          title: "1951",
          description:
            "ISAF S.A. is founded and begins its first railway infrastructure projects",
        },
        {
          title: "Expansion",
          description:
            "Production capabilities diversify and technical expertise becomes stronger",
        },
        {
          title: "Modernization",
          description:
            "Investments in technology, equipment and processes increase quality and efficiency.",
        },
        {
          title: "Projects",
          description:
            "Strategic railway infrastructure projects are delivered across the country",
        },
        {
          title: "Today",
          description:
            "We continue to build the future of rail mobility with durable solutions and strong partnerships.",
        },
      ],
    },
    solutions: {
      eyebrow: "Our solutions",
      title: "Design, production and integration",
      intro:
        "We are involved in every stage, from design to manufacturing, so every product is well built and ready for real-world use.",
      productsLabel: "ISAF products",
      controlsLabel: "Product navigation",
      previousProduct: "Previous product",
      nextProduct: "Next product",
      products: [
        {
          title: "Signalling",
          items: [
            "lamp and LED signals",
            "low shunting signals",
            "SCB cabinets",
          ],
        },
        {
          title: "Contact lines",
          items: ["poles", "brackets", "crossbeams"],
        },
        {
          title: "Track circuits",
          items: [
            "JT frames and cabinets",
            "control panels",
            "equipment boxes",
          ],
        },
        {
          title: "Relays",
          items: [
            "plug-in neutral relays",
            "combined plug-in relays",
            "PIC-1 threshold relays",
          ],
        },
      ],
    },
    production: {
      eyebrow: "ISAF production",
      title: "Design, production and integration",
      intro:
        "We produce electrical and electronic equipment and components for railway applications, with high standards for quality and reliability. From design to delivery and testing, we provide integrated solutions and performance in operation.",
      navigationLabel: "Gallery navigation",
      counterSeparator: "of",
      previousImage: "Previous image",
      nextImage: "Next image",
      galleryAlts: [
        "Welder working on metal components in the ISAF production workshop",
        "Electrical equipment and components in the ISAF production process",
        "Detail from the production workshop for railway infrastructure",
        "Technical work carried out in the ISAF factory",
        "Manufacturing and integration process for ISAF railway solutions",
      ],
      mobileKpis: [
        {
          value: "100%",
          label: "Own production",
          description: "3 stages: design, manufacturing and testing",
        },
        {
          value: "150+",
          label: "Equipment",
          description: "Solutions dedicated to railway electrification",
        },
        {
          value: "360°",
          label: "Field execution",
          description: "Assembly, commissioning and maintenance",
        },
      ],
      desktopKpis: [
        {
          value: "Design",
          description:
            "Design for railway solutions aligned with technical requirements",
        },
        {
          value: "Execution",
          description:
            "Integrated execution for railway infrastructure, contact lines and signalling.",
        },
        {
          value: "Assembly",
          description:
            "Assembly, commissioning and maintenance for railway equipment and systems.",
        },
      ],
    },
    partners: {
      sectionLabel: "Strategic partnerships",
      eyebrow: "Strategic partnerships",
      logosLabel: "Strategic partners",
    },
    footer: {
      homeLabel: "ISAF home",
      footerNavLabel: "Footer navigation",
      socialLabel: "Social media",
      linkedInLabel: "ISAF on LinkedIn",
      facebookLabel: "ISAF on Facebook",
      copyright: "2026 ISAF. All rights reserved.",
      contactCards: [
        {
          title: "Head office contact",
          className: "footer-contact-card--office",
          details: [
            { label: "+40 21 220 80 75", href: "tel:+40212208075" },
            { label: "office@isaf.ro", href: "mailto:office@isaf.ro" },
          ],
        },
        {
          title: "Human resources",
          className: "footer-contact-card--hr",
          details: [
            { label: "+40 725 809 842", href: "tel:+40725809842" },
            { label: "+40 756 047 832", href: "tel:+40756047832" },
          ],
        },
        {
          title: "Head office address",
          className: "footer-contact-card--address-office",
          details: [
            {
              label: "68 Lugoj St., 012212, Sector 1, Bucharest, Romania",
              href: "",
            },
          ],
        },
        {
          title: "Factory address",
          className: "footer-contact-card--address-factory",
          details: [
            {
              label: "25 Copșa Mică St., 014619\nSector 1, Bucharest, Romania",
              href: "",
            },
          ],
        },
      ],
      links: {
        about: "About ISAF",
        solutions: "Solutions",
        production: "Production",
        certifications: "Certifications",
      },
    },
    certifications: {
      eyebrow: "Certifications",
      heading:
        "Certified systems for reliable railway infrastructure equipment",
      lead: "The certifications below document ISAF's management systems, audited standards and validity periods. Each document is available as a downloadable PDF.",
      listLabel: "ISAF certifications",
      managementSubtitle: "Management certifications",
      productSubtitle: "Equipment certifications",
      download: "Download PDF",
      productFallback: "Product certificate",
      productTypes: {
        type: "Type approval",
        manufacturing: "Manufacturing approval",
        extension: "Extension",
        fallback: "Product certificate",
      },
      management: [
        {
          standard: "SMC 027",
          issuer: "AFER",
          title: "Quality management system",
          validity: "Valid until 26.04.2028",
          fileName:
            "Certificat SMC 027 Sistem de management al calitatii (valabil 2028.04.26).pdf",
        },
        {
          standard: "SSM 050",
          issuer: "AFER",
          title: "Occupational health and safety management system",
          validity: "Valid until 19.06.2028",
          fileName:
            "Certificat SSM 050 Sistem de management al sanatatii si securitatii in munca (valabil 2028.06.19).pdf",
        },
        {
          standard: "SMM 074",
          issuer: "AFER",
          title: "Environmental management system",
          validity: "Valid until 26.04.2028",
          fileName:
            "Certificat SMM 074 Sistem de management de mediu (valabil 2028.04.26).pdf",
        },
        {
          standard: "ISO 9001",
          issuer: "IQNET",
          title: "Quality management system",
          validity: "Valid until 04.07.2027",
          fileName:
            "Certificat ISO 9001 IQNET 2015.67649.5 (valabil 04.07.2027).pdf",
        },
        {
          standard: "ISO 9001",
          issuer: "AFNOR",
          title: "Quality management system",
          validity: "Valid until 04.07.2027",
          fileName:
            "Certificat ISO 9001 AFNOR 2015.67649.5 (valabil 04.07.2027).pdf",
        },
      ],
    },
  },
} as const satisfies Record<Locale, object>;

export const getSiteContent = (locale: Locale) => siteContent[locale];
