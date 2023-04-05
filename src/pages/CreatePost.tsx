import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

const CreatePost = (props: Props) => {
  return (
    <Box sx={{
        display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "500px",
              margin: "auto"
          }}>
        <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Create Post</Typography>
      </Box>
  )
}

export default CreatePost