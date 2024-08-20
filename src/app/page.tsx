import { SocialMedia } from "@/components/SocialMedia";
import { ContactMeButton, DownloadResumeButton } from "@/components/ui/Button";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { SectionHeader } from "@/components/ui/Typography";
import { getHomePageData, getTechItems } from "../../sanity/lib/api";
import { SectionContainer } from "@/components/ui/Container";
import { ProjectCardList } from "@/components/ui/Card";
import { ExperienceList } from "@/components/ui/Timeline";
import Link from "next/link";
import { Qoute } from "@/components/ui/Qoute";
import { AboutMe } from "@/components/AboutMe";
import { TechSection } from "@/components/TechSection";

export default async function Home() {

  const techItems = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "React",
      icon: "/icons/react.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "HTML",
      icon: "/icons/html.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "CSS",
      icon: "/icons/css.png",
      categories: [{ title: "Frontend", slug: "frontend" }]
    },
    {
      name: "Express",
      icon: "/icons/express-js.svg",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "MySQL",
      icon: "/icons/mysql.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "Java",
      icon: "/icons/java.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgres.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },
    {
      name: "C++",
      icon: "/icons/c++.png",
      categories: [{ title: "Backend", slug: "backend" }]
    },


  ];

  const projects = [
    {
      title: "Guacarí Hotel",
      slug: "project-1",
      description: "This web application simplifies the management of hotel guests, room reservations, and restaurant inventory. The platform streamlines daily operations, offering staff an efficient solution for managing guest details and maintaining accurate tracking of restaurant supplies.",

      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/usuario/project-1",
      dateRange: { start: "2024-06-01", end: "2024-10-01" },
      tags: [
        { name: "React", icon: "/icons/react.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
        { name: "Express", icon: "/icons/express-js.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "PostgreSQL", icon: "/icons/postgres.png", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "JavaScript", icon: "/icons/javascript.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] }
      ],
      content: [
        "<p>This web application simplifies the management of hotel guests, room reservations, and restaurant inventory. The platform streamlines daily operations, offering staff an efficient solution for managing guest details and maintaining accurate tracking of restaurant supplies.</p>",
        "<p>This project was sold and is currently being used to manage a hotel in Colombia.</p>"
      ],

      thumbnail: "/icons/hotel.jpg"
    },
    {
      title: "Aerolinea Singapur",
      slug: "project-2",
      description: "I developed a website for a fictional airline, drawing inspiration from Avianca. The site enables users to track flight statuses and explore various travel options. It’s designed with a clean, user-friendly interface, ensuring a smooth and intuitive experience. This project was an academic exercise aimed at honing frontend development skills, utilizing mock APIs.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/usuario/project-2",
      dateRange: { start: "2024-04-01", end: "2024-05-10" },
      tags: [
        { name: "React", icon: "/icons/react.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
        { name: "JavaScript", icon: "/icons/javascript.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
      ],
      content: [
        "<p>No hice nada en un proyecto grande de un hotel, entonces me cargaron y entregamos algo bonito</p>"
      ],
      thumbnail: "/icons/singapur.jpg"
    },
    
  ];

  const experiences = [
    {
      organization: " Tutor in Machine Learning Technical Component",
      title: "Sapiencia",
      dateRange: { start: "September 2023", end: "November 2023" },
      description: "I taught Python for Machine Learning to 30 students remotely, developing and managing both theoretical and practical content. My efforts led to successful student certifications and a comprehensive learning experience.",
      content: "<p>.</p>",
      slug: "experience-1"
    },
    {
      organization: "Parchese Store",
      title: "Founder and CEO",
      dateRange: { start: "October 2017", end: "December 2023" },
      description: "I made key decisions to meet sales goals and ensure financial control. I led a team of 5, managing tasks such as payroll and inventory. I launched a website with 2500 products, optimized inventory and shipping processes, and handled digital marketing and content development.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-2"
    },
    {
      organization: " Lost Items Agent",
      title: "Teleperformance at Uber",
      dateRange: { start: "October 2017", end: "December 2023" },
      description: "I helped Uber users recover lost items and was named Top Performer for exceeding KPIs. I developed skills in adaptability, learning, and communication while supporting various customer service areas.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-3"
    },
    // Agrega más experiencias según sea necesario...
  ];
  
  const data = await getHomePageData();
  console.log("render home page");
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3 md:space-y-4 md:text-4xl">
          <h1 className="text-[2rem] text-center tracking-normal sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] 2xl:text-[4rem] sm:tracking-wider">
            Hello, {"I'm "}
            <span className="font-bold primary-gradient">
              Juan Andrés
            </span>
          </h1>
          <div className="text-base tracking-wide text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
            Full-Stack Web Developer and Student of Systems Engineer
          </div>
          <div className="text-sm italic font-bold tracking-wide text-center md:text-base lg:text-lg primary-gradient-2">
            Actively looking for full-time jobs positions!
          </div>
          <div className="flex items-center pt-3 md:gap-4">
            {/* <ContactMeButton /> */}
            <DownloadResumeButton />
          </div>
          <div className="pt-4">
            <SocialMedia />
          </div>
        </div>
      </section>

      <SectionContainer>
        <SectionHeader>About Me</SectionHeader>
        <AboutMe />
      </SectionContainer>

      {/* tech section */}
      <SectionContainer>
        <SectionHeader>Technologies</SectionHeader>
        <div className="flex flex-wrap justify-center">
          <TechSection data={techItems} />
        </div>
      </SectionContainer>

      <SectionContainer className="z-10">
        <SectionHeader>My Projects</SectionHeader>
        <ProjectCardList
          projects={projects}
          className="grid-cols-1 lg:grid-cols-2 sm:max-w-[600px] md:max-w-[700px] lg:max-w-none"
        />
      </SectionContainer>

      {/* experience section */}
      <SectionContainer>
        <SectionHeader>Experiences</SectionHeader>
        <ExperienceList experiences={experiences} />
      </SectionContainer>

   
    </DefaultLayout>
  );
}
