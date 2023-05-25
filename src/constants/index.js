/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable xss/no-mixed-html */
/* eslint-disable sonarjs/no-duplicate-string */
import {
  backend,
  bnlogo2,
  carrent,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  tailwind,
  threejs,
  tripguide,
  typescript,
  uil,
  utrgv,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Engineer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Web Developer',
    icon: mobile,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Engineer',
    company_name: 'BoomNation',
    icon: bnlogo2,
    iconBg: '#383E56',
    date: 'August 2022 - Present',
    points: [
      'Worked on a team of 3 engineers and heavily utilized React Native to get the BoomNation app to the top 40 on the App Store and Google Play Store.',
      'Developed scalable infrastructure using Amazon EC2 and implemented strict testing guidelines to ensure 100% uptime for BoomNation app with over 100,000 users',
      'Built and maintained the back-end infrastructure using technologies such as Node.js, Apollo GraphQL, and PostgreSQL, which enabled the company to handle a high volume of traffic and increase revenue by 20%.',
      'Utilized agile development methodologies to consistently deliver over 1000+ lines of well-structured and maintainable code per week.',
    ],
  },
  {
    title: 'Learning Phase',
    company_name: 'N/A',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Technical Coordinator',
    company_name: 'University Interscholastic League',
    icon: uil,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Managed the OMEGA timing system to capture and analyze the performance data of hundreds of swimmers during swim meets, ensuring accurate and timely results.',
      'Developed and maintained a system to manage and store the data securely, using SQL and Excel spreadsheets to track athlete times and statistics',
      'Collaborated with the technical team to troubleshoot system issues and ensure optimal performance during high-pressure events',
    ],
  },
  {
    title: 'Computer Science Major',
    company_name: 'The University of Texas Rio Grande Valley - DNF',
    icon: utrgv,
    iconBg: '#E6DEDD',
    date: 'Aug 2020 - May 2021',
    points: [
      'I attended The University of Texas Rio Grande Valley, where I pursued a degree in Computer Science and successfully maintained a flawless 4.0 GPA throughout my studies.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
        'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
        'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
        'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
        'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export {
  experiences, projects,
  services, technologies, testimonials,
};
