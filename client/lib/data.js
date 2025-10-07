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

export const portfolioItems = [{
        id: '1',
        title: 'E-commerce Platform',
        description: 'Full-featured online store with payment integration',
        category: 'Web Development',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        link: 'https://example.com',
        client: 'Fashion Retailer',
        duration: '8 weeks',
        budget: '₹ XXXXXX',
        results: ['300% increase in sales', '50% reduction in cart abandonment', '99.9% uptime achieved'],
        challenge: 'Complex inventory management and real-time stock updates',
        solution: 'Built custom inventory system with real-time sync and automated alerts'
    },
    {
        id: '2',
        title: 'Fitness Mobile App',
        description: 'Cross-platform fitness tracking application',
        category: 'Mobile Development',
        image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React Native', 'Firebase', 'Redux'],
        client: 'HealthTech Startup',
        duration: '10 weeks',
        budget: '₹ XXXXXX',
        results: ['50,000+ downloads', '4.8/5 app store rating', '80% user retention'],
        challenge: 'Complex workout tracking with offline support',
        solution: 'Implemented robust offline-first architecture with sync capabilities'
    },
    {
        id: '3',
        title: 'AI Chatbot Solution',
        description: 'Intelligent customer service automation',
        category: 'AI & Machine Learning',
        image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
        client: 'E-commerce Giant',
        duration: '12 weeks',
        budget: '₹ XXXXXX',
        results: ['80% reduction in support tickets', '24/7 customer support', '95% accuracy rate'],
        challenge: 'Understanding complex customer queries in multiple languages',
        solution: 'Built multilingual NLP model with context awareness'
    },
    {
        id: '4',
        title: 'Cloud Migration',
        description: 'Large-scale enterprise cloud infrastructure',
        category: 'Cloud Solutions',
        image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        client: 'Financial Services Company',
        duration: '16 weeks',
        budget: '₹ XXXXXX',
        results: ['60% cost reduction', '99.99% uptime', '50% faster deployment'],
        challenge: 'Migrating legacy systems without downtime',
        solution: 'Implemented blue-green deployment strategy with automated rollback'
    },
    {
        id: '5',
        title: 'Banking App Redesign',
        description: 'Modern UI/UX for financial services',
        category: 'UI/UX Design',
        image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
        client: 'Digital Bank',
        duration: '6 weeks',
        budget: '₹ XXXXXX',
        results: ['40% increase in user engagement', '90% user satisfaction', 'Reduced support calls by 60%'],
        challenge: 'Creating intuitive interface for complex financial operations',
        solution: 'Conducted extensive user research and implemented progressive disclosure'
    },
    {
        id: '6',
        title: 'Healthcare Dashboard',
        description: 'Real-time patient monitoring system',
        category: 'Web Development',
        image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket'],
        client: 'Hospital Network',
        duration: '14 weeks',
        budget: '₹ XXXXXX',
        results: ['Real-time monitoring of 1000+ patients', '30% faster response time', 'HIPAA compliant'],
        challenge: 'Real-time data processing with strict security requirements',
        solution: 'Built secure WebSocket infrastructure with end-to-end encryption'
    }
];

export const teamMembers = [{
        id: '1',
        name: 'Alex Johnson',
        role: 'Lead Developer & Founder',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Full-stack developer with 8+ years of experience in modern web technologies.',
        skills: ['React', 'Node.js', 'Python', 'AWS', 'JavaScript'],
        experience: '8+ years',
        certifications: ['AWS Certified Solutions Architect', 'Google Cloud Professional'],
        education: 'B.Tech in Computer Science',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        github: 'https://github.com/alexjohnson'
    },
    {
        id: '2',
        name: 'Sarah Chen',
        role: 'UI/UX Designer',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
        bio: 'Creative designer focused on user-centered design and beautiful interfaces.',
        skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
        experience: '6+ years',
        certifications: ['Google UX Design Certificate', 'Adobe Certified Expert'],
        education: 'MFA in Design',
        linkedin: 'https://linkedin.com/in/sarahchen',
        behance: 'https://behance.net/sarahchen'
    },
    {
        id: '3',
        name: 'Michael Rodriguez',
        role: 'Mobile Developer',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
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
        name: 'Emily Watson',
        role: 'AI Engineer',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
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

export const blogPosts = [{
        id: '1',
        title: 'The Future of Web Development in 2024',
        excerpt: 'Exploring the latest trends and technologies shaping the web development landscape.',
        content: 'Web development continues to evolve at a rapid pace. In 2024, we\'re seeing exciting developments in areas like AI integration, serverless architecture, and progressive web apps...',
        author: 'Alex Johnson',
        date: '2024-01-15',
        category: 'Web Development',
        image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '5 min read',
        views: 1250,
        tags: ['Web Development', 'Trends', 'Technology']
    },
    {
        id: '2',
        title: 'Mobile App Development Best Practices',
        excerpt: 'Essential guidelines for creating successful mobile applications.',
        content: 'Building a successful mobile app requires careful planning and execution. From user experience design to performance optimization, here are the key practices...',
        author: 'Michael Rodriguez',
        date: '2024-01-10',
        category: 'Mobile Development',
        image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '7 min read',
        views: 980,
        tags: ['Mobile Development', 'Best Practices', 'UX']
    },
    {
        id: '3',
        title: 'AI Integration in Modern Applications',
        excerpt: 'How artificial intelligence is transforming user experiences.',
        content: 'Artificial intelligence is no longer a futuristic concept—it\'s here and transforming how we build applications. From chatbots to predictive analytics...',
        author: 'Emily Watson',
        date: '2024-01-05',
        category: 'AI & Machine Learning',
        image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
        readTime: '6 min read',
        views: 1450,
        tags: ['AI', 'Machine Learning', 'Innovation']
    }
];