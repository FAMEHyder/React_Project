// import { useState, useEffect } from "react";
// import {
//   Box,
//   Grid,
//   Paper,
//   TextField,
//   Typography,
//   Skeleton,
//   InputAdornment,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel,
//   CircularProgress,
//   Button,
// } from "@mui/material";
// import {
//   AddPhotoAlternate,
//   Description,
//   AttachMoney,
//   VpnKey,
//   Warehouse,
//   Build,
//   CameraAlt,
// } from "@mui/icons-material";
// import { Formik, Field, Form } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

// const ProductForm = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulating loading
//     setTimeout(() => {
//       setLoading(false); // Stop loading after simulating data fetch
//     }, 2000); // Simulate delay
//   }, []);

//   // Validation Schema with Yup
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product name is required"),
//     description: Yup.string().required("Description is required"),
//     images: Yup.mixed().test(
//       "fileRequired",
//       "Product image is required",
//       (value) => value !== null
//     ),
//     category: Yup.string().required("Category is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be positive"),
//     sku: Yup.string().required("SKU is required"),
//     weight: Yup.number()
//       .required("Weight is required")
//       .positive("Weight must be positive"),
//     stock: Yup.number()
//       .required("Stock is required")
//       .min(0, "Stock cannot be negative"),
//     brand: Yup.string().required("Brand is required"),
//   });

//   // Form submission function
//   const handleSubmit = async (values) => {
//     try {
//       // API call to create the product
//       const response = await axios.post("http://localhost:8000/product/", values);
//       console.log("Product Created", response);
//       alert("Product Created Successfully");
//     } catch (error) {
//       console.error("Error creating product:", error);
//       alert("Error creating product");
//     }
//   };

//   // Form fields configuration to reduce repetition
//   const fields = [
//     { name: "name", label: "Product Name", type: "text", icon: <AddPhotoAlternate /> },
//     { name: "description", label: "Description", type: "text", multiline: true, rows: 4, icon: <Description /> },
//     { name: "price", label: "Price", type: "number", icon: <AttachMoney /> },
//     { name: "sku", label: "SKU", type: "text", icon: <VpnKey /> },
//     { name: "weight", label: "Weight", type: "number", icon: <Warehouse /> },
//     { name: "stock", label: "Stock", type: "number", icon: <Build /> },
//     { name: "brand", label: "Brand", type: "text", icon: <Build /> },
//   ];

//   return (
//     <Box
//       sx={{
//         p: 3,
//         mt: 12,
//         ml: { xs: 0, sm: 0, md: "260px" }, // Adjust margin for sidebar
//         maxWidth: "100%",
//         overflowX: "hidden",
//       }}
//     >
//       <Grid container spacing={3} justifyContent="center">
//         <Grid item xs={12} md={8}>
//           <Paper sx={{ p: 3 }} elevation={3}>
//             <Typography variant="h5" gutterBottom>
//               Create Product
//             </Typography>

//             <Formik
//               initialValues={{
//                 name: "",
//                 description: "",
//                 images: null,
//                 category: "",
//                 price: "",
//                 sku: "",
//                 weight: "",
//                 stock: "",
//                 brand: "",
//               }}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ setFieldValue, isSubmitting, errors, touched, values }) => (
//                 <Form>
//                   {/* Dynamically render fields */}
//                   {fields.map(({ name, label, type, icon, multiline, rows }) => (
//                     <Field name={name} key={name}>
//                       {({ field }) => (
//                         <TextField
//                           label={label}
//                           fullWidth
//                           variant="outlined"
//                           type={type}
//                           multiline={multiline}
//                           rows={rows}
//                           {...field}
//                           disabled={loading}
//                           InputProps={{
//                             endAdornment: loading ? (
//                               <Skeleton variant="circular" width={24} height={24} />
//                             ) : (
//                               <InputAdornment position="end">{icon}</InputAdornment>
//                             ),
//                           }}
//                           sx={{ mb: 2 }}
//                           error={touched[name] && !!errors[name]}
//                           helperText={touched[name] && errors[name]}
//                         />
//                       )}
//                     </Field>
//                   ))}

