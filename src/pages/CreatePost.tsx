import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Markdown from '../components/markdown/Markdown'

type Props = {}

const CreatePost = (props: Props) => {

  const [text, setText] = useState('')


  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      //maxWidth: "500px",
      margin: "auto"
    }}>
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Create Post</Typography>
      <Box 
        display="flex"
        gap="30px"
        flexDirection={{xs: 'column', md:'row'}}
        width="90%"
      >
        <TextField
          id="outlined-multiline-static"
          label="Write your post here..."
          rows={20}
          maxRows={30}
          onChange={(e) => {setText(e.target.value)}}
          sx={{
            width:'100%'
          }}
          multiline />

        <Box 
          sx={{
            width:'100%',
            maxWidth:'100%',
            height: '493px',
            border:'1px solid #c4c4c4',
            borderRadius: 1,
            overflow: 'auto',
            overflowX: 'hidden',
            wordWrap: 'break-word'
            }}>
          <Markdown text={text} />
        </Box>
         

      </Box>
    </Box>
  )
}

export default CreatePost