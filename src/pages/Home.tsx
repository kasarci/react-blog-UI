import { Box, Container } from '@mui/material'
import Categories from '../components/category/Categories'
import Hero from '../components/hero/Hero'
import Recents from '../components/recents/Recents'

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