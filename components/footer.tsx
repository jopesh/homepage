import Container from "./container"
import { Heart } from "phosphor-react"

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 mb-10 text-center font-mono text-sm">
      <Container>
        <div className="items-center">
          <p className="inline-flex items-center">
            <span>Made in Berlin with</span>
            <Heart
              className="ml-2 text-red-700 dark:text-red-300"
              weight="fill"
            />
          </p>
          <p>2022</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
