import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { POST_GET_ALL } from '../api/api';
import Comments from '../components/comments/Comments';
import PostComponent from '../components/post/PostComponent';
import Recents from '../components/recents/Recents';
import { IPost } from '../interfaces/IPost';

const Post = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(POST_GET_ALL)
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
  }, []);
  
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: {xs:'100%', sm:'80%', md:'60%', lg:'55%', xl:'50%'},
      margin: '5rem auto',
      background: 'white'
    }}>
    {
      loading ? (
        <CircularProgress />
      ) : (
      posts.map(post => (
        <PostComponent key={post.id} post={post} />
      ))
    )}

    
    <hr/>
    
    <Recents />
    
    </Box>
  )}
  
  export default Post;