import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Container, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const columns = [
    {
        field: ' ',
        width: 50
    },
    {
        field: 'orderID',
        headerName: 'Order ID',
        width: 90
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 100,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 100,
        editable: false,
    },
    {
        field: 'productsOrdered',
        headerName: 'Ordered Products',
        width: 250,
        editable: false,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        // type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 150,
        editable: false,
    },
    {
        field: 'phoneNumber',
        headerName: 'Mb. Number',
        // type: 'number',
        width: 110,
        editable: false,
    }
   
    
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

const rows = [
    { id: 1, orderId: 12, productsOrdered: 'Oppo Eabuds Qt:1, /n Baseus Earbuds Qt:1', lastName: 'Snow', firstName: 'Jon', phoneNumber: 1234, address: "abcdef", amount: 7500 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxen', firstName: 'Curvey', age: 45 },
];

const theme = createTheme();

export default function OrderHistory() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
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
