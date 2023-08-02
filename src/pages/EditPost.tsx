import { Box, Button, TextField, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import Markdown from '../components/markdown/Markdown'
import { ICategory } from '../interfaces/ICategory'
import {  POST_GET_BY_ID, POST_POST_ADD, POST_POST_UPDATE, setAuthToken } from '../api/api'
import CategorySelect from '../components/category/CategorySelect'
import { IAuthContext } from '../components/shared/IAuthContext'
import AuthContext from '../components/shared/Authcontext'
import axios, { AxiosError } from 'axios'
import { useConfirm } from 'material-ui-confirm'
import { useNavigate, useParams } from 'react-router-dom'
import { IPost } from '../interfaces/IPost'
import { IUpdatePostPayload } from '../interfaces/payloads/IUpdatePostPayload'
import { IUpdatePostResponse } from '../interfaces/responses/IUpdatePostResponse'

type Props = {}

const EditPost = (props: Props) => {

  const confirm = useConfirm();
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext) as IAuthContext;

  const { id } = useParams(); // get the categoryName from the route parameter

  const fetchData = async () => {
    try {
      if(id !== (null || undefined)) {
          const response = await fetch(POST_GET_BY_ID.concat(id)); 
          const data: IPost[] = await response.json(); // type-check the data as an array of IPost objects
          console.log(data);
          // set the data in state here, using the setPosts() function
          setText(data[0].content);
          setTitle(data[0].title);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const edit = async () => {
    confirm({ description: "You are updating a public post." })
      .then(() => {
          const updatePostPayload: IUpdatePostPayload = {
              title: title,
              content: text,
              //@ts-ignore
              id: id,
              categoryIds: selectedCategories.map(c => c.id),
              tagIds: []
            }
        //@ts-ignore
        setAuthToken(localStorage?.getItem("token"));
        axios.put<IUpdatePostResponse>(POST_POST_UPDATE, updatePostPayload)
          .then((response => {
            console.log(axios)
            navigate(`/blog/${id}`)
            setError('')

          }))
          .catch((err: AxiosError<IUpdatePostPayload>) => {
            console.log(err)
            setError(err?.message);
          })


        console.log(selectedCategories)
      })
      .catch(() => console.log("Post cancelled."));
  }


  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      //maxWidth: "500px",
      margin: "auto"
    }}>
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Edit Post</Typography>
      <TextField
        id="outlined-multiline-static-title"
        value={title}
        maxRows={0}
        onChange={(e) => { setTitle(e.target.value) }}
        sx={{
          width: '90%', paddingBottom: '1rem'
        }}
      />
      <Box
        display="flex"
        gap="30px"
        flexDirection={{ xs: 'column', md: 'row' }}
        width="90%"
      >

        <TextField
          id="outlined-multiline-static"
          value={text}
          rows={20}
          onChange={(e) => { setText(e.target.value) }}
          sx={{
            width: '100%'
          }}
          multiline />

        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            height: '493px',
            border: '1px solid #c4c4c4',
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

      <Button
        variant='contained'
        onClick={edit}
        sx={{ marginTop: '1rem' }}>Edit</Button>
    </Box>
  )
}

export default EditPost