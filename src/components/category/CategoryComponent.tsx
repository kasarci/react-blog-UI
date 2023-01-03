import { Box, styled, Typography, Link } from '@mui/material'
import React from 'react'
import { ICategory } from '../../interfaces/ICategory'

type Props = { category: ICategory }

const CategoryComponent = (props: Props) => {

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
    <StyledBox component={Link} href={'/category/'.concat(props.category.name)} underline='none' >
      <StyledTypography>
        {props.category.name}
      </StyledTypography>
    </StyledBox>
  )
}

export default CategoryComponent