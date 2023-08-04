import { Box, Container, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { POST_GET_BY_ID } from '../api/api';
import Comments from '../components/comments/Comments';
import Tags from '../components/tags/Tags';
import { IPost } from '../interfaces/IPost';
import Markdown from '../components/markdown/Markdown';

type Props = {}

const Blog: React.FC = () => {
  const { id } = useParams(); // get the id from the route parameter
  const [post, setPost] = useState<IPost | undefined>(); // state to hold the post data
  const [loading, setLoading] = useState(true); // state to track loading status

  const fetchData = async () => {
    try {
      const response = await fetch(`https://localhost:7026/Post/getById/${id}`);
      const data: IPost[] = await response.json(); // type-check the data as an IPost object
      console.log(data);
      // set the data in state here, using the setPosts() function
      setPost(data[0]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // only run the effect once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      {post && (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          maxWidth: {xs:'100%', sm:'80%', md:'70%', lg:'65%', xl:'60%'},
          margin: '5rem auto',
          background: 'white'
        }}>
          <Typography variant='h2'>{post.title}</Typography>

          <Box display='flex' flexDirection='row' gap='1rem' margin='1rem auto' alignItems='center'> 
            <Typography variant='body2'>{new Date(post.createdAt).toLocaleDateString()}</Typography>
            <Typography variant='body2'>{post.writerId}</Typography>
          </Box>

          <Container >
            <hr/>
          </Container>

          <Markdown text={post.content} />
          
          <Container >
            <hr/>
          </Container>

          <Box display='flex' width='80%' alignItems='flex-start' margin='1rem auto'>
            { post.tags && <Tags tags={post.tags}/>}
          </Box>
        

          <Comments comments={post.comments} />

        </Box>
      )}
    </Box>
  );
}

export default Blog;