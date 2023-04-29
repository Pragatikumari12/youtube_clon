import React, { useState, useEffect } from 'react';
import {Box, Stack, Typography } from '@mui/material';
import {Sidebar, Videos} from './';
import { fetchFromAPI }from '../utils>/fetchFromAPI';
 

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New');
const [videos, setVideos] = useState(null);


  useEffect(() => {
  fetchFromAPI( 'search?part=snippet&query=${selectedCategory}')
    .then((data) => setVideos (data.item));
  },[selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {sx:
    "column", md: "row" } }}>
    <Box sx={{ height: { sx: 'auto', md:
      '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }}}>
      <Sidebar
       selectedCategory=
       {selectedCategory}
       setSelectedCategory=
       {setSelectedCategory}
      /> 

      <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: 'fff' }}>
        Copyright 2023 Made by PRAGATI
      </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold" md={2} sx={{ color: 'white' }}>
       {selectedCategory} <span style={{ color: '#F31503'}}
        >Videos</span>
      </Typography>
      <videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed