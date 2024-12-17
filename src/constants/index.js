export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'SumZ - Article Summarizer Website',
      desc: 'SumZ is an innovative web application that streamlines the process of extracting key insights from articles. Powered by advanced AI models, it delivers accurate and concise summaries for enhanced readability and time efficiency.',
      subdesc: "Developed using React.js, Redux Toolkit, RapidAPI, and OpenAI's GPT model, SumZ offers a seamless user experience with its responsive design and powerful summarization capabilities.",
      href: 'https://rad-hamster-f22f52.netlify.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/favicon.ico',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Redux Toolkit',
          path: '/assets/Redux.png',
        },
        {
          id: 4,
          name: "OpenAI's GPT model",
          path: '/assets/OpenAI.png',
        },
      ],
    },
    {
      title: 'SUSHIMAN - Sushi Website',
      desc: 'SUSHIMAN is a captivating website dedicated to showcasing authentic Japanese cuisine, featuring an elegant design that highlights the artistry of sushi.',
      subdesc: 'Crafted with HTML, CSS, and JavaScript, SUSHIMAN utilizes CSS variables and the BEM methodology for maintainable code. Engaging animations enhance the user experience, making it visually appealing and intuitive.',
      href: 'https://incomparable-bonbon-773bf5.netlify.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/image6.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: '/assets/image3.png',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'assets/image4.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/image5.png',
        },
      ],
    },
    {
      title: 'Aora App - Video Sharing Platform',
      desc: 'Aora is a dynamic and feature-rich platform for sharing images and videos, designed to provide a seamless and personalized user experience. It empowers users to connect and share memories effortlessly through a visually engaging interface.',
      subdesc: 'Developed using React Native and Expo CLI, Aora integrates dynamic animations, secure authentication, full-text search, and media upload functionality. Its responsive design ensures compatibility across devices, offering users a smooth and immersive experience.',
      href: 'https://github.com/PremStark/Aora',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/aora.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'NativeWind',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Appwrite',
          path: '/assets/image1.png',
        },
        {
          id: 4,
          name: 'Expo CLI',
          path: '/assets/image2.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];