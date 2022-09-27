//eslint
import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AddProducts from './AddProducts';
import ProductDetails from './ProductDetails';
import UpdateProduct from './UpdateProduct';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ViewIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';

const axios = require('axios').default;



const theme = createTheme();

export default function ManageProducts(props) {

    useEffect(() => {
        getData();

    }, []);

    const [openAddDialog, setAddDialog] = useState(false);

    // const handleDialogClose = () => {
    //     props.setOpenDialog(false); // Use the prop.
    // };

    const handleAddDialog = () => {
        setAddDialog(true);
    };

    const [getProductData, setProductData] = useState([]);

    const getData = async (event) => {
        axios.get('http://localhost:8003/api/dashboard/products', {})
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
    }

    // const ProductData = async (event) =>{
    //     axios.get('http://localhost:8003/api/dashboard/products/product/:id', {})
    //     .then(function (response) {
    //         setProductData(response.data);
    //         console.log(response.data);
    //         // let result = response.data;
    //         // console.log(result.data);
    //         //   navigate(result.redirect)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    // }

   


    const [openViewDialog, setViewDialog] = useState(false);

    const [viewData, setViewData] =  useState({});

    // const handleViewDialogClose = () => {
    //     props.setOpenDialog(false); // Use the prop.
    // };

    const handleViewDialog = (pid) => {
        console.log(getProductData)
        setViewData(getProductData.filter((item) => item._id==pid)[0]);
        setViewDialog(true);
    };



    const [openUpdateDialog, setUpdateDialog] =  useState(false);

    const [updateData, setUpdateData] = useState({});

    const handleUpdateDialog = (pid) => {
        console.log(getProductData)
        setUpdateData(getProductData.filter((item) => item._id==pid)[0]);
        setUpdateDialog(true);
    };

    // const deleteUser = React.useCallback(   
    //     (id) => () => {
    //       setTimeout(() => { console.log("in delete user",  id);
    //       let data = getProductData.filter((item) => item._id != id);
    //       console.log(getProductData)
    //       console.log(data);
    //       setProductData((prevRows) => prevRows.filter((row) => row.id !== id));
    //       console.log("out delete user");
    //       });
    //     },
    //     [],
    //   );
    function deleteProduct(pid) {
        console.log("in deleteProduct");
        console.log(pid);
        console.log(getProductData);
        setProductData(getProductData.filter((product) => product._id != pid));


        axios.post('http://localhost:8003/api/dashboard/products/delete', {
            pid: pid
        })
            .then((data) => {
                console.log(data);
            })

    }


    // const renderDetailsButton = (params) => {
    //     return (
    //         <strong>
    //             <Button
    //                 variant="contained"
    //                 color="primary"
    //                 size="small"
    //                 style={{ marginLeft: 16 }}
    //                 onClick={() => {
    //                     parseName(params.row.col5)
    //                 }}
    //             >
    //                 More Info
    //             </Button>
    //         </strong>
    //     )
    // }

    const columns = [
        {
            field: ' ',
            width: 50
        },
        {
            field: 'productID',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'productName',
            headerName: 'Product Name',
            width: 150,
            //   editable: true,
        },
        {
            field: 'productWt',
            headerName: 'Weight (gm|L)',
            width: 150,
            //     editable: true,
        },
        {
            field: 'productPrice',
            headerName: 'Price',
            // type: 'number',
            width: 110,
            //    editable: true,
        },
        {
            field: 'productStock',
            headerName: 'Stock',
            // type: 'number',
            width: 110,
            //    editable: true,
        },
        // {
        //     field: 'col5',
        //     headerName: 'Name 5',
        //     width: 150,
        //     renderCell: renderDetailsButton,
        //     disableClickEventBubbling: true,
        // },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 150,
            getActions: (params) => [
            //    <NavLink to={`productdata/${params.id}`}> <GridActionsCellItem  icon={<ViewIcon />} label="View" onClick={()=>{handleOpenViewDialog(params.id)}} /></NavLink>,
                <GridActionsCellItem  icon={<ViewIcon />} label="View" onClick={()=>{handleViewDialog(params.id)}} />,
                <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={()=>{handleUpdateDialog(params.id)}} />,
                <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => { deleteProduct(params.id) }} />
                //   <GridActionsCellItem icon={...} onClick={...} label="Print" showInMenu />,
            ]
        },
        // {
        //     field: 'CRUDBtn',
        //     headerName: <> <Button to="/dashboard/products/add" variant="outlined" onClick={handleOpenDialog}>Add Product</Button>
        //                     </>,
        //     // type: 'number',
        //     width: 200,
        // }
        // {
        //     field: 'fullName',
        //     headerName: 'Full name',
        //     description: 'This column has a value getter and is not sortable.',
        //     sortable: false,
        //     width: 160,
        //     valueGetter: (params) =>
        //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
    ];

    const rows = useMemo(
        () => getProductData.map((row, index) => ({ ...row, id: row._id })),
        [getProductData]
    );



    // const initialRows = [
    //     { id: 1, productID: "B-BF-1000", productName: 'Bayer BioFertilizer', productWt: '1000gm', productPrice: 'Rs.4000', productStock: '100' },
    //     { id: 2, productID: {} , firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    //     { id: 10, lastName: 'Roxen', firstName: 'Curvey', age: 45 },
    // ];

    // const [rows, setRows] = useState();



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ height: 575, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={10}
                            rowsPerPageOptions={[10]}
                            // checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>
                </Box>
                <Button variant="outlined" onClick={handleAddDialog}>
                    Add Product
                </Button>
                <AddProducts openDialog={openAddDialog} setOpenDialog={setAddDialog} />
                <ProductDetails openDialog={openViewDialog} setOpenDialog={setViewDialog} pData={viewData} />
                <UpdateProduct openDialog={openUpdateDialog} setOpenDialog={setUpdateDialog} upData={updateData}/>
            </Container>
        </ThemeProvider>
    );
}
