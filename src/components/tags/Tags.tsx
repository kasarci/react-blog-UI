import { Typography } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  tags?: string[];
}

const Tags = (props: Props) => {
  return (
    <Box margin='0'>
      <Box display='flex' flexDirection='row' flexWrap='wrap' gap='0.5rem'>
        {props.tags?.map((tag:string) => {
          return (
            <Box sx={{backgroundColor:'#f2f2f2'}}>
              <Typography variant='body2' padding='0.5rem' >{tag}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Tags