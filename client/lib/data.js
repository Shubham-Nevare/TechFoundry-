export const services = [{
        id: '1',
        title: 'Web Development',
        description: 'Full-stack web applications with modern technologies',
        icon: 'Globe',
        features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development', 'SEO Optimization', 'Performance Optimization', 'Security Implementation'],
        startingPrice: '₹ 25,000',
        deliveryTime: '4-6 weeks',
        guarantee: '100% satisfaction guarantee',
        includes: ['Source Code', 'Documentation', '3 months support', 'Performance optimization', 'Security audit']
    },
    {
        id: '2',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications',
        icon: 'Smartphone',
        features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Deployment', 'Push Notifications', 'Offline Support', 'Analytics Integration'],
        startingPrice: '₹ 35,000',
        deliveryTime: '6-8 weeks',
        guarantee: 'App store approval guarantee',
        includes: ['Source Code', 'App Store Submission', '6 months support', 'Performance monitoring', 'Crash reporting']
    },
    {
        id: '3',
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by AI and ML',
        icon: 'Brain',
        features: ['Custom AI Models', 'Data Analysis', 'Automation', 'Computer Vision', 'Natural Language Processing', 'Model Training', 'API Integration'],
        startingPrice: '₹ 50,000',
        deliveryTime: '8-12 weeks',
        guarantee: 'Model accuracy guarantee',
        includes: ['Trained Models', 'API Documentation', '12 months support', 'Model monitoring', 'Performance metrics']
    },
    {
        id: '4',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment',
        icon: 'Cloud',
        features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD Pipelines', 'Microservices', 'Monitoring & Analytics', 'Auto-scaling', 'Backup & Recovery'],
        startingPrice: '₹ 20,000',
        deliveryTime: '2-4 weeks',
        guarantee: '99.9% uptime guarantee',
        includes: ['Infrastructure as Code', 'Monitoring setup', '6 months support', 'Cost optimization', 'Security compliance']
    },
    {
        id: '5',
        title: 'UI/UX Design',
        description: 'Beautiful and intuitive user experiences',
        icon: 'Palette',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing', 'Design System', 'Accessibility'],
        startingPrice: '₹ 15,000',
        deliveryTime: '3-4 weeks',
        guarantee: 'Design satisfaction guarantee',
        includes: ['Design Files', 'Style Guide', 'Prototype', '3 months support', 'Design handoff']
    },
    {
        id: '6',
        title: 'Consulting',
        description: 'Strategic technology consulting and planning',
        icon: 'Users',
        features: ['Tech Strategy', 'Architecture Review', 'Code Audits', 'Performance Optimization', 'Training', 'Security Assessment', 'Scalability Planning'],
        startingPrice: '₹ 1,500/hour',
        deliveryTime: 'Flexible',
        guarantee: 'ROI improvement guarantee',
        includes: ['Detailed Reports', 'Implementation Plan', 'Follow-up sessions', 'Best practices guide', 'Team training']
    }
];

