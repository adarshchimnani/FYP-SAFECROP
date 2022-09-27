import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate, NavLink, useNavigate } from 'react-router-dom'


const axios = require('axios').default;

export default function AddProducts(props) {

    const navigate = useNavigate();
    // const handleOpenDialog = () => {
    //     setOpenDialog(true);
    // };

    const [currentInput, finalInput] = React.useState({
        productID: "",
        productName: "",
        productWt: "",
        productPrice: "",
        productStock: ""

    })

    const setdata = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        finalInput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const handleDialogClose = () => {
        props.setOpenDialog(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { productID, productName, productWt, productPrice, productStock } = currentInput;

        axios.post('http://localhost:8003/api/dashboard/products/add', {
            productID: productID,
            productName: productName,
            productWt:  productWt,
            productPrice: productPrice,
            productStock: productStock
        })
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

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Add Product
      </Button> */}
            <Dialog open={props.openDialog} onClose={handleDialogClose} >
                <DialogTitle>Add Product</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill in the fields.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="productID"
                        label="Product ID"
                        fullWidth
                        variant="standard"
                        onChange={setdata}
                        value={currentInput.productID}
                        required
                    />
                    <TextField
                      //  autoFocus
                        margin="dense"
                        name="productName"
                        label="Product Name"
                        fullWidth
                        variant="standard"
                        onChange={setdata}
                        value={currentInput.productName}
                        required
                    />
                    <TextField
                     //   autoFocus
                        margin="dense"
                        name="productWt"
                        label="Product Weight"
                        fullWidth
                        variant="standard"
                        onChange={setdata}
                        value={currentInput.productWt}
                        required
                    />
                    <TextField
                     //   autoFocus
                        margin="dense"
                        name="productPrice"
                        label="Product Price"
                        fullWidth
                        variant="standard"
                        onChange={setdata}
                        value={currentInput.productPrice}
                        required
                    />
                    <TextField
                        //autoFocus
                        margin="dense"
                        name="productStock"
                        label="Product Stock"
                        fullWidth
                        variant="standard"
                        onChange={setdata}
                        value={currentInput.productStock}
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button type="submit" onClick={handleDialogClose, handleSubmit} >Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
