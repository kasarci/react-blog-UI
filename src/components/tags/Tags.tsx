import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ITag } from '../../interfaces/ITag';

interface Props {
  tags?: ITag[];
}

const Tags = (props: Props) => {
  return (
    <Box margin='0'>
      <Box display='flex' flexDirection='row' flexWrap='wrap' gap='0.5rem'>
        {props.tags?.map((tag:ITag) => {
          return (
            tag ?
            <Box sx={{backgroundColor:'#f2f2f2'}}>
              <Typography variant='body2' padding='0.5rem' >#{tag.name}</Typography>
            </Box> : null
          )
        })}
      </Box>
    </Box>
  )
}

export default Tags