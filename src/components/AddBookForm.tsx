import React from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { FieldArray, Formik, Form } from "formik";
import * as Yup from "yup";
import { Add, Remove } from "@mui/icons-material";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string(),
  isbn: Yup.string().required("ISBN is required"),
  totalCopies: Yup.number().min(1).required("Total copies required"),
  publisher: Yup.object().shape({
    fullName: Yup.string().required("Publisher name is required"),
    address: Yup.string().required("Publisher address is required"),
  }),
  authors: Yup.array()
    .of(Yup.object().shape({ fullName: Yup.string().required("Required") }))
    .min(1, "At least one author required"),
  categories: Yup.array()
    .of(Yup.object().shape({ fullName: Yup.string().required("Required") }))
    .min(1, "At least one category required"),
});

const AddBookForm = () => {
  return (
    <Box maxWidth={800} mx="auto" mt={4}>
      <Typography variant="h5" gutterBottom>
        Add a New Book
      </Typography>

      <Formik
        initialValues={{
          title: "",
          description: "",
          isbn: "",
          totalCopies: 1,
          publisher: {
            fullName: "",
            address: "",
          },
          authors: [{ fullName: "" }],
          categories: [{ fullName: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("📘 Book JSON:", values);
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              error={touched.title && !!errors.title}
              helperText={touched.title && errors.title}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Description"
              name="description"
              value={values.description}
              onChange={handleChange}
              multiline
              rows={3}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
            />

            <TextField
              fullWidth
              margin="normal"
              label="ISBN"
              name="isbn"
              value={values.isbn}
              onChange={handleChange}
              error={touched.isbn && !!errors.isbn}
              helperText={touched.isbn && errors.isbn}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Total Copies"
              name="totalCopies"
              type="number"
              value={values.totalCopies}
              onChange={handleChange}
              error={touched.totalCopies && !!errors.totalCopies}
              helperText={touched.totalCopies && errors.totalCopies}
            />

            <Typography mt={3} variant="h6">
              Publisher
            </Typography>

            <TextField
              fullWidth
              margin="normal"
              label="Publisher Name"
              name="publisher.fullName"
              value={values.publisher.fullName}
              onChange={handleChange}
              error={touched.publisher?.fullName && !!errors.publisher?.fullName}
              helperText={touched.publisher?.fullName && errors.publisher?.fullName}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Publisher Address"
              name="publisher.address"
              value={values.publisher.address}
              onChange={handleChange}
              error={touched.publisher?.address && !!errors.publisher?.address}
              helperText={touched.publisher?.address && errors.publisher?.address}
            />

            <FieldArray name="authors">
              {({ push, remove }) => (
                <Box mt={3}>
                  <Typography variant="h6">Authors</Typography>
                  {values.authors.map((_, index) => (
                    <Box key={index} display="flex" gap={1} alignItems="center" mt={1}>
                      <TextField
                        label={`Author ${index + 1}`}
                        name={`authors[${index}].fullName`}
                        value={values.authors[index].fullName}
                        onChange={handleChange}
                        fullWidth
                      />
                      <IconButton onClick={() => remove(index)} disabled={values.authors.length === 1}>
                        <Remove />
                      </IconButton>
                    </Box>
                  ))}
                  <Button onClick={() => push({ fullName: "" })} startIcon={<Add />} sx={{ mt: 1 }}>
                    Add Author
                  </Button>
                </Box>
              )}
            </FieldArray>

            <FieldArray name="categories">
              {({ push, remove }) => (
                <Box mt={3}>
                  <Typography variant="h6">Categories</Typography>
                  {values.categories.map((_, index) => (
                    <Box key={index} display="flex" gap={1} alignItems="center" mt={1}>
                      <TextField
                        label={`Category ${index + 1}`}
                        name={`categories[${index}].fullName`}
                        value={values.categories[index].fullName}
                        onChange={handleChange}
                        fullWidth
                      />
                      <IconButton onClick={() => remove(index)} disabled={values.categories.length === 1}>
                        <Remove />
                      </IconButton>
                    </Box>
                  ))}
                  <Button onClick={() => push({ fullName: "" })} startIcon={<Add />} sx={{ mt: 1 }}>
                    Add Category
                  </Button>
                </Box>
              )}
            </FieldArray>

            <Box mt={4}>
              <Button type="submit" variant="contained" color="primary">
                Submit Book
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddBookForm;
