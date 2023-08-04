import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import { SyntheticEvent, useState } from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { COMMENT_POST_ADD } from '../../api/api';
import { WindowOutlined } from '@mui/icons-material';

type Props = {postId: string | undefined}

const AddComment = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);
  const [fontWeight, setFontWeight] = useState<string>('normal');
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setSubmitting(true);

    axios
      .post(COMMENT_POST_ADD, {
        email: email,
        content: comment,
        postId: props.postId,
        userName: userName
      })
      .then((res) => {
        // handle successful submission
        setSubmitting(false);
        window.location.reload();
      })
      .catch((err) => {
        // handle submission error
        console.log(err.message);
        setSubmitting(false);
      });
  };
  

  return (
    <Box fontFamily='roboto'>
      <FormControl>
      <Typography variant='h6' marginBottom='10px'>Add a comment</Typography>
      <Textarea 
        placeholder='Type your email.'
        maxRows={1}
        onChange={(e) => {setEmail(e.target.value)}}
        sx={{marginBottom: '10px'}}
      />
      <Textarea 
        placeholder='Type your username.'
        maxRows={1}
        onChange={(e) => {setUserName(e.target.value)}}
        sx={{marginBottom: '10px'}}
      />
      <Textarea
        placeholder="Type your comment here…"
        onChange={(e) => {setComment(e.target.value)}}
        minRows={3}
        maxRows={4}
        endDecorator={
          <Box
            sx={{
              display: 'flex',
              gap: 'var(--Textarea-paddingBlock)',
              pt: 'var(--Textarea-paddingBlock)',
              borderTop: '1px solid',
              borderColor: 'divider',
              flex: 'auto',
            }}
          >
            <IconButton
              variant="plain"
              color="primary"
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <FormatBold />
              <KeyboardArrowDown fontSize="medium" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              
              placement="bottom-start"
              sx={{ '--List-decorator-size': '24px' }}
            >
              {['normal', 'bold'].map((weight) => (
                <MenuItem
                  key={weight}
                  selected={fontWeight === weight}
                  onClick={() => {
                    setFontWeight(weight);
                    setAnchorEl(null);
                  }}
                  sx={{ fontWeight: weight }}
                >
                  <ListItemDecorator>
                    {fontWeight === weight && <Check fontSize="small" />}
                  </ListItemDecorator>
                  {weight === '200' ? 'lighter' : weight}
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              variant={italic ? 'soft' : 'plain'}
              color={italic ? 'primary' : 'neutral'}
              aria-pressed={italic}
              onClick={() => setItalic((bool) => !bool)}
            >
              <FormatItalic />
            </IconButton>
            <Button variant='contained' sx={{ ml: 'auto' }} onClick={handleSubmit}>Send</Button>
          </Box>
        }
        sx={{
          minWidth: 300,
          fontWeight,
          fontStyle: italic ? 'italic' : 'initial',
        }}
      />
    </FormControl>

    </Box>
  )
}

export default AddComment