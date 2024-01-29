export type CardDetail = {
  title: string;
  description: string;
  images: {
    mobile: string;
    desktop: string;
    backgroundId: number;
  };
};

export type Project = {
  id: number;
  coverImageUrl: string;
  description: string;
  jobDescription: string;
  name: string;
  demoUrl: string;
  repoUrl: string;
  slug: string;
  cards: CardDetail[];
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
    name: "Foodee Order",
    slug: "foodee-order",
    year: "2023",
    typeApp: "E-commerce",
    workScopes: "Web Development | UX Design | Automation Testing",
    demoUrl: "https://foody-order.vercel.app",
    repoUrl: "https://github.com/zylcom/foody-order",
    coverImageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1701943061/laptop-phone-mockup_io1vtm.jpg",
    description:
      "Food ordering app with modern UI design and responsive in any devices. Order food that you want just using your browser.",
    jobDescription:
      "As professional in Web Developer, I utilize advanced technology to create website that are aesthetically, interactive, highly performance & secure. Creating full app that compatible in any devices screen. Implement automation testing to ensure app functionality work properly. Improve UX to make user comfortable when using the app. Use API to communicate with backend server. And add state management to easier maintain data.",
    cards: [
      {
        title: "Login user",
        description: "Login use your account.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938778/login-mobile_bav5qh.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938729/login-desktop_bqswpw.png",
          backgroundId: 520,
        },
      },
      {
        title: "Register user",
        description: "Creating new account. Save your credentials safely.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938776/register-mobile_y7829d.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938743/register-desktop_mapytr.png",
          backgroundId: 290,
        },
      },
      {
        title: "Search product",
        description: "Make you easier to find product that you want.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1704338334/search-mobile_uqky2w.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1704338176/search-desktop_nck1li.png",
          backgroundId: 818,
        },
      },
      {
        title: "Cart",
        description: "Manage your item easily with cart.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938771/cart-mobile_bt46om.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938701/cart-desktop_z1ztor.png",
          backgroundId: 522,
        },
      },
      {
        title: "Like product",
        description: "Give like to your favorite product.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938804/menu-detail-mobile_e519yf.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938726/menu-detail-desktop_xxyyc9.png",
          backgroundId: 554,
        },
      },
      {
        title: "Review product",
        description: "Give rating and write your review about the product.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938778/login-mobile_bav5qh.png",
          desktop: "https://picsum.photos/600/400.webp?random=2",
          backgroundId: 826,
        },
      },
      {
        title: "Create & checkout order",
        description: "Create order and checkout any time.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938778/login-mobile_bav5qh.png",
          desktop: "https://picsum.photos/600/400.webp?random=2",
          backgroundId: 744,
        },
      },
      {
        title: "Payment Gateway",
        description:
          "Integrated with payment gateway, provide many payment method and secure.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1703938778/login-mobile_bav5qh.png",
          desktop: "https://picsum.photos/600/400.webp?random=2",
          backgroundId: 503,
        },
      },
    ],
    techStack: [
      "Vue.js",
      "TailwindCSS",
      "Axios",
      "Vite",
      "Cypress",
      "Pinia",
      "Zod",
      "Npm",
      "GIT",
    ],
  },
  {
    id: 2,
    name: "Foodee Order RESTful API",
    coverImageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174747/foody-order-rest-api-desktop_pzyfly.png",
    slug: "foodee-rest-api",
    typeApp: "REST API",
    year: "2023",
    demoUrl: "https://foody-order-rest-api.vercel.app/",
    repoUrl: "https://github.com/zylcom/foody-order-rest-api",
    workScopes:
      "Development | Database Design | Automation Testing | Documentation",
    description:
      "Backend server built-in RESTful API architectural-designed and well documented.",
    jobDescription:
      "Designing database schema to create efficient and optimal data structure. Integrate with payment gateway to secure money transcational. Create automation testing and error handling to ensure app running perfectly. Write documentation about API routes following openapi specification.",
    cards: [
      {
        title: "Open api docs",
        description: "Api documentation.",
        images: {
          mobile:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174754/foody-order-rest-api-mobile_exgggv.png",
          desktop:
            "https://res.cloudinary.com/dk9bcf16t/image/upload/v1706174747/foody-order-rest-api-desktop_pzyfly.png",
          backgroundId: 1,
        },
      },
    ],
    techStack: [
      "Node.js",
      "Swagger UI",
      "Zod",
      "Express.js",
      "Jest",
      "Prisma",
      "Npm",
      "MySQL",
      "GIT",
    ],
  },
];

const certificates: Certificate[] = [
  {
    id: "N9ZO7OOLYZG5",
    title: "Javascript Fundamental",
    imageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705060093/Belajar-Dasar-Pemrograman-JavaScript_Dicoding_ems6o1.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/N9ZO7OOLYZG5",
  },
  {
    id: "1OP861RMVXQK",
    title: "Web Development Fundamental",
    imageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705060994/Belajar-Dasar-Pemrograman-Web_Dicoding_nxwjyz.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/1OP861RMVXQK",
  },
  {
    id: "07Z6RN79YPQR",
    title: "React Fundamental",
    imageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705289406/belajar-fundamental-aplikasi-web-dengan-react-dicoding_page-0001_ozbnbt.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/07Z6RN79YPQR",
  },
  {
    id: "JMZVNE9GNPN9",
    title: "React Expert",
    imageUrl:
      "https://res.cloudinary.com/dk9bcf16t/image/upload/v1705289430/menjadi-react-developer-expert-dicoding_page-0001_pudasr.jpg",
    verificationUrl: "https://www.dicoding.com/certificates/JMZVNE9GNPN9",
  },
];

const socials = [
  { socialName: "LinkedIn", link: "#" },
  { socialName: "Github", link: "https://github.com/zylcom" },
  { socialName: "Facebook", link: "#" },
  { socialName: "Instagram", link: "#" },
];

const skills = [
  "TypeScript",
  "Node.js",
  "MySQL",
  "Tailwindcss",
  "React.js",
  "Vue",
  "Express.js",
  "GIT",
];

export { certificates, projectList, skills, socials };
