import { Opacity } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { CATEGORY_GET_ALL } from '../../api/api'
import { ICategory } from '../../interfaces/ICategory'
import Category from './Category'

type Props = {}

function Categories({}: Props) {

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(CATEGORY_GET_ALL)
    .then(response => response.json())
    .then(data => setCategories(data))
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
  }, []);

  console.log(categories);

  return (
    <Box marginBottom={10}>
      <Typography align='center' variant='h3' paddingTop={10} sx={{ fontWeight: 350 }}>
        Categories
      </Typography>
      <Stack direction={{xs:'column', sm:'row'}}  spacing={{xs:1, sm:2, md:4}} marginTop={10} alignItems='center' >
        {categories.slice(0,3).map((category : ICategory) => {
            return <Category category={category} />
        })}
      </Stack>
    </Box>
  )
}

export default Categories