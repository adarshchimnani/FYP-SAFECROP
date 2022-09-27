import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useEffect, useState } from 'react';
const axios = require('axios').default;



export default function ProductCard(props) {

  const [getProductData, setProductData] = useState([]);

    const getData = async (event) => {
        

        axios.get('http://localhost:8003/api/dashboard/products/product/:id', {

        })
            .then(function (response) {
                setProductData(response.data);
                console.log(response.data);
                // let result = response.data;
                // console.log(result.data);
                //   navigate(result.redirect)
            })
            .catch(function (error) {
                console.log(error);
            });



    };

    useEffect(()=>{
        getData();
    }, []);



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
