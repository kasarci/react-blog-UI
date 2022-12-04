import { PaddingTwoTone } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import HeroImage from '../../static/hero-image.jpg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <Box>
      
      <Box paddingTop={5} paddingBottom={5}>
        <Typography align='center' variant='h3' sx={{ fontWeight: 900 }}>
          Personal Blog
        </Typography>
        
        <Typography align='center' variant='body2' sx={{ fontWeight: 100 }}>
          Playgorund for my upcoming personal blog project.
        </Typography>
      </Box>

      <Box 
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '600px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <Box sx={{
          width: {xs:"90%", sm:"80%", md:"70%", lg:"50%"},
          display: 'flex',
          justifyContent: 'center',
          padding: {xs:5, sm:10, md:15, lg:20},
          paddingTop: {xs: 10},
          paddingBottom: {xs: 10}
        }}>
          <Box sx={{ 
            background:'white', 
            opacity:'0.8',
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyItems:'center'  
          }}
          >  
            <Typography variant={'h3'} color='black' fontWeight={500} align='center' pt={8} sx={{}}>
              Welcome to my Personal Blog!
            </Typography>

            <Typography variant={'h4'} color='black' fontWeight={200} align='center' pr={5} pl={5} pb={8} pt={2}>
              Here I will share my ideas and some cool projects with you. 
            </Typography>
          </Box>
        </Box>  
     </Box>
    </Box>
  )
}

export default Hero