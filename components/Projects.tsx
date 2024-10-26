'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type ProjectProps = {
  project: ProjectData,
}

type ProjectData = {
  name: string,
  company: string,
  imageUrl: string,
  description: string,
  technologies: {
    imageUrl: string,
    alt: string,
  }[],
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Card>
      <CardHeader>{project.name}
        <CardDescription>
          {project.company}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">
          <Image
            src={project.imageUrl}
            alt={project.name}
            width={400}
            height={400}
            className="rounded-sm"
          />
        </div>
        <div className="pt-6">
          {project.description}
        </div>
      </CardContent>
      <CardFooter className="flex-wrap">
        {project.technologies.map((tech) => (
          <div className="pr-3 pb-3" key={tech.imageUrl}>
            <div className="flex border rounded-lg items-center">
              <Image className="m-3 rounded-sm" src={tech.imageUrl} alt={tech.alt} width={40} height={40} />
              <p className="mx-auto block mr-4">{tech.alt}</p>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}

const projectUrl = "/images/projectImages/";
const techUrl = "/images/technologyImages/";

const projects: ProjectData[] = [
  {
    name: "Supacrud",
    company: "Personal Project",
    imageUrl: `${projectUrl}Supacrud.png`,
    description: "A CLI tool written in TypeScript with the oclif CLI library designed to generate CRUD operations for TypeScript projects using Supabase. This tool streamlines development by automating repetitive database tasks, making integration with Supabase seamless for developers.",
    technologies: [
      {
        imageUrl: `${techUrl}TypescriptLogo.png`,
        alt: "TypeScript",
      },
      {
        imageUrl: `${techUrl}SupabaseLogo.png`,
        alt: "Supabase",
      },
      {
        imageUrl: `${techUrl}OclifLogo.png`,
        alt: "oclif",
      },
    ]
  },
  {
    name: "Trip Tracker",
    company: "Personal Project",
    description: "A full-stack web application built with Next.js and TypeScript that enables users to document and manage their travel experiences. The platform features a modern, responsive interface styled with Tailwind CSS and integrates with Supabase for secure user authentication and real-time data storage.",
    imageUrl: `${projectUrl}TripTracker.png`,
    technologies: [
      {
        imageUrl: `${techUrl}NextJsLogo.png`,
        alt: "NextJs"
      },
      {
        imageUrl: `${techUrl}TypescriptLogo.png`,
        alt: "TypeScript"
      },
      {
        imageUrl: `${techUrl}SupabaseLogo.png`,
        alt: "Supabase"
      },
      {
        imageUrl: `${techUrl}TailwindLogo.png`,
        alt: "Tailwind",
      }
    ]
  },
  {
    name: "Sign Me In",
    company: "Florence Darlingon Technical College",
    imageUrl: `${projectUrl}SignMeIn.png`,
    description:
      "A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info. ",
    technologies: [
      {
        imageUrl: `${techUrl}CSharpLogo.png`,
        alt: "C#",
      },
      {
        imageUrl: `${techUrl}BlazorLogo.png`,
        alt: "Blazor",
      },
      {
        imageUrl: `${techUrl}AzureLogo.png`,
        alt: "Azure",
      },
      {
        imageUrl: `${techUrl}EntityFrameworkLogo.png`,
        alt: "EF Core",
      }
    ],
  },
  {
    name: "Morgue Tracker",
    company: "McLeod Health",
    imageUrl: `${projectUrl}MorgueTracker.png`,
    description:
      "A mobile friendly full stack web app intended for employees at the McLeod Health morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  This app was written during an internship and  is still in use today by McLeod Health.",
    technologies: [
      {
        imageUrl: `${techUrl}CSharpLogo.png`,
        alt: "C#"
      },
      {
        imageUrl: `${techUrl}PostgresLogo.png`,
        alt: "Postgres"
      },
      {
        imageUrl: `${techUrl}MVCLogo.png`,
        alt: "ASP.NET MVC",
      },
    ],
  },
  {
    name: "Bossy Books",
    company: "Francis Marion University",
    imageUrl: `${projectUrl}BossyBooks.png`,
    description:
      "A full stack web app made as my second Capstone designed to help small business owners track customers and any invoices those customers have, as well as a calander to track upcoming events..  The app is complete with both Google OAuth and standard email auth.",
    technologies: [
      {
        imageUrl: `${techUrl}NextJsLogo.png`,
        alt: "Next"
      },
      {
        imageUrl: `${techUrl}TypescriptLogo.png`,
        alt: "Typescript"
      },
      {
        imageUrl: `${techUrl}ReactLogo.png`,
        alt: "React"
      },
      {
        imageUrl: `${techUrl}PostgresLogo.png`,
        alt: "Postgres"
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="relative max-w-7xl mx-auto py-10 px-6">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl pb-10">Projects I&apos;ve built </h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3 sm:basis-1/2">
                <Project project={project}></Project>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel >
      </div>
    </div>
  );
}

export default Projects;