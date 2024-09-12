import React, { useState } from "react";
import { Box, Button, Checkbox, Container, Grid, TextField, Popover, MenuItem, Select, InputLabel, OutlinedInput, FormControl, CircularProgress, Typography, FormHelperText,styled } from '@mui/material'
import { ErrorMessage, Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

const AddForm=({submitBtn})=>{
    // const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const [secondBtn, setSecondBtn] = useState(false);
    const [condition, setCondition] = useState(true);
    const [successModal, setSuccessModal] = useState(false);
    const [loodingFirstBtn, setLoadingFirstBtn] = useState(false)
    const [loodingBtn, setLoadingBtn] = useState(false)
    const [categoryName, setCategoryName] = useState([]); // Initialize categoryId as an empty array

    const CustomFormControl = styled(FormControl)(({ theme }) => ({
        '& .MuiFormControl-root.Mui-error': {
            color: 'white', // Change the border color when there's an error
        },
        '& .MuiFormHelperText-root.Mui-error': {
            color: 'white', // Change the text color of the error message
            fontSize:"13px",
            marginLeft:"0px"
        },

        "& .MuiInputLabel-root": {
                                        color: Boolean(errors.role && touched.role) ? 'white' : 'inherit'
                                    },
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {
                                            borderColor: Boolean(errors.role && touched.role) ? 'white' : 'inherit'
                                        },
                                        "&:hover fieldset": {
                                            borderColor: Boolean(errors.role && touched.role) ? 'white' : 'inherit'
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: Boolean(errors.role && touched.role) ? 'white' : 'inherit'
                                        }
                                    },
    }));
    const BasicDetailSchema = Yup.object().shape({
        name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(15, 'Name must be at most 15 characters')
        .required('Name is required'),
        email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
        empId: Yup.string()
        .min(4, 'Employee ID must be at least 4 characters')
        .required('Employee ID is required'),

        number: Yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
        .required('Mobile number is required'),

        role: Yup.string().required("Job Rule is required"),

    });
    const formik = useFormik({
        initialValues: {
            name: "",
            email:"",
            empId:"",
            number:"",
            role:""
        },
        validationSchema: BasicDetailSchema,
        onSubmit: async (values) => {
            let formData = new FormData();

            formData.append("name", values?.name);
            formData.append("type", "product");
            formData.append("price", values?.price);
            formData.append("description", values?.description);
            formData.append("quantity", values?.quantity);

            const payload = {
                formData: formData,
            };

            try {
               
                    setLoadingFirstBtn(true)
                    const response="";
                    // const response = await AddVendorProduct(payload);
                    if (response.status === 200 || response.status === 201) {
                        // setSuccessModal(true)
                        setLoadingFirstBtn(false)
                        setTimeout(() => {
                            setLoadingFirstBtn(false)
                            setSuccessModal(false)
                        }, 2500)

                        resetForm()
                        setImages([])
                        setSecondBtn(false);
                    } else {
                        setLoadingFirstBtn(false)
                        setSecondBtn(false);
                    }
            

            } catch (error) {
                setSecondBtn(false);
                setLoadingBtn(false)
            }
        },
    });

    const { errors, touched, values, handleSubmit, resetForm, handleBlur, isSubmitting, getFieldProps,setFieldValue } =
        formik;
    return(
        <>
            <Box>
            {/* <Container maxWidth="xl" className='p-3 Adashboard new-artist-dashboard'> */}
                    <FormikProvider value={formik}>
                        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                            <Grid container className="mt-5 cardContentbg position-relative mx-1 w-100">

                                <Grid item xs={12} md={12} className='px-2 mt-3'>
                                <CustomFormControl
                                fullWidth
                                error={Boolean(errors.role && touched.role)}
                                margin="normal"
                                
                            >
                                    <TextField
                                        variant="outlined"
                                        type="text"
                                        className="inputField w-100 mb-2"
                                        name="name"
                                        label="Name"
                                        {...getFieldProps("name")}
                                        required
                                    />
                                    <ErrorMessage name="name" component="span" className='field_error' />
                                    </CustomFormControl>
                                </Grid>
                                <Grid item xs={12} md={12} className='px-2 mt-3'>
                                <CustomFormControl
                                fullWidth
                                error={Boolean(errors.role && touched.role)}
                                margin="normal"
                                
                            >
                                    <TextField
                                        variant="outlined"
                                        type="text"
                                        className="inputField w-100 mb-2"
                                        name="empId"
                                        label="Empolyee Id"
                                        {...getFieldProps("empId")}
                                        required
                                    />
                                    <ErrorMessage name="empId" component="span" className='field_error' />
                                    </CustomFormControl>
                                </Grid>

                                <Grid item xs={12} md={12} className='px-2 mt-3'>
                                <CustomFormControl
                                fullWidth
                                error={Boolean(errors.role && touched.role)}
                                margin="normal"
                                
                            >
                                    <TextField
                                        variant="outlined"
                                        type="number"
                                        className="inputField mb-2"
                                        name="number"
                                        label="Mobile number"
                                        onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                                        {...getFieldProps("number")}
                                        required
                                    />
                                    <ErrorMessage name="number" component="span" className='field_error' />
                                    </CustomFormControl>
                                </Grid>

                                <Grid item xs={12} md={12} className='px-2 mt-3'>
                                <CustomFormControl
                                fullWidth
                                error={Boolean(errors.role && touched.role)}
                                margin="normal"
                               
                            >
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    className="inputField w-100 mb-2"
                                    name="role"
                                    label="Email"
                                    {...getFieldProps("email")}
                                    required
                                />
                                <ErrorMessage name="email" component="span" className='field_error' />
                                </CustomFormControl>
                            </Grid>

                                
                                <Grid item xs={12} md={12} className="mt-3 px-2">
                                   
                                  <CustomFormControl
                                fullWidth
                                error={Boolean(errors.role && touched.role)}
                                margin="normal"
                               
                            >
                                <InputLabel id="select-label">Job Rule</InputLabel>
                                <Field
                                    as={Select}
                                    labelId="select-label"
                                    id="role"
                                    name="role"
                                    value={formik.values.role}
                                    onChange={(event) => setFieldValue('role', event.target.value)}
                                    label="Job Rule"
                                >
                                    <MenuItem value="" disabled>
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="role1">Role 1</MenuItem>
                                    <MenuItem value="role2">Role 2</MenuItem>
                                    <MenuItem value="role3">Role 3</MenuItem>
                                </Field>
                                <FormHelperText>{errors.role && touched.role ? errors.role : ''}</FormHelperText>
                            </CustomFormControl>
                                
                            </Grid>


                                <Grid item xs={12} md={12} className="" sx={{width:"100%",display:"flex", justifyContent:"end"}}>
                                    {loodingBtn ?

                                        <Button variant="contained" type="button">
                                            <CircularProgress color="inherit" size={25} sx={{ margin: "2px 32px", display: "block" }} />
                                        </Button>
                                        :
                                        <Button variant="contained" onClick={(e) => { setSecondBtn(true); handleSubmit(e) }} className='rightBtn' >{submitBtn}</Button>
                                    }
                                   
                                </Grid>

                            </Grid>

                        </Form>
                    </FormikProvider>
                {/* </Container > */}
            </Box>
            {/* {successModal && (
                <SuccessModal
                    open={successModal}
                    title="Product Added Successfully"
                />
            )} */}
        </>
    )
}
export default AddForm;