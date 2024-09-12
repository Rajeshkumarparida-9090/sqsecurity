import React, { useState } from 'react'
import { Grid, Container, Box, Divider, Checkbox, TableContainer, Table, TableHead, Menu, MenuItem, IconButton, TableBody, Paper, TableRow, Button, tableCellClasses, TableCell, styled, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import TableHeader from '../../reuseableComponents/TableHeader';
import Modal from '../Modal';
import AddForm from './AddForm';

const UserList = ()=>{
    const [selectedRows, setSelectedRows] = useState([]);
    const [openForm, setOpenForm] = useState(false)
    const [openEditForm, setOpenEditForm] = useState(false)
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // const handleSelectRow = (rowId) => {
    //     if (selectedRows.includes(rowId)) {
    //         setSelectedRows(selectedRows.filter(id => id !== rowId));
    //         console.log("row-id", rowId)
    //     } else {
    //         setSelectedRows([...selectedRows, rowId]);
    //     }
    // };
    const rows = [
        { id: 1, name: 'Snow', phone_number: "+919999999999", email: 'Jon@yopmail.com' },
        { id: 2, name: 'Lannister', phone_number: "+919999999999", email: 'Cersei@yopmail.com' },
        { id: 3, name: 'Lannister', phone_number: "+919999999999", email: 'Jaime@yopmail.com' },
        { id: 4, name: 'Stark', phone_number: "+919999999999", email: 'Arya@yopmail.com' },
        { id: 5, name: 'Targaryen', phone_number: "+919999999999", email: 'Daenerys@yopmail.com' },
        { id: 6, name: 'Stark', phone_number: "+919999999999", email: 'Arya@yopmail.com' },
        { id: 7, name: 'Targaryen', phone_number: "+919999999999", email: 'Daenerys@yopmail.com' },
        { id: 1, name: 'Snow', phone_number: "+919999999999", email: 'Jon@yopmail.com' },
        { id: 2, name: 'Lannister', phone_number: "+919999999999", email: 'Cersei@yopmail.com' },
        { id: 3, name: 'Lannister', phone_number: "+919999999999", email: 'Jaime@yopmail.com' },
        { id: 4, name: 'Stark', phone_number: "+919999999999", email: 'Arya@yopmail.com' },
        { id: 5, name: 'Targaryen', phone_number: "+919999999999", email: 'Daenerys@yopmail.com' },
        { id: 6, name: 'Stark', phone_number: "+919999999999", email: 'Arya@yopmail.com' },
        { id: 7, name: 'Targaryen', phone_number: "+919999999999", email: 'Daenerys@yopmail.com' },
    ];

    const handelAddForm = ()=>{
        setOpenForm(true)
    }
    const handelModalClose=()=>{
        setOpenForm(false)
        setOpenEditForm(false)
    }
    const handelEditForm =()=>{
        setOpenEditForm(true)
    }
    return(
        <>
            <Container maxWidth="xl" className='p-3 Adashboard'>
                
                       
                        <TableHeader name="Attendee List" btnName="Add User" handelClk={handelAddForm} />
                  
                <br />
                
                        <Box className='user-table position-relative'>
                       
                            <TableContainer className='mt-3' component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            {/* <StyledTableCell align="left">
                                                <Checkbox

                                                    indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                                                    checked={selectedRows.length === rows.length}
                                                    onChange={() => {
                                                        if (selectedRows.length === rows.length) {
                                                            setSelectedRows([]);
                                                        } else {
                                                            setSelectedRows(rows.map(row => row.id));
                                                        }
                                                    }}
                                                />
                                            </StyledTableCell> */}
                                            <StyledTableCell align="left" className='fw-300'>Emp Id</StyledTableCell>
                                            <StyledTableCell align="left" className='fw-300'>Name</StyledTableCell>
                                            <StyledTableCell align="left" className='fw-300'>Phone Number</StyledTableCell>
                                            <StyledTableCell align="left" className='fw-300'>Email</StyledTableCell>
                                            <StyledTableCell align="left" className='fw-300'>Job Rule</StyledTableCell>
                                            <StyledTableCell align="center" className='fw-300'>Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <StyledTableRow key={index}>
                                                {/* <StyledTableCell align="left">
                                                    <Checkbox
                                                        checked={selectedRows.includes(row.id)} 
                                                        onChange={() => handleSelectRow(row.id)}
                                                    />
                                                </StyledTableCell> */}
                                                <StyledTableCell align="left"><Typography variant='h5'>{row.id}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography variant='h5'>{row.name}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography>{row.phone_number}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography>{row.email}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography variant='h5'>{row?.role}</Typography></StyledTableCell>

                                                <StyledTableCell align="center">
                                                    <Icon icon="fluent:edit-16-regular" className='editDetail me-1' onClick={handelEditForm} /> &nbsp;
                                                    <Icon icon="icon-park-outline:delete" className='deleteDetail ms-1' />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                        </Box>
        
            </Container>
            {openForm && (
                <Modal 
                open={openForm}
                title="Add User"
                onClose={handelModalClose}
                >
                    <AddForm 
                        submitBtn="Add"
                    />
                </Modal>
            )}
            {openEditForm && (
                <Modal 
                open={openEditForm}
                title="Update User"
                onClose={handelModalClose}
                >
                    <AddForm 
                        submitBtn="update"
                    />
                </Modal>
            )}
        </>
    )
}
export default UserList;