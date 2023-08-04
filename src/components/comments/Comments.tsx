import { Box, Typography } from '@mui/material'
import { IComment } from '../../interfaces/IComment'
import AddComment from './AddComment'
import Comment from './Comment'

interface Props {
  postId: string | undefined,
  comments: IComment[]
}

const Comments = (props: Props) => {
  return (
    <Box width='100%'>
      <Typography variant='h3' align='center' fontWeight={150} paddingTop={10} >Comments</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: '5rem auto 2rem auto'
      }}>
        <Typography variant='h5' align='left'>{props.comments.length} Comments</Typography>
        {props.comments.map((comment : IComment) => {
          return <Comment comment={comment} />
        })}
      </Box>
      <AddComment postId={props.postId} />
    </Box>
  )
}

export default Comments