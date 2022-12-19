import { Box, Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { IPost } from '../../interfaces/IPost'
import Comments from '../comments/Comments'

type Props = {
  post: IPost
}

const PostComponent = (props: Props) => {
  return (
    <Box>
      <Typography variant='h3' align='center'>{props.post?.title}</Typography>
      <Box display='flex' alignItems='center' justifyContent='space-between' width={{xs:'100%', sm:'90%', md:'80%', lg:'60%', xl:'40%'}} margin='1rem auto'>
        <Typography variant='body2' align='center' width='100%'>{props.post.createdAt.toUTCString()}</Typography>
        <Typography variant='body2' align='center' width='100%'>{props.post.writerId}</Typography>
      </Box>
      <Box maxWidth='100%' margin='2rem auto'></Box>
      <Typography variant='body1' align='left' >
        <ReactMarkdown>{props.post.content}</ReactMarkdown>
      </Typography>
      
      <hr/>
      
      <Comments comments={props.post.comments} />
    </Box>
  )
}

export default PostComponent