// export const portfolioItems = [{
//         id: '1',
//         title: 'job portal Website',
//         description: 'Full-featured online store with payment integration',
//         category: 'Web Development',
//         image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//         link: 'https://example.com',
//         client: 'Fashion Retailer',
//         duration: '8 weeks',
//         budget: '₹ XXXXXX',
//         results: ['300% increase in sales', '50% reduction in cart abandonment', '99.9% uptime achieved'],
//         challenge: 'Complex inventory management and real-time stock updates',
//         solution: 'Built custom inventory system with real-time sync and automated alerts'
//     },
//     {
//         id: '2',
//         title: 'Fitness Mobile App',
//         description: 'Cross-platform fitness tracking application',
//         category: 'Mobile Development',
//         image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['React Native', 'Firebase', 'Redux'],
//         client: 'HealthTech Startup',
//         duration: '10 weeks',
//         budget: '₹ XXXXXX',
//         results: ['50,000+ downloads', '4.8/5 app store rating', '80% user retention'],
//         challenge: 'Complex workout tracking with offline support',
//         solution: 'Implemented robust offline-first architecture with sync capabilities'
//     },
//     {
//         id: '3',
//         title: 'AI Chatbot Solution',
//         description: 'Intelligent customer service automation',
//         category: 'AI & Machine Learning',
//         image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
//         client: 'E-commerce Giant',
//         duration: '12 weeks',
//         budget: '₹ XXXXXX',
//         results: ['80% reduction in support tickets', '24/7 customer support', '95% accuracy rate'],
//         challenge: 'Understanding complex customer queries in multiple languages',
//         solution: 'Built multilingual NLP model with context awareness'
//     },
//     {
//         id: '4',
//         title: 'Cloud Migration',
//         description: 'Large-scale enterprise cloud infrastructure',
//         category: 'Cloud Solutions',
//         image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
//         client: 'Financial Services Company',
//         duration: '16 weeks',
//         budget: '₹ XXXXXX',
//         results: ['60% cost reduction', '99.99% uptime', '50% faster deployment'],
//         challenge: 'Migrating legacy systems without downtime',
//         solution: 'Implemented blue-green deployment strategy with automated rollback'
//     },
//     {
//         id: '5',
//         title: 'Banking App Redesign',
//         description: 'Modern UI/UX for financial services',
//         category: 'UI/UX Design',
//         image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
//         client: 'Digital Bank',
//         duration: '6 weeks',
//         budget: '₹ XXXXXX',
//         results: ['40% increase in user engagement', '90% user satisfaction', 'Reduced support calls by 60%'],
//         challenge: 'Creating intuitive interface for complex financial operations',
//         solution: 'Conducted extensive user research and implemented progressive disclosure'
//     },
//     {
//         id: '6',
//         title: 'Healthcare Dashboard',
//         description: 'Real-time patient monitoring system',
//         category: 'Web Development',
//         image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
//         technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket'],
//         client: 'Hospital Network',
//         duration: '14 weeks',
//         budget: '₹ XXXXXX',
//         results: ['Real-time monitoring of 1000+ patients', '30% faster response time', 'HIPAA compliant'],
//         challenge: 'Real-time data processing with strict security requirements',
//         solution: 'Built secure WebSocket infrastructure with end-to-end encryption'
//     }
// ];

