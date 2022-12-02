import { Box, Grid, Typography } from '@mui/material'
import MyCard from '../card/Card'


type Props = {}

const Recents = (props: Props) => {
  return (
    <Box display='inline' >
      <Typography variant='h3' align='center' fontWeight={150} paddingTop={10} >Recent Posts</Typography>
      <Grid container paddingTop={10} rowSpacing={1} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={4} display='flex' justifyContent='center' alignItems={'center'} >
          <MyCard 
            title='Test Driven Development with C#' 
            content='Today we are going to cover how to create a project with Test Driven Development. First of all, I want to t...' 
            withButton={true} 
            buttonText='Read more...' />
        </Grid>        

        <Grid item xs={12} sm={6} md={4} display='flex' justifyContent='center' alignItems={'center'} >
          <MyCard 
            title='Test Driven Development with C#' 
            content='Today we are going to cover how to create a project with Test Driven Development. First of all, I want to t...' 
            withButton={true} 
            buttonText='Read more...' />
        </Grid>       

        <Grid item xs={12} sm={6} md={4} display='flex' justifyContent='center' alignItems={'center'} >
          <MyCard 
            title='Test Driven Development with C#' 
            content='Today we are going to cover how to create a project with Test Driven Development. First of all, I want to t...' 
            withButton={true} 
            buttonText='Read more...' />
        </Grid>       
      </Grid>
    </Box>
  )
}

export default Recents