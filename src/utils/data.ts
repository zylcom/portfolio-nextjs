export type Images = {
  devices: {
    mobile: string;
    desktop: string;
    backgroundId: number;
  };
};

export type Project = {
  id: number;
  coverImageUrl: string;
  description: string;
  features: string[];
  jobDescription: string;
  name: string;
  demoUrl: string;
  repoUrl: string;
  slug: string;
  screenshots: Images[];
  techStack: string[];
  typeApp: string;
  workScopes: string;
  year: string;
};

export type Certificate = {
  id: string;
  title: string;
  imageUrl: string;
  verificationUrl: string;
};

type ProjectList = Array<Project>;

const projectList: ProjectList = [
  {
    id: 1,
    name: "BarResto App",
    slug: "bar-resto",
    year: "2023",
    typeApp: "E-commerce",
    workScopes: "Web Development | UX Design | Automation Testing",
    demoUrl: "https://bar-resto.vercel.app",
    repoUrl: "https://github.com/zylcom/bar-resto",
    coverImageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1701943061/laptop-phone-mockup_io1vtm.jpg",
    description: "Food ordering app with modern UI design and responsive in any devices. Order food that you want just using your browser.",
    jobDescription:
      "As professional in Web Developer, I utilize advanced technology to create website that are aesthetically, interactive, highly performance & secure. Creating full app that compatible in any devices screen. Implement automation testing to ensure app functionality work properly. Improve UX to make user comfortable when using the app. Use API to communicate with backend server. And add state management to easier maintain data.",
    features: [
      "Login & register account",
      "Search product",
      "Like product",
      "Review product",
      "Cart management",
      "Create & checkout order",
      "Automatic payment with payment gateway",
    ],
    techStack: ["Vue.js", "TailwindCSS", "Axios", "Vite", "Cypress", "Pinia", "Zod", "Npm", "GIT"],
    screenshots: [
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1704338334/search-mobile_uqky2w.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706595048/search-desktop_as0bzo.png",
          backgroundId: 818,
        },
      },
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706595638/cart-mobile_j5nkw9.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938701/cart-desktop_z1ztor.png",
          backgroundId: 522,
        },
      },
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938804/menu-detail-mobile_e519yf.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938726/menu-detail-desktop_xxyyc9.png",
          backgroundId: 554,
        },
      },
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706595054/payment-gateway-mobile_ynrovt.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706595032/payment-gateway-desktop_a69fot.png",
          backgroundId: 826,
        },
      },
    ],
  },
  {
    id: 2,
    name: "BarResto RESTful API",
    coverImageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174747/foody-order-rest-api-desktop_pzyfly.png",
    slug: "bar-resto-rest-api",
    typeApp: "REST API",
    year: "2023",
    demoUrl: "https://foody-order-rest-api.vercel.app/api/docs/",
    repoUrl: "https://github.com/zylcom/foody-order-rest-api",
    workScopes: "Development | Database Design | Automation Testing | Documentation",
    description: "Backend server built-in RESTful API architectural-designed and well documented.",
    jobDescription:
      "Designing database schema to create efficient and optimal data structure. Integrate with payment gateway to secure money transcational. Create automation testing and error handling to ensure app running perfectly. Write documentation about API routes following openapi specification.",
    features: [],
    screenshots: [
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174754/foody-order-rest-api-mobile_exgggv.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174747/foody-order-rest-api-desktop_pzyfly.png",
          backgroundId: 1,
        },
      },
    ],
    techStack: ["Node.js", "Swagger UI", "Zod", "Express.js", "Jest", "Prisma", "Npm", "MySQL", "GIT"],
  },
  {
    id: 3,
    name: "Smwaash",
    demoUrl: "https://smwaash.vercel.app",
    description: "Cleaning services landing page.",
    jobDescription: "Slicing UI/UX design to website. Deploy to hosting server.",
    features: [],
    repoUrl: "https://github.com/zylcom/smwaash",
    slug: "smwaash-landing-page",
    techStack: ["HTML", "Tailwindcss", "Vite", "JavaScript/TypeScript"],
    typeApp: "Landing Page",
    workScopes: "Front-end Developer",
    year: "2024",
    coverImageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1719546093/hero-section_tjajr1.png",
    screenshots: [
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1719547818/footer-section-mobile_zuwdvp.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1719547203/upwork-project_t3tv5c.jpg",
          backgroundId: 818,
        },
      },
      {
        devices: {
          mobile: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1719548018/header-section-mobile_o8cwgw.png",
          desktop: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1719547537/upwork-project-mobile_hdzpgi.jpg",
          backgroundId: 522,
        },
      },
    ],
  },
];

const certificates: Certificate[] = [
  {
    id: "N9ZO7OOLYZG5",
    title: "Javascript Fundamental",
    imageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705060093/Belajar-Dasar-Pemrograman-JavaScript_Dicoding_ems6o1.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZO7OOLYZG5",
  },
  {
    id: "1OP861RMVXQK",
    title: "Web Development Fundamental",
    imageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705060994/Belajar-Dasar-Pemrograman-Web_Dicoding_nxwjyz.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/1OP861RMVXQK",
  },
  {
    id: "07Z6RN79YPQR",
    title: "React Fundamental",
    imageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705289406/belajar-fundamental-aplikasi-web-dengan-react-dicoding_page-0001_ozbnbt.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/07Z6RN79YPQR",
  },
  {
    id: "JMZVNE9GNPN9",
    title: "React Expert",
    imageUrl: "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705289430/menjadi-react-developer-expert-dicoding_page-0001_pudasr.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/JMZVNE9GNPN9",
  },
];

const socials = [
  { socialName: "LinkedIn", link: "https://www.linkedin.com/in/sabilillah/" },
  { socialName: "Github", link: "https://github.com/zylcom" },
  { socialName: "Facebook", link: "#" },
  { socialName: "Instagram", link: "#" },
];

const skills = ["TypeScript", "Node.js", "MySQL", "Tailwindcss", "React.js", "Vue", "Express.js", "GIT"];

export { certificates, projectList, skills, socials };