export const portfolioItems = [
  {
    id: '1',
    title: 'CareerConnect – Job Portal Platform',
    description: 'A professional job portal connecting employers and job seekers with a seamless application process.',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://career-connect-jobs.vercel.app/',
    client: 'CareerConnect Startup',
    duration: '6 weeks',
    budget: '₹ XXXXXX',
    results: ['100+ job listings posted', 'Automated hiring workflow', 'Dynamic candidate dashboard'],
    challenge: 'Creating a real-time job posting and filtering system for multiple employers.',
    solution: 'Developed a role-based system with dynamic filtering and instant job updates.'
  },
  {
    id: '2',
    title: 'Digital Health – AI Healthcare Platform',
    description: 'Smart digital healthcare system for online doctor consultations and health monitoring.',
    category: 'AI & Healthcare',
    image: 'https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'AI Chatbot', 'Twilio'],
    link: 'https://digital-health-dh.vercel.app/',
    client: 'Healthcare Tech Startup',
    duration: '8 weeks',
    budget: '₹ XXXXXX',
    results: ['Automated doctor recommendations', 'AI symptom analysis', 'Instant appointment booking'],
    challenge: 'Building an AI model for accurate doctor recommendations.',
    solution: 'Integrated OpenAI API with a custom symptom-checker and real-time booking system.'
  },
  {
    id: '3',
    title: 'Developous – Tech Solutions Agency',
    description: 'Official website of Developous offering web, mobile, AI, and cloud services worldwide.',
    category: 'Agency Website',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'SEO Optimized'],
    link: 'https://www.developous.com/',
    client: 'Developous Tech Agency',
    duration: '4 weeks',
    budget: '₹ XXXXXX',
    results: ['Optimized SEO', 'Responsive UI/UX', 'Increased brand credibility'],
    challenge: 'Creating a high-performance agency website with SEO and modern design.',
    solution: 'Developed using Next.js 14 with optimized metadata, sitemap, and OpenGraph tags.'
  },
  {
    id: '4',
    title: 'BlogSave – Modern Blogging Platform',
    description: 'A user-friendly blogging platform for writers to post, edit, and share blogs with readers worldwide.',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://blog-save.vercel.app/',
    client: 'Individual Creator',
    duration: '5 weeks',
    budget: '₹ XXXXXX',
    results: ['Live blog publishing', 'User authentication', 'Cloud-based storage'],
    challenge: 'Ensuring real-time blog editing and secure user data.',
    solution: 'Integrated Firebase Auth and Firestore for seamless CRUD and authentication.'
  },
  {
    id: '5',
    title: 'Gym MiraRoad – Fitness Website',
    description: 'A dynamic website for a fitness center showcasing membership plans, trainers, and workout schedules.',
    category: 'Business Website',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Tailwind CSS', 'EmailJS'],
    link: 'https://gymmiraroad.vercel.app/',
    client: 'Gym MiraRoad',
    duration: '3 weeks',
    budget: '₹ XXXXXX',
    results: ['Online membership registration', 'Trainer showcase', 'Responsive UI'],
    challenge: 'Building an attractive landing page with lead form integration.',
    solution: 'Implemented EmailJS for contact forms and optimized responsive design.'
  },
  {
    id: '6',
    title: 'CarsDoctor – Car Service Booking App',
    description: 'Online platform for car service and maintenance booking with real-time tracking.',
    category: 'Service Platform',
    image: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://carsdoctor.vercel.app/',
    client: 'Auto Service Startup',
    duration: '7 weeks',
    budget: '₹ XXXXXX',
    results: ['Reduced booking time by 40%', 'Integrated payment flow', 'Realtime booking system'],
    challenge: 'Building a multi-role car service management system.',
    solution: 'Created customer, admin, and mechanic dashboards with real-time updates.'
  },
  {
    id: '7',
    title: 'Akruti Developers – Real Estate Website',
    description: 'Real estate showcase website featuring projects, locations, and client inquiries.',
    category: 'Real Estate',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Maps API'],
    link: 'https://akruti-developers.vercel.app/',
    client: 'Akruti Developers',
    duration: '6 weeks',
    budget: '₹ XXXXXX',
    results: ['Lead generation increased by 50%', 'Improved user navigation', 'Responsive property listings'],
    challenge: 'Displaying dynamic real estate data with an elegant layout.',
    solution: 'Integrated location maps, project details, and inquiry forms with modern UI.'
  },
  {
    id: '8',
    title: 'Music Distribution Platform (MDP)',
    description: 'An online platform for artists to upload, manage, and distribute their music across platforms.',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://music-distribution-platform-mdp.vercel.app/login',
    client: 'Music Startup',
    duration: '10 weeks',
    budget: '₹ XXXXXX',
    results: ['Automated music uploads', 'Secure artist accounts', 'Responsive dashboard'],
    challenge: 'Handling secure media uploads and user authentication.',
    solution: 'Used Firebase Storage with authentication and dynamic dashboard UI.'
  },
  {
    id: '9',
    title: 'Book Finder App',
    description: 'Smart book search and recommendation platform using the Google Books API.',
    category: 'Web App',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'API Integration', 'Tailwind CSS'],
    link: 'https://book-finder-app-khaki.vercel.app/',
    client: 'Educational Startup',
    duration: '3 weeks',
    budget: '₹ XXXXXX',
    results: ['Instant book search', 'Detailed book info', 'Clean UI for readers'],
    challenge: 'Fetching large datasets from the Google Books API efficiently.',
    solution: 'Implemented optimized API fetching with search debouncing and pagination.'
  },
  {
    id: '10',
    title: 'Food Delivery Website',
    description: 'Modern food delivery website for restaurants with dynamic menu and cart system.',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Redux', 'Tailwind CSS'],
    link: 'https://food-delivery-website-shubhams.vercel.app/',
    client: 'Food Startup',
    duration: '6 weeks',
    budget: '₹ XXXXXX',
    results: ['Smooth checkout flow', 'Dynamic cart', 'Increased customer engagement'],
    challenge: 'Building an optimized and fast ordering experience.',
    solution: 'Developed responsive UI with Redux for cart and order management.'
  },
  {
    id: '11',
    title: 'Smart AI Bot',
    description: 'AI chatbot web app for intelligent conversations and task assistance.',
    category: 'AI Solutions',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'OpenAI API', 'Tailwind CSS'],
    link: 'https://smart-ai-bot.vercel.app/',
    client: 'Tech Enthusiast Project',
    duration: '4 weeks',
    budget: '₹ XXXXXX',
    results: ['99% uptime', 'Quick AI responses', 'Custom prompt system'],
    challenge: 'Integrating OpenAI API with dynamic frontend interactions.',
    solution: 'Built a conversational UI with context-aware chat responses.'
  },
  {
    id: '12',
    title: 'Weather Agent Chat Interface (WACI)',
    description: 'AI-powered weather assistant providing live weather updates and forecasts.',
    category: 'AI & Data Visualization',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'OpenAI API', 'Weather API', 'Tailwind CSS'],
    link: 'https://weather-agent-chat-interface-waci.vercel.app/',
    client: 'WeatherTech Innovators',
    duration: '5 weeks',
    budget: '₹ XXXXXX',
    results: ['Real-time weather updates', 'AI chat responses', 'Interactive dashboard'],
    challenge: 'Combining multiple APIs for chat-based weather predictions.',
    solution: 'Integrated OpenAI and Weather APIs with live, conversational weather updates.'
  }
];

