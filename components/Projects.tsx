'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type ProjectProps = {
  project: ProjectType
}

type ProjectType = {
  name: string,
  company?: string,
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
          {project.company
            ? project.company
            : <p>none</p>
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center items-center">
          <Image src={project.imageUrl} alt={project.name} width={400} height={400} />
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

  )
}

const ProjectList: ProjectType[] = [
  {
    name: "Supacrud",
    company: "Personal Project",
    imageUrl: "/images/projectImages/supacrud.png",
    description: "A CLI tool written in TypeScript with the oclif CLI library designed to generate CRUD operations for TypeScript projects using Supabase. This tool streamlines development by automating repetitive database tasks, making integration with Supabase seamless for developers.",
    technologies: [
      {
        "imageUrl": "/images/technologyImages/TypescriptLogo.png",
        "alt": "TypeScript",
      },
      {
        "imageUrl": "/images/technologyImages/SupabaseLogo.png",
        "alt": "Supabase",
      },
      {
        "imageUrl": "/images/technologyImages/OclifLogo.png",
        "alt": "oclif",
      },
    ]
  },
  {
    name: "Sign Me In",
    company: "Florence Darlingon Technical College",
    imageUrl: "/images/projectImages/SignMeIn.png",
    description:
      "A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info. ",
    technologies: [
      {
        imageUrl: "/images/technologyImages/CSharpLogo.png",
        alt: "C#",
      },
      {
        imageUrl: "/images/technologyImages/BlazorLogo.png",
        alt: "Blazor",
      },
      {
        imageUrl: "/images/technologyImages/AzureLogo.png",
        alt: "Azure",
      },
      {
        imageUrl: "/images/technologyImages/EntityFrameworkLogo.png",
        alt: "EF Core",
      }
    ],
  },
  {
    name: "Morgue Tracker",
    company: "McLeod Health",
    imageUrl: "/images/projectImages/MorgueTracker.png",
    description:
      "A mobile friendly full stack web app intended for employees at the McLeod Health morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  This app was written during an internship and  is still in use today by McLeod Health.",
    technologies: [
      {
        imageUrl: "/images/technologyImages/CSharpLogo.png",
        alt: "C#"
      },
      {
        imageUrl: "/images/technologyImages/PostgresLogo.png",
        alt: "Postgres"
      },
      {
        imageUrl: "/images/technologyImages/MVCLogo.png",
        alt: "ASP.NET MVC",
      },
    ],
  },
  {
    name: "Bossy Books",
    company: "Francis Marion University",
    imageUrl: "/images/projectImages/BossyBooks.png",
    description:
      "A full stack web app made as my second Capstone designed to help small business owners track customers and any invoices those customers have, as well as a calander to track upcoming events..  The app is complete with both Google OAuth and standard email auth.",
    technologies: [
      {
        imageUrl: "/images/technologyImages/NextJsLogo.png",
        alt: "Next"
      },
      {
        imageUrl: "/images/technologyImages/TypescriptLogo.png",
        alt: "Typescript"
      },
      {
        imageUrl: "/images/technologyImages/ReactLogo.png",
        alt: "React"
      },
      {
        imageUrl: "/images/technologyImages/PostgresLogo.png",
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
            {ProjectList.map((project, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3 sm:basis-1/2">
                <Project project={project}></Project>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel >
      </div>
    </div>
  )
}

export default Projects;