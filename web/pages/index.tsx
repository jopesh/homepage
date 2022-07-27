import type { GetStaticProps, NextPage } from "next"
import type { Post, Settings } from "lib/sanity.types"

import { PaperPlaneTilt } from "phosphor-react"
import { sanityClient } from "lib/sanity.server"

import Container from "components/container"
import Layout from "components/layout"
import PostList from "components/post-list"
import ProjectList from "components/project-list"
import SanityImage from "components/sanity-image"

export interface Project extends Post {
  image: Post["image"] & {
    lqip: string
    alt: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(/* groq */ `
    {
      "writing": *[_type == "post" && isProject == false] {
        _createdAt,
        title,
        description,
        slug,
        "tags": tags[]->{title, slug},
      } | order(_createdAt desc),
      "projects": *[_type == "post" && isProject == true] {
        _createdAt,
        title,
        slug,
        description,
        image {
          ...,
          ...(asset->{
            "lqip": metadata.lqip,
            "dimensions": metadata.dimensions,
          })
        }
      } | order(_createdAt desc),
      "settings": *[_type == "settings"][0] {
        image {
          ...,
          ...(asset->{
            "lqip": metadata.lqip,
            "dimensions": metadata.dimensions,
          })
        }
      }
    }
    `)
  return {
    props: {
      data,
    },
  }
}

type HomeProps = {
  data: {
    writing: Post[]
    projects: Project[]
    settings: Settings & {
      image: {
        lqip: string
        alt: string
      }
    }
  }
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <Layout>
      <Container>
        <section className="mb-10 flex flex-col-reverse items-start sm:mb-16 sm:flex-row">
          <div className="sm:pr-8">
            <h1 className="mb-2 text-2xl font-extrabold">John Schmidt</h1>
            <p className="text-slate-11 dark:text-slateDark-11 sm:text-base">
              Self-taught web developer, educator, and paramedic. Thriving to
              make the web a more accessible, enjoyable place. Currently based
              in Berlin.
            </p>
            <a
              href="mailto:mail@johnschmidt.de"
              className="dark:ring-offset-zinc-900 mt-4 inline-flex items-center space-x-2 rounded bg-indigo-9 px-4 py-3 font-bold text-white ring-offset-2 hover:bg-indigo-10 focus:outline-none focus-visible:ring focus-visible:ring-indigo-7 active:translate-y-px active:transform dark:bg-indigoDark-9 dark:hover:bg-indigoDark-10 dark:focus-visible:ring-indigoDark-7"
            >
              <PaperPlaneTilt weight="bold" />
              <span>Get in touch</span>
            </a>
          </div>
          <div className="mb-4 flex shrink-0 overflow-hidden rounded sm:mt-2 sm:mb-0">
            <SanityImage
              src={data.settings.image}
              alt="Portrait of John"
              height="96"
              width="96"
              sizes="96px"
            />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="mb-4 font-bold">Writing</h2>
          <PostList data={data.writing} />
        </section>
        <section>
          <h2 className="mb-4 font-bold">Projects</h2>
          <ProjectList data={data.projects} />
        </section>
      </Container>
    </Layout>
  )
}

export default Home