//                   {/* Image Upload Field */}
//                   <Field name="images">
//                     {() => (
//                       <TextField
//                         label="Product Images"
//                         fullWidth
//                         variant="outlined"
//                         type="text"
//                         disabled={loading}
//                         value={values.images ? values.images.name : ""}
//                         InputProps={{
//                           endAdornment: loading ? (
//                             <Skeleton variant="circular" width={24} height={24} />
//                           ) : (
//                             <InputAdornment position="end">
//                               <CameraAlt />
//                             </InputAdornment>
//                           ),
//                         }}
//                         sx={{ mb: 1 }}
//                         error={touched.images && !!errors.images}
//                         helperText={touched.images && errors.images}
//                         InputLabelProps={{
//                           shrink: true,
//                         }}
//                       />
//                     )}
//                   </Field>

//                   {/* File Upload Section */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "flex-end",
//                       alignItems: "center",
//                       mt: 1,
//                       mb: 3,
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       component="span"
//                       onClick={() => document.getElementById("product-images").click()}
//                       sx={{
//                         backgroundColor: "lightgray",
//                         color: "black",
//                       }}
//                       disabled={loading}
//                     >
//                       Choose File
//                     </Button>
//                     <input
//                       type="file"
//                       id="product-images"
//                       onChange={(e) => setFieldValue("images", e.target.files[0])}
//                       style={{ display: "none" }}
//                       disabled={loading}
//                     />
//                   </Box>

//                   {/* Category Field */}
//                   <FormControl fullWidth sx={{ mb: 2 }}>
//                     <InputLabel>Category</InputLabel>
//                     <Field as={Select} label="Category" name="category" disabled={loading}>
//                       <MenuItem value="">
//                         <em>None</em>
//                       </MenuItem>
//                       <MenuItem value="Almonds">Almonds</MenuItem>
//                       <MenuItem value="Dates">Dates</MenuItem>
//                       <MenuItem value="Raisins">Raisins</MenuItem>
//                       <MenuItem value="Pistachios">Pistachios</MenuItem>
//                       <MenuItem value="Nuts">Walnuts</MenuItem>
//                       <MenuItem value="Apricots">Apricots</MenuItem>
//                       <MenuItem value="Cashews">Cashews</MenuItem>
//                     </Field>
//                   </FormControl>

//                   {/* Submit Button */}
//                   <Button
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     disabled={isSubmitting || loading}
//                     sx={{ mt: 3 }}
//                   >
//                     {isSubmitting ? <CircularProgress size={24} /> : "Create Product"}
//                   </Button>
//                 </Form>
//               )}
//             </Formik>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ProductForm;




