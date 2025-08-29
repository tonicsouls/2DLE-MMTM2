

import React, { useState, useEffect, useRef } from 'react';
import CvModal from './components/CvModal';
import VideoGalleryModal from './components/VideoGalleryModal';
import MathMonModal from './components/MathMonModal';

const App = () => {
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);
    const [isVideoGalleryOpen, setIsVideoGalleryOpen] = useState(false);
    const [galleryInitialVideo, setGalleryInitialVideo] = useState('gKJgscVed_0');
    const [isMathMonModalOpen, setIsMathMonModalOpen] = useState(false);
    const [activeSkillTab, setActiveSkillTab] = useState('methodologies');

    const openVideoGallery = (videoId: string) => {
        setGalleryInitialVideo(videoId);
        setIsVideoGalleryOpen(true);
    };

    // Smooth scrolling for nav links
    useEffect(() => {
        const handleNavClick = (e: MouseEvent) => {
            const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
            if (!targetId) return;

            if (targetId === 'cv') {
                 e.preventDefault();
                 setIsCvModalOpen(true);
                 return;
            }

            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 80; // Height of the sticky header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleNavClick as EventListener);
        });

        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleNavClick as EventListener);
            });
        };
    }, []);
    
    const skills = {
        methodologies: ["MEDDIC", "Challenger Sale", "Value Selling", "Strategic Partnerships", "Channel Management", "C-Level Negotiation", "Demand Generation", "Complex Sales Cycles", "PHR"],
        technical: ["Enterprise SaaS", "GenAI & LLMs", "RAG Framework", "LangChain", "Data Analytics", "Cloud (AWS, Azure)", "BPM", "Network Automation", "Salesforce", "Tableau", "SQL", "Python", "R", "ARIMA Modeling"],
        industries: ["Pharmaceuticals", "Oil & Gas", "Manufacturing", "Federal/SLED", "Finance & Insurance", "Semiconductors", "Defense", "Retail", "Energy", "Automotive"]
    };
    
    const featuredEngagements = [
      { name: "Pfizer", role: "Enterprise SaaS", logo: "https://logo.clearbit.com/pfizer.com" },
      { name: "IBM", role: "GenAI Partnership", logo: "https://logo.clearbit.com/ibm.com" },
      { name: "Energy Transfer", role: "Network Automation", logo: "https://logo.clearbit.com/energytransfer.com" },
      { name: "Toyota", role: "SaaS & Analytics", logo: "https://logo.clearbit.com/toyota.com" },
      { name: "Walmart", role: "RFP & SD-WAN", logo: "https://logo.clearbit.com/walmart.com" },
      { name: "Cox Automotive", role: "Enterprise POC", logo: "https://logo.clearbit.com/coxautoinc.com" },
      { name: "Guitar Center", role: "Atlassian Migration", logo: "https://logo.clearbit.com/guitarcenter.com" },
      { name: "ConneXus", role: "Published Contributor", logo: "https://logo.clearbit.com/conexxus.org" },
      { name: "HHS-FDA", role: "Public Sector", logo: "https://logo.clearbit.com/fda.gov" },
      { name: "Sunrun", role: "Atlassian Partner", logo: "https://logo.clearbit.com/sunrun.com" },
      { name: "HollyFrontier", role: "Automation", logo: "https://logo.clearbit.com/hollyfrontier.com" },
      { name: "Sealed Air", role: "MSP Rollout", logo: "https://logo.clearbit.com/sealedair.com" },
      { name: "U of Arkansas", role: "SLED Sales", logo: "https://logo.clearbit.com/uark.edu" },
    ];

    const experience = [
        {
            company: "Pfizer",
            role: "Enterprise Account Executive at Seeq",
            story: "Grew Pfizer account from a $250k transaction into a $1M+ multi-year strategic ERP-adjacent engagement by expanding from R&D to global manufacturing.",
            logo: "https://logo.clearbit.com/pfizer.com"
        },
        {
            company: "Energy Transfer",
            role: "Senior Enterprise AE at Gluware",
            story: "Closed a $1.7M network automation modernization deal, exceeding quota by 225%. Pivoted the deal from OpEx to CapEx to align with the CFO's strategy.",
            logo: "https://logo.clearbit.com/energytransfer.com"
        },
        {
            company: "IBM",
            role: "Sales Director at Papyrus Software",
            story: "Established a strategic partnership with IBM, achieving Gold Partner status by aligning WatsonX and Content Management solutions into client roadmaps.",
            logo: "https://logo.clearbit.com/ibm.com"
        },
        {
            company: "Walmart",
            role: "Senior Enterprise AE at Gluware",
            story: "Led a cross-functional team to respond to a complex RFP under a tight deadline, winning the RFP and moving into a testing stage for a major network automation solution.",
            logo: "https://logo.clearbit.com/walmart.com"
        },
        {
            company: "Krist Oil",
            role: "Sales Executive at Pinnacle",
            story: "Drove to Michigan to personally understand a customer's needs for a loyalty program. Hired a local student to manage it, resulting in a 15% increase in customer retention.",
            logo: "https://logo.clearbit.com/kristoil.com"
        },
        {
            company: "Bears Den",
            role: "Sales Executive at Pinnacle",
            story: "Developed a culturally-sensitive, customized kiosk solution for a Native American-owned business, implementing a phased rollout from restaurant to concessions.",
            logo: "https://logo.clearbit.com/pinncorp.com"
        },
        {
            company: "HollyFrontier",
            role: "Senior Enterprise AE at Gluware",
            story: "Secured a six-figure deal with a persistent and empathetic approach. Made a cold call to a VP on a late Friday to align the automation solution with their ecosystem.",
            logo: "https://logo.clearbit.com/hollyfrontier.com"
        },
        {
            company: "Toyota",
            role: "Enterprise Sales at Seeq & Dragonboat",
            story: "Implemented an edge analytics solution to reduce line production imperfections and closed a strategic $56k deal with Toyota Connected for a Jira automation solution.",
            logo: "https://logo.clearbit.com/toyota.com"
        },
        {
            company: "Sunrun",
            role: "Enterprise AE at HyperVelocity",
            story: "Won a key deal by building a strong relationship with the procurement manager and working collaboratively with the CFO to create flexible financial structures.",
            logo: "https://logo.clearbit.com/sunrun.com"
        },
        {
            company: "Cox Automotive",
            role: "Senior AE at Dragonboat.io",
            story: "Led an 8-week Proof of Concept (POC) with 500+ users, collaborating with their Center of Excellence. Successfully configured dashboards, KPIs, and OKR tracking.",
            logo: "https://logo.clearbit.com/coxautoinc.com"
        },
        {
            company: "Covestro",
            role: "Sales Executive at Pinnacle",
            story: "Navigated a complex international deal, demonstrating cultural awareness between US and German teams. Gained valuable experience despite a lost deal.",
            logo: "https://logo.clearbit.com/covestro.com"
        },
        {
            company: "HHS-FDA",
            role: "Sales Director at Papyrus Software",
            story: "Maintained strong executive-level relationships through a delayed project with the FDA's Center for Tobacco Products, keeping it on track despite budget holds.",
            logo: "https://logo.clearbit.com/fda.gov"
        },
    ];

    const testimonials = [
        {
            quote: "Darryl stood out immediately by taking initiative to understand every aspect of our platform... his ability to navigate complex deals, ask insightful questions, and position the value of our work set him apart.",
            name: "Alex DeAraujo",
            title: "Network Automation Engineer, Gluware",
            image: "https://media.licdn.com/dms/image/v2/D5603AQHmgp6Fmc9AWw/profile-displayphoto-crop_800_800/B56ZhiwNk1HcAM-/0/1754003462839?e=1759363200&v=beta&t=7Oc_S5SE5jZDk5hxcIbe40FBd1cJ3wO_6g9a20NFKok"
        },
        {
            quote: "It is his ability to relate with clients, that is his greatest value. His nickname around the office was ‘Chameleon.’ No matter who his client was, he was quick to make them feel at ease.",
            name: "J.R. Fuller",
            title: "Senior Minerals Specialist, Phoenix Capital Group",
            image: "https://phoenixenergy.com/wp-content/uploads/2023/09/LHE8031-copy-1-scaled.jpg"
        },
        {
            quote: "Darryl is a true professional that would be an immediate asset to any organization. We were able to provide the customer with a solution that was able to exceed their Financial ROI 4 months prior to what we projected.",
            name: "Aaron Wheeler",
            title: "Cybersecurity Solutions, Veeam",
            image: "https://media.licdn.com/dms/image/v2/C5603AQEFluWbJN9Tpw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1606843324761?e=1759363200&v=beta&t=rFu1F1jJXl7Blw2mV_TDLUAaG3PY8gPqULa_fAf2Iz8"
        }
    ];

    const getYearFromDate = (dateStr: string) => {
        const match = dateStr.match(/\d{4}/);
        if (match) return match[0];
        return '';
    };

    const getMonthIndex = (dateStr: string): number => {
        const monthString = dateStr.trim().split(' ')[0];
        const monthMap: { [key: string]: number } = {
            'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'April': 3, 'May': 4, 'Jun': 5, 'Summer': 5, 'Jul': 6, 'July': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };
        return monthMap[monthString] ?? -1;
    };

    const timelineEvents = [
        { date: "2005 - 2006", title: "Student Exchange Program", company: "AFS Intercultural Programs, Argentina", description: ["Studied Cultural Studies, Humanities, and Italian at the University of Santiago Del Estero.", "Traveled in Argentina for 6 months and across South America for 5 months, achieving fluency in Spanish."], type: 'education', logo: "https://github.com/tonicsouls/resume-and-CV/blob/main/afs-intercultural-programs-logo-png_seeklogo-470654.png?raw=true" },
        { date: "2009 - 2012", title: "Bachelor of Science", company: "The University of Texas at Arlington", description: ["Focused on Business Communication with a concentration in Spanish Language."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/utabusiness_logo.jpg?raw=true", logo: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/utabusiness_logo.jpg?raw=true", type: 'education' },
        { date: "Apr 2012 - Apr 2013", title: "Contract Landman, Oil & Gas", company: "Saddle Ridge Resources, LLC", description: ["Negotiated property acquisition and prepared legal documentation for real-property acquisition in the Barnett Shale."], imageUrl: "https://logo.clearbit.com/saddleridgeresources.com", logo: "https://logo.clearbit.com/saddleridgeresources.com", type: 'work' },
        { date: "May 2013 - Jul 2014", title: "Internet Sales Manager", company: "Alfa Romeo Fiat", description: ["Developed strategic marketing campaigns and sales plans, placing third in the Southern US Region for sales.", "View Cars Sold Album"], link: "https://photos.app.goo.gl/WMK7XfhXL4SUNSFJ7", imageUrl: "https://logo.clearbit.com/fiatusa.com", logo: "https://logo.clearbit.com/fiatusa.com", type: 'work' },
        { date: "Jan 2015 - Apr 2017", title: "Regional Office Manager", company: "Rock Hill, LLC", description: ["Billed $1.5M in first year and grew business 500% with Sealed Air.", "Led national staffing project via MSP SaaS Software for clients like Ventura Foods & Del Monte.", "Developed bilingual orientation/training using ADDIE model, increasing fill rates."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/rock%20hill%20staffing.png?raw=true", logo: "https://github.com/tonicsouls/resume-and-CV/blob/main/rock%20hill%20staffing.png?raw=true", type: 'work' },
        { date: "Apr 2017 - Feb 2018", title: "Strategic Marketing Consultant", company: "4YourOrganization", description: ["Provided strategic marketing for Allegis Global Solutions, City of Arlington, and non-profits.", "Executed public engagement campaigns for local politicians."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/4yo%20logo.png?raw=true", logo: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/4yo%20logo.png?raw=true", type: 'work' },
        { date: "Jan 2018", title: "Published Contributor - Digital Offers Standard", company: "ConneXus", description: ["As a member of the Digital Offers Working Group, contributed to defining industry standards for the issuance and redemption process of digital offers for petroleum/convenience merchants."], logo: "https://logo.clearbit.com/conexxus.org", type: 'work' },
        { date: "April 2018", title: "Key Certifications", company: "PSM, LSSGB, PHR", description: ["Achieved Professional Scrum Master (PSM I), Lean Six Sigma Green Belt (LSSGB), and Professional of Human Resource (PHR) certifications, demonstrating commitment to process, efficiency, and management."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/certs-combined.png?raw=true", type: 'education' },
        { date: "Jan 2018 - Aug 2021", title: "Technical Sales Executive | Product Owner", company: "PDI Technologies (Pinnacle)", description: ["As Product Owner for a SaaS Mobile app & POS system, drove $1.5M in new ARR.", "Served on the ConneXus standards committee, helping publish a coupon clearing process for major CPG & Oil/Gas operators.", "Adapted to COVID-19 by creating a 'pickup and go' mobile app concept for local retailers."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/booth%202017%20pinnacle%20or%20PDI.jpg?raw=true", type: 'work', logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGaQxRxHsFhEQ/company-logo_200_200/company-logo_200_200/0/1630525942787/the_pinnacle_corporation_logo?e=1759363200&v=beta&t=oae-MzArD1h22Mz9eMyDKsytaY87Tq0VvNOtwYsAZYo", logos: ["https://media.licdn.com/dms/image/v2/C4D0BAQGaQxRxHsFhEQ/company-logo_200_200/company-logo_200_200/0/1630525942787/the_pinnacle_corporation_logo?e=1759363200&v=beta&t=oae-MzArD1h22Mz9eMyDKsytaY87Tq0VvNOtwYsAZYo", "https://i.imgur.com/Q2xG23S.png"] },
        { date: "Summer 2019", title: "Began MBA Program", company: "Louisiana State University, Shreveport", description: ["Started Master of Business Administration with a concentration in Data Analytics."], imageUrl: "https://lobservateur.com/wp-content/uploads/sites/21/2022/05/lsu_logo2_400x400.jpeg", logo: "https://lobservateur.com/wp-content/uploads/sites/21/2022/05/lsu_logo2_400x400.jpeg", type: 'education' },
        { date: "July 2021", title: "Master of Business Administration", company: "Louisiana State University, Shreveport", description: ["Completed MBA with a concentration in Data & AI, including a final project on ARIMA modeling."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/Diploma%20MBA%20data%20analytics.jpg?raw=true", type: 'education' },
        { date: "Aug 2021 - Jan 2022", title: "Enterprise Account Executive", company: "HyperVelocity Consulting (Acquired by Isos Technology)", description: ["Exceeded quota by 200%, securing over $850k in licensing and services.", "Acquired key logos like Guitar Center, leading a complex 'lift and shift' of their Atlassian network from on-prem to cloud.", "Led professional services RFI for M&A of energy provider (Sunrun Inc.) and worked with procurement."], imageUrl: "https://logo.clearbit.com/isostech.com", logo: "https://logo.clearbit.com/isostech.com", type: 'work' },
        { date: "Jan 2022 - Mar 2023", title: "Regional Sales Director, TOLA", company: "Gluware Inc.", description: ["Surpassed Quota by 225%, securing $2M in Oil & Gas compliance contracts.", "Launched and grew new verticals in Defense and Oil & Gas, outperforming a team of 13 peers.", "Led key RFPs to POCs, guiding Walmart and Shell RFPs for monitoring and config management."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/booth%202022%20Gluware.jpg?raw=true", type: 'work', logo: "https://media.licdn.com/dms/image/v2/C4E0BAQELbrqj7TXbcQ/company-logo_200_200/company-logo_200_200/0/1631377724393?e=1759363200&v=beta&t=VTsHfbXVdmALPXewPjwgakqTVwYaYzBBz9_TlLf5nfM" },
        { date: "Jun 2023 - Nov 2023", title: "Senior Enterprise Account Executive", company: "Dragonboat.io", description: ["Hired as the first Enterprise AE by VC Insight Capital.", "Closed a $56k SaaS deal with Toyota Connected North America within weeks."], imageUrl: "https://logo.clearbit.com/dragonboat.io", logo: "https://logo.clearbit.com/dragonboat.io", type: 'work' },
        { date: "Dec 2023 - Mar 2025", title: "Sales Director, Americas", company: "Papyrus Software", description: ["Managing $6M in annual billing across 40+ US customers.", "Established a strategic partnership with IBM, achieving Gold Partner status by leveraging WatsonX."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/booth%202024-1%20Papyrus.jpg?raw=true", type: 'work', logo: "https://media.licdn.com/dms/image/v2/C560BAQH72UtShrjsjg/company-logo_200_200/company-logo_200_200/0/1631407909584/isis_papyrus_logo?e=2147483647&v=beta&t=rLTc-ICiJ7cue6cLJXfTTt1HnIbe7RBQyzq3D8WgDgo" },
        { date: "Aug 2024", title: "Professional Certificate", company: "IBM", description: ["Completed IBM Professional Certificate in Generative AI, RAG and LLMs."], imageUrl: "https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/Coursera_20IBM_20Generative_20AI_20Engineering_20with_20LLMs_20Specialization.png?raw=true", type: 'education', logo: "https://logo.clearbit.com/ibm.com" },
        {
            date: "Mar 2025 - Aug 2025",
            title: "Enterprise Account Executive (Semi & Pharma)",
            company: "SEEQ.COM",
            description: [
                "Grew the Pfizer account from a $250k ARR deal to a multi-year agreement exceeding $1M in the first year.",
                "Expanded engagement with major pharmaceutical and manufacturing accounts like Novo Nordisk, Toyota, and Analog Devices by establishing new use cases and implementing advanced analytics solutions to reduce production defects and waste."
            ],
            logo: "https://logo.clearbit.com/seeq.com",
            type: 'work'
        },
    ].sort((a, b) => {
        const yearA = parseInt(getYearFromDate(a.date), 10) || 0;
        const yearB = parseInt(getYearFromDate(b.date), 10) || 0;

        if (yearA !== yearB) {
            return yearA - yearB;
        }

        const monthA = getMonthIndex(a.date);
        const monthB = getMonthIndex(b.date);

        if (monthA === monthB) return 0;
        if (monthA === -1) return -1;
        if (monthB === -1) return 1;

        return monthA - monthB;
    });

    const photostreamImages = [
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/me%20in%20austria.jpg?raw=true', caption: 'Vienna, Austria - Papyrus Software Training' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/me%20in%20budapest%20with%20papyrus%20software.jpg?raw=true', caption: 'Budapest, Hungary - Sales Kickoff 2025' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/presenting%20papyrus%20software%202.jpg?raw=true', caption: 'Presenting at Papyrus Software event' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/booth%202025%20ibm.jpg?raw=true', caption: 'IBM Partnership Booth' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/booth%202022%20Gluware.jpg?raw=true', caption: 'Gluware Inc. Conference Booth' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/may%202019%20Pinnacle%20presentation.jpg?raw=true', caption: 'Pinnacle Corp Presentation, May 2019' },
        { src: 'https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/mission%20trip%20tranlator%202016.jpg?raw=true', caption: 'Mission Trip Translator, 2016' },
    ];
    
    return (
        <div className="tech-deco-bg min-h-screen">
            {isCvModalOpen && <CvModal onClose={() => setIsCvModalOpen(false)} />}
            {isVideoGalleryOpen && <VideoGalleryModal startVideoId={galleryInitialVideo} onClose={() => setIsVideoGalleryOpen(false)} />}
            {isMathMonModalOpen && <MathMonModal onClose={() => setIsMathMonModalOpen(false)} />}
            
            <header className="sticky top-0 z-30 glass-card">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="font-montserrat text-2xl font-black tracking-wider text-white hover:text-gold transition-colors">
                        DARRYL ERBY
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#story" className="font-raleway font-semibold text-gray-300 hover:text-white transition">My Story</a>
                        <a href="#playbook" className="font-raleway font-semibold text-gray-300 hover:text-white transition">Playbook</a>
                        <a href="#lab" className="font-raleway font-semibold text-gray-300 hover:text-white transition">The Lab</a>
                        <a href="#journey" className="font-raleway font-semibold text-gray-300 hover:text-white transition">Timeline</a>
                        <a href="#cv" className="font-raleway font-semibold text-gray-300 hover:text-white transition">CV/Résumé</a>
                    </div>
                    <a href="#contact" className="hidden md:inline-block btn-primary font-bold py-2 px-6 rounded-full">Contact</a>
                </nav>
            </header>

            <main className="container mx-auto px-6">
                <section id="hero" className="text-center py-20 md:py-32">
                    <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/0b86d5c7f2b78eb16d493f7f8c9124152fea93c1/pictures/new/Head%20Shot%20IP2.png" alt="Darryl Erby" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"/>
                    <h1 className="font-montserrat text-5xl md:text-7xl font-black tracking-tight text-white">
                        Enterprise Sales Leader <br /> & <span className="text-gold">AI Solutions Strategist</span>
                    </h1>
                     <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 font-raleway">
                        A dynamic enterprise software leader with an <span className="font-bold text-white">MBA in Data Analytics</span>, I build high-value partnerships and drive strategic growth by architecting innovative AI, SaaS, and PaaS solutions.
                    </p>
                    <div className="mt-10">
                        <a href="#playbook" className="btn-primary font-bold text-lg py-4 px-10 rounded-full">Explore My Work</a>
                    </div>
                </section>
                
                <section id="engagements" className="py-16">
                    <h3 className="text-center text-gray-400 font-semibold mb-8">FEATURED ENGAGEMENTS & STRATEGIC PARTNERSHIPS</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {featuredEngagements.map(e => (
                            <div key={e.name} className="text-center">
                                 <img src={e.logo} alt={`${e.name} logo`} className="h-8 mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300" />
                                 <p className="text-xs text-gray-500 mt-1">{e.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="story" className="py-20">
                    <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-12">
                        <h2 className="font-montserrat text-4xl font-bold text-center mb-8">My Story</h2>
                        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                            From cultural immersion in Argentina to architecting multi-million dollar enterprise AI solutions, my journey has been driven by a passion for connection, innovation, and solving complex problems. I thrive at the intersection of technology and business, leveraging data-driven strategies to build lasting partnerships and deliver transformative results.
                        </p>
                         <div className="photostream-container">
                            <div className="photostream">
                                {[...photostreamImages, ...photostreamImages].map((img, index) => (
                                    <div className="photostream-item" key={index}>
                                        <img src={img.src} alt={img.caption} />
                                        <div className="caption">{img.caption}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="playbook" className="py-20">
                    <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center">
                        Greatest Hits: <span className="text-gold">The Playbook</span>
                    </h2>
                    <p className="text-center text-gray-400 mt-4 mb-12 max-w-2xl mx-auto">
                        A dynamic showcase of key wins and strategic engagements across multiple industries.
                    </p>
                     <div className="marquee-container">
                        <div className="marquee-track marquee-track--playbook">
                            {[...experience, ...experience].map((item, index) => (
                                <div key={index} className="flex-shrink-0 w-[380px] h-[220px] glass-card rounded-2xl p-6 mx-4 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <img src={item.logo} alt={`${item.company} logo`} className="h-8 w-8 rounded-full mr-3 bg-white p-1" />
                                            <div>
                                                <h3 className="font-bold text-white text-lg">{item.company}</h3>
                                                <p className="text-blue-400 text-xs font-semibold">{item.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-snug">{item.story}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="skills" className="py-20">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Core <span className="text-gold">Competencies</span></h2>
                        <div className="glass-card rounded-2xl p-4 md:p-8">
                             <div className="flex justify-center border-b border-gray-700 mb-6">
                                <button onClick={() => setActiveSkillTab('methodologies')} className={`py-2 px-6 font-semibold transition ${activeSkillTab === 'methodologies' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}>Sales Methodologies</button>
                                <button onClick={() => setActiveSkillTab('technical')} className={`py-2 px-6 font-semibold transition ${activeSkillTab === 'technical' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}>Technical & Business Acumen</button>
                                <button onClick={() => setActiveSkillTab('industries')} className={`py-2 px-6 font-semibold transition ${activeSkillTab === 'industries' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}>Industry Expertise</button>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 p-4">
                                {skills[activeSkillTab].map(skill => (
                                    <span key={skill} className="bg-gray-700 text-gray-200 text-sm font-semibold px-4 py-2 rounded-full">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                 <section id="lab" className="py-20">
                     <h2 className="font-montserrat text-4xl font-bold text-center mb-12">The <span className="text-gold">Lab</span></h2>
                     <div className="grid md:grid-cols-2 gap-8">
                        {/* PDI Product Owner */}
                        <div className="glass-card rounded-2xl p-6">
                            <div className="grid md:grid-cols-2 gap-6 items-center h-full">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Product Owner Experience</h3>
                                    <p className="text-blue-400 font-semibold mb-4">The Pinnacle Corporation</p>
                                    <p className="text-gray-300 mb-6 text-sm">
                                        As the Product Owner for the 'Affiniti Pick up and Go' mobile app, I led the product strategy for our food service and QSR technology. My role involved managing marketing, advertising, and key partner relationships for our loyalty and mobile products, contributing to user adoption and revenue growth.
                                    </p>
                                </div>
                                <div className="cursor-pointer group" onClick={() => openVideoGallery('mmkHWmDZ76E')}>
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <img src="https://img.youtube.com/vi/mmkHWmDZ76E/hqdefault.jpg" alt="Affiniti Pick up and Go Demo" className="w-full transition-transform duration-300 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* MathMon Project */}
                        <div className="glass-card rounded-2xl p-6">
                            <div className="grid md:grid-cols-2 gap-6 items-center h-full">
                                <div className="flex flex-col h-full">
                                    <h3 className="text-2xl font-bold text-white mb-2">MathMon: Gamified Learning</h3>
                                    <p className="text-blue-400 font-semibold mb-4">Application for Kids</p>
                                    <p className="text-gray-300 mb-6 text-sm flex-grow">A math game created for my kids, combining their love for Pokémon with dopamine-crushing math!</p>
                                    <button onClick={() => setIsMathMonModalOpen(true)} className="font-semibold text-gold hover:text-white transition self-start mt-auto">Launch App ↗</button>
                                </div>
                                <div>
                                    <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/0b86d5c7f2b78eb16d493f7f8c9124152fea93c1/pictures/new/mathmon%20img.png" alt="MathMon Game" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>
                        {/* Net Zero Compute */}
                         <div className="glass-card rounded-2xl p-8 flex flex-col h-full">
                            <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/708f67e3d32d73426c5976f696c44886b602312a/NZC.png" alt="Net Zero Compute Logo" className="w-1/2 h-auto mb-6 self-start"/>
                            <h3 className="text-2xl font-bold text-white mb-2">Active Collaboration: Net Zero Compute</h3>
                            <p className="text-blue-400 font-semibold mb-4">AI Infrastructure Partner</p>
                            <p className="text-gray-300 mb-6 text-sm">Helping prepare the foundation for the US rollout of Net Zero Compute's pan-European network of Sovereign AI Factories, pioneering carbon-neutral, community-anchored digital infrastructure.</p>
                            <div className="mt-auto pt-6">
                                <div className="border-t border-gray-700/50 pt-4 mb-6">
                                    <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Technology Partners</h4>
                                    <div className="flex items-center space-x-6">
                                        <img src="https://logo.clearbit.com/ibm.com" alt="IBM Logo" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" title="IBM"/>
                                        <img src="https://logo.clearbit.com/nvidia.com" alt="NVIDIA Logo" className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" title="NVIDIA"/>
                                        <img src="https://logo.clearbit.com/supermicro.com" alt="Supermicro Logo" className="h-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" title="Supermicro"/>
                                    </div>
                                </div>
                                <a href="https://www.netzerocompute.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gold hover:text-white transition self-start">Learn More ↗</a>
                            </div>
                        </div>
                        {/* NPI Partnership */}
                         <div className="glass-card rounded-2xl p-6 flex flex-col h-full">
                           <div className="grid md:grid-cols-2 gap-6 items-center h-full">
                               <div className="flex flex-col justify-center">
                                    <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/23eafd063c0ecb53d5aaaa21e56e27051b22e912/pictures/new/NPI_LOGO.png" alt="NPI Logo and description" className="w-full h-auto rounded-lg"/>
                                    <p className="text-gray-300 mt-4 text-sm">
                                        NPI’s patented Smart Reflective Architecture enables seamless mobile data infrastructure, providing enhanced connectivity for 5G, IoT, and the ultra-dense networks of the future.
                                    </p>
                               </div>
                               <div className="cursor-pointer group my-auto" onClick={() => openVideoGallery('8XQ79oJjgqA')}>
                                   <div className="relative rounded-lg overflow-hidden shadow-lg">
                                       <img src="https://img.youtube.com/vi/8XQ79oJjgqA/hqdefault.jpg" alt="NPI Video" className="w-full transition-transform duration-300 group-hover:scale-105" />
                                       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 20 20" fill="currentColor">
                                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                           </svg>
                                       </div>
                                   </div>
                               </div>
                           </div>
                        </div>
                     </div>
                 </section>

                <section id="education" className="py-20">
                     <h2 className="font-montserrat text-4xl font-bold text-center mb-12">Education & <span className="text-gold">Certifications</span></h2>
                     <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                        <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                            <img src="https://lobservateur.com/wp-content/uploads/sites/21/2022/05/lsu_logo2_400x400.jpeg" alt="LSU Logo" className="h-20 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-white">Louisiana State University, Shreveport</h3>
                            <p className="text-gold font-semibold mt-1">Master of Business Administration (MBA), Data Analytics</p>
                        </div>
                        <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white text-center">Key Certifications</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-8 items-center justify-items-center mt-6 flex-grow">
                               <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/main/pictures/Coursera_20IBM_20Generative_20AI_20Engineering_20with_20LLMs_20Specialization.png" alt="IBM AI Cert" className="h-16 w-auto"/>
                               <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/7d95669d08cffb1cd5f35395fb740354a35e4620/pictures/new/psmI.png" alt="PSM I Cert" className="h-16 w-auto"/>
                               <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/main/pictures/lean%206%20gb%20cert%201.png" alt="LSSGB Cert" className="h-16 w-auto"/>
                               <img src="https://raw.githubusercontent.com/tonicsouls/resume-and-CV/main/pictures/hrci_PHR1.png" alt="PHR Cert" className="h-16 w-auto"/>
                            </div>
                        </div>
                         <div className="glass-card rounded-2xl p-8 text-center h-full flex flex-col justify-center">
                            <img src="https://github.com/tonicsouls/resume-and-CV/blob/main/pictures/new/utabusiness_logo.jpg?raw=true" alt="UTA Logo" className="h-20 mx-auto mb-4"/>
                            <h3 className="text-xl font-bold text-white">University of Texas at Arlington</h3>
                            <p className="text-gold font-semibold mt-1">B.Sc. Business Communication</p>
                        </div>
                     </div>
                </section>
                
                 <section id="testimonials" className="py-20">
                    <h2 className="font-montserrat text-4xl font-bold text-center mb-12">From the <span className="text-gold">Field</span></h2>
                    <div className="marquee-container">
                        <div className="marquee-track marquee-track--testimonials">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div key={index} className="flex-shrink-0 w-[450px] glass-card rounded-2xl p-8 mx-4">
                                    <p className="text-gray-300 text-lg mb-6">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-blue-500" />
                                        <div>
                                            <p className="font-bold text-white">{testimonial.name}</p>
                                            <p className="text-gray-400">{testimonial.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                 <section id="journey" className="py-20">
                     <h2 className="font-montserrat text-4xl font-bold text-center mb-16">Career <span className="text-gold">Journey</span></h2>
                     <div className="relative max-w-4xl mx-auto">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
                        {timelineEvents.map((event, index) => (
                            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 border-2 border-gold rounded-full w-16 h-16">
                                    <h1 className="mx-auto font-semibold text-lg text-gold">
                                        {getYearFromDate(event.date)}
                                    </h1>
                                </div>
                                <div className={`order-1 glass-card rounded-2xl shadow-xl w-5/12 px-6 py-4 text-left`}>
                                    <p className="mb-2 text-sm text-blue-400">{event.date}</p>
                                    <h3 className="mb-2 font-bold text-white text-lg">{event.title}</h3>
                                    <div className="flex items-center gap-2 mb-3" style={{justifyContent: 'flex-start'}}>
                                        {event.logo && <img src={event.logo} alt={`${event.company} logo`} className="h-6 w-6 rounded-full bg-white p-0.5" />}
                                        <p className="text-sm font-semibold text-gray-400">{event.company}</p>
                                    </div>
                                    {Array.isArray(event.description) ? (
                                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 text-left">
                                           {event.description.map((item, i) => (
                                                <li key={i}>{typeof event.link === 'string' && item.startsWith('View') ? <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{item} ↗</a> : item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                         <p className="text-sm text-gray-300 text-left">{event.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            <footer id="contact" className="bg-gray-900 mt-20 border-t border-gray-800">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h2 className="font-montserrat text-4xl font-bold mb-4">Let's Connect</h2>
                     <p className="text-gray-400 max-w-xl mx-auto mb-8">
                        I'm always open to discussing new opportunities, strategic partnerships, or collaborating on innovative projects.
                    </p>
                    <div className="flex justify-center items-center space-x-6">
                        <a href="mailto:darryl.erby@gmail.com" className="btn-primary font-bold py-3 px-8 rounded-full">Email Me</a>
                         <a href="https://www.linkedin.com/in/darrylerby/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                        </a>
                    </div>
                     <p className="text-gray-600 text-sm mt-12">&copy; {new Date().getFullYear()} Darryl Erby. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;