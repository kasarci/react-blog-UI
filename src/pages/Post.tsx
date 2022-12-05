import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Comments from '../components/comments/Comments';
import Recents from '../components/recents/Recents';
import { IPost } from '../interfaces/IPost';

const Post = () => {
  
  let testPost : IPost = {
    title: 'Using Dependency Injeciton in Dotnet',
    writerName: 'Muhammet Kasarci',
    dateTime: 'December 04, 2022',
    categories: ['Programming', 'C#', 'dotnet'],
    tags: ['programming', 'Dependency Injection', 'Design Patterns'],
    comments: [
      { comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices augue venenatis hendrerit congue. Phasellus luctus sit amet tellus ac venenatis. Pellentesque efficitur risus ut elementum euismod. Ut a dapibus tellus. Donec et felis ac dui pulvinar venenatis. Curabitur gravida velit nec pharetra vulputate. Suspendisse vitae tempus elit.
      Proin interdum ligula nec est faucibus, blandit lacinia neque lacinia. Cras quis quam arcu. Duis sodales urna ut vehicula tristique. Nam malesuada tempus turpis, a convallis sem tristique nec. Phasellus tempus quam eu lorem posuere iaculis. Nam convallis ligula id tortor finibus, in sollicitudin urna sodales. Fusce at nibh a tellus scelerisque feugiat. Suspendisse fringilla gravida dapibus.`,
      writerName: 'Furkan Kasarci',
      date: 'December 04, 2022' },
      { comment: `Nullam iaculis molestie pellentesque. Mauris dignissim faucibus arcu, eget eleifend ipsum mollis et. Mauris porttitor erat nunc, nec vulputate orci facilisis et. Maecenas elementum neque diam, quis sagittis diam egestas in. Sed quis mauris nunc. Phasellus dapibus volutpat lobortis. Sed euismod ipsum at velit iaculis, id accumsan nibh varius. Proin dictum, tellus at sagittis pellentesque, arcu augue aliquet risus, ac pharetra nibh justo ac arcu. Aliquam varius purus eu arcu tristique, at tincidunt lectus commodo. Curabitur ornare ultricies nunc. Curabitur consectetur venenatis nisl, porta sollicitudin mi aliquet eu. Nullam sollicitudin eros id ipsum pellentesque, quis mollis lectus eleifend. Nunc nibh leo, rhoncus eu volutpat eget, vehicula eget odio. Curabitur cursus dapibus dolor vel finibus. Curabitur at nisl placerat, tempor turpis viverra, ultrices enim. Donec quis enim est.`,
      writerName: 'Omer Kasarci',
      date: 'Devember 05, 2022' }
    ],
    likes: 123,
    post: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices augue venenatis hendrerit congue. Phasellus luctus sit amet tellus ac venenatis. Pellentesque efficitur risus ut elementum euismod. Ut a dapibus tellus. Donec et felis ac dui pulvinar venenatis. Curabitur gravida velit nec pharetra vulputate. Suspendisse vitae tempus elit.
    Proin interdum ligula nec est faucibus, blandit lacinia neque lacinia. Cras quis quam arcu. Duis sodales urna ut vehicula tristique. Nam malesuada tempus turpis, a convallis sem tristique nec. Phasellus tempus quam eu lorem posuere iaculis. Nam convallis ligula id tortor finibus, in sollicitudin urna sodales. Fusce at nibh a tellus scelerisque feugiat. Suspendisse fringilla gravida dapibus. Integer in risus ultrices, commodo sem iaculis, aliquet dui. Quisque a velit ac est ultricies vestibulum et in ex.
    Praesent a tellus lorem. Ut faucibus libero ac ex consectetur, tristique pulvinar orci ornare. Phasellus mattis sagittis nisi, dignissim facilisis nisi dapibus nec. Vestibulum et diam nec neque imperdiet vestibulum. Proin sit amet imperdiet nunc, a varius purus. Donec condimentum massa eu sem pulvinar convallis. Nunc interdum posuere nisl, a tempor lorem malesuada eget. Donec malesuada consectetur lorem, et consectetur nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In a quam nec dolor vehicula vehicula.
    Nullam iaculis molestie pellentesque. Mauris dignissim faucibus arcu, eget eleifend ipsum mollis et. Mauris porttitor erat nunc, nec vulputate orci facilisis et. Maecenas elementum neque diam, quis sagittis diam egestas in. Sed quis mauris nunc. Phasellus dapibus volutpat lobortis. Sed euismod ipsum at velit iaculis, id accumsan nibh varius. Proin dictum, tellus at sagittis pellentesque, arcu augue aliquet risus, ac pharetra nibh justo ac arcu. Aliquam varius purus eu arcu tristique, at tincidunt lectus commodo. Curabitur ornare ultricies nunc. Curabitur consectetur venenatis nisl, porta sollicitudin mi aliquet eu. Nullam sollicitudin eros id ipsum pellentesque, quis mollis lectus eleifend. Nunc nibh leo, rhoncus eu volutpat eget, vehicula eget odio. Curabitur cursus dapibus dolor vel finibus. Curabitur at nisl placerat, tempor turpis viverra, ultrices enim. Donec quis enim est.
    Cras pharetra elit dui. Sed a tincidunt lacus, in feugiat nibh. Aliquam sed libero sit amet elit suscipit dapibus a ut velit. Nunc tristique nibh quam, sed lacinia odio elementum at. Maecenas iaculis nec nisi a congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vehicula tincidunt lacus ut aliquet. Vestibulum lobortis et nisi id laoreet. Etiam quam nunc, ornare a venenatis vitae, fringilla nec metus. Morbi malesuada aliquet risus vitae laoreet. Phasellus ac leo vulputate, convallis velit at, consectetur purus. Sed sed auctor eros.`
  };

  useEffect(() => {
    // fetch post data from the API 
    
  });
  
  const[postObject, setPostObject] = useState<IPost>(testPost);
 
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
      <Typography variant='h3' align='center'>{postObject?.title}</Typography>
      <Box display='flex' alignItems='center' justifyContent='space-between' width={{xs:'100%', sm:'90%', md:'80%', lg:'60%', xl:'40%'}} margin='1rem auto'>
        <Typography variant='body2' align='center' width='100%'>{postObject.dateTime}</Typography>
        <Typography variant='body2' align='center' width='100%'>{postObject.writerName}</Typography>
      </Box>
      <Box maxWidth='100%' margin='2rem auto'></Box>
      <Typography variant='body1' align='left' >
        <ReactMarkdown>{testPost.post}</ReactMarkdown>
      </Typography>

      <hr/>

      <Comments comments={postObject.comments} />

      <hr/>

      <Recents />

    </Box>
  )
}

export default Post