import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Skeleton,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
  Button,
} from "@mui/material";
import {
  AddPhotoAlternate,
  Description,
  AttachMoney,
  VpnKey,
  Warehouse,
  Build,
  CameraAlt,
} from "@mui/icons-material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ProductForm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate delay
  }, []);

  // Validation Schema with Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    description: Yup.string().required("Description is required"),
    images: Yup.mixed()
      .required("Product image is required")
      .test("fileRequired", "File must be an image", (value) =>
        value ? ["image/jpeg", "image/png", "image/gif"].includes(value.type) : false
      ),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    sku: Yup.string().required("SKU is required"),
    weight: Yup.number()
      .required("Weight is required")
      .positive("Weight must be positive"),
    stock: Yup.number()
      .required("Stock is required")
      .min(0, "Stock cannot be negative"),
    brand: Yup.string().required("Brand is required"),
  });

  // Form submission function
  const handleSubmit = async (values) => {
    try {
      // Create a FormData object
      const formData = new FormData();

      // Append form fields to FormData
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("category", values.category);
      formData.append("price", values.price);
      formData.append("sku", values.sku);
      formData.append("weight", values.weight);
      formData.append("stock", values.stock);
      formData.append("brand", values.brand);

      // Append the image file to FormData
      if (values.images) {
        formData.append("images", values.images);
      }

      // Make the API call with FormData
      const response = await axios.post("http://localhost:8000/product/", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct Content-Type
        },
      });

      console.log("Product Created", response);
      alert("Product Created Successfully");
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product");
    }
  };

  // Form fields configuration to reduce repetition
  const fields = [
    { name: "name", label: "Product Name", type: "text", icon: <AddPhotoAlternate /> },
    { name: "description", label: "Description", type: "text", multiline: true, rows: 4, icon: <Description /> },
    { name: "price", label: "Price", type: "number", icon: <AttachMoney /> },
    { name: "sku", label: "SKU", type: "text", icon: <VpnKey /> },
    { name: "weight", label: "Weight", type: "number", icon: <Warehouse /> },
    { name: "stock", label: "Stock", type: "number", icon: <Build /> },
    { name: "brand", label: "Brand", type: "text", icon: <Build /> },
  ];

  return (
    <Box sx={{ p: 3, mt: 12, ml: { xs: 0, sm: 0, md: "250px" } }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h5" gutterBottom>
              Create Product
            </Typography>

            <Formik
              initialValues={{
                name: "",
                description: "",
                images: null,
                category: "",
                price: "",
                sku: "",
                weight: "",
                stock: "",
                brand: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting, errors, touched, values }) => (
                <Form>
                  {/* Dynamically render fields */}
                  {fields.map(({ name, label, type, icon, multiline, rows }) => (
                    <Field name={name} key={name}>
                      {({ field }) => (
                        <TextField
                          label={label}
                          fullWidth
                          variant="outlined"
                          type={type}
                          multiline={multiline}
                          rows={rows}
                          {...field}
                          disabled={loading}
                          InputProps={{
                            endAdornment: loading ? (
                              <Skeleton variant="circular" width={24} height={24} />
                            ) : (
                              <InputAdornment position="end">{icon}</InputAdornment>
                            ),
                          }}
                          sx={{ mb: 2 }}
                          error={touched[name] && !!errors[name]}
                          helperText={touched[name] && errors[name]}
                        />
                      )}
                    </Field>
                  ))}

                  {/* Image Upload Field */}
                  <Field name="images">
                    {() => (
                      <TextField
                        label="Product Images"
                        fullWidth
                        variant="outlined"
                        type="text"
                        disabled={loading}
                        value={values.images ? values.images.name : ""}
                        InputProps={{
                          endAdornment: loading ? (
                            <Skeleton variant="circular" width={24} height={24} />
                          ) : (
                            <InputAdornment position="end">
                              <CameraAlt />
                            </InputAdornment>
                          ),
                        }}
                        sx={{ mb: 1 }}
                        error={touched.images && !!errors.images}
                        helperText={touched.images && errors.images}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    )}
                  </Field>

                  {/* Choose File Button */}
                  <Button
                    variant="contained"
                    component="span"
                    onClick={() => document.getElementById("product-images").click()}
                    sx={{
                      float: "right",
                      backgroundColor: "lightgray",
                      color: "black",
                      mb: 2,
                    }}
                    disabled={loading}
                  >
                    Choose File
                  </Button>

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    id="product-images"
                    onChange={(e) => setFieldValue("images", e.target.files[0])}
                    style={{ display: "none" }}
                    disabled={loading}
                  />

                  {/* Category Field */}
                  <FormControl fullWidth sx={{ mb: 2, mt: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Field as={Select} label="Category" name="category" disabled={loading}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="Almonds">Almonds</MenuItem>
                      <MenuItem value="Dates">Dates</MenuItem>
                      <MenuItem value="Raisins">Raisins</MenuItem>
                      <MenuItem value="Pistachios">Pistachios</MenuItem>
                      <MenuItem value="Walnuts">Walnuts</MenuItem>
                      <MenuItem value="Apricots">Apricots</MenuItem>
                      <MenuItem value="Cashews">Cashews</MenuItem>
                    </Field>
                  </FormControl>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || loading}
                    sx={{ mt: 3 }}
                  >
                    {isSubmitting ? <CircularProgress size={24} /> : "Create Product"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductForm;
