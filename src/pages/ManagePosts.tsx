import { Box, Button, CircularProgress, Link, Pagination, PaginationItem, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IPost } from '../interfaces/IPost';
import { POST_GET_ALL_WITH_PAGINATION, POST_GET_COUNT } from '../api/api';
import { ICountAndPagination } from '../interfaces/ICountAndPagination';
import BlogComponent from '../components/blog/BlogComponent';

type Props = {}

const ManagePosts = (props: Props) => {

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
		console.log(Number(page))
    fetchData();
  }, []);

	const handleEdit = (id:string) => {
    // Implement the edit functionality based on the blog post ID
    console.log(`Edit Blog Post with ID: ${id}`);
  };

  const handleDelete = (id:string) => {
    // Implement the delete functionality based on the blog post ID
    console.log(`Delete Blog Post with ID: ${id}`);
  };

  return (    
  <Box sx={{
    display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "500px",
          margin: "auto"
      }}>
    <Typography variant='h2' style={{ textAlign: "center", padding: '2rem' }}>Manage Posts</Typography>

		{
      loading ? (
        <CircularProgress />
      ) : (
				<Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary" onClick={() => handleEdit(post.id)}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary" onClick={() => handleDelete(post.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
			 )}


		<Pagination sx={{marginTop: '100px', marginBottom: '0px'}} 
                count={Math.ceil(count/paginationSize)}  
                color="primary" 
                page={page ? Number(page) : 1}
                renderItem={(item) => (
                  <PaginationItem component={Link} 
                                  href={`/managePosts${item.page === 1 ? '' : `/page/${item.page}`}`} 
                                  {...item} />
                )}/>

  </Box>
  )
}

export default ManagePosts