import { Box, Card, CardContent, Typography } from '@mui/material'
import { IComment } from '../../interfaces/IComment'

type Props = {
  comment: IComment
}

const Comment = (props: Props) => {
  return (
    <Card sx={{ minWidth: 275, marginTop: '20px' }}>
      <CardContent>
        <Box display='flex' flexDirection='row' alignItems='baseline' padding='1rem 0 2rem 0' width='100%'  >
          <Typography variant='h6' component='div' align='left'>{props.comment.writerName}</Typography>
          <Typography variant='body1' align='left' paddingLeft='2rem'>{props.comment.date}</Typography>
        </Box>
        <Typography variant="body1">
          {props.comment.comment}
        </Typography>
      </CardContent>
  </Card>
  )
}

export default Comment