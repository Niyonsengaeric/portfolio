const logotext = "NIYONSENGA";
const meta = {
  title: "Niyonsenga Eric",
  description:
    "I’m NIYONSENGA Eric data scientist _ Full stack developer,currently working in Berlin",
};

const introdata = {
  title: "I’m NIYONSENGA Eric",
  animated: {
    first: "I am a full stack developer",
    second: "I am passionate about coding",
    third: "I am eager to learn new things",
  },
  description:
    "I am a Full-stack Engineer with a Bachelor's degree in Computer and Software Engineering. I have gained hands-on experience working with a diverse range of tools and languages. My expertise lies in utilizing Spring Boot, Node.js (including Express framework), and Nest.js for back-end development, as well as specializing in React.js and Next.js for front-end development. Along with strong analytical and problem-solving skills, I am known for being a fast learner and adaptable team player.",
  your_img_url: "https://res.cloudinary.com/niyo/image/upload/v1687827603/i598augu8ahbfa5ow5mk.jpg",
};

const dataabout = {
  title: "abit about my self",
  aboutme: introdata?.description || "",
};
const worktimeline = [
  {
    jobtitle: "Designer of week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Javascript",
    value: 95,
  },
  {
    name: "React.js / Next.Js",
    value: 95,
  },
  {
    name: "Node.js / Nest.js",
    value: 80,
  },
  {
    name: "Spring boot",
    value: 90,
  },
];
const otherSkills = [
  {
    name: "Problem solver",
  },
  {
    name: "Excellent communication skills",
  },
  {
    name: "Detail oriented",
  },
  {
    name: "Team player",
  },
  {
    name: " Self motivated with passion of new Technology ",
  },
  {
    name: "Time Management",
  },
  {
    name: "Adaptability",
  },
];

const services = [
  {
    title: "Backend developer",
    description:
      "Writing the web services and APIs used by front-end developers, mobile application developers and responsible for server-side web application logic as well as the integration of the front-end part.",
  },
  {
    title: "Fronted developer",
    description:
      "Responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/600/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    desctiption:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: process.env.REACT_APP_EMAIL,
  YOUR_FONE: process.env.REACT_APP_PHONE,
  description: "We can do so much together. Let's talk.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_USER_ID,
};

const socialprofils = {
  github: "https://github.com/Niyonsengaeric",
  // facebook: "https://www.facebook.com/NERI103",
  linkedin: "https://www.linkedin.com/in/niyonsenga-eric-ba781b139",
  twitter: "https://twitter.com/NiyEric",
  // youtube: "https://youtube.com",
  // twitch: "https://twitch.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  otherSkills,
};
