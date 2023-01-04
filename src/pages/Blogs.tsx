import { Box, CircularProgress, Link, Pagination, PaginationItem, Typography } from '@mui/material'
import { margin } from '@mui/system';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { POST_GET_ALL, POST_GET_ALL_WITH_PAGINATION, POST_GET_COUNT } from '../api/api';
import BlogComponent from '../components/blog/BlogComponent';
import { ICountAndPagination } from '../interfaces/ICountAndPagination';
import { IPost } from '../interfaces/IPost';
import Post from './Post';

type Props = {}



const Blogs = (props: Props) => {

  const { page } = useParams(); // get the categoryName from the route parameter

  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(page ? Number(page) : 1);
  const [paginationSize, setPaginationSize] = useState(0);

  const fetchData = async () => {
    try {
      const countAndPagination = await fetch(POST_GET_COUNT);
      const cpData : ICountAndPagination = await countAndPagination.json();
      setCount(cpData.count);
      setPaginationSize(cpData.paginationSize);

      page ? setPageIndex(Number(page)) : setPageIndex(1);
      const response = await fetch(POST_GET_ALL_WITH_PAGINATION.concat(pageIndex.toString())); 
      const data: IPost[] = await response.json(); // type-check the data as an array of IPost objects
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
    <Pagination sx={{marginTop: '100px', marginBottom: '0px'}} 
                count={Math.ceil(count/paginationSize)}  
                color="primary" 
                page={page ? Number(page) : 1}
                renderItem={(item) => (
                  <PaginationItem component={Link} 
                                  href={`/blogs${item.page === 1 ? '' : `/page/${item.page}`}`} 
                                  {...item} />
                )}/>
    </Box>
  )
}

export default Blogs


/**
 * 
 * <PaginationItem
                    component={Link}
                    to={`/blogs${item.page === 1 ? '' : `/page=${item.page}`}`}
                    
                  />
 * 
 */