export const teamMembers = [{
        id: '1',
        name: 'Shubham Nevare',
        role: 'Lead Developer & Founder',
        avatar: '/shubham_nevare.png',
        bio: 'Full-stack developer with 2+ years of experience in modern web technologies.',
        skills: ['React', 'Next.js', 'Node.js', 'AWS', 'JavaScript'],
        experience: '2+ years',
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional'],
        education: 'Master of Computer Applications (MCA)',
        linkedin: 'www.linkedin.com/in/shubham-nevare-a607a0243',
        github: 'https://github.com/Shubham-Nevare'
    },
    {
        id: '2',
        name: 'Shital Nevare',
        role: 'UI/UX Designer',
        avatar: '/shital_nevare.jpeg',
        bio: 'Creative designer focused on user-centered design and beautiful interfaces.',
        skills: ['Figma', 'Adobe', 'User Research', 'Prototyping'],
        experience: '2+ years',
        certifications: ['Google UX Design Certificate', 'Adobe Certified Expert'],
        education: 'MFA in Design',
        linkedin: 'https://linkedin.com/in/shital',
        behance: 'https://behance.net/shital'
    },
    {
        id: '3',
        name: 'Priyanka Chavan',
        role: 'Mobile Developer',
        avatar: '/avtar.jpg',
        bio: 'Mobile specialist with expertise in React Native and native iOS/Android development.',
        skills: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
        experience: '7+ years',
        certifications: ['Apple Developer Certification', 'Google Play Console Expert'],
        education: 'B.Tech in Software Engineering',
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        github: 'https://github.com/michaelrodriguez'
    },
    {
        id: '4',
        name: 'Harshal Wagh',
        role: 'AI Engineer',
        avatar: '/avtar.jpg',
        bio: 'AI/ML engineer specializing in computer vision and natural language processing.',
        skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
        experience: '5+ years',
        certifications: ['TensorFlow Developer Certificate', 'AWS Machine Learning Specialty'],
        education: 'M.Tech in AI/ML',
        linkedin: 'https://linkedin.com/in/emilywatson',
        github: 'https://github.com/emilywatson'
    }
];

