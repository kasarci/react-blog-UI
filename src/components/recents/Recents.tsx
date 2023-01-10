import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Grid, Typography } from '@mui/material';
import MyCard from '../card/Card';
import { POST_GET_ALL, POST_GET_RECENTS } from '../../api/api';
import { IPost } from '../../interfaces/IPost';

type Props = {};

const Recents = (props: Props) => {
  // Fetch post data from the API
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(POST_GET_RECENTS.concat('3'))
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box display='inline'>
      <Typography variant='h3' align='center' fontWeight={150} paddingTop={10} >Recent Posts</Typography>
      <Grid container paddingTop={10} rowSpacing={1} columnSpacing={1}>
        {
          loading ? (
            <CircularProgress />
          ) : (
            posts.slice(0,3).map(card => (
              <Grid item xs={12} sm={6} md={4} display='flex' justifyContent='center' alignItems={'center'} >
                <MyCard 
                  title={card.title} 
                  content={card.content.substring(0,300).concat('...')} 
                  withButton={true} 
                  buttonText='Read more'
                  buttonOnClick={() => {window.open(`http://localhost:3000/blog/${card.id}`, '_self');}}
                   />
              </Grid>
            ))
          )
        }
      </Grid>
    </Box>
  )
}

export default Recents;
