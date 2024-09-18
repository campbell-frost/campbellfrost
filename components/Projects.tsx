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
      <CardFooter className="flex-wrap">
        {project.technologies.map((i) => (
          <div className="pr-3 pb-3" key={i.imageUrl}>
            <div className="flex border rounded-lg items-center">
              <Image className="m-3" src={i.imageUrl} alt={i.alt} width={40} height={40} />
              <p className="mx-auto block mr-4">{i.alt}</p>
            </div>
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
    id: 3,
    name: "Morgue Tracker",
    company: "McLeod Health",
    imageUrl: "/images/projectImages/MorgueTracker.png",
    description:
      "A mobile friendly full stack web app intended for employees at the McLeod morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  This app is still in use today by McLeod Health.",
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
    id: 4,
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
]

const Projects = () => {
  return (
    <div className="relative max-w-7xl mx-auto py-10 px-4">
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
              <CarouselItem key={project.id} className="basis-1/2 md:basis-1/2 lg:basis-1/3 sm:basis-1/2">
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