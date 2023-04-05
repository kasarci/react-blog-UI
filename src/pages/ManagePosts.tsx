import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const ManagePosts = (props: Props) => {
  return (    
  <Box sx={{
    display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          margin: "auto"
      }}>
    <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Manage Posts</Typography>
  </Box>
  )
}

export default ManagePosts