import { Box, Chip, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ICategory } from '../../interfaces/ICategory'
import { CATEGORY_GET_ALL } from '../../api/api'

type Props = {
  selectedCategories: ICategory[],
  setSelectedCategories: React.Dispatch<React.SetStateAction<ICategory[]>>
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CategorySelect = (props: Props) => {

  const [categories, setCategories] = useState<ICategory[]>([]);
  
  useEffect(() => {
    fetch(CATEGORY_GET_ALL)
    .then(response => response.json())
    .then(data => setCategories(data))
    .catch(error => console.error(error))
    .finally(() => console.log(categories));
  }, []);

  const handleChange = (event: SelectChangeEvent<ICategory[]>) => {
    const value = event.target.value as ICategory[];
    props.setSelectedCategories(
      // @ts-ignore
      value,
    );
  };

  return (
    <Box>
      <InputLabel id="demo-multiple-chip-label">Category</InputLabel>
      <Select
      native={false}
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={props.selectedCategories}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Category" />}
        MenuProps={MenuProps}
      >
        {categories.map((category) => (
          // @ts-ignore
          <MenuItem
            key={category.id}
            value={category}
          >
            {category.name}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default CategorySelect;
