import { Box, Button, TextField, Typography } from '@mui/material'
import { Key, useContext, useEffect, useState } from 'react'
import Markdown from '../components/markdown/Markdown'
import { ICategory } from '../interfaces/ICategory'
import { CATEGORY_GET_ALL } from '../api/api'
import React from 'react'
import CategorySelect from '../components/category/CategorySelect'
import { IAuthContext } from '../components/shared/IAuthContext'
import AuthContext from '../components/shared/Authcontext'

type Props = {}

const CreatePost = (props: Props) => {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext) as IAuthContext;
  
	const post = async () => {
		try {
			console.log(selectedCategories)
		} catch (error) {
			console.log(error)
		}
	}

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      //maxWidth: "500px",
      margin: "auto"
    }}>
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Create Post</Typography>
			<TextField 
					label="Write title here..."
					rows={0}
					onChange={(e) => {setTitle(e.target.value)}}
					sx={{
						width:'90%', paddingBottom: '1rem'
					}}
					/>
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
      <Box flexGrow={1} margin='1rem 0'>
        <CategorySelect selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      </Box>
      
      <Typography variant='h3'>{user.username}</Typography>
			<Button 
				variant='contained' 
				onClick={post}
				sx={{marginTop:'1rem'}}>Post</Button>
    </Box>
  )
}

export default CreatePost