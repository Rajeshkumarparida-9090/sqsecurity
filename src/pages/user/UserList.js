import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableRow,
  tableCellClasses,
  TableCell,
  styled,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import TableHeader from "../../reuseableComponents/TableHeader";
import Modal from "../Modal";
import AddForm from "./AddForm";

import {
  clearError,
  clearSuccess,
  deleteUser,
  fetchTodo,
  userEditTodo,
} from "../../store/slice/UserSlice";
import PopUp from "../../reuseableComponents/Popup";
import SuccessPopup from "../../reuseableComponents/SuccessPopUp";
import ErrorPopup from "../../reuseableComponents/ErrorPopUp";

const UserList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const [openForm, setOpenForm] = useState(false);
  const [openEditForm, setOpenEditForm] = useState(false);
  const [success, setSuccess] = useState("false");
  const [showDeletePopup, setShowDeletePOpup] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [deleteUserName, setDeleteUserName] = useState("");
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

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

  const handelAddForm = () => {
    setOpenForm(true);
  };
  const handelModalClose = () => {
    setOpenForm(false);
    setOpenEditForm(false);
  };
  const handelEditForm = (id) => {
    setOpenEditForm(true);
    console.log(id);
    dispatch(userEditTodo(id));
  };
  const handleFetchTodo = () => {
    dispatch(fetchTodo());
    setOpenEditForm(false);
  };
  const handelDeleteUser = (row) => {
    setDeleteId(row.id);
    setDeleteUserName(row.name);
    setShowDeletePOpup(true);
  };
  const handelDeletePopupClose = () => {
    setShowDeletePOpup(false);
  };
  const handelDeletePopupDone = () => {
    setShowDeletePOpup(false);
    dispatch(deleteUser(deleteId));
  };
  return (
    <>
      <Container maxWidth="xl" className="p-3 Adashboard">
        <TableHeader
          name="Users List"
          btnName="Add User"
          handelClk={handelAddForm}
        />
        <br />
        {data.isLoading ? (
          <p>LOading..........</p>
        ) : (
          <Box className="user-table position-relative">
            <TableContainer className="mt-3" component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left" className="fw-300">
                      Emp Id
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Name
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Phone Number
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Email
                    </StyledTableCell>
                    <StyledTableCell align="left" className="fw-300">
                      Job Rule
                    </StyledTableCell>
                    <StyledTableCell align="center" className="fw-300">
                      Action
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.map((row, index) => (
                    <StyledTableRow key={index}>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.empId}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography>{row?.number}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography>{row?.email}</Typography>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        <Typography variant="h5">{row?.role}</Typography>
                      </StyledTableCell>

                      <StyledTableCell align="center">
                        <Icon
                          icon="fluent:edit-16-regular"
                          className="editDetail me-1"
                          onClick={() => handelEditForm(row.id)}
                          style={{cursor:"pointer"}}
                        />{" "}
                        &nbsp;
                        <Icon
                          icon="icon-park-outline:delete"
                          className="deleteDetail ms-1"
                          onClick={() => handelDeleteUser(row)}
                          style={{cursor:"pointer", color:"#ff1313"}}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Container>
      {openForm && (
        <Modal open={openForm} title="Add User" onClose={handelModalClose}>
          <AddForm submitBtn="Add" setOpenForm={setOpenForm} />
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
          description={`Do you want to Delete  ${deleteUserName} ?`}
          handleClose={handelDeletePopupClose}
          handleDone={handelDeletePopupDone}
        />
      )}
      {data.error && <ErrorPopup message="Somethong Error" />}
      {data.isSuccess && <SuccessPopup message="Successfull" />}
    </>
  );
};
export default UserList;
