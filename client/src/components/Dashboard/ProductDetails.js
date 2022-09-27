import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios').default;

function ProductDetails(props) {

    const handleDialogClose = () => {
        props.setOpenDialog(false);
    };

    // const{id} = useParams("");
    // console.log(props.pData);

    // const getProductData = async (event) => {
    //     axios.get('http://localhost:8003/api/dashboard/products/product/:id', {})
    //         .then(function (response) {
    //             setProductData(response.data);
    //             console.log(response.data);
    //             // let result = response.data;
    //             // console.log(result.data);
    //             //   navigate(result.redirect)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    //   console.log(props)

    return (
        <div>
            <Dialog open={props.openDialog} onClose={handleDialogClose} >
                <DialogTitle>Product Detail {props.pData.productID}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* Fill in the fields. */}
                    </DialogContentText>
                    {/* <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                             <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            /> 
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     {props.pData.productName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                     {props.pData} 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card> */}

                    <Card sx={{ maxWidth: 600 }}>
                        <CardContent>
                            {/* <div className="add_btn">
                                <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                                <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                            </div> */}
                            <div className="row">
                                <div className="left_view col-lg-6 col-md-6 col-12">
                                    {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
                                    <h4 className="mt-3">Product ID: <span >{props.pData.productID}</span></h4>
                                    <h4 className="mt-3">Product Name: <span >{props.pData.productName}</span></h4>
                                    <h4 className="mt-3">Product Weigth: <span >{props.pData.productWt}</span></h4>
                                    <h4 className="mt-3">Product Price: <span >{props.pData.productPrice}</span></h4>
                                    <h4 className="mt-3">Product Stock: <span >{props.pData.productStock}</span></h4>
                                    {/* <h3 className="mt-3">Age: <span >{getuserdata.age}</span></h3>
                                    <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                                    <p className="mt-3"><WorkIcon />Occuption: <span>{getuserdata.work}</span></p> */}
                                </div>
                                {/* <div className="right_view  col-lg-6 col-md-6 col-12">

                                    <p className="mt-5"><PhoneAndroidIcon />mobile: <span>+91 {getuserdata.mobile}</span></p>
                                    <p className="mt-3"><LocationOnIcon />location: <span>{getuserdata.add}</span></p>
                                    <p className="mt-3">Description: <span>{getuserdata.desc}</span></p>
                                </div> */}
                            </div>

                        </CardContent>
                    </Card>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Close</Button>
                    {/* <Button type="submit" onClick={handleDialogClose, handleSubmit} >Add</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ProductDetails