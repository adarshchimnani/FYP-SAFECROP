import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, useEffect, useMemo } from 'react';

const axios = require('axios').default;

// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//     { id: 10, lastName: 'Roxen', firstName: 'Curvey', age: 45 },
// ];

const theme = createTheme();

export default function ManageOrders() {

    useEffect(() => {
        getData();

    }, []);



    const [getOrderData, setOrderData] = useState([]);

    const getData = async (event) => {
        axios.get('http://localhost:8003/api/dashboard/orders', {})
            .then(function (response) {
                setOrderData(response.data);
                console.log(response.data);
                // let result = response.data;
                // console.log(result.data);
                //   navigate(result.redirect)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const rows = useMemo(
        () => getOrderData.map((row, index) => ({ ...row, id: row._id })),
        [getOrderData]
    );


    const columns = [
        {
            field: ' ',
            width: 50
        },
        {
            field: 'orderID',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'fistName',
            headerName: 'First Name',
            width: 150,
            //   editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            width: 150,
            //   editable: true,
        },
        {
            field: 'orderAmount',
            headerName: 'Amount',
            // type: 'number',
            width: 110,
            //    editable: true,
        },
        // {
        //     field: 'productWt',
        //     headerName: 'Weight (gm|L)',
        //     width: 150,
        //     //     editable: true,
        // },
        {
            field: 'orderDate',
            headerName: 'Date',
            width: 150,
            //   editable: true,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 150,
            // // getActions: (params) => [
            // // //    <NavLink to={`productdata/${params.id}`}> <GridActionsCellItem  icon={<ViewIcon />} label="View" onClick={()=>{handleOpenViewDialog(params.id)}} /></NavLink>,
            // //     <GridActionsCellItem  icon={<ViewIcon />} label="View" onClick={()=>{handleViewDialog(params.id)}} />,
            // //     <GridActionsCellItem icon={<EditIcon />} label="Edit" onClick={()=>{handleUpdateDialog(params.id)}} />,
            // //     <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => { deleteProduct(params.id) }} />
            // //     //   <GridActionsCellItem icon={...} onClick={...} label="Print" showInMenu />,
            // ]
        },
    ];



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
            </Container>
        </ThemeProvider>
    );
}
