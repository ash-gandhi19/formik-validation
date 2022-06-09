import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const url = "https://629f1b078b939d3dc28f4f81.mockapi.io/collegelist/";
function AddCollege() {
  let navigate = useNavigate();

  //add college function
  let handleSubmit = async (values) => {
    try {
      let res = await axios.post(url, values);
      if (res.status == 201) {
        navigate("/collegelist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      location: "",
      mobile: "",
      email: "",
      collegecode: "",
      rating: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Required"),
      location: yup.string().required("Required"),
      email: yup.string().email("Invalid Email").required("Required"),
      mobile: yup
        .string()
        .matches(/^\d{10}$/, "Mobile number not valid")
        .required("Required"),
      collegecode: yup.string(),
      rating: yup
        .number("Enter only numeric values")
        .required("* required")
        .min(1, "Rating can not be less than 1")
        .max(5, "Rating can not be higher than 5"),
    }),
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  return (
    <div>
      <h1>Add College</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: "red" }}>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="name">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            className="form-control"
            placeholder="Enter Location"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div style={{ color: "red" }}>{formik.errors.location}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="name">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="name">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            className="form-control"
            placeholder="Enter Mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div style={{ color: "red" }}>{formik.errors.mobile}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="name">College Code</label>
          <input
            id="collegecode"
            name="collegecode"
            type="text"
            className="form-control"
            placeholder="Enter College Code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.collegecode}
          />
          {formik.touched.collegecode && formik.errors.collegecode ? (
            <div style={{ color: "red" }}>{formik.errors.collegecode}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label for="name">Rating</label>
          <input
            id="rating"
            name="rating"
            type="text"
            className="form-control"
            placeholder="Enter Rating"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rating}
          />
          {formik.touched.rating && formik.errors.rating ? (
            <div style={{ color: "red" }}>{formik.errors.rating}</div>
          ) : null}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
/*
(
    <>
      <h1>Add Students</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Batch</Form.Label>
          <Form.Control
            type="text"
            placeholder="Batch"
            onChange={(e) => setBatch(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
*/
export default AddCollege;
