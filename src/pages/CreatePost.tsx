import { Box, Button, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import Markdown from '../components/markdown/Markdown'
import { ICategory } from '../interfaces/ICategory'
import {  POST_POST_ADD, setAuthToken } from '../api/api'
import CategorySelect from '../components/category/CategorySelect'
import { IAuthContext } from '../components/shared/IAuthContext'
import AuthContext from '../components/shared/Authcontext'
import axios, { AxiosError } from 'axios'
import { IAddPostResponse } from '../interfaces/responses/IAddPostResponse'
import { IAddPostPayload } from '../interfaces/payloads/IAddPostPayload'
import { useConfirm } from 'material-ui-confirm'
import { useNavigate } from 'react-router-dom'

type Props = {}

const CreatePost = (props: Props) => {

  const confirm = useConfirm();
  const navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext) as IAuthContext;

  
  const post = async () => {
    confirm({ description: "You are creating a public post." })
      .then(() => {
        const addPostPayload: IAddPostPayload = {
          title: title,
          content: text,
          writerId: user.Id,
          categoryIds: selectedCategories.map(c => c.id),
          tagIds: []
        }
        //@ts-ignore
        setAuthToken(localStorage?.getItem("token"));
        axios.post<IAddPostResponse>(POST_POST_ADD, addPostPayload)
          .then((response => {
            console.log(axios)
            navigate(`/blog/${response.data.id}`)
            setError('')

          }))
          .catch((err: AxiosError<IAddPostResponse>) => {
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
      <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Create Post</Typography>
      <TextField
        label="Write title here..."
        rows={0}
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
          label="Write your post here..."
          rows={20}
          maxRows={30}
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
        onClick={post}
        sx={{ marginTop: '1rem' }}>Post</Button>
    </Box>
  )
}

export default CreatePost