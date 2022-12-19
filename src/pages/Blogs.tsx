import { Box, CircularProgress, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { POST_GET_ALL } from '../api/api';
import BlogComponent from '../components/blog/BlogComponent';
import { IPost } from '../interfaces/IPost';
import Post from './Post';

type Props = {}



const Blogs = (props: Props) => {

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(POST_GET_ALL);
      const data: IPost[] = await response.json(); // type-check the data as an array of IPost objects
      console.log(data);
      // set the data in state here, using the setPosts() function
       setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: {xs:'100%', sm:'80%', md:'70%', lg:'65%', xl:'60%'},
      margin: '5rem auto',
      background: 'white'
    }}>
      <Typography variant='h2'>Blogs</Typography>
      {
      loading ? (
        <CircularProgress />
      ) : (
      posts.map(post => (
        <BlogComponent key={post.id} post={post} />
      ))
    )}
    </Box>
  )
}

export default Blogs