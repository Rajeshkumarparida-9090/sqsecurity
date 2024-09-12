import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Grid, Container, Box, Divider, Checkbox, TableContainer, Table, TableHead, Menu, MenuItem, IconButton, TableBody, Paper, TableRow, Button, tableCellClasses, TableCell, styled, Typography } from '@mui/material'
import { Icon } from '@iconify/react'
import TableHeader from '../../reuseableComponents/TableHeader';
import Modal from '../Modal';
import AddForm from './AddForm';

import { clearError, clearSuccess, deleteUser, fetchTodo, userEditTodo } from '../../store/slice/UserSlice';
import PopUp from '../../reuseableComponents/Popup';
import SuccessPopup from '../../reuseableComponents/SuccessPopUp';
import ErrorPopup from '../../reuseableComponents/ErrorPopUp';

const UserList = ()=>{
    const dispatch =useDispatch();
    const data = useSelector((state) => state.users);
   
    const [selectedRows, setSelectedRows] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [openEditForm, setOpenEditForm] = useState(false)
    const [success, setSuccess] = useState("false");
    const [showDeletePopup, setShowDeletePOpup] = useState(false);
    const [deleteId, setDeleteId] = useState("");
    const [deleteUserName, setDeleteUserName] = useState("")
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
    useEffect(() => {
        dispatch(fetchTodo());
      }, [dispatch]);

    useEffect(() => {
        if (data.error) {
            const errortimer = setTimeout(() => {
                dispatch(clearError()); 
            }, 5000);

            return () => clearTimeout(errortimer); 
        }
    }, [data.error, dispatch]);
    useEffect(() => {
        if (data.isSuccess) {
            const successtimer = setTimeout(() => {
                dispatch(clearSuccess());
            }, 5000);

            return () => clearTimeout(successtimer);
        }
    }, [data.isSuccess, dispatch]);

    const handelAddForm = ()=>{
        setOpenForm(true)
    }
    const handelModalClose=()=>{
        setOpenForm(false)
        setOpenEditForm(false)
    }
    const handelEditForm =(id)=>{
        setOpenEditForm(true)
        console.log(id)
        dispatch(userEditTodo(id));
    }
    const handleFetchTodo = () => {
        dispatch(fetchTodo());
        setOpenEditForm(false)
    }
    const handelDeleteUser = (row)=>{
        
        setDeleteId(row.id)
        setDeleteUserName(row.name)
        setShowDeletePOpup(true)
    }
    const handelDeletePopupClose =()=>{
        setShowDeletePOpup(false)
    }
    const handelDeletePopupDone =()=>{
        setShowDeletePOpup(false)
        dispatch(deleteUser(deleteId))
    }
    console.log("data==============", data)
    return(
        <>
            <Container maxWidth="xl" className='p-3 Adashboard'>
                
                       
                        <TableHeader name="Users List" btnName="Add User" handelClk={handelAddForm} />
                  
                <br />
                
                {data.isLoading ? <p>LOading</p> :
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
                                        {data?.data?.map((row, index) => (
                                            <StyledTableRow key={index}>
                                                {/* <StyledTableCell align="left">
                                                    <Checkbox
                                                        checked={selectedRows.includes(row.id)} 
                                                        onChange={() => handleSelectRow(row.id)}
                                                    />
                                                </StyledTableCell> */}
                                                <StyledTableCell align="left"><Typography variant='h5'>{row?.empId}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography variant='h5'>{row?.name}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography>{row?.number}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography>{row?.email}</Typography></StyledTableCell>
                                                <StyledTableCell align="left"><Typography variant='h5'>{row?.role}</Typography></StyledTableCell>

                                                <StyledTableCell align="center">
                                                    <Icon icon="fluent:edit-16-regular" className='editDetail me-1' onClick={()=>handelEditForm(row.id)} /> &nbsp;
                                                    <Icon icon="icon-park-outline:delete" className='deleteDetail ms-1' onClick={()=>handelDeleteUser(row)} />
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                        </Box>
        }
            </Container>
            {openForm && (
                <Modal 
                open={openForm}
                title="Add User"
                onClose={handelModalClose}
                >
                    <AddForm 
                        submitBtn="Add"
                        setOpenForm={setOpenForm}
                    />
                </Modal>
            )}
            {!data.isLoading && openEditForm && (
                <Modal 
                open={openEditForm}
                title="Update User"
                onClose={handelModalClose}
                >
                    <AddForm 
                        submitBtn="update"
                        userData={data.personalData}
                        setOpenEditForm={setOpenEditForm}
                        setSuccess={setSuccess}
                        success={success}
                        onSuccess={handleFetchTodo}
                    />
                </Modal>
            )}
            {showDeletePopup && (
                <PopUp 
                    open={showDeletePopup}
                    title="Delete"
                    description={`Do you want to Delete  ${deleteUserName}`}
                    handleClose={handelDeletePopupClose}
                    handleDone={handelDeletePopupDone}
                />
            )}
            {data.error && (
                <ErrorPopup
                    message= "Somethong Error"
                />
            )}
            {data.isSuccess && (
                <SuccessPopup 
                    message= "Successfull"
                />
            )}
        </>
    )
}
export default UserList;