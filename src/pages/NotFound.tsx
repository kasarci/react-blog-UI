import { Box, Typography } from '@mui/material'
import Recents from '../components/recents/Recents'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography variant='h1' padding='5rem'>
        Not Found...
      </Typography>
      <Typography variant='h3'>Are you lost?</Typography>
      <Typography variant='h5'>You can have a look at our latest posts.</Typography>
      <Recents />
    </Box>
  )
}

export default NotFound