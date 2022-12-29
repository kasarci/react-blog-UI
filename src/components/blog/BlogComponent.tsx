import { Favorite } from '@mui/icons-material'
import { Box, Card, CardContent, Divider, Typography, Link } from '@mui/material'
import React from 'react'
import { IPost } from '../../interfaces/IPost'
import Tags from '../tags/Tags'

interface Props {
  post: IPost
}

const BlogComponent = (props: Props) => {
  return (
    <Box>
      <Card sx={{marginTop:'20px', width: {xs:'100%', sm:'40rem', md:'50rem', lg:'70rem', xl:'80rem'} }}>
        <CardContent>
          <Typography sx={{cursor:'pointer'}} variant='h4' align='center' margin='0.5rem auto 1rem auto'>
            <Link underline='hover' color='#005da6' href={'/blog/'.concat(props.post.id)}>{props.post.title}</Link>
          </Typography>
          
          <Box display='flex' flexDirection='column' gap='1rem' margin='0.5rem auto'> 
            <Typography variant='body2'>{props.post.createdAt.toString()}</Typography>
            <Typography variant='body1'>{props.post.writerId}</Typography>

          </Box>

          <Typography variant='body1' align='center' margin='1rem auto 2rem auto'>{props.post.content.slice(0,330).concat('...')}</Typography>
          
          <Divider variant='middle' />
          <Box display='flex' flexDirection='row' margin='1rem 0 0 0.5rem'>
            <Favorite color='primary'  sx={{padding:'0.5rem 0 0.5rem 0.5rem'}}/>
            <Typography variant='body1' sx={{padding:'0.5rem 0 0 0'}}>{props.post.likes}</Typography>
            <Divider orientation='horizontal' variant='middle'/>
            {props.post.tags && <Tags tags={props.post.tags}/>}
          </Box>

        </CardContent>
      </Card>
    </Box>
  )
}

export default BlogComponent