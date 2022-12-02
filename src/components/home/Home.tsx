import { Box, Container } from '@mui/material'
import Categories from '../category/Categories'
import Hero from '../hero/Hero'
import Recents from '../recents/Recents'

type Props = {}

const Home = (props: Props) => {
  return (
    <Box>
      <Hero />
      <Container>
        <Categories />
        <hr />
        <Recents />
      </Container>
    </Box>
  )
}

export default Home