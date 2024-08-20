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
      description: "No hice nada en un proyecto grande de un hotel, entonces me cargaron y entregamos algo bonito.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/usuario/project-1",
      dateRange: { start: "2023-06-01", end: "2023-10-01" },
      tags: [
        { name: "React", icon: "/icons/react.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
        { name: "Express", icon: "/icons/express-js.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "PostgreSQL", icon: "/icons/postgres.png", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "JavaScript", icon: "/icons/javascript.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] }
      ],
      content: [
        "<p>No hice nada en un proyecto grande de un hotel, entonces me cargaron y entregamos algo bonito</p>"
      ],
      thumbnail: "/icons/hotel.jpg"
    },
    {
      title: "Aerolinea Singapur",
      slug: "project-2",
      description: "Tampoco hice nada en un proyecto grande de un avion, entonces me cargaron y entregamos algo bonito.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/usuario/project-2",
      dateRange: { start: "2023-11-01", end: "2023-09-10" },
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
      organization: "Universidad de Antioquia",
      title: "Systems Engineer Student",
      dateRange: { start: "2017", end: "2025" },
      description: "Nunca puse atención en clase",
      content: "<p>En el celular y hablando todos los días en clase</p>",
      slug: "experience-1"
    },
    {
      organization: "Clases",
      title: "Profesor de Python",
      dateRange: { start: "2023", end: "2023" },
      description: "Enseñé a estudiantes usando ChatGPT",
      content: "<p>puro GPT</p>", // Un solo string en lugar de un array
      slug: "experience-2"
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
