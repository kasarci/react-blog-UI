import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { ICategory } from '../../interfaces/ICategory'

type Props = { category: ICategory }

const Category = (props: Props) => {

  const StyledBox = styled(Box)({
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    background: '#1f354a',
    transition: "background 0.5s",
    "&:hover": {
      backgroundColor: "#3c668f",
      color: "#fff"
    }
  }) as typeof Box

  const StyledTypography = styled(Typography)({
    margin: '10% 50px 10% 50px',
    color: 'white',
    opacity: '0.7'
  }) as typeof Typography

  return (
    <StyledBox>
      <StyledTypography>
        {props.category.name}
      </StyledTypography>
    </StyledBox>
  )
}

export default Category