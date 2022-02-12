import type { GetStaticProps, NextPage } from "next"

import Container from "components/container"
import type { Post } from "lib/sanity.models"
import PostList from "components/post-list"
import { sanityClient } from "lib/sanity.server"

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(/* groq */ `*[_type == "post"]`)
  return {
    props: {
      data,
    },
  }
}

type HomeProps = {
  data: Post[]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <Container>
      <PostList data={data} />
    </Container>
  )
}

export default Home
