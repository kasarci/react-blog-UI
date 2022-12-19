import { Box, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

const Blog = (props: Props) => {
  const { id } = useParams();
  return (
  <Box>
    <Typography>{id}</Typography>
  </Box>
  )
}

export default Blog