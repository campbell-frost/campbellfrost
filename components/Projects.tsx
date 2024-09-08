'use client'

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"

type ProjectProps = {
  project: {
    name: string,
    company?: string,
    imageUrl: string,
    description: string,
    technologies: {
      imageUrl: string,
      alt: string,
    }[],
  }
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Card className="">
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
      <CardFooter>
        {project.technologies.map((i) => (
          <div key={i.imageUrl}>
            <Image src={i.imageUrl} alt={i.alt} width={40} height={40} />
          </div>
        ))}
      </CardFooter>
    </Card>

  )
}

const ProjectList = [
  {
    id: 1,
    name: "Supacrud",
    company: "Personal Project",
    imageUrl: "/images/projectImages/Supacrud.jpg",
    description: "A CLI tool written in Go and TypeScript designed to generate CRUD operations for Supabase projects in TypeScript. This tool streamlines development by automating repetitive database tasks, making integration with Supabase seamless for developers. Developed using Go, TypeScript, and the Cobra library for Go CLI functionality.",
    technologies: [
      {
        "imageUrl": "/images/technologyImages/GoLogo.png",
        "alt": "Go"
      },
      {
        "imageUrl": "/images/technologyImages/TypescriptLogo.png",
        "alt": "TypeScript"
      },
      {
        "imageUrl": "/images/technologyImages/SupabaseLogo.png",
        "alt": "Supabase"
      },
    ]
  },
  {
    id: 2,
    name: "Sign Me In",
    company: "Florence Darlingon Technical College",
    imageUrl: "/images/projectImages/SignMeIn.png",
    description:
      "A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info.  The project was developed using Blazor on .NET 8, Azure SQL, VS-Code, and GitHub in an Agile / Scrum environment.",
    technologies: [
      {
        imageUrl: "/images/technologyImages/CSharpLogo.png",
        alt: "/C#",
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
        alt: "Entity Framework",
      }
    ],
  },
  {
    id: 3,
    name: "Morgue Tracker",
    company: "McLeod Health",
    imageUrl: "/images/projectImages/MorgueTracker.png",
    description:
      "A mobile friendly full stack web app intended for employees at the McLeod morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  This app is still in use today by McLeod.  The app was developed during an internship using ASP.NET MVC, GitHub, and Visual Studio.",
    technologies: [
      {
        imageUrl: "/images/technologyImages/CSharpLogo.png",
        alt: "C#"
      },
      {
        imageUrl: "/images/technologyImages/MVCLogo.png",
        alt: "ASP.NET MVC",
      },
      {
        imageUrl: "/images/technologyImages/PostgresLogo.png",
        alt: "Postgres"
      }
    ],
  },
  {
    id: 4,
    name: "Bossy Books",
    company: "Francis Marion University",
    imageUrl: "/images/projectImages/BossyBooks.png",
    description:
      "A full stack web app made as my second Capstone with Next.js and Postgres hosted on Vercel that allows small businesses to manage customer and invoice information.",
    technologies: [
      {
        imageUrl: "/images/technologyImages/NextJsLogo.png",
        alt: "Next Js"
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
]

const Projects = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 py-10">
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
            {ProjectList.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 sm:basis-1">
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