import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import appleWatch from '../public/appleWatch.png'
import Image from 'next/image'
import axios from '../node_modules/axios';
import {NotificationContainer,NotificationManager} from 'react-notifications';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleAddCart = () => {
    const userid = localStorage.getItem('userid');
    axios.post("/api/Cart/addToCart",{userid: userid,productId: props.productId,quantity: 1}).then(()=>{ NotificationManager.success('Product added to cart successfully')}).catch((err)=>{NotificationManager.error('Product not added to cart')});
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader/>
        <CardMedia><div className='text-center'><Image src={appleWatch} width='150'></Image></div></CardMedia>
      <CardContent>
        <h3>{props.name}</h3>
        <Typography variant="body2" color="text.secondary">
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <div onClick={handleAddCart}>
        <IconButton aria-label="add to favorites">
          <ShoppingCartIcon/>
        </IconButton>
      </div>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <h3>{props.price}</h3>
            <Typography component="legend">Reviews</Typography>
            <Rating name="read-only" value={props.reviews} readOnly />
        </CardContent>
      </Collapse>
    </Card>
  );
}