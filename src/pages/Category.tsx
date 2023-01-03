import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CATEGORY_GET_BY_NAME, POST_GET_BY_CATEGORYNAME } from '../api/api';
import BlogComponent from '../components/blog/BlogComponent';
import { ICategory } from '../interfaces/ICategory';
import { IPost } from '../interfaces/IPost';

type Props = {
}

const Category = (props: Props) => {

  const { categoryName } = useParams(); // get the categoryName from the route parameter

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryExist, setCategoryExist] = useState(false);

  const fetchData = async () => {
    if (categoryName) {
      try {
        const existingCategory = await fetch(CATEGORY_GET_BY_NAME.concat(categoryName.toString()))
        const category: ICategory[] = await existingCategory.json();
        console.log(category);
        if (category[0]) {
          setCategoryExist(true);
          const response = await fetch(POST_GET_BY_CATEGORYNAME.concat(categoryName.toString()));
          const data: IPost[] = await response.json(); // type-check the data as an array of IPost objects
          console.log(data);
          // set the data in state here, using the setPosts() function
          setPosts(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
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
      maxWidth: { xs: '100%', sm: '80%', md: '70%', lg: '65%', xl: '60%' },
      margin: '5rem auto',
      background: 'white'
    }}>
      {categoryName && <Typography variant='h2'>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</Typography>}
      {
        loading ? (
          <CircularProgress />
        ) : (
          categoryExist ?
            (
              posts && posts.length > 0 ? (
                posts.map(post => (
                  <BlogComponent key={post.id} post={post} />
                ))
              ) : (
                <Typography variant='body1'>No posts to display in this category.</Typography>
              )
            ) : (
              <Typography variant='body1'>No posts to display in this category.</Typography>
            ))}
    </Box>
  )
}

export default Category