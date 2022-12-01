import { Box, Typography } from '@mui/material'
import HeroImage from '../../static/hero-image.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <Box>
      
      <Typography align='center' variant='h3' sx={{ fontWeight: 900 }}>
        Personal Blog
      </Typography>
      
      <Typography align='center' variant='body2' sx={{ fontWeight: 100 }}>
        This is a playgorund for my personal blog project.
      </Typography>

      <Box 
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '600px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Box sx={{
          width: {xs:"90%", sm:"70%", md:"55%", lg:"40%"},
          padding: {xs:5, sm:10, md:15, lg:20}
        }}>
          <Box sx={{ 
            background:'white', 
            opacity:'0.8'}}
          >  
            <Typography variant={'h3'} color='black' fontWeight={500} align='center' pt={8}>
              Welcome to my Personal Blog!
            </Typography>

            <Typography variant={'h4'} color='black' fontWeight={200} align='center' pr={5} pl={5} pb={8}>
              Here I will share my ideas and some cool projects with you. 
            </Typography>
          </Box>
        </Box>  
     </Box>
    </Box>
  )
}

export default Hero