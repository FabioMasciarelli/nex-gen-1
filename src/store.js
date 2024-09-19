import { reactive } from "vue";

export const store = reactive({

    contacts: {
        telephoneNumber: '+1 (305) 1234-5678',
        mainMailAdress: 'hello@example.com',
        secondaryMailAdress: ' mail@example.com',
        mainAdress: 'Main Avenue, 987',
        secondaryAdress: 'Main Avenue, 123'
    },

    results: [
        {
            name: 'Certifications',
            value: 128
        },
        {
            name: 'Employees',
            value: 230
        },
        {
            name: 'Customers',
            value: 517
        },
        {
            name: 'Countries',
            value: 94
        }
    ],

    main_services: [
        {
            title: 'Technology',
            description: 'We are continually focused on developing technology solutions adapted to our client need',
            icon: 'fa-solid fa-dolly'
        },
        {
            title: 'Reefer Cargo',
            description: 'Regular and frequent monitoring from the receipt of the loaded container to final destination',
            icon: 'fa-solid fa-temperature-low'
        },
        {
            title: 'Dry Cargo',
            description: 'We work with most types of dry cargo, from valuable cargo to the most dangerous requiring care',
            icon: 'fa-solid fa-cubes'
        }
    ],

    trusted_feedback: [
        {
            title: 'WooCommerce',
            feedback: 'Sono un cliente abituale dell Azienda GHI per i miei trasporti giornalieri da e per il lavoro. La loro efficienza nel gestire le corse quotidiane e la convenienza dei loro prezzi mi hanno convinto a continuare a utilizzare i loro servizi. È un sollievo sapere di poter contare su di loro per i miei spostamenti quotidiani.'
        },
        {
            title: 'WordPress',
            feedback: 'La mia azienda collabora regolarmente con l Azienda DEF per le nostre esigenze di trasporto di merci su larga scala. Abbiamo sempre apprezzato la loro affidabilità e trasparenza nel fornire preventivi chiari e nel rispettare i tempi di consegna. È raro trovare un partner logistico così affidabile e professionale.'
        },
        {
            title: 'Pingdom',
            feedback: 'Ho avuto l opportunità di usufruire dei servizi di trasporto dell Azienda ABC per una recente spedizione internazionale. Sono rimasto impressionato dalla loro attenzione al cliente e dalla disponibilità a risolvere eventuali problemi. La spedizione è stata gestita con cura e precisione, e sono rimasto soddisfatto dell intera esperienza.'
        },
        {
            title: 'JQuery',
            feedback: 'La mia azienda collabora regolarmente con l Azienda DEF per le nostre esigenze di trasporto di merci su larga scala. Abbiamo sempre apprezzato la loro affidabilità e trasparenza nel fornire preventivi chiari e nel rispettare i tempi di consegna. È raro trovare un partner logistico così affidabile e professionale.'
        },
        {
            title: 'Less',
            feedback: 'Ho utilizzato i servizi di trasporto dell Azienda XYZ per consegnare merci urgenti più volte, e non mi hanno mai deluso. Il personale è professionale e cortese, e le consegne sono sempre puntuali. Consiglio vivamente questa azienda a chiunque cerchi un servizio di trasporto efficiente.'
        }
    ],

    heroSection: [
        {
            h1: 'About Us',
            background: './assets/img/bg-about.jpg',
            href: ' / About Us'
        },
        {
            h1: 'Contact Us',
            background: './assets/img/bg-1.jpg',
            href: ' / Contact Us'
        },
    ],

    cardsArray: [
        {
            title: "Company",
            list: ["Institutional", "Social & Events", "Innovation", "Environment", "Technology"],
        },
        {
            title: "Services",
            list: ["Audit & Assurance", "Financial Advisory", "Analytics and M&A", "Middle Marketing", "Legal Consulting"],
        },
        {
            title: "Consultants",
            list: ["David Cooper", "Oliver Jones", "Emma Lopez", "T. Johnson", "Jacob Hill Jr"],
        },
    ]
    

});