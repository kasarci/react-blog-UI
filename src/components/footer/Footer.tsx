import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <Box sx={{position:'relative', background:'black', height:'150px', marginTop:'10rem', left:'0', bottom:'0', width:'100%'}}>
      <Stack direction={{xs:'row', md:'row'}} p={5}>
        <Box flex={1}>
          <Typography color='white' variant='body1' align='center'>
            Contact Me
          </Typography>
          <Typography color='white' align='center'>
            GitHub
          </Typography>
          <Typography color='white' align='center'>
            Linkedin
          </Typography>
        </Box>
        
        <Box flex={1}>
          <Typography color='white' variant='body1' align='center'>
            Categories
          </Typography>
          <Typography color='white' variant='body2' align='center'>
            Dotnet
          </Typography>
          <Typography color='white' variant='body2' align='center'>
            React
          </Typography>
        </Box>

      </Stack>
    </Box>
  )
}

export default Footer