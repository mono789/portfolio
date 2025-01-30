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
      title: "Pruebas Saber PRO",
      slug: "project-2",
      description: "I built a predictive model to estimate student performance on the Saber Pro exams. The project entailed cleaning data using pandas and numpy, addressing missing values with SimpleImputer, normalizing features with StandardScaler, and transforming categorical data with OneHotEncoder to enhance the model's precision.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/ProyectoModelos1",
      dateRange: { start: "2024-04-01", end: "2024-05-10" },
      tags: [
        { name: "Python", icon: "/icons/python.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/modelo.jpg"
    },
    {
      title: "Flight Delays Prediction",
      slug: "project-3",
      description: "This project focuses on the analysis and prediction of flight delays using historical data from various airlines during 2015. The goal is to understand the factors that influence delays, such as the origin airport, the airline, and the interactions between origin and destination airports, to improve prediction accuracy and propose solutions to anticipate these issues.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/IA_UdeA_FlightPredict",
      dateRange: { start: "2024-09-08", end: "2024-11-10" },
      tags: [
        { name: "Python", icon: "/icons/python.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Docker", icon: "/icons/docker.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/delayed.jpg"
    },
    {
      title: "Business Rules",
      slug: "project-4",
      description: "I created an application for a banking study service for credit granting, which will determine whether a client can receive a loan and the interest rate of the granted loan, provided that certain established conditions are met.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/drools_rules",
      dateRange: { start: "2024-10-01", end: "2024-05-11" },
      tags: [
        { name: "Java", icon: "/icons/java.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Drools", icon: "/icons/drools-seeklogo.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Spring", icon: "/icons/spring-3.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/drools.png"
    },
    {
      title: "Real-time boarding gate",
      slug: "project-5",
      description: "I developed a messaging application to monitor real-time boarding gate information at an airport (GateBoard).",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/web-sockets",
      dateRange: { start: "2024-11-01", end: "2024-12-10" },
      tags: [
        { name: "Java", icon: "/icons/java.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Maven", icon: "/icons/maven-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Node.js", icon: "/icons/node-js.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Spring", icon: "/icons/spring-3.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "React", icon: "/icons/react.png", slug: "frontend", categories: [{ title: "Frontend", slug: "frontend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/web-socket.png"
    },
    {
      title: "RESTful application",
      slug: "project-6",
      description: "Develop and deploy a RESTful application using Spring Boot with HATEOAS principles, containerizing it with Docker, integrating it with PostgreSQL, and managing its deployment in a Kubernetes cluster to ensure functionality, scalability, and efficiency.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/rest-kubernetes",
      dateRange: { start: "2024-11-01", end: "2024-12-10" },
      tags: [
        { name: "Java", icon: "/icons/java.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Postgres", icon: "/icons/postgres.png", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Spring", icon: "/icons/spring-3.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Minikube", icon: "/icons/minikube-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Kubernetes", icon: "/icons/kubernetes-icon.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Swagger", icon: "/icons/swagger-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Maven", icon: "/icons/maven-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },

      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/kubernetes.png"
    },

    {
      title: "CI/CD Application",
      slug: "project-7",
      description: "A Java backend built with Spring Boot, designed to highlight a robust DevOps workflow. It includes a CI/CD pipeline using GitHub Actions, integrating automated unit tests, code quality analysis with SonarCloud, security scanning via Snyk, test coverage tracking with Coveralls, and deployment to AWS EC2 for cloud hosting.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/CI_CD_Application",
      dateRange: { start: "2024-11-01", end: "2024-12-10" },
      tags: [
        { name: "Java", icon: "/icons/java.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Docker", icon: "/icons/docker.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/actions.png"
    },

    {
      title: "Grafana and Prometheus",
      slug: "project-8",
      description: "An API built with Spring Boot and GraphQL, featuring Docker for seamless containerization and deployment. It stands out for its integration of Prometheus and Grafana, offering real-time monitoring, insightful metrics, and dynamic dashboards for exceptional performance management.",
      websiteUrl: "https://example.com/project-1",
      githubUrl: "https://github.com/mono789/Grafana-Prometheus",
      dateRange: { start: "2024-11-01", end: "2024-12-10" },
      tags: [
        { name: "Java", icon: "/icons/java.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Docker", icon: "/icons/docker.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Spring", icon: "/icons/spring-3.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Prometheus", icon: "/icons/prometheus-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
        { name: "Grafana", icon: "/icons/grafana-svgrepo-com.svg", slug: "backend", categories: [{ title: "Backend", slug: "backend" }] },
      ],
      content: [
        "<p>.</p>"
      ],
      thumbnail: "/icons/grafana.png"
    },
    
  ];

  const experiences = [
    {
      organization: "Full-Stack Developer",
      title: "University of Antioquia",
      dateRange: { start: "August 2024", end: "" },
      description: "Collaborated on optimizing multiple university platforms with Next.js and Spring Boot, enhancing user experience for over 10,000 monthly visitors. Upgraded outdated codebases, reducing system response times by 35% and integrating SEO improvements for better discoverability.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-1"
    },
    {
      organization: "Web Developer",
      title: "Guacarí Hotel",
      dateRange: { start: "May 2024", end: "August 2024" },
      description: "Developed a real-time reservation management system using React, Express.js, and PostgreSQL, improving operational efficiency by 35%. Streamlined deployment processes, reducing deployment time by 30% through CI/CD pipeline integration and enabling 100% remote client access. Applied Git for version control, ensuring smooth collaboration, efficient branch management, and conflict resolution.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-1"
    },
    {
      organization: " Tutor in Machine Learning Technical Component",
      title: "Sapiencia",
      dateRange: { start: "September 2023", end: "November 2023" },
      description: "Conducted Python-based Machine Learning courses for 30 students, achieving a 90% satisfaction rate and facilitating certification for all participants. Developed comprehensive course materials to bridge theoretical concepts with practical applications, enhancing the learning experience. Collaborated with a multidisciplinary team to optimize educational outcomes and maintain program excellence.",
      content: "<p>.</p>",
      slug: "experience-3"
    },
    {
      organization: "Founder and CEO",
      title: "Parchese Store",
      dateRange: { start: "October 2017", end: "December 2023" },
      description: "Spearheaded strategic initiatives, consistently meeting monthly sales targets and managing a portfolio of 2,500 products. Oversaw a team of five, fostering skills in teamwork, assertive communication, and high-pressure performance. Innovated inventory management and logistics solutions to streamline operations and enhance customer satisfaction. I led a team of 5, managing tasks such as payroll and inventory.",
      content: "<p>.</p>", // Un solo string en lugar de un array
      slug: "experience-2"
    },
    // Agrega más experiencias según sea necesario...
  ];
  
  const data = await getHomePageData();
  console.log("render home page");
  return (
    <DefaultLayout>
      <section className="h-[var(--h-main)] fcenter">
        <div className="flex flex-col items-center sm:space-y-3 md:space-y-4 md:text-4xl">
          <h1 className="text-[2rem] text-center tracking-normal sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] 2xl:text-[4rem] sm:tracking-wider">
            Hello, {"I'm "}
            <span className="font-bold primary-gradient">
              Juan Andrés
            </span>
          </h1>
          <div className="text-base tracking-wide text-center lg:pt-3 sm:text-xl md:text-2xl text-slate-300">
            Full-Stack Web Developer and Systems Engineering Student
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
        <SectionHeader>Development Skills</SectionHeader>
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
