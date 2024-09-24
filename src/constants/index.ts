import JavaScriptIcon from "@/assets/icons/square-js.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import AWSIcon from "@/assets/icons/AWS.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import GraphqlIcon from "@/assets/icons/graphQL.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import MaterialUIIcon from "@/assets/icons/materialUI.svg";
import MongodbIcon from "@/assets/icons/mongoDB.svg";
import NodeIcon from "@/assets/icons/node.svg";
import PostgresqlIcon from "@/assets/icons/postgresql.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindCSS.svg";
import WebpackIcon from "@/assets/icons/webpack.svg";
import project1 from "@/assets/images/project1.png";
import project2 from "@/assets/images/project2.png";
import project3 from "@/assets/images/project3.png";
export const summary = `Frontend Developer with 2 years of experience in building responsive web applications using React.js, Next.js, and TypeScript. Proficient in creating user-centric interfaces with Tailwind CSS, Material UI, and state management with Redux. Skilled in optimizing performance using Webpack, implementing CI/CD pipelines, and utilizing AWS services like S3 and CloudFront.`;
export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for building efficient, scalable, and user-friendly web applications. With over 2 years of professional experience, I have worked extensively with technologies like React, Next.js, and TypeScript to create responsive and dynamic user interfaces. My expertise includes crafting intuitive, mobile-first designs using frameworks like Tailwind CSS and SASS, ensuring seamless user experiences across devices.`;

export const portfolioProjects = [
  {
    title: "IMDB Rating App",
    description:
      "The IMDB Rating App shows trending and top-rated movies. Users can see images, release dates, and short descriptions for each movie. The app features a dark theme for a modern look.",
    link: "https://imdb-next-js-app.vercel.app/",
    sourceCode: "https://github.com/aditya-gupta89/IMDB_NextJS_APP",
    image: project1,
  },
  {
    title: "Portfolio App",

    description:
      "Personal portfolio website showcasing projects and skills related to web technologies, developed responsively with modern tools like Next.js, Tailwind CSS and Framer Motion.",
    link: "https://www.adityadev.cloud/",
    sourceCode:'https://github.com/aditya-gupta89/Portfolio-Application',
    image: project2,
  },
  {
    title: "Map Expo App",
    description:
      "Map Expo project for adding markers on the map to indicate starting points for running and cycling routes, and viewing the locations on the map.",
    link: "https://map-expo.vercel.app/",
    sourceCode:'https://github.com/aditya-gupta89/map-expo',

    image: project3,
  },
];

export const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    top: "5%",
    left: "5%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    top: "35%",
    left: "10%",
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "10%",
    left: "65%",
  },
  {
    title: "Gym",
    emoji: "🏋️‍♂️",
    top: "65%",
    left: "35%",
  },
  {
    title: "traveling",
    emoji: "🌎",
    top: "55%",
    left: "60%",
  },
];

export const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },

  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Node",
    iconType: NodeIcon,
  },
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "AWS",
    iconType: AWSIcon,
  },
];

export const toolboxItems1 = [
  {
    title: "MaterialUI",
    iconType: MaterialUIIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindCSSIcon,
  },

  {
    title: "Postgresql",
    iconType: PostgresqlIcon,
  },
  {
    title: "MongoDB",
    iconType: MongodbIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
  {
    title: "Webpack",
    iconType: WebpackIcon,
  },

  {
    title: "Graphql",
    iconType: GraphqlIcon,
  },
];
