import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

interface CardProps {
  title: string,
  content: string,
  withButton: boolean,
  buttonText?: string,
  buttonOnClick? : React.MouseEventHandler
}

const MyCard = (props: CardProps) => {
  return (
    <Box>
      <Card sx={{ minWidth: 275, maxWidth: 400, minHeight:275, maxHeight:400}}>
        <CardContent>
          <Typography variant="h5" component="div" align='center'paddingTop='10%'>
            {props.title} 
          </Typography>
          <Typography variant="body2" align='center'paddingTop={5}>
            {props.content}
          </Typography>
        </CardContent>
        {
          props.withButton && 
            <CardActions>
              <Button size="small" onClick={props.buttonOnClick} sx={{width:'100%'}}>{props.buttonText}</Button>
            </CardActions> 
        }
      </Card>
    </Box>
  )
}
export default MyCard