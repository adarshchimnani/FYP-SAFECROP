import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate, NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const axios = require('axios').default;

const UpdateProduct = (props) => {

    // const [currentInput, finalInput] = React.useState({
    //     productID: "",
    //     productName: "",
    //     productWt: "",
    //     productPrice: "",
    //     productStock: ""

    // })

    // const setdata = (event) => {
    //     console.log(event.target.value);
    //     const { name, value } = event.target;
    //     finalInput((preval) => {
    //         return {
    //             ...preval,
    //             [name]: value
    //         }
    //     })
    // }

    const handleDialogClose = () => {
        props.setOpenDialog(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("abcd");
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        
        const product = {
            productID: event.target[0].value,
            productName: event.target[1].value,
            productWt: event.target[2].value,
            productPrice: event.target[3].value,
            productStock: event.target[4].value
        }

        // const { productID, productName, productWt, productPrice, productStock } = currentInput;

        const id = props.upData._id;
         console.log(id);        

        axios.post(`http://localhost:8003/api/dashboard/products/update/${id}`, product)
            .then(function (response) {
                console.log(response.data);
                let result = response.data;
                //  navigate(result.redirect)
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    // const [getProductData, setProductData] = useState([]);

    
    // const { _id } = useParams("");
    // console.log(_id);
    // const id = props.upData._id;
    // console.log(id);

    // const getData = async (event) => {
    //     axios.get(`http://localhost:8003/api/dashboard/products/product/${id}`, {})
    //         .then(function (response) {
    //             finalInput(response.data);
    //             console.log("I'm in");
    //             console.log(response.data);
    //             // let result = response.data;
    //             // console.log(result.data);
    //             //   navigate(result.redirect)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }


    // useEffect(() => {
    //     getData();

    // }, []);



    return (
        <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
    Add Product
  </Button> */}
        <Dialog open={props.openDialog} onClose={handleDialogClose} >
            <DialogTitle>Add Product {props.upData.productID}</DialogTitle>
            <DialogContent  >
                {/* <DialogContentText>
                    Fill in the fields.
                </DialogContentText> */}
              <form  onSubmit={handleDialogClose, handleSubmit} >
              <TextField
                    autoFocus
                    margin="dense"
                    name="productID"
                    label="Product ID"
                    fullWidth
                    variant="standard"
                    // onChange={setdata}
                    value={props.upData.productID}
                    required
                />
                <TextField
                  //  autoFocus
                    margin="dense"
                    name="productName"
                    label="Product Name"
                    fullWidth
                    variant="standard"
                    // onChange={setdata}
                    value={props.upData.productName}
                    required
                />
                <TextField
                 //   autoFocus
                    margin="dense"
                    name="productWt"
                    label="Product Weight"
                    fullWidth
                    variant="standard"
                    // onChange={setdata}
                    value={props.upData.productWt}
                    required
                />
                <TextField
                 //   autoFocus
                    margin="dense"
                    name="productPrice"
                    label="Product Price"
                    fullWidth
                    variant="standard"
                    // onChange={setdata}
                    value={props.upData.productPrice}
                    required
                />
                <TextField
                    //autoFocus
                    margin="dense"
                    name="productStock"
                    label="Product Stock"
                    fullWidth
                    variant="standard"
                    // onChange={setdata}
                    value={props.upData.productStock}
                    required
                />
                <Button onClick={handleDialogClose}>Cancel</Button>
                <Button type="submit">Update</Button>
              </form>
            </DialogContent>
            {/* <DialogActions>
               
            </DialogActions> */}
        </Dialog>
    </div>
    )
}

export default UpdateProduct