export const testimonials = [{
        id: '1',
        name: 'Sarah Johnson',
        company: 'TechStart Inc.',
        position: 'CEO',
        testimonial: 'FreelanceTeam delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and professional approach made all the difference. We saw a 300% increase in sales within the first quarter.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
        project: 'E-commerce Platform',
        metrics: ['300% sales increase', '50% cost reduction', '99.9% uptime'],
        verified: true
    },
    {
        id: '2',
        name: 'Michael Chen',
        company: 'HealthTech Solutions',
        position: 'CTO',
        testimonial: 'The mobile app they developed for us has been a game-changer for our business. The user experience is fantastic and the performance is outstanding. We\'ve achieved 50,000+ downloads and 4.8/5 rating.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
        project: 'Fitness Mobile App',
        metrics: ['50,000+ downloads', '4.8/5 rating', '80% retention'],
        verified: true
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        company: 'DataCorp',
        position: 'VP of Technology',
        testimonial: 'Their AI solution helped us automate our customer service and improve response times by 80%. The implementation was smooth and the results were immediate. Highly recommend their expertise.',
        rating: 5,
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
        project: 'AI Chatbot Solution',
        metrics: ['80% faster response', '95% accuracy', '24/7 support'],
        verified: true
    }
];

export const certifications = [{
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    {
        name: 'Google Cloud Professional',
        issuer: 'Google Cloud',
        year: '2023',
        // logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Cloud_logo.svg'
        logo:'https://algotrading101.com/learn/wp-content/uploads/2022/09/Google-Cloud-Logo-Lockup-MAIN-png-1.webp'
        
    },
    {
        name: 'Microsoft Azure Developer',
        issuer: 'Microsoft',
        year: '2023',
        // logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_logo.svg'
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
    },
    {
        name: 'TensorFlow Developer Certificate',
        issuer: 'Google',
        year: '2023',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
    }
];

export const securityBadges = [{
        name: 'SSL Secured',
        description: '256-bit encryption',
        icon: '🔒'
    },
    {
        name: 'GDPR Compliant',
        description: 'Data protection compliant',
        icon: '🛡️'
    },
    {
        name: 'ISO 27001',
        description: 'Information security certified',
        icon: '✅'
    },
    {
        name: 'PCI DSS',
        description: 'Payment security standard',
        icon: '💳'
    }
];

export const guarantees = [{
        title: '100% Satisfaction Guarantee',
        description: 'If you\'re not completely satisfied, we\'ll revise until you are.',
        icon: '🎯'
    },
    {
        title: 'On-Time Delivery',
        description: 'We guarantee to deliver your project on schedule or it\'s free.',
        icon: '⏰'
    },
    {
        title: 'Source Code Ownership',
        description: 'You own 100% of the source code and intellectual property.',
        icon: '📜'
    },
    {
        title: 'Post-Launch Support',
        description: 'Free support and maintenance for 3-12 months after launch.',
        icon: '🛠️'
    }
];

export const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development in 2025',
    excerpt: 'Discover how AI, Next.js, and automation are redefining the future of web development in 2025.',
    content:
      'Web development in 2025 continues to evolve rapidly with trends like AI-powered coding assistants, serverless applications, headless CMS, and edge computing. Companies like Developous are leading the shift toward smarter, faster, and more secure web experiences...',
    author: 'Shubham Nevare',
    date: '2025-09-25',
    category: 'Web Development',
    image:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    views: 1870,
    tags: ['Web Development', 'Next.js', 'AI Integration'],
  },
  {
    id: '2',
    title: 'Building Scalable Mobile Apps: A 2025 Guide',
    excerpt:
      'Learn how to create high-performance, scalable, and user-friendly mobile apps using React Native and modern tools.',
    content:
      'In 2025, mobile app development has shifted towards performance, security, and AI personalization. Using frameworks like React Native and Flutter, developers can create faster, scalable apps that work across platforms efficiently...',
    author: 'Developous Team',
    date: '2025-08-12',
    category: 'Mobile Development',
    image:
      'https://images.pexels.com/photos/4069294/pexels-photo-4069294.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '8 min read',
    views: 1560,
    tags: ['Mobile Apps', 'React Native', 'Performance'],
  },
  {
    id: '3',
    title: 'AI Integration: Transforming Digital Businesses',
    excerpt:
      'Artificial Intelligence is reshaping how startups and enterprises automate workflows, enhance UX, and make data-driven decisions.',
    content:
      'From AI-powered chatbots to predictive analytics, businesses are integrating AI to revolutionize customer experience. At Developous, our AI-driven solutions help clients automate repetitive processes and achieve operational efficiency...',
    author: 'Developous AI Team',
    date: '2025-07-20',
    category: 'AI & Machine Learning',
    image:
      'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '7 min read',
    views: 2140,
    tags: ['AI', 'Automation', 'Business Growth'],
  },
  {
    id: '4',
    title: 'Design Thinking in Modern UI/UX',
    excerpt:
      'Explore how design thinking is changing the way digital agencies create intuitive and impactful user experiences.',
    content:
      'Modern design goes beyond aesthetics—it’s about problem-solving. Design thinking helps teams understand user pain points, prototype quickly, and create interfaces that truly connect. At Developous, we combine creativity with analytics to craft meaningful designs...',
    author: 'Priya Mehta',
    date: '2025-06-18',
    category: 'UI/UX Design',
    image:
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read',
    views: 980,
    tags: ['UI/UX', 'Design Thinking', 'User Experience'],
  },
  {
    id: '5',
    title: 'Cloud Solutions for Growing Startups',
    excerpt:
      'Learn how cloud computing enables startups to scale faster and operate more efficiently with reduced costs.',
    content:
      'Cloud technology is essential for modern startups. Platforms like AWS, Google Cloud, and Azure empower small businesses to launch scalable apps, ensure uptime, and manage resources effectively. Developous offers customized cloud solutions tailored for startups...',
    author: 'Developous Cloud Team',
    date: '2025-05-28',
    category: 'Cloud & DevOps',
    image:
      'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read',
    views: 1230,
    tags: ['Cloud', 'DevOps', 'Scalability'],
  },
];

export const faqs = [
  {
    id: 1,
    question: "How quickly can you start my project?",
    answer:
      "We typically start within 1–2 weeks after project approval. For urgent cases, we also provide expedited kickoff options.",
  },
  {
    id: 2,
    question: "What if I'm not satisfied with the work?",
    answer:
      "We offer a 100% satisfaction guarantee. If you’re not happy, we’ll revise until you’re fully satisfied — no extra charges.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! All our projects include 3–12 months of free post-launch support and maintenance, depending on your selected plan.",
  },
  {
    id: 4,
    question: "Who owns the source code after completion?",
    answer:
      "You own 100% of the source code and intellectual property. We provide complete code transfer upon project delivery.",
  },
  {
    id: 5,
    question: "Can you help scale or upgrade my existing project?",
    answer:
      "Absolutely. We specialize in modernizing and scaling existing web or mobile apps with optimized performance and modern design.",
  },
  {
    id: 6,
    question: "What technologies do you work with?",
    answer:
      "We work with React, Next.js, Node.js, Express, MongoDB, MySQL, and also integrate AI, cloud, and automation technologies.",
  },
];

