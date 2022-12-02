import { Opacity } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'

type Props = {}

const StyledBox = styled(Box)({
  height:'100%',
  width:'100%',
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  background: '#1f354a',
}) as typeof Box

const StyledTypography = styled(Typography)({
  margin: '10% 50px 10% 50px',
  color: 'white',
  opacity: '0.7'
}) as typeof Typography

function Categories({}: Props) {
  return (
    <Box>
      <Typography align='center' variant='h3' paddingTop={10} sx={{ fontWeight: 350 }}>
        Categories
      </Typography>
      <Stack direction={{xs:'column', sm:'row'}}  spacing={{xs:1, sm:2, md:4}} marginTop={10} alignItems='center' >
        <StyledBox>
         <StyledTypography>
            Category 1
         </StyledTypography>
        </StyledBox>
        <StyledBox>
         <StyledTypography>
            Category 2
         </StyledTypography>
        </StyledBox>
        <StyledBox>
         <StyledTypography>
            Category 3
         </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  )
}

export